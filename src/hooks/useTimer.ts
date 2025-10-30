import { useState, useEffect } from 'react';
import { useInterval, useLocalStorage } from '@mantine/hooks';
import type { TimerMode, TimerStats, SessionHistory, TimerSettings } from '../types';
import { playNotificationSound } from '../utils/sounds';

export const useTimer = () => {
  const [mode, setMode] = useState<TimerMode>('focus');
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [currentTask, setCurrentTask] = useState('');
  const [currentTag, setCurrentTag] = useState<string | null>(null);

  const [settings] = useLocalStorage<TimerSettings>({
    key: 'timer-settings',
    defaultValue: {
      focusTime: 25,
      shortBreak: 5,
      longBreak: 15,
      soundEnabled: true,
      autoStartBreaks: false,
      autoStartPomodoros: false,
    },
  });

  const [stats, setStats] = useLocalStorage<TimerStats>({
    key: 'timer-stats',
    defaultValue: {
      completedPomodoros: 0,
      totalFocusTime: 0,
      streak: 0,
      bestStreak: 0,
      sessionsToday: 0,
      totalSessions: 0,
    },
  });

  const [history, setHistory] = useLocalStorage<SessionHistory[]>({
    key: 'timer-history',
    defaultValue: [],
  });

  const interval = useInterval(() => {
    setTimeLeft((prev) => {
      if (prev <= 1) {
        handleTimerComplete();
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  useEffect(() => {
    if (isRunning) {
      interval.start();
    } else {
      interval.stop();
    }
    return interval.stop;
  }, [isRunning]);

  useEffect(() => {
    const modeTime = {
      focus: settings.focusTime * 60,
      shortBreak: settings.shortBreak * 60,
      longBreak: settings.longBreak * 60,
    };
    setTimeLeft(modeTime[mode]);
    setIsRunning(false);
  }, [mode, settings]);

  const handleTimerComplete = () => {
    setIsRunning(false);
    
    if (mode === 'focus') {
      const newPomodoros = stats.completedPomodoros + 1;
      const newStreak = stats.streak + 1;
      const newBestStreak = Math.max(newStreak, stats.bestStreak);
      
      const newStats = {
        completedPomodoros: newPomodoros,
        totalFocusTime: stats.totalFocusTime + settings.focusTime,
        streak: newStreak,
        bestStreak: newBestStreak,
        sessionsToday: stats.sessionsToday + 1,
        totalSessions: stats.totalSessions + 1,
      };
      
      setStats(newStats);

      const session: SessionHistory = {
        id: Date.now().toString(),
        type: mode,
        duration: settings.focusTime,
        completedAt: new Date(),
        task: currentTask || undefined,
        tag: currentTag || undefined,
      };
      setHistory([session, ...history].slice(0, 50));
      
      if (newPomodoros % 4 === 0) {
        setMode('longBreak');
      } else {
        setMode('shortBreak');
      }

      if (settings.autoStartBreaks) {
        setTimeout(() => setIsRunning(true), 2000);
      }
    } else {
      setMode('focus');
      if (settings.autoStartPomodoros) {
        setTimeout(() => setIsRunning(true), 2000);
      }
    }
    
    if (settings.soundEnabled) {
      playNotificationSound();
    }

    return true;
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(
      {
        focus: settings.focusTime * 60,
        shortBreak: settings.shortBreak * 60,
        longBreak: settings.longBreak * 60,
      }[mode]
    );
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgress = () => {
    const totalTime = {
      focus: settings.focusTime * 60,
      shortBreak: settings.shortBreak * 60,
      longBreak: settings.longBreak * 60,
    }[mode];
    
    const progress = ((totalTime - timeLeft) / totalTime) * 100;
    return Math.min(progress, 100);
  };

  return {
    mode,
    setMode,
    timeLeft,
    isRunning,
    setIsRunning,
    currentTask,
    setCurrentTask,
    currentTag,
    setCurrentTag,
    stats,
    history,
    resetTimer,
    formatTime,
    getProgress,
  };
};
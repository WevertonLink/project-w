export type TimerMode = 'focus' | 'shortBreak' | 'longBreak';

export interface TimerStats {
  completedPomodoros: number;
  totalFocusTime: number;
  streak: number;
  bestStreak: number;
  sessionsToday: number;
  totalSessions: number;
}

export interface SessionHistory {
  id: string;
  type: TimerMode;
  duration: number;
  completedAt: Date;
  task?: string;
  tag?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: any;
  unlocked: boolean;
  progress: number;
  target: number;
  color: string;
}

export interface Preset {
  name: string;
  focus: number;
  shortBreak: number;
  longBreak: number;
  description: string;
}

export interface TimerSettings {
  focusTime: number;
  shortBreak: number;
  longBreak: number;
  soundEnabled: boolean;
  autoStartBreaks: boolean;
  autoStartPomodoros: boolean;
}
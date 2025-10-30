import { Group, Button } from '@mantine/core';
import type { TimerMode, TimerSettings } from '../types';

interface ModeSelectorProps {
  mode: TimerMode;
  onModeChange: (mode: TimerMode) => void;
  settings: TimerSettings;
}

export const ModeSelector = ({ mode, onModeChange, settings }: ModeSelectorProps) => {
  return (
    <Group grow gap="xs">
      <Button
        variant={mode === 'focus' ? 'gradient' : 'subtle'}
        gradient={{ from: 'violet', to: 'pink', deg: 45 }}
        color="violet"
        size="sm"
        radius="lg"
        onClick={() => onModeChange('focus')}
        style={{
          transition: 'all 0.2s',
          boxShadow: mode === 'focus' ? '0 4px 12px rgba(102, 126, 234, 0.3)' : 'none',
        }}
      >
        🎯 {settings.focusTime}m
      </Button>
      <Button
        variant={mode === 'shortBreak' ? 'gradient' : 'subtle'}
        gradient={{ from: 'teal', to: 'cyan', deg: 45 }}
        color="teal"
        size="sm"
        radius="lg"
        onClick={() => onModeChange('shortBreak')}
        style={{
          transition: 'all 0.2s',
          boxShadow: mode === 'shortBreak' ? '0 4px 12px rgba(18, 194, 233, 0.3)' : 'none',
        }}
      >
        ☕ {settings.shortBreak}m
      </Button>
      <Button
        variant={mode === 'longBreak' ? 'gradient' : 'subtle'}
        gradient={{ from: 'cyan', to: 'blue', deg: 45 }}
        color="cyan"
        size="sm"
        radius="lg"
        onClick={() => onModeChange('longBreak')}
        style={{
          transition: 'all 0.2s',
          boxShadow: mode === 'longBreak' ? '0 4px 12px rgba(102, 184, 255, 0.3)' : 'none',
        }}
      >
        🌊 {settings.longBreak}m
      </Button>
    </Group>
  );
};
import { Stack, Text, RingProgress, Badge, Box } from '@mantine/core';
import { BrainIcon, CoffeeIcon, SparklesIcon } from '../assets/CustomIcons';

interface TimerRingProps {
  mode: 'focus' | 'shortBreak' | 'longBreak';
  timeLeft: number;
  isRunning: boolean;
  formatTime: (seconds: number) => string;
  getProgress: () => number;
  size: number;
  fontSize: number;
  zenMode?: boolean;
}

const modeConfigs = {
  focus: {
    color: 'violet',
    label: 'Foco Profundo',
    emoji: '🎯',
    Icon: BrainIcon,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    glowColor: 'rgba(102, 126, 234, 0.4)',
  },
  shortBreak: {
    color: 'teal',
    label: 'Pausa Curta',
    emoji: '☕',
    Icon: CoffeeIcon,
    gradient: 'linear-gradient(135deg, #12c2e9 0%, #c471ed 100%)',
    glowColor: 'rgba(18, 194, 233, 0.4)',
  },
  longBreak: {
    color: 'cyan',
    label: 'Pausa Longa',
    emoji: '🌊',
    Icon: SparklesIcon,
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    glowColor: 'rgba(102, 184, 255, 0.4)',
  },
};

export const TimerRing = ({
  mode,
  timeLeft,
  isRunning,
  formatTime,
  getProgress,
  size,
  fontSize,
  zenMode = false,
}: TimerRingProps) => {
  const config = modeConfigs[mode];

  return (
    <Stack gap="md" align="center" style={{ width: '100%' }}>
      <Badge
        size={zenMode ? 'xl' : 'lg'}
        variant="gradient"
        gradient={{ from: config.color, to: 'pink', deg: 45 }}
        leftSection={<Text size="sm">{config.emoji}</Text>}
        style={{
          boxShadow: `0 4px 12px ${config.glowColor}`,
          animation: isRunning ? 'pulse 2s ease-in-out infinite' : 'none',
        }}
      >
        {config.label}
      </Badge>

      <Box style={{ position: 'relative' }}>
        <RingProgress
          size={size}
          thickness={zenMode ? 16 : 12}
          roundCaps
          sections={[{ value: getProgress(), color: config.color }]}
          label={
            <Stack gap={2} align="center">
              <Text
                style={{
                  fontSize: fontSize,
                  fontWeight: 800,
                  lineHeight: 1,
                  display: 'inline-block',
                  backgroundImage: isRunning ? config.gradient : undefined,
                  WebkitBackgroundClip: isRunning ? 'text' : undefined,
                  backgroundClip: isRunning ? 'text' : undefined,
                  WebkitTextFillColor: isRunning ? 'transparent' : undefined,
                  color: !isRunning ? 'rgba(196,190,255,0.9)' : undefined,
                  filter: 'none',
                }}
              >
                {formatTime(timeLeft)}
              </Text>
              <Text size="xs" c="dimmed" fw={500}>
                {isRunning ? '⚡ Em andamento' : '⏸️ Pausado'}
              </Text>
            </Stack>
          }
          style={{
            filter: isRunning ? `drop-shadow(0 0 20px ${config.glowColor})` : 'none',
            transition: 'filter 0.3s',
          }}
        />
      </Box>
    </Stack>
  );
};
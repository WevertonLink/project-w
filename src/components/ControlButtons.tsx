import { Group, Button, ActionIcon } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { IconPlayerPlay, IconPlayerPause, IconRefresh } from '@tabler/icons-react';

interface ControlButtonsProps {
  isRunning: boolean;
  onToggle: () => void;
  onReset: () => void;
  modeColor: string;
  glowColor: string;
  zenMode?: boolean;
}

export const ControlButtons = ({
  isRunning,
  onToggle,
  onReset,
  modeColor,
  glowColor,
  zenMode = false,
}: ControlButtonsProps) => {
  const { hovered: playHovered, ref: playRef } = useHover();
  const { hovered: resetHovered, ref: resetRef } = useHover();

  return (
    <Group gap="xs">
      <Button
        ref={playRef}
        size={zenMode ? 'xl' : 'lg'}
        radius="xl"
        variant="gradient"
        gradient={{ from: modeColor, to: 'pink', deg: 45 }}
        leftSection={isRunning ? <IconPlayerPause size={24} /> : <IconPlayerPlay size={24} />}
        onClick={onToggle}
        style={{
          boxShadow: playHovered ? `0 8px 24px ${glowColor}` : `0 4px 12px ${glowColor}`,
          transform: playHovered ? 'translateY(-2px)' : 'translateY(0)',
          transition: 'all 0.2s',
        }}
      >
        {isRunning ? 'Pausar' : 'Iniciar'}
      </Button>

      <ActionIcon
        ref={resetRef}
        size={zenMode ? 'xl' : 'lg'}
        radius="xl"
        variant="light"
        color="gray"
        onClick={onReset}
        style={{
          transform: resetHovered ? 'rotate(180deg) scale(1.1)' : 'rotate(0deg)',
          transition: 'all 0.3s',
        }}
      >
        <IconRefresh size={24} />
      </ActionIcon>
    </Group>
  );
};
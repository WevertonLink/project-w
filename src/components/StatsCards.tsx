import { Group, Card, Stack, Text } from '@mantine/core';
import { TrophyIcon, ClockIcon, FlameIcon } from '../assets/CustomIcons';
import type { TimerStats } from '../types';

interface StatsCardsProps {
  stats: TimerStats;
}

export const StatsCards = ({ stats }: StatsCardsProps) => {
  return (
    <Group grow gap="xs">
      <Card
        p="sm"
        radius="lg"
        style={{
          background: 'rgba(30, 30, 40, 0.5)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          transition: 'all 0.2s',
        }}
      >
        <Stack gap={2} align="center">
          <Group gap={4}>
            <TrophyIcon size={16} />
            <Text size="xl" fw={700} c="violet">
              {stats.completedPomodoros}
            </Text>
          </Group>
          <Text size="10px" c="dimmed" tt="uppercase" fw={600}>
            Pomodoros
          </Text>
        </Stack>
      </Card>

      <Card
        p="sm"
        radius="lg"
        style={{
          background: 'rgba(30, 30, 40, 0.5)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          transition: 'all 0.2s',
        }}
      >
        <Stack gap={2} align="center">
          <Group gap={4}>
            <ClockIcon size={16} />
            <Text size="xl" fw={700} c="teal">
              {stats.totalFocusTime}m
            </Text>
          </Group>
          <Text size="10px" c="dimmed" tt="uppercase" fw={600}>
            Tempo
          </Text>
        </Stack>
      </Card>

      <Card
        p="sm"
        radius="lg"
        style={{
          background: 'rgba(30, 30, 40, 0.5)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          transition: 'all 0.2s',
        }}
      >
        <Stack gap={2} align="center">
          <Group gap={4}>
            <FlameIcon size={16} />
            <Text size="xl" fw={700} c="orange">
              {stats.streak}
            </Text>
          </Group>
          <Text size="10px" c="dimmed" tt="uppercase" fw={600}>
            Streak
          </Text>
        </Stack>
      </Card>
    </Group>
  );
};
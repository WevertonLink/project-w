import {
  Modal,
  Stack,
  Group,
  Card,
  Text,
  Divider,
  ScrollArea,
  Timeline,
  Badge,
  Progress,
  Box,
} from '@mantine/core';
import { IconCalendar } from '@tabler/icons-react';
import { TrophyIcon, ClockIcon, FlameIcon, BrainIcon, CoffeeIcon } from '../assets/CustomIcons';
import type { TimerStats, SessionHistory } from '../types';

interface StatsModalProps {
  opened: boolean;
  onClose: () => void;
  stats: TimerStats;
  history: SessionHistory[];
}

const StatsModal = ({ opened, onClose, stats, history }: StatsModalProps) => {
  const getTodaySessions = () => {
    const today = new Date().toDateString();
    return history.filter((s) => new Date(s.completedAt).toDateString() === today);
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="📊 Estatísticas"
      size="lg"
      centered
      radius="lg"
      styles={{
        content: {
          background: 'rgba(20, 20, 28, 0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
      }}
    >
      <Stack gap="md">
        <Group grow>
          <Card p="md" radius="lg" style={{ background: 'rgba(102, 126, 234, 0.1)' }}>
            <Stack gap={4} align="center">
              <TrophyIcon size={24} />
              <Text size="xl" fw={700}>
                {stats.completedPomodoros}
              </Text>
              <Text size="xs" c="dimmed">
                Total de Pomodoros
              </Text>
            </Stack>
          </Card>
          <Card p="md" radius="lg" style={{ background: 'rgba(18, 194, 233, 0.1)' }}>
            <Stack gap={4} align="center">
              <ClockIcon size={24} />
              <Text size="xl" fw={700}>
                {stats.totalFocusTime}m
              </Text>
              <Text size="xs" c="dimmed">
                Tempo Total
              </Text>
            </Stack>
          </Card>
        </Group>

        <Group grow>
          <Card p="md" radius="lg" style={{ background: 'rgba(251, 146, 60, 0.1)' }}>
            <Stack gap={4} align="center">
              <FlameIcon size={24} />
              <Text size="xl" fw={700}>
                {stats.bestStreak}
              </Text>
              <Text size="xs" c="dimmed">
                Melhor Streak
              </Text>
            </Stack>
          </Card>
          <Card p="md" radius="lg" style={{ background: 'rgba(34, 197, 94, 0.1)' }}>
            <Stack gap={4} align="center">
              <IconCalendar size={24} style={{ color: '#4ade80' }} />
              <Text size="xl" fw={700}>
                {stats.sessionsToday}
              </Text>
              <Text size="xs" c="dimmed">
                Hoje
              </Text>
            </Stack>
          </Card>
        </Group>

        <Divider label="Histórico Recente" labelPosition="center" />

        <ScrollArea h={200}>
          <Timeline active={-1} bulletSize={24} lineWidth={2}>
            {history.slice(0, 10).map((session) => (
              <Timeline.Item
                key={session.id}
                bullet={session.type === 'focus' ? <BrainIcon size={12} /> : <CoffeeIcon size={12} />}
                title={
                  <Group gap="xs">
                    <Text size="sm" fw={500}>
                      {session.type === 'focus' ? 'Foco' : 'Pausa'}
                    </Text>
                    <Badge size="xs" variant="light">
                      {session.duration}m
                    </Badge>
                  </Group>
                }
              >
                <Text size="xs" c="dimmed">
                  {new Date(session.completedAt).toLocaleString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                    day: '2-digit',
                    month: 'short',
                  })}
                </Text>
                {session.task && (
                  <Text size="xs" mt={4}>
                    {session.task}
                  </Text>
                )}
                {session.tag && (
                  <Badge size="xs" variant="dot" mt={4}>
                    {session.tag}
                  </Badge>
                )}
              </Timeline.Item>
            ))}
          </Timeline>
        </ScrollArea>

        {getTodaySessions().length > 0 && (
          <>
            <Divider label="Progresso de Hoje" labelPosition="center" />
            <Box>
              <Group justify="space-between" mb="xs">
                <Text size="sm" fw={500}>
                  Sessões concluídas
                </Text>
                <Text size="sm" c="dimmed">
                  {getTodaySessions().length} / 8
                </Text>
              </Group>
              <Progress
                value={(getTodaySessions().length / 8) * 100}
                size="lg"
                radius="xl"
                striped
                animated
                color="violet"
              />
            </Box>
          </>
        )}
      </Stack>
    </Modal>
  );
};

export default StatsModal;
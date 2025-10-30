import { Modal, Stack, Card, Group, Text, ThemeIcon, Progress, Box } from '@mantine/core';
import { IconCheck, IconTrophy, IconFlame, IconMedal, IconStar, IconBolt } from '@tabler/icons-react';

interface AchievementsModalProps {
  opened: boolean;
  onClose: () => void;
}

// Dados hardcoded (funciona!)
const ACHIEVEMENTS = [
  {
    id: 'first-pomodoro',
    title: 'Primeira Vitória',
    description: 'Complete seu primeiro pomodoro',
    Icon: IconTrophy,
    unlocked: false,
    progress: 0,
    target: 1,
    color: 'violet',
  },
  {
    id: 'streak-5',
    title: 'Foco Consistente',
    description: 'Alcance uma sequência de 5',
    Icon: IconFlame,
    unlocked: false,
    progress: 0,
    target: 5,
    color: 'orange',
  },
  {
    id: 'total-10',
    title: 'Dedicação',
    description: 'Complete 10 pomodoros',
    Icon: IconMedal,
    unlocked: false,
    progress: 0,
    target: 10,
    color: 'blue',
  },
  {
    id: 'total-50',
    title: 'Mestre do Foco',
    description: 'Complete 50 pomodoros',
    Icon: IconStar,
    unlocked: false,
    progress: 0,
    target: 50,
    color: 'yellow',
  },
  {
    id: 'streak-10',
    title: 'Imparável',
    description: 'Alcance uma sequência de 10',
    Icon: IconBolt,
    unlocked: false,
    progress: 0,
    target: 10,
    color: 'red',
  },
];

const colorMap: Record<string, string> = {
  violet: '102, 126, 234',
  orange: '251, 146, 60',
  blue: '59, 130, 246',
  yellow: '234, 179, 8',
  red: '239, 68, 68',
};

const AchievementsModal = ({ opened, onClose }: AchievementsModalProps) => {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="🏆 Conquistas"
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
      <Stack gap="xs">
        {ACHIEVEMENTS.map((achievement) => {
          const Icon = achievement.Icon;
          return (
            <Card
              key={achievement.id}
              p="md"
              radius="lg"
              style={{
                background: achievement.unlocked
                  ? `rgba(${colorMap[achievement.color]}, 0.1)`
                  : 'rgba(30, 30, 40, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                opacity: achievement.unlocked ? 1 : 0.6,
              }}
            >
              <Group wrap="nowrap" gap="md">
                <ThemeIcon
                  size={50}
                  radius="xl"
                  variant="light"
                  color={achievement.color}
                  style={{ flexShrink: 0 }}
                >
                  <Icon size={28} />
                </ThemeIcon>
                <Box style={{ flex: 1 }}>
                  <Group justify="space-between" mb={4}>
                    <Text fw={700} size="sm">
                      {achievement.title}
                    </Text>
                    {achievement.unlocked && <IconCheck size={16} color="#4ade80" />}
                  </Group>
                  <Text size="xs" c="dimmed" mb={8}>
                    {achievement.description}
                  </Text>
                  <Progress
                    value={(achievement.progress / achievement.target) * 100}
                    size="sm"
                    color={achievement.color}
                    radius="xl"
                  />
                  <Text size="xs" c="dimmed" mt={4}>
                    {achievement.progress}/{achievement.target}
                  </Text>
                </Box>
              </Group>
            </Card>
          );
        })}
      </Stack>
    </Modal>
  );
};

export default AchievementsModal;

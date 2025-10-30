import { Modal, Stack, Tabs, NumberInput, Switch, Card, Group, Box, Text, Badge } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { IconClock, IconTarget, IconSettings, IconVolume, IconVolumeOff } from '@tabler/icons-react';
import type { TimerSettings, Preset } from '../types';
import { PRESETS } from '../constants/presets';

interface SettingsModalProps {
  opened: boolean;
  onClose: () => void;
}

const SettingsModal = ({ opened, onClose }: SettingsModalProps) => {
  const [settings, setSettings] = useLocalStorage<TimerSettings>({
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

  const applyPreset = (preset: Preset) => {
    setSettings({
      ...settings,
      focusTime: preset.focus,
      shortBreak: preset.shortBreak,
      longBreak: preset.longBreak,
    });
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="⚙️ Configurações"
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
      <Tabs defaultValue="timing">
        <Tabs.List>
          <Tabs.Tab value="timing" leftSection={<IconClock size={16} />}>
            Tempos
          </Tabs.Tab>
          <Tabs.Tab value="presets" leftSection={<IconTarget size={16} />}>
            Presets
          </Tabs.Tab>
          <Tabs.Tab value="preferences" leftSection={<IconSettings size={16} />}>
            Preferências
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="timing" pt="md">
          <Stack gap="md">
            <NumberInput
              label="🎯 Tempo de Foco"
              description="Minutos de concentração profunda"
              value={settings.focusTime}
              onChange={(val) => setSettings({ ...settings, focusTime: Number(val) })}
              min={1}
              max={120}
              size="md"
            />
            <NumberInput
              label="☕ Pausa Curta"
              description="Minutos de descanso rápido"
              value={settings.shortBreak}
              onChange={(val) => setSettings({ ...settings, shortBreak: Number(val) })}
              min={1}
              max={30}
              size="md"
            />
            <NumberInput
              label="🌊 Pausa Longa"
              description="Minutos de descanso prolongado"
              value={settings.longBreak}
              onChange={(val) => setSettings({ ...settings, longBreak: Number(val) })}
              min={1}
              max={60}
              size="md"
            />
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="presets" pt="md">
          <Stack gap="xs">
            {PRESETS.map((preset) => (
              <Card
                key={preset.name}
                p="md"
                radius="lg"
                style={{
                  background: 'rgba(30, 30, 40, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onClick={() => applyPreset(preset)}
              >
                <Group justify="space-between">
                  <Box>
                    <Text fw={600} size="sm">
                      {preset.name}
                    </Text>
                    <Text size="xs" c="dimmed">
                      {preset.description}
                    </Text>
                  </Box>
                  <Badge variant="light" color="violet">
                    {preset.focus}/{preset.shortBreak}/{preset.longBreak}
                  </Badge>
                </Group>
              </Card>
            ))}
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="preferences" pt="md">
          <Stack gap="md">
            <Switch
              label="Sons de notificação"
              description="Tocar som ao completar sessão"
              checked={settings.soundEnabled}
              onChange={(e) => setSettings({ ...settings, soundEnabled: e.currentTarget.checked })}
              onLabel={<IconVolume size={16} />}
              offLabel={<IconVolumeOff size={16} />}
              size="md"
            />
            <Switch
              label="Auto-iniciar pausas"
              description="Iniciar pausas automaticamente"
              checked={settings.autoStartBreaks}
              onChange={(e) =>
                setSettings({ ...settings, autoStartBreaks: e.currentTarget.checked })
              }
              size="md"
            />
            <Switch
              label="Auto-iniciar pomodoros"
              description="Iniciar foco após pausa automaticamente"
              checked={settings.autoStartPomodoros}
              onChange={(e) =>
                setSettings({ ...settings, autoStartPomodoros: e.currentTarget.checked })
              }
              size="md"
            />
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Modal>
  );
};

export default SettingsModal;
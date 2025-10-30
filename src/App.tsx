import { useState, useRef, memo } from 'react';
import {
  MantineProvider,
  Container,
  Stack,
  Title,
  Group,
  Paper,
  Box,
  ThemeIcon,
  createTheme,
  ActionIcon,
  Tooltip,
  Button,
} from '@mantine/core';
import { useViewportSize, useLocalStorage, useDisclosure } from '@mantine/hooks';
import '@mantine/core/styles.css';

// Imports diretos (SEM lazy loading)
import { TimerRing } from './components/TimerRing';
import { StatsCards } from './components/StatsCards';
import { ControlButtons } from './components/ControlButtons';
import { ModeSelector } from './components/ModeSelector';
import { TaskInput } from './components/TaskInput';
import { CompletionCelebration } from './components/CompletionCelebration';
import SettingsModal from './components/SettingsModal';
import StatsModal from './components/StatsModal';
import AchievementsModal from './components/AchievementsModal';

import { useTimer } from './hooks/useTimer';
import { triggerConfetti } from './utils/confetti';
import type { TimerSettings } from './types';
import { BrainIcon, ChartIcon, TrophyIcon, ZenIcon, SettingsIcon } from './assets/CustomIcons';

const theme = createTheme({
  primaryColor: 'violet',
  defaultRadius: 'xl',
  shadows: {
    xs: '0 1px 3px rgba(0, 0, 0, .05), 0 1px 2px rgba(0, 0, 0, .1)',
    sm: '0 3px 6px rgba(0, 0, 0, .1), 0 2px 4px rgba(0, 0, 0, .06)',
    md: '0 10px 20px rgba(0, 0, 0, .15), 0 3px 6px rgba(0, 0, 0, .1)',
    lg: '0 15px 35px rgba(0, 0, 0, .2), 0 5px 15px rgba(0, 0, 0, .12)',
    xl: '0 20px 50px rgba(0, 0, 0, .3), 0 15px 20px rgba(0, 0, 0, .2)',
  },
});

const modeConfigs = {
  focus: {
    color: 'violet',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    glowColor: 'rgba(102, 126, 234, 0.4)',
  },
  shortBreak: {
    color: 'teal',
    gradient: 'linear-gradient(135deg, #12c2e9 0%, #c471ed 100%)',
    glowColor: 'rgba(18, 194, 233, 0.4)',
  },
  longBreak: {
    color: 'cyan',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    glowColor: 'rgba(102, 184, 255, 0.4)',
  },
};

const AnimatedBackground = memo(({ gradient }: { gradient: string }) => (
  <>
    <Box
      style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: gradient,
        borderRadius: '50%',
        filter: 'blur(100px)',
        opacity: 0.15,
        animation: 'float 20s ease-in-out infinite',
        transition: 'background 1s ease',
      }}
    />
    <Box
      style={{
        position: 'absolute',
        bottom: '20%',
        left: '5%',
        width: '250px',
        height: '250px',
        background: gradient,
        borderRadius: '50%',
        filter: 'blur(90px)',
        opacity: 0.1,
        animation: 'float 15s ease-in-out infinite reverse',
        transition: 'background 1s ease',
      }}
    />
  </>
));

AnimatedBackground.displayName = 'AnimatedBackground';

function App() {
  const {
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
  } = useTimer();

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

  const [showSettings, { open: openSettings, close: closeSettings }] = useDisclosure(false);
  const [showStats, { open: openStats, close: closeStats }] = useDisclosure(false);
  const [showAchievements, { open: openAchievements, close: closeAchievements }] = useDisclosure(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [zenMode, setZenMode] = useState(false);

  const { height: viewportHeight } = useViewportSize();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getResponsiveSizes = () => {
    const baseHeight = 667;
    const scale = Math.min(viewportHeight / baseHeight, 1.2);

    return {
      ringSize: Math.max(180, Math.min(240, 220 * scale)),
      fontSize: Math.max(42, Math.min(56, 56 * scale)),
      padding: Math.max(12, Math.min(24, 16 * scale)),
      gap: Math.max(8, Math.min(16, 12 * scale)),
    };
  };

  const responsive = getResponsiveSizes();
  const modeConfig = modeConfigs[mode];

  const prevTimeLeftRef = useRef(timeLeft);

  if (prevTimeLeftRef.current > 0 && timeLeft === 0 && mode === 'focus') {
    setShowCelebration(true);
    if (canvasRef.current) {
  triggerConfetti(canvasRef as React.RefObject<HTMLCanvasElement>);
}
    setTimeout(() => setShowCelebration(false), 3500);
  }
  prevTimeLeftRef.current = timeLeft;

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Box
        style={{
          minHeight: '100vh',
          height: '100vh',
          maxHeight: '100vh',
          background: 'radial-gradient(ellipse at top, #1a1b26 0%, #0d0d14 100%)',
          position: 'relative',
          overflow: 'hidden',
          padding: zenMode ? 0 : `${responsive.padding}px`,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translate(0, 0) scale(1); }
              33% { transform: translate(30px, -30px) scale(1.1); }
              66% { transform: translate(-20px, 20px) scale(0.9); }
            }
            @keyframes pulse {
              0%, 100% { transform: scale(1); opacity: 1; }
              50% { transform: scale(1.05); opacity: 0.8; }
            }
          `}
        </style>

        <canvas
          ref={canvasRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            zIndex: 9999,
          }}
        />

        <AnimatedBackground gradient={modeConfig.gradient} />

        <CompletionCelebration
          visible={showCelebration}
          onClose={() => setShowCelebration(false)}
          streak={stats.streak}
        />

        <Container
          size="xs"
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '400px',
            width: '100%',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Stack gap={responsive.gap} style={{ flex: 1 }}>
            {!zenMode && (
              <Group justify="space-between" style={{ flexShrink: 0 }}>
                <Group gap="xs">
                  <ThemeIcon
                    size="lg"
                    radius="xl"
                    variant="gradient"
                    gradient={{ from: modeConfig.color, to: 'pink', deg: 45 }}
                    style={{ boxShadow: `0 4px 14px ${modeConfig.glowColor}` }}
                  >
                    <BrainIcon size={20} />
                  </ThemeIcon>
                  <Title order={2} size="h3" style={{ fontWeight: 700 }}>
                    Timer TDAH
                  </Title>
                </Group>
                <Group gap="xs">
                  <Tooltip label="Modo Zen">
                    <ActionIcon
                      size="lg"
                      radius="xl"
                      variant="subtle"
                      color="gray"
                      onClick={() => setZenMode(!zenMode)}
                    >
                      <ZenIcon size={20} />
                    </ActionIcon>
                  </Tooltip>
                  <Tooltip label="Estatísticas">
                    <ActionIcon
                      size="lg"
                      radius="xl"
                      variant="subtle"
                      color="blue"
                      onClick={openStats}
                    >
                      <ChartIcon size={20} />
                    </ActionIcon>
                  </Tooltip>
                  <Tooltip label="Conquistas">
                    <ActionIcon
                      size="lg"
                      radius="xl"
                      variant="subtle"
                      color="yellow"
                      onClick={openAchievements}
                    >
                      <TrophyIcon size={20} />
                    </ActionIcon>
                  </Tooltip>
                  <Tooltip label="Configurações">
                    <ActionIcon
                      size="lg"
                      radius="xl"
                      variant="subtle"
                      color="gray"
                      onClick={openSettings}
                    >
                      <SettingsIcon size={20} />
                    </ActionIcon>
                  </Tooltip>
                </Group>
              </Group>
            )}

            <Paper
              p="lg"
              radius="xl"
              style={{
                background: 'rgba(30, 30, 40, 0.6)',
                backdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: isRunning
                  ? '0 8px 32px rgba(0, 0, 0, 0.4)'
                  : '0 4px 16px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: zenMode ? '80vh' : '250px',
              }}
            >
              <Stack gap="md" align="center" style={{ width: '100%' }}>
                <TimerRing
                  mode={mode}
                  timeLeft={timeLeft}
                  isRunning={isRunning}
                  formatTime={formatTime}
                  getProgress={getProgress}
                  size={zenMode ? Math.min(responsive.ringSize * 1.5, 300) : responsive.ringSize}
                  fontSize={zenMode ? responsive.fontSize * 1.3 : responsive.fontSize}
                  zenMode={zenMode}
                />

                <ControlButtons
                  isRunning={isRunning}
                  onToggle={() => setIsRunning(!isRunning)}
                  onReset={resetTimer}
                  modeColor={modeConfig.color}
                  glowColor={modeConfig.glowColor}
                  zenMode={zenMode}
                />
              </Stack>
            </Paper>

            {!zenMode && (
              <>
                <TaskInput
                  currentTask={currentTask}
                  onTaskChange={setCurrentTask}
                  currentTag={currentTag}
                  onTagChange={setCurrentTag}
                />

                <StatsCards stats={stats} />

                <ModeSelector mode={mode} onModeChange={setMode} settings={settings} />
              </>
            )}

            {zenMode && (
              <Button
                variant="subtle"
                color="gray"
                onClick={() => setZenMode(false)}
                style={{ position: 'absolute', top: 20, right: 20 }}
              >
                Sair do Zen
              </Button>
            )}
          </Stack>
        </Container>

        {/* Modals */}
        <SettingsModal opened={showSettings} onClose={closeSettings} />
        <StatsModal opened={showStats} onClose={closeStats} stats={stats} history={history} />
        <AchievementsModal opened={showAchievements} onClose={closeAchievements} />
      </Box>
    </MantineProvider>
  );
}

export default App;

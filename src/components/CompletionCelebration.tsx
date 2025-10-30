import { Box, Text, Stack, ThemeIcon, Paper } from '@mantine/core';
import { useEffect, useState } from 'react';
import { TrophyIcon, FlameIcon } from '../assets/CustomIcons';

interface CompletionCelebrationProps {
  visible: boolean;
  onClose: () => void;
  streak: number;
}

export const CompletionCelebration = ({ visible, onClose, streak }: CompletionCelebrationProps) => {
  const [particles, setParticles] = useState<Array<{ id: number; delay: number; x: number }>>([]);

  useEffect(() => {
    if (visible) {
      // Criar partículas elegantes
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        delay: i * 0.05,
        x: Math.random() * 100 - 50,
      }));
      setParticles(newParticles);

      const timer = setTimeout(onClose, 3500);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <>
      <style>
        {`
          @keyframes elegantSlideIn {
            0% {
              transform: translateY(-100px) scale(0.8);
              opacity: 0;
            }
            60% {
              transform: translateY(10px) scale(1.05);
              opacity: 1;
            }
            100% {
              transform: translateY(0) scale(1);
              opacity: 1;
            }
          }

          @keyframes elegantPulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }

          @keyframes shimmer {
            0% {
              background-position: -200% center;
            }
            100% {
              background-position: 200% center;
            }
          }

          @keyframes particleFloat {
            0% {
              transform: translateY(0) translateX(0) rotate(0deg);
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            100% {
              transform: translateY(-300px) translateX(var(--particle-x)) rotate(360deg);
              opacity: 0;
            }
          }

          @keyframes ringExpand {
            0% {
              transform: scale(0.8);
              opacity: 0;
            }
            50% {
              opacity: 0.6;
            }
            100% {
              transform: scale(2);
              opacity: 0;
            }
          }
        `}
      </style>

      {/* Overlay elegante */}
      <Box
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, rgba(102, 126, 234, 0.15) 0%, transparent 70%)',
          backdropFilter: 'blur(2px)',
          zIndex: 9998,
          pointerEvents: 'none',
        }}
      />

      {/* Card principal de celebração */}
      <Box
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          animation: 'elegantSlideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <Paper
          p="xl"
          radius="xl"
          style={{
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%)',
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 20px 60px rgba(102, 126, 234, 0.6), 0 0 100px rgba(102, 126, 234, 0.4)',
            minWidth: '300px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Anéis de expansão */}
          <Box
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100px',
              height: '100px',
              marginLeft: '-50px',
              marginTop: '-50px',
              border: '3px solid rgba(255, 255, 255, 0.5)',
              borderRadius: '50%',
              animation: 'ringExpand 1.5s ease-out',
            }}
          />
          <Box
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100px',
              height: '100px',
              marginLeft: '-50px',
              marginTop: '-50px',
              border: '3px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '50%',
              animation: 'ringExpand 1.5s ease-out 0.3s',
            }}
          />

          {/* Efeito shimmer */}
          <Box
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 2s infinite',
            }}
          />

          <Stack gap="md" align="center" style={{ position: 'relative', zIndex: 1 }}>
            <ThemeIcon
              size={80}
              radius="xl"
              variant="white"
              style={{
                animation: 'elegantPulse 1s ease-in-out infinite',
                boxShadow: '0 8px 32px rgba(255, 255, 255, 0.4)',
              }}
            >
              <TrophyIcon size={40} />
            </ThemeIcon>

            <Stack gap={4} align="center">
              <Text size="xl" fw={900} c="white" style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}>
                🎉 Pomodoro Completo!
              </Text>
              <Text size="md" fw={600} c="white" opacity={0.9}>
                Excelente trabalho!
              </Text>
            </Stack>

            {streak > 0 && (
              <Paper
                p="sm"
                radius="lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <Stack gap={4} align="center">
                  <FlameIcon size={24} />
                  <Text size="lg" fw={700} c="white">
                    Streak: {streak} 🔥
                  </Text>
                </Stack>
              </Paper>
            )}

            <Text size="sm" c="white" opacity={0.8} ta="center" maw={250}>
              Continue mantendo o ritmo! Você está cada vez melhor! ✨
            </Text>
          </Stack>

          {/* Partículas elegantes flutuantes */}
          {particles.map((particle) => (
            <Box
              key={particle.id}
              style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                width: '8px',
                height: '8px',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 100%)',
                borderRadius: '50%',
                animation: `particleFloat 2s ease-out ${particle.delay}s`,
                '--particle-x': `${particle.x}px`,
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
              } as any}
            />
          ))}
        </Paper>
      </Box>
    </>
  );
};
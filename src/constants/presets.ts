import type { Preset } from '../types';

export const PRESETS: Preset[] = [
  { name: 'Pomodoro Clássico', focus: 25, shortBreak: 5, longBreak: 15, description: 'Técnica tradicional' },
  { name: 'Pomodoro Intenso', focus: 50, shortBreak: 10, longBreak: 30, description: 'Para foco profundo' },
  { name: '52/17', focus: 52, shortBreak: 17, longBreak: 17, description: 'Baseado em estudos' },
  { name: 'Sprint Rápido', focus: 15, shortBreak: 3, longBreak: 10, description: 'Sessões curtas' },
  { name: 'Maratona', focus: 90, shortBreak: 20, longBreak: 45, description: 'Máximo rendimento' },
];

export const TAGS = [
  { value: 'trabalho', label: '💼 Trabalho' },
  { value: 'estudo', label: '📚 Estudo' },
  { value: 'projeto', label: '🚀 Projeto' },
  { value: 'leitura', label: '📖 Leitura' },
  { value: 'exercicio', label: '💪 Exercício' },
];
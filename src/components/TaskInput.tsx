import { Group, TextInput, Select } from '@mantine/core';
import { IconTarget, IconTag } from '@tabler/icons-react';
import { TAGS } from '../constants/presets';

interface TaskInputProps {
  currentTask: string;
  onTaskChange: (task: string) => void;
  currentTag: string | null;
  onTagChange: (tag: string | null) => void;
}

export const TaskInput = ({ currentTask, onTaskChange, currentTag, onTagChange }: TaskInputProps) => {
  return (
    <Group gap="xs">
      <TextInput
        placeholder="O que você está fazendo?"
        value={currentTask}
        onChange={(e) => onTaskChange(e.currentTarget.value)}
        leftSection={<IconTarget size={16} />}
        style={{ flex: 1 }}
        styles={{
          input: {
            background: 'rgba(30, 30, 40, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          },
        }}
      />
      <Select
        placeholder="Tag"
        value={currentTag}
        onChange={onTagChange}
        data={TAGS}
        clearable
        leftSection={<IconTag size={16} />}
        style={{ width: '140px' }}
        styles={{
          input: {
            background: 'rgba(30, 30, 40, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          },
        }}
      />
    </Group>
  );
};
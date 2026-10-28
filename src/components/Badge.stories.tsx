import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: 'A short, noninteractive status label. The text communicates the state so color is not the only cue.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Success: Story = {
  args: {
    label: 'Active',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    label: 'Delayed',
    variant: 'warning',
  },
};

export const Accent: Story = {
  args: {
    label: 'New',
    variant: 'accent',
  },
};

export const Neutral: Story = {
  args: {
    label: 'Draft',
    variant: 'neutral',
  },
};

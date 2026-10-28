import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'A native button with primary, secondary, outline, and disabled states. onClick is supplied by the consumer; the component does not own navigation or data persistence.',
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'outline'] },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary Action',
    variant: 'primary',
  },
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: args.label }));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Action',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    label: 'Outline Action',
    variant: 'outline',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Create project',
    disabled: true,
    onClick: fn(),
  },
  play: async ({ args, canvas, userEvent }) => {
    const button = canvas.getByRole('button', { name: args.label });
    await userEvent.click(button);
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

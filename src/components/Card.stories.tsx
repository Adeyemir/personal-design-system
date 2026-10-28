import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Badge } from './Badge';
import { Button } from './Button';
import { Card } from './Card';

const meta = {
  title: 'Molecules/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A static content container with optional title, description, children, and footer. Use real buttons or links inside a card for actions.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="mx-auto w-full max-w-sm">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'elevated'],
    },
    children: { control: 'text' },
    footer: { control: false },
  },
  args: {
    title: 'Project overview',
    description: 'Keep the details of your project in one place.',
    children: 'Use this card to group related content.',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
  },
};

export const WithActions: Story = {
  args: {
    title: 'Design system',
    description: 'Reusable components for your next interface.',
    variant: 'outline',
    children: (
      <div className="space-y-3">
        <Badge label="Active" variant="success" />
        <p>Build consistent interfaces with shared styles and components.</p>
      </div>
    ),
    footer: (
      <div className="flex flex-wrap gap-2">
        <Button label="View project" onClick={fn()} />
        <Button label="Manage" variant="outline" onClick={fn()} />
      </div>
    ),
  },
  argTypes: {
    children: { control: false },
  },
};

export const ContentOnly: Story = {
  args: {
    title: undefined,
    description: undefined,
    children: 'Cards can also display content without a title or description.',
  },
};

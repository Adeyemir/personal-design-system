import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Input } from './Input';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    controls: {
      include: ['label', 'placeholder', 'helperText', 'error', 'disabled', 'required', 'type', 'defaultValue'],
    },
  },
  decorators: [
    (Story) => (
      <div className="mx-auto w-full max-w-sm">
        <Story />
      </div>
    ),
  ],
  args: {
    label: 'Project name',
    placeholder: 'e.g. Personal website',
    onChange: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHelperText: Story = {
  args: {
    helperText: 'Use a name your team will recognise.',
  },
};

export const Error: Story = {
  args: {
    error: 'Enter a project name.',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'Archived project',
  },
};

export const Filled: Story = {
  args: {
    defaultValue: 'Design system',
  },
};

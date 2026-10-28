import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';
import { Input } from './Input';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A labelled native input. Helper and error messages are connected with aria-describedby; errors also set aria-invalid. Use defaultValue for an uncontrolled field, or value and onChange for a controlled field.',
      },
    },
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

export const Default: Story = {
  play: async ({ args, canvas, userEvent }) => {
    const input = canvas.getByRole('textbox', { name: args.label });
    await userEvent.click(canvas.getByText(args.label, { selector: 'label' }));
    await expect(input).toHaveFocus();
    await userEvent.type(input, 'Travel dashboard');
    await expect(input).toHaveValue('Travel dashboard');
    await expect(args.onChange).toHaveBeenCalled();
  },
};

export const WithHelperText: Story = {
  args: {
    helperText: 'Use a name your team will recognise.',
  },
  play: async ({ args, canvas }) => {
    await expect(canvas.getByRole('textbox', { name: args.label })).toHaveAccessibleDescription(args.helperText);
  },
};

export const Error: Story = {
  args: {
    error: 'Enter a project name.',
    required: true,
  },
  play: async ({ args, canvas }) => {
    const input = canvas.getByRole('textbox', { name: args.label });
    await expect(input).toHaveAccessibleDescription(args.error);
    await expect(input).toHaveAttribute('aria-invalid', 'true');
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

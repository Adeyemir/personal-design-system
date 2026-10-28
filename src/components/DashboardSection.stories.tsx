import type { Meta, StoryObj } from '@storybook/react-vite';
import { DashboardSection } from './DashboardSection';

const meta: Meta<typeof DashboardSection> = {
  title: 'Organisms/DashboardSection',
  component: DashboardSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof DashboardSection>;

export const Default: Story = {
  args: {
    title: 'My projects',
  },
};

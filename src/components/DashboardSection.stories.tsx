import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { DashboardSection } from './DashboardSection';

const meta = {
  title: 'Organisms/DashboardSection',
  component: DashboardSection,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: { control: 'text' },
    projects: { control: 'object' },
    onCreateProject: { control: false },
  },
  args: {
    title: 'My projects',
    projects: [
      { id: 'website', title: 'Personal website', status: 'active' },
      { id: 'design-system', title: 'Design system', status: 'draft' },
    ],
    onCreateProject: fn(),
  },
} satisfies Meta<typeof DashboardSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    projects: [],
  },
};

export const ManyProjects: Story = {
  args: {
    projects: [
      { id: 'website', title: 'Personal website', status: 'active' },
      { id: 'design-system', title: 'Design system', status: 'draft' },
      { id: 'storybook', title: 'Storybook workshop', status: 'active' },
      { id: 'portfolio', title: 'Portfolio update', status: 'draft' },
    ],
  },
};

export const LongTitles: Story = {
  args: {
    title: 'Projects shared across design and frontend engineering',
    projects: [
      {
        id: 'long-title',
        title: 'A shared component library for customer support and operations',
        status: 'active',
      },
      {
        id: 'unbroken-title',
        title: 'AProjectNameWithoutSpacesThatStillNeedsToFitInsideItsCardAtSmallWidths',
        status: 'draft',
      },
    ],
  },
};

export const Mobile: Story = {
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
  },
};

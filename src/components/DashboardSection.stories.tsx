import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn } from 'storybook/test';
import { DashboardSection } from './DashboardSection';

const meta = {
  title: 'Organisms/DashboardSection',
  component: DashboardSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A stateless project overview. Pass project data and handle onCreateProject in the parent. Stories supply mock data and a callback spy; they do not create a backend.',
      },
    },
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

export const Default: Story = {
  play: async ({ args, canvas, userEvent }) => {
    await expect(canvas.getByRole('heading', { name: args.title, level: 2 })).toBeVisible();
    await userEvent.click(canvas.getByRole('button', { name: 'Create project' }));
    await expect(args.onCreateProject).toHaveBeenCalledTimes(1);
  },
};

export const Empty: Story = {
  args: {
    projects: [],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('No projects yet')).toBeVisible();
    await expect(canvas.queryByRole('heading', { level: 3 })).not.toBeInTheDocument();
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
  args: LongTitles.args,
  globals: {
    viewport: { value: 'mobile1', isRotated: false },
  },
  play: async ({ canvas, canvasElement }) => {
    const [firstTitle, secondTitle] = canvas.getAllByRole('heading', { level: 3 });
    await expect(secondTitle.getBoundingClientRect().top).toBeGreaterThan(
      firstTitle.getBoundingClientRect().bottom,
    );
    await expect(canvasElement.scrollWidth).toBeLessThanOrEqual(canvasElement.clientWidth);
  },
};

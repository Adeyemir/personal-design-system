import { useId } from 'react';
import { Button } from './Button';
import { Badge } from './Badge';
import { Card } from './Card';

export type Project = {
  id: string;
  title: string;
  status: 'active' | 'draft';
};

export type DashboardSectionProps = {
  title?: string;
  projects?: Project[];
  onCreateProject?: () => void;
};

const statusDetails = {
  active: { label: 'Active', variant: 'success' },
  draft: { label: 'Draft', variant: 'neutral' },
} as const;

export const DashboardSection = ({
  title = 'My projects',
  projects = [],
  onCreateProject,
}: DashboardSectionProps) => {
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="space-y-4 bg-[var(--bg)] p-6 text-left text-[var(--text)]"
    >
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 id={headingId} className="m-0 min-w-0 [overflow-wrap:anywhere]">
          {title}
        </h2>
        <Button label="Create project" onClick={onCreateProject} />
      </div>

      {projects.length === 0 ? (
        <Card variant="outline">
          <p className="font-medium text-[var(--text-h)]">No projects yet</p>
          <p>Your projects will appear here once you add one.</p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id} title={project.title} variant="outline">
              <Badge {...statusDetails[project.status]} />
            </Card>
          ))}
        </div>
      )}
    </section>
  );
};

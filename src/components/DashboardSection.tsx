import { Button } from './Button';
import { Badge } from './Badge';
import { Card } from './Card';

type DashboardSectionProps = {
  title?: string;
};

export const DashboardSection = ({
  title = 'My projects',
}: DashboardSectionProps) => {
  return (
    <section className="space-y-4 bg-[var(--bg)] p-6 text-left text-[var(--text)]">
      <h2>{title}</h2>

      <Button label="Create project" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card title="Personal website" variant="outline">
          <Badge label="Active" variant="success" />
        </Card>

        <Card title="Design system" variant="outline">
          <Badge label="Draft" variant="neutral" />
        </Card>
      </div>
    </section>
  );
};

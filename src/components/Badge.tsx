type BadgeProps = {
  label: string;
  variant?: 'success' | 'warning' | 'neutral' | 'accent';
};

export const Badge = ({ label, variant = 'neutral' }: BadgeProps) => {
  let variantStyles: string;

  if (variant === 'success') {
    variantStyles = 'bg-emerald-500/10 text-[var(--success)] border-emerald-500/20';
  } else if (variant === 'warning') {
    variantStyles = 'bg-amber-500/10 text-[var(--warning)] border-amber-500/20';
  } else if (variant === 'accent') {
    variantStyles = 'bg-[var(--accent-bg)] text-[var(--accent-text)] border-[var(--accent-border)]';
  } else {
    variantStyles = 'bg-[var(--code-bg)] text-[var(--text)] border-[var(--border)]';
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variantStyles}`}>
      {label}
    </span>
  );
};

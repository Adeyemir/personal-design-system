import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type CardProps = Omit<ComponentPropsWithoutRef<'div'>, 'title'> & {
  title?: string;
  description?: string;
  variant?: 'default' | 'outline' | 'elevated';
  footer?: ReactNode;
};

const variantStyles = {
  default: 'border-transparent bg-[var(--code-bg)]',
  outline: 'border-[var(--border)] bg-transparent',
  elevated: 'border-[var(--border)] bg-[var(--bg)] shadow-[var(--shadow)]',
};

export const Card = ({
  title,
  description,
  variant = 'default',
  children,
  footer,
  className = '',
  ...props
}: CardProps) => (
  <div
    {...props}
    className={`min-w-0 space-y-4 rounded-[14px] border p-4 text-left text-sm leading-6 text-[var(--text)] [overflow-wrap:anywhere] ${variantStyles[variant]} ${className}`}
  >
    {(title || description) && (
      <div className="space-y-1">
        {title && (
          <h3 className="m-0 text-lg font-semibold leading-6 text-[var(--text-h)]">
            {title}
          </h3>
        )}
        {description && <p>{description}</p>}
      </div>
    )}
    {children != null && <div>{children}</div>}
    {footer != null && (
      <div className="border-t border-[var(--border)] pt-4">{footer}</div>
    )}
  </div>
);

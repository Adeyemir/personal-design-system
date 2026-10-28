import { useId } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

export type InputProps = ComponentPropsWithoutRef<'input'> & {
  label: string;
  helperText?: string;
  error?: string;
};

export const Input = ({
  label,
  helperText,
  error,
  id,
  className = '',
  'aria-describedby': describedBy,
  'aria-invalid': invalid,
  ...props
}: InputProps) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const messageId = `${inputId}-message`;
  const message = error || helperText;
  const descriptionIds = [describedBy, message ? messageId : undefined]
    .filter(Boolean)
    .join(' ') || undefined;

  return (
    <div className="space-y-2 text-left text-sm text-[var(--text)]">
      <label htmlFor={inputId} className="block font-medium text-[var(--text-h)]">
        {label}
      </label>
      <input
        {...props}
        id={inputId}
        aria-describedby={descriptionIds}
        aria-invalid={error ? true : invalid}
        className={`block w-full rounded-lg border bg-[var(--bg)] px-3 py-2 text-[var(--text-h)] placeholder:text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-60 ${error ? 'border-[var(--danger)]' : 'border-[var(--input-border)]'} ${className}`}
      />
      {message && (
        <p id={messageId} className={error ? 'text-[var(--danger)]' : undefined}>
          {message}
        </p>
      )}
    </div>
  );
};

type ButtonProps = {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  disabled?: boolean;
};

export const Button = ({ label, variant = 'primary', onClick, disabled = false }: ButtonProps) => {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors duration-200 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-50';
  let variantStyles = '';

  if (variant === 'primary') {
    variantStyles =
      'bg-[var(--accent)] text-[var(--accent-foreground)] enabled:hover:brightness-110';
  } else if (variant === 'secondary') {
    variantStyles = 'bg-[var(--code-bg)] text-[var(--text-h)] enabled:hover:opacity-80';
  } else if (variant === 'outline') {
    variantStyles = 'border border-[var(--border)] text-[var(--text)] hover:border-[var(--text)]';
  }

  return (
    <button type="button" disabled={disabled} className={`${baseStyles} ${variantStyles}`} onClick={onClick}>
      {label}
    </button>
  );
};

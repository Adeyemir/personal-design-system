type ButtonProps = {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
};

export const Button = ({ label, variant = 'primary', onClick }: ButtonProps) => {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-all duration-200 cursor-pointer';
  let variantStyles = '';

  if (variant === 'primary') {
    variantStyles = 'bg-[var(--accent)] text-white hover:opacity-90';
  } else if (variant === 'secondary') {
    variantStyles = 'bg-[var(--code-bg)] text-[var(--text-h)] hover:opacity-80';
  } else if (variant === 'outline') {
    variantStyles = 'border border-[var(--border)] text-[var(--text)] hover:border-[var(--text)]';
  }

  return (
    <button className={`${baseStyles} ${variantStyles}`} onClick={onClick}>
      {label}
    </button>
  );
};

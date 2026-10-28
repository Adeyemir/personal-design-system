import { useLayoutEffect } from 'react';
import type { ReactNode } from 'react';

export const Theme = ({ theme, children }: { theme: 'light' | 'dark'; children: ReactNode }) => {
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return children;
};

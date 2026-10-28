/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
import path from 'node:path';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = import.meta.dirname;
// The sidebar addon assigns one project name per Storybook config directory.
// Keep one project there; CLI and CI can run separate light/dark projects.
const themes = process.env.VITEST_STORYBOOK === 'true' ? ['light'] : ['light', 'dark'];

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['storybook/viewport'],
  },
  test: {
    coverage: {
      provider: 'v8',
      include: ['src/components/**/*.{ts,tsx}'],
      exclude: ['src/components/**/*.stories.tsx'],
      reporter: ['text', 'html', 'json-summary'],
    },
    projects: themes.map((theme) => ({
      extends: true,
      plugins: [
        storybookTest({
          configDir: path.join(dirname, '.storybook'),
          initialGlobals: { theme },
        }),
      ],
      test: {
        name: `storybook-${theme}`,
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{ browser: 'chromium' }],
        },
      },
    })),
  },
});

import type { Preview } from '@storybook/react-vite'
import { MINIMAL_VIEWPORTS } from 'storybook/viewport'
import { Theme } from './Theme'
import '../src/index.css'
import './preview.css'

const preview: Preview = {
  tags: ['autodocs'],
  globalTypes: {
    theme: {
      description: 'Component color theme',
      toolbar: {
        icon: 'circlehollow',
        dynamicTitle: true,
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [
    (Story, context) => (
      <Theme theme={context.globals.theme === 'dark' ? 'dark' : 'light'}>
        <Story />
      </Theme>
    ),
  ],
  parameters: {
    backgrounds: { disable: true },
    options: {
      storySort: {
        order: ['Guides', 'Atoms', 'Molecules', 'Organisms'],
      },
    },
    viewport: {
      options: MINIMAL_VIEWPORTS,
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      test: 'error'
    }
  },
};

export default preview;

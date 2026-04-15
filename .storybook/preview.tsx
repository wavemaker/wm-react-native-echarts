import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../contexts/ThemeContext';
import React from 'react';
import './preview.css';

const preview: Preview = {
  parameters: {
    options: {
      storySort: (a, b) => {
        const introOrder = [
          'Introduction/Getting Started',
          'Introduction/Main Concepts',
          'Introduction/Comparison',
          'Introduction/License',
        ];
        const introPrefix = 'Introduction/';
        const examplesPrefix = 'Examples/';
        const bucket = (title) => {
          if (title.startsWith(introPrefix)) return 0;
          if (title.startsWith(examplesPrefix)) return 2;
          return 1;
        };
        const ba = bucket(a.title);
        const bb = bucket(b.title);
        if (ba !== bb) return ba - bb;
        if (ba === 0) {
          const ai = introOrder.indexOf(a.title);
          const bi = introOrder.indexOf(b.title);
          if (ai !== -1 || bi !== -1) {
            return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
          }
        }
        if (ba === 2) {
          const examplesOrder = [
            'Examples/Area',
            'Examples/Bar',
            'Examples/Column',
            'Examples/Line',
          ];
          const ai = examplesOrder.indexOf(a.title);
          const bi = examplesOrder.indexOf(b.title);
          if (ai !== -1 || bi !== -1) {
            return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
          }
        }
        return a.title === b.title
          ? (a.name ?? '').localeCompare(b.name ?? '', undefined, { numeric: true })
          : a.title.localeCompare(b.title, undefined, { numeric: true });
      },
    },
    docs: {
      codePanel: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;

import type { Preview } from '@storybook/react';
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
        const chartsPrefix = 'Charts/';
        const examplesPrefix = 'Examples/';
        const themingPrefix = 'Theming/';
        const bucket = (title) => {
          if (title.startsWith(introPrefix)) return 0;
          if (title.startsWith(chartsPrefix)) return 1;
          if (title.startsWith(examplesPrefix)) return 2;
          if (title.startsWith(themingPrefix) || title === 'Theming') return 3;
          return 4;
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
        if (ba === 3) {
          const themingOrder = ['Theming/Overview', 'Theming/Examples'];
          const ai = themingOrder.indexOf(a.title);
          const bi = themingOrder.indexOf(b.title);
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
        <Story />
    ),
  ],
};

export default preview;

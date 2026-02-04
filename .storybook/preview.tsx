import type { Preview } from '@storybook/react';
import {
  Title,
  Subtitle,
  Description,
  Controls
} from '@storybook/addon-docs/blocks';
import { ThemeProvider } from '../contexts/ThemeContext';
import React from 'react';
import './preview.css';

const preview: Preview = {
  parameters: {
    docs: {
      // Display story source (markup) in the canvas before the addon panel (controls)
      codePanel: true,
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Controls />
        </>
      )
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

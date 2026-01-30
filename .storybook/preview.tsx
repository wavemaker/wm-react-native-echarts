import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../contexts/ThemeContext';
import React from 'react';
import './preview.css';

const preview: Preview = {
  parameters: {
    docs: {
      // Display story source (markup) in the canvas before the addon panel (controls)
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

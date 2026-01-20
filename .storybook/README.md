# Storybook Configuration

This folder contains the Storybook configuration for the rn-widgets project.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start Storybook:
   ```bash
   npm run storybook
   ```

3. Build Storybook for production:
   ```bash
   npm run build-storybook
   ```

## Configuration Files

- `main.ts` - Main Storybook configuration file that defines stories, addons, and framework settings
- `preview.tsx` - Preview configuration that wraps all stories with global decorators and parameters

## Writing Stories

Stories should be placed next to the components they document, using the pattern:
`ComponentName.stories.tsx`

Example:
```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from './MyComponent';

const meta = {
  title: 'Category/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // component props
  },
};
```

## Features

- **React Native Web Support**: Configured to work with React Native components via react-native-web
- **Theme Provider**: All stories are wrapped with the ThemeProvider for consistent theming
- **TypeScript**: Full TypeScript support
- **Auto-docs**: Automatic documentation generation for components
- **Path Aliases**: Supports `@/` path alias for imports

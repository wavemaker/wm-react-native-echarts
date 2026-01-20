import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../'),
          'react-native': 'react-native-web',
          'react-native/Libraries/Image/AssetRegistry': 'react-native-web/dist/modules/AssetRegistry',
        },
      },
      optimizeDeps: {
        exclude: ['react-native', '@shopify/react-native-skia'],
        include: ['react-native-web'],
        esbuildOptions: {
          resolveExtensions: ['.web.js', '.web.jsx', '.web.ts', '.web.tsx', '.js', '.jsx', '.ts', '.tsx'],
        },
      },
      build: {
        commonjsOptions: {
          transformMixedEsModules: true,
        },
      },
      define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        __DEV__: JSON.stringify(true),
      },
      server: {
        fs: {
          allow: ['..'],
        },
      },
      plugins: [
        {
          name: 'ignore-react-native-flow',
          enforce: 'pre',
          resolveId(id) {
            // Ignore react-native files that contain Flow syntax
            if (id.includes('react-native') && !id.includes('react-native-web')) {
              if (id.includes('node_modules/react-native')) {
                return { id: 'react-native-web', external: false };
              }
            }
            return null;
          },
          load(id) {
            // Skip loading react-native files with Flow syntax
            if (id.includes('node_modules/react-native') && !id.includes('react-native-web')) {
              if (id.endsWith('.js.flow') || id.includes('/Libraries/')) {
                return 'export default {};';
              }
            }
            return null;
          },
        },
      ],
    });
  },
};

export default config;

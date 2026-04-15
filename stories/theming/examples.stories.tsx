import type { StoryObj } from '@storybook/react';
import React from 'react';
import { View } from 'react-native';
import {
  ChartThemeProvider,
  DARK_THEME,
  extendChartTheme,
  type ChartTheme,
} from '@components/chart/chart-theme.context';
import { AreaChart } from '@components/chart/area/area-chart';
import meta from './meta';

export default { ...meta, title: 'Theming/Examples' };
type Story = StoryObj<typeof meta>;

const sampleData = [186, 305, 237, 73, 209, 214];

/** Built-in **LIGHT_THEME** when no `ChartThemeProvider` wraps the chart (same defaults the library ships with). */
export const Default: Story = {
  args: { data: sampleData },
};

/** **`colors={string[]}`** overrides the series palette for this chart only (values cycle per series). */
export const PerChartColors: Story = {
  args: {
    data: sampleData,
    colors: ['#f97316', '#14b8a6'],
  },
};

/** **`theme={partial}`** merges axis, tooltip, series, etc. for this instance over context or defaults. */
export const PerChartTheme: Story = {
  args: {
    data: sampleData,
    theme: {
      axis: {
        x: { tickLabelColor: '#0f172a', lineColor: '#64748b' },
        y: { tickLabelColor: '#0f172a', lineColor: '#64748b' },
      },
      series: [{ color: '#6366f1', lineWidth: 3 }],
    } as Partial<ChartTheme>,
  },
};

/** Nested **`ChartThemeProvider`**s merge: inner partials override the outer theme. */
export const NestedProviders: Story = {
  render: (args) => (
    <View style={{ padding: 16, backgroundColor: '#111' }}>
      <ChartThemeProvider theme={DARK_THEME}>
        <ChartThemeProvider
          theme={{
            axis: { x: { lineColor: 'red' }, y: { lineColor: 'yellow' } },
          } as Partial<ChartTheme> }
        >
          <AreaChart {...args} />
        </ChartThemeProvider>
      </ChartThemeProvider>
    </View>
  ),
  args: { data: sampleData },
};

/** **`extendChartTheme(...partials)`** builds a full theme object; pass it via **`theme`** on the chart. */
export const ExtendedThemeProp: Story = {
  args: {
    data: [
      { name: 'A', data: [30, 55, 40, 50, 45, 38] },
      { name: 'B', data: [45, 40, 60, 48, 52, 55] },
    ],
    showLegend: true,
    theme: extendChartTheme({
      series: [
        { color: '#db2777', lineWidth: 2 },
        { color: '#0891b2', lineWidth: 2 },
      ],
    }),
  },
};

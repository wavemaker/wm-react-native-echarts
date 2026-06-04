import type { StoryObj } from '@storybook/react';
import type { ChartTheme } from '@components/chart/chart-theme.context';
import meta from '../meta';
import { heatmapBaseArgs } from '../heatmap.args';

export default { ...meta, title: 'Charts/Heatmap/Colors' };
type Story = StoryObj<typeof meta>;

/** Default theme gradient for the visual map. */
export const Default: Story = {
  args: { ...heatmapBaseArgs },
};

/** Custom colors for the continuous scale gradient. */
export const CustomColors: Story = {
  args: {
    ...heatmapBaseArgs,
    colors: ['#F2A65A', '#6F8F72'],
  },
};

/** Theme override for scale and legend text. */
export const ThemeOverride: Story = {
  args: {
    ...heatmapBaseArgs,
    theme: {
      series: [{ color: '#3b82f6' }, { color: '#93c5fd' }],
      legend: { textColor: '#1e293b', fontSize: 12 },
    } as Partial<ChartTheme>,
  },
};

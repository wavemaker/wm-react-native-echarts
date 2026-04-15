import type { StoryObj } from '@storybook/react';
import type { ChartTheme } from '@components/chart/chart-theme.context';
import meta from '../meta';

export default {
  ...meta,
  title: 'Charts/Scatter/Colors',
};
type Story = StoryObj<typeof meta>;

const data: number[][] = [[10, 5], [0, 8], [6, 10], [2, 12], [8, 9], [12, 6]];
const colors = ['#F2A65A', '#6F8F72', '#132440'];

/** Default theme colors (single series). */
export const Default: Story = {
  args: {
    data,
  },
};

/** Custom series color via colors prop. */
export const CustomColor: Story = {
  args: {
    data,
    colors,
  },
};

/** Multiple custom colors for multiple series. */
export const MultipleSeriesColors: Story = {
  args: {
    data: [
      { name: 'Series A', data: [[10, 5], [0, 8], [6, 10], [2, 12]] },
      { name: 'Series B', data: [[5, 10], [8, 0], [10, 6], [12, 2]] },
      { name: 'Series C', data: [[6, 12], [4, 4], [8, 8], [14, 2]] },
    ],
    colors,
    showLegend: true,
  },
};

/** Theme override: axis label and line colors. */
export const ThemeOverride: Story = {
  args: {
    data,
    theme: {
      series: [{ color: colors[0] }],
      axis: {
        x: { tickLabelColor: colors[2], lineColor: colors[1] },
        y: { tickLabelColor: colors[2], lineColor: colors[1] },
      },
    } as Partial<ChartTheme>,
  },
};

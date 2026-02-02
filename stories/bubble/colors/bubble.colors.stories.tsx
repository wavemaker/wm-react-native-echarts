import type { StoryObj } from '@storybook/react';
import type { ChartTheme } from '@components/chart/chart-theme.context';
import meta from '../meta';

export default {
  ...meta,
  title: 'Charts/Bubble/Colors',
};
type Story = StoryObj<typeof meta>;

const data: [number, number, number][] = [
  [10, 20, 30],
  [15, 25, 15],
  [20, 15, 45],
  [25, 30, 25],
  [30, 22, 35],
];
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
      { name: 'Series A', data: [[10, 20, 30], [15, 25, 15], [20, 15, 45]] },
      { name: 'Series B', data: [[12, 18, 25], [18, 22, 35], [22, 28, 20]] },
      { name: 'Series C', data: [[14, 24, 28], [20, 16, 38], [26, 30, 22]] },
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

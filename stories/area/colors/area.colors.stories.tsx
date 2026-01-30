import type { StoryObj } from '@storybook/react';
import type { ChartTheme } from '@components/chart/chart-theme.context';
import meta from '../meta';

export default {
  ...meta,
  title: 'Charts/Area/Colors'
};
type Story = StoryObj<typeof meta>;

const data = [40, 82, 91, 74, 120, 95];
const xAxisLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const colors = ['#F2A65A', '#6F8F72', '#132440'];

/** Default theme colors (single series). */
export const Default: Story = {
  args: {
    xAxisData: xAxisLabels,
    data,
  },
};

/** Custom series color: colors={['#FF6B6B']}. */
export const CustomColor: Story = {
  args: {
    xAxisData: xAxisLabels,
    data,
    colors: colors,
  },
};

/** Multiple custom colors for multiple series. Colors cycle if more series than colors. */
export const MultipleSeriesColors: Story = {
  args: {
    xAxisData: xAxisLabels,
    data: [
      { name: 'Series A', data: [40, 82, 91, 74, 90, 88] },
      { name: 'Series B', data: [20, 62, 71, 54, 70, 68] },
      { name: 'Series C', data: [60, 42, 51, 94, 50, 48] },
    ],
    colors: colors,
    showLegend: true,
  },
};

/** Theme override: axis label and line colors. */
export const ThemeOverride: Story = {
  args: {
    xAxisData: xAxisLabels,
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

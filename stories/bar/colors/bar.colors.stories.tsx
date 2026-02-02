import type { StoryObj } from '@storybook/react';
import type { ChartTheme } from '@components/chart/chart-theme.context';
import meta from '../meta';

export default {
  ...meta,
  title: 'Charts/Bar/Colors',
};
type Story = StoryObj<typeof meta>;

const data = [40, 82, 91, 74, 120, 95];
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
      { name: 'Series A', data: [40, 82, 91, 74, 90, 88] },
      { name: 'Series B', data: [20, 62, 71, 54, 70, 68] },
      { name: 'Series C', data: [30, 42, 51, 64, 50, 58] },
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

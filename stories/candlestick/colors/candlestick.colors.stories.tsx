import type { StoryObj } from '@storybook/react';
import type { ChartTheme } from '@components/chart/chart-theme.context';
import meta from '../meta';

export default {
  ...meta,
  title: 'Charts/Candlestick/Colors',
};
type Story = StoryObj<typeof meta>;

const xAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const data: [number, number, number, number][] = [
  [20, 34, 10, 38],
  [40, 35, 30, 50],
  [31, 38, 33, 44],
  [38, 15, 5, 42],
  [25, 32, 28, 35],
];
const colors = ['#26a69a', '#ef5350', '#ff9800', '#2196f3', '#9c27b0'];

/** Default theme colors (up/down candles). */
export const Default: Story = {
  args: { data, xAxisData },
};

/** Custom up/down colors via theme series. */
export const CustomColors: Story = {
  args: {
    data,
    xAxisData,
    colors,
  },
};

/** Theme override for axis and candle colors. */
export const ThemeOverride: Story = {
  args: {
    data,
    xAxisData,
    theme: {
      series: [
        { color: colors[0] },
        { color: colors[1] },
      ],
      axis: {
        x: { tickLabelColor: colors[4], lineColor: colors[2] },
        y: { tickLabelColor: colors[4], lineColor: colors[2] },
      },
    } as Partial<ChartTheme>,
  },
};

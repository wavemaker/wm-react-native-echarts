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

/** Default colors (green up, red down). */
export const Default: Story = {
  args: { data, xAxisData },
};

/** Custom positive/negative candle colors. */
export const CustomColors: Story = {
  args: {
    data,
    xAxisData,
    positiveColor: '#0066cc',
    negativeColor: '#cc3300',
  },
};

const axisColors = { tickLabelColor: '#9c27b0', lineColor: '#ff9800' };

/** Theme override for axis colors. */
export const ThemeOverride: Story = {
  args: {
    data,
    xAxisData,
    theme: {
      axis: {
        x: axisColors,
        y: axisColors,
      },
    } as Partial<ChartTheme>,
  },
};

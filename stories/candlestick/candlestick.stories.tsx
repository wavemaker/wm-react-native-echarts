import type { StoryObj } from '@storybook/react';
import meta from './meta';

export default { ...meta, title: 'Charts/Candlestick', tags: ['autodocs']  };
type Story = StoryObj<typeof meta>;

const xAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const defaultData: [number, number, number, number][] = [
  [20, 34, 10, 38],
  [40, 35, 30, 50],
  [31, 38, 33, 44],
  [38, 15, 5, 42],
  [25, 32, 28, 35],
  [30, 25, 20, 40],
  [35, 45, 30, 50],
];

/** Default candlestick chart. */
export const Default: Story = {
  args: {
    data: defaultData,
    xAxisData,
  },
};

/** Candlestick with volume bars below. */
export const WithVolume: Story = {
  args: {
    data: defaultData,
    xAxisData,
    volumeData: [20, 40, 31, 38, 25, 30, 35],
  },
};

/** Candlestick with moving averages (MA5, MA10, MA20). */
export const WithMovingAverage: Story = {
  args: {
    data: defaultData,
    xAxisData,
    ma5: [25, 35, 32, 28, 30, 32, 38],
    ma10: [28, 32, 30, 26, 28, 30, 35],
    ma20: [30, 30, 28, 25, 27, 29, 32],
    showLegend: true,
  },
};

/** Candlestick with highlighter disabled. */
export const ShowHighlighter: Story = {
  args: {
    data: defaultData,
    xAxisData,
    showHighlighter: false,
  },
};

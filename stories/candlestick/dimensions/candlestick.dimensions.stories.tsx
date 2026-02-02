import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Candlestick/Dimensions' };
type Story = StoryObj<typeof meta>;

const xAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const data: [number, number, number, number][] = [
  [20, 34, 10, 38],
  [40, 35, 30, 50],
  [31, 38, 33, 44],
  [38, 15, 5, 42],
  [25, 32, 28, 35],
];

/** Default size: width 220, height 350. */
export const Default: Story = {
  args: { data, xAxisData },
};

/** Custom width and height. */
export const WithWidthAndHeight: Story = {
  args: { data, xAxisData, width: 360, height: 320 },
};

/** Custom grid padding (percent). */
export const GridPercentPadding: Story = {
  args: {
    data,
    xAxisData,
    grid: {
      left: '12%',
      right: '10%',
      top: '10%',
      bottom: '15%',
    },
  },
};

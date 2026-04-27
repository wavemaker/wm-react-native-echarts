import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Candlestick/Legend' };
type Story = StoryObj<typeof meta>;

const xAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const data: [number, number, number, number][] = [
  [20, 34, 10, 38],
  [40, 35, 30, 50],
  [31, 38, 33, 44],
  [38, 15, 5, 42],
  [25, 32, 28, 35],
  [30, 25, 20, 40],
  [35, 45, 30, 50],
];

const maArgs = {
  data,
  xAxisData,
  ma5: [25, 35, 32, 28, 30, 32, 38],
  ma10: [28, 32, 30, 26, 28, 30, 35],
  ma20: [30, 30, 28, 25, 27, 29, 32],
};

/** MA5 line without the moving-average legend (`showLegend={false}`). */
export const HideLegend: Story = {
  args: {
    data,
    xAxisData,
    ma5: [25, 35, 32, 28, 30, 32, 38],
    showLegend: false,
  },
};

/** Moving-average legend at bottom (explicit). */
export const LegendBottom: Story = {
  args: {
    ...maArgs,
    legendPosition: 'bottom',
  },
};

/** Legend at top. */
export const LegendTop: Story = {
  args: {
    ...maArgs,
    legendPosition: 'top',
  },
};

/** Legend on the left. */
export const LegendLeft: Story = {
  args: {
    ...maArgs,
    legendPosition: 'left',
  },
};

/** Legend on the right. */
export const LegendRight: Story = {
  args: {
    ...maArgs,
    legendPosition: 'right',
  },
};

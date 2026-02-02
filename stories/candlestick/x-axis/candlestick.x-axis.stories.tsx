import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Candlestick/X-Axis' };
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

/** X-axis shows category labels. */
export const Default: Story = {
  args: { data, xAxisData },
};

/** showXAxis: false — X-axis and labels hidden. */
export const HideAxis: Story = {
  args: { data, xAxisData, showXAxis: false },
};

/** showXAxisTicks: false — X-axis visible, tick marks hidden. */
export const NoTicks: Story = {
  args: { data, xAxisData, showXAxisTicks: false },
};

/** showXAxisSplitLines: false — vertical grid lines hidden. */
export const NoSplitLines: Story = {
  args: { data, xAxisData, showXAxisSplitLines: false },
};

/** boundaryGap: false — no gap at axis ends. */
export const NoBoundaryGap: Story = {
  args: { data, xAxisData, boundaryGap: false },
};

/** xAxisTicks: numeric tick values; labels from xAxisTickLabelFormatter (7 data, 12 ticks). */
export const CustomTicks: Story = {
  args: {
    data,
    xAxisTicks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xAxisTickLabelFormatter: (value) => {
      const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
      const i = Number(value);
      return labels[i] ?? String(value);
    },
  },
};

/** xAxisTickLabelFormatter — custom label format. */
export const LabelFormatter: Story = {
  args: {
    data,
    xAxisData,
    xAxisTickLabelFormatter: (value) => String(value).slice(0, 2),
  },
};

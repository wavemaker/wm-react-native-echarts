import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Scatter/X-Axis' };
type Story = StoryObj<typeof meta>;

const data: number[][] = [[10, 5], [0, 8], [6, 10], [2, 12], [8, 9]];

/** Default: X-axis shown (value axis from data). */
export const Default: Story = {
  args: {
    data,
  },
};

/** showXAxis: false — X-axis and its labels hidden. */
export const HideAxis: Story = {
  args: {
    data,
    showXAxis: false,
  },
};

/** showXAxisTicks: false — X-axis visible but tick marks hidden. */
export const NoTicks: Story = {
  args: {
    data,
    showXAxisTicks: false,
  },
};

/** showXAxisSplitLines: false — vertical grid lines hidden. */
export const NoSplitLines: Story = {
  args: {
    data,
    showXAxisSplitLines: false,
  },
};

/** xAxisTicks: numeric tick values; labels from xAxisTickLabelFormatter (5 data, 8 ticks). */
export const CustomTicks: Story = {
  args: {
    data,
    xAxisTicks: [0, 1, 2, 3, 4, 5, 6, 7],
    xAxisTickLabelFormatter: (value) => {
      const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
      const i = Number(value);
      return labels[i] ?? String(value);
    },
  },
};

/** xAxisTickLabelFormatter: format X-axis (value) tick labels. */
export const LabelFormatter: Story = {
  args: {
    data,
    xAxisTickLabelFormatter: (value) => `x=${value}`,
  },
};

/** boundaryGap: true — gaps at the start and end of the axis. */
export const BoundaryGap: Story = {
  args: { data, boundaryGap: true },
};

/** xAxisLabel — X-axis label displayed along the axis. */
export const XAxisLabel: Story = {
  args: {
    data,
    xAxisLabel: 'X value',
  },
};

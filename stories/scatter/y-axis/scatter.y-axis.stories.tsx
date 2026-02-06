import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Scatter/Y-Axis' };
type Story = StoryObj<typeof meta>;

const data: number[][] = [[10, 5], [0, 8], [6, 10], [2, 12], [8, 9]];

/** Default: Y-axis shown (value axis from data). */
export const Default: Story = {
  args: {
    data,
  },
};

/** showYAxis: false — Y-axis and its labels hidden. */
export const HideAxis: Story = {
  args: {
    data,
    showYAxis: false,
  },
};

/** showYAxisTicks: false — Y-axis visible but tick marks hidden. */
export const NoTicks: Story = {
  args: {
    data,
    showYAxisTicks: false,
  },
};

/** showYAxisSplitLines: false — horizontal grid lines hidden. */
export const NoSplitLines: Story = {
  args: {
    data,
    showYAxisSplitLines: false,
  },
};

/** yAxisTickLabelFormatter: format Y-axis (value) tick labels. */
export const LabelFormatter: Story = {
  args: {
    data,
    yAxisTickLabelFormatter: (value) => `y=${value}`,
  },
};

/** yAxisLabel — Y-axis label displayed along the axis. */
export const YAxisLabel: Story = {
  args: {
    data,
    yAxisLabel: 'Y value',
  },
};

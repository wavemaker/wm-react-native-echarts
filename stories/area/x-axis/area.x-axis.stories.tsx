import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Area/X-Axis' };
type Story = StoryObj<typeof meta>;

const data = [40, 82, 91, 74, 120, 95];

/** X-axis shows data indices (0, 1, 2, ...). */
export const Default: Story = {
  args: { data },
};

/** showXAxis: false — X-axis and its labels hidden. */
export const HideAxis: Story = {
  args: { data, showXAxis: false },
};

/** showXAxisTicks: false — X-axis visible but tick marks hidden. */
export const NoTicks: Story = {
  args: { data, showXAxisTicks: false },
};

/** showXAxisSplitLines: false — vertical grid lines hidden. */
export const NoSplitLines: Story = {
  args: { data, showXAxisSplitLines: false },
};

/** boundaryGap: true — gaps at the start and end of the axis. */
export const BoundaryGap: Story = {
  args: { data, boundaryGap: true },
};

/** xAxisTicks: numeric tick values; labels from xAxisTickLabelFormatter (6 data, 10 ticks). */
export const CustomTicks: Story = {
  args: {
    data: [40, 82, 91, 74, 120, 95],
    xAxisTicks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    xAxisTickLabelFormatter: (value) => {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
      const i = Number(value);
      return labels[i] ?? String(value);
    },
  },
};

/** xAxisTickLabelFormatter: format X-axis tick labels (e.g. abbreviate or add suffix). */
export const LabelFormatter: Story = {
  args: {
    data: [40, 82, 91, 74, 120, 95],
    xAxisTickLabelFormatter: (value) => {
      switch (Number(value)) {
        case 0:
          return 'Jan';
        case 1:
          return 'Feb';
        case 2:
          return 'Mar';
        case 3:
          return 'Apr';
        case 4:
          return 'May';
        case 5:
          return 'Jun';
        default:
          return String(value);
      }
    },
  },
};

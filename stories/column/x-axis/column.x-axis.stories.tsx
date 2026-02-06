import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Column/X-Axis' };
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

/** boundaryGap: false — columns extend to axis edges. */
export const NoBoundaryGap: Story = {
  args: { data, boundaryGap: false },
};

/** xAxisTicks: numeric tick values; labels from xAxisTickLabelFormatter (6 data, 10 ticks). */
export const CustomTicks: Story = {
  args: {
    data,
    xAxisTicks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    xAxisTickLabelFormatter: (value) => {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
      const i = Number(value);
      return labels[i] ?? String(value);
    },
  },
};

/** xAxisTickLabelFormatter: format X-axis tick labels (e.g. month names). */
export const LabelFormatter: Story = {
  args: {
    data,
    xAxisTickLabelFormatter: (value) => {
      const labels: Record<string, string> = {
        '0': 'Jan',
        '1': 'Feb',
        '2': 'Mar',
        '3': 'Apr',
        '4': 'May',
        '5': 'Jun',
      };
      return labels[String(value)] ?? String(value);
    },
  },
};

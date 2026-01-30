import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Line/X-Axis' };
type Story = StoryObj<typeof meta>;

const data = [40, 82, 91, 74, 120, 95];
const xAxisLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

/** No xAxisData: labels show as data indices (0, 1, 2, ...). */
export const Default: Story = {
  args: {
    data,
  },
};

/** X-axis with custom string labels. */
export const WithLabels: Story = {
  args: {
    xAxisData: xAxisLabels,
    data,
  },
};

/** showXAxis: false — X-axis and its labels hidden. */
export const HideAxis: Story = {
  args: {
    xAxisData: xAxisLabels,
    data,
    showXAxis: false,
  },
};

/** showXAxisTicks: false — X-axis visible but tick marks hidden. */
export const NoTicks: Story = {
  args: {
    xAxisData: xAxisLabels,
    data,
    showXAxisTicks: false,
  },
};

/** showXAxisSplitLines: false — vertical grid lines hidden. */
export const NoSplitLines: Story = {
  args: {
    xAxisData: xAxisLabels,
    data,
    showXAxisSplitLines: false,
  },
};

/** boundaryGap: true — gaps at the start and end of the axis. */
export const BoundaryGap: Story = {
  args: {
    xAxisData: xAxisLabels,
    data,
    boundaryGap: true,
  },
};

/** X-axis with object format (label + value). */
export const ObjectFormat: Story = {
  args: {
    xAxisData: [
      { label: 'Q1', value: 0 },
      { label: 'Q2', value: 3 },
      { label: 'Q3', value: 6 },
      { label: 'Q4', value: 9 },
    ],
    data: [100, 150, 120, 180],
  },
};

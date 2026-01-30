import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Line/Y-Axis' };
type Story = StoryObj<typeof meta>;

const data = [40, 82, 91, 74, 90, 88];
const xAxisLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const yAxisLabels = [
  { label: 'F', value: 0 },
  { label: '', value: 20 },
  { label: 'P', value: 40 },
  { label: 'C', value: 60 },
  { label: 'B', value: 80 },
  { label: 'A', value: 90 },
  { label: 'A+', value: 100 },
];

/** No yAxisData: scale computed from the dataset. */
export const Default: Story = {
  args: {
    xAxisData: xAxisLabels,
    data,
  },
};

/** Y-axis with custom labels (object format). */
export const WithLabels: Story = {
  args: {
    xAxisData: xAxisLabels,
    data,
    yAxisData: yAxisLabels,
  },
};

/** Custom Y-axis labels via yAxisData (string array). */
export const CustomYAxisLabels: Story = {
  args: {
    xAxisData: xAxisLabels,
    data,
    yAxisData: ['0', '50', '100', '150'],
  },
};

/** showYAxis: false — Y-axis and its labels hidden. */
export const HideAxis: Story = {
  args: {
    xAxisData: xAxisLabels,
    data,
    showYAxis: false,
  },
};

/** showYAxisTicks: false — Y-axis visible but tick marks hidden. */
export const NoTicks: Story = {
  args: {
    xAxisData: xAxisLabels,
    data,
    showYAxisTicks: false,
  },
};

/** showYAxisSplitLines: false — horizontal grid lines hidden. */
export const NoSplitLines: Story = {
  args: {
    xAxisData: xAxisLabels,
    data,
    showYAxisSplitLines: false,
  },
};

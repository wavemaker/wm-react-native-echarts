import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default {...meta, title: 'Charts/Area/Type'};
type Story = StoryObj<typeof meta>;

const defaultData = [186, 305, 237, 73, 209, 214];
const curveData = [40, 82, 91, 74, 120, 95];
const curveXAxis = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

// Default Area Chart - matches default-area.chart (no x-axis)
export const Default: Story = {
  args: {
    data: defaultData,
  },
};

/** Area chart with smooth curve interpolation (type="smooth"). */
export const Smooth: Story = {
  args: {
    xAxisData: curveXAxis,
    data: curveData,
    type: 'smooth',
  },
};

/** Step interpolation, mode start (default): step starts at the data point. */
export const StepStart: Story = {
  args: {
    xAxisData: curveXAxis,
    data: curveData,
    type: 'step',
    step: 'start',
  },
};

/** Step interpolation, mode middle: step is centered on the data point. */
export const StepMiddle: Story = {
  args: {
    xAxisData: curveXAxis,
    data: curveData,
    type: 'step',
    step: 'middle',
  },
};

/** Step interpolation, mode end: step ends at the data point. */
export const StepEnd: Story = {
  args: {
    xAxisData: curveXAxis,
    data: curveData,
    type: 'step',
    step: 'end',
  },
};

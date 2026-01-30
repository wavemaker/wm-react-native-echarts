import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Line/Type' };
type Story = StoryObj<typeof meta>;

const defaultData = [186, 305, 237, 73, 209, 214];
const curveData = [40, 82, 91, 74, 120, 95];
const xAxisLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

/** Default curve (type: default). */
export const Default: Story = {
  args: {
    xAxisData: xAxisLabels,
    data: defaultData,
  },
};

/** Smooth curve interpolation (type: smooth). */
export const Smooth: Story = {
  args: {
    xAxisData: xAxisLabels,
    data: curveData,
    type: 'smooth',
  },
};

/** Linear (type: default). */
export const Linear: Story = {
  args: {
    xAxisData: xAxisLabels,
    data: curveData,
    type: 'default',
  },
};

/** Step interpolation, mode start (type: step, step: start). */
export const StepStart: Story = {
  args: {
    xAxisData: xAxisLabels,
    data: curveData,
    type: 'step',
    step: 'start',
  },
};

/** Step interpolation, mode middle. */
export const StepMiddle: Story = {
  args: {
    xAxisData: xAxisLabels,
    data: curveData,
    type: 'step',
    step: 'middle',
  },
};

/** Step interpolation, mode end. */
export const StepEnd: Story = {
  args: {
    xAxisData: xAxisLabels,
    data: curveData,
    type: 'step',
    step: 'end',
  },
};

/** boundaryGap: true — gaps at the start and end of the axis. */
export const BoundaryGap: Story = {
  args: {
    xAxisData: xAxisLabels,
    data: curveData,
    boundaryGap: true,
  },
};

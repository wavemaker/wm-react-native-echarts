import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Pie/Donut' };
type Story = StoryObj<typeof meta>;

const data = [
  { name: 'Desktop', value: 275 },
  { name: 'Mobile', value: 200 },
  { name: 'Tablet', value: 187 },
  { name: 'Other', value: 90 },
];

/** Donut: inner radius 50%, outer 75%. */
export const Donut: Story = {
  args: {
    data,
    radius: ['50%', '75%'],
  },
};

/** Thin ring donut. */
export const ThinRing: Story = {
  args: {
    data,
    radius: ['65%', '75%'],
  },
};

/** Donut with labels inside. */
export const DonutLabelsInside: Story = {
  args: {
    data,
    radius: ['50%', '75%'],
    labelPosition: 'inside',
    showLabelLine: false,
  },
};

import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Gauge/Digital/Colors' };
type Story = StoryObj<typeof meta>;

/** Default theme colors (gradient from theme). */
export const Default: Story = {
  args: { value: 65 },
};

/** Custom gradient colors for active ticks. */
export const CustomGradient: Story = {
  args: {
    value: 65,
    colors: ['#e74c3c', '#f39c12', '#2ecc71'],
  },
};

/** Single custom color. */
export const SingleColor: Story = {
  args: {
    value: 65,
    colors: ['#3498db'],
  },
};

/** Custom axis/track background and tick color. */
export const AxisAndTickColors: Story = {
  args: {
    value: 65,
    axisBgColor: '#ecf0f1',
    tickColor: '#7f8c8d',
  },
};

/** Dark accent: custom colors and axis. */
export const DarkAccent: Story = {
  args: {
    value: 70,
    colors: ['#2c3e50', '#1abc9c'],
    axisBgColor: '#34495e',
    tickColor: '#95a5a6',
  },
};

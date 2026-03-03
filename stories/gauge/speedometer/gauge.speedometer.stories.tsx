import type { StoryObj } from '@storybook/react';
import meta from './meta';

export default { ...meta, title: 'Charts/Gauge/Speedometer' };
type Story = StoryObj<typeof meta>;

/** Speedometer gauge with segment colors (e.g. red / yellow / green). */
export const Default: Story = {
  args: { value: 65 },
};

/** Speedometer at low value. */
export const LowValue: Story = {
  args: { value: 20 },
};

/** Speedometer at high value. */
export const HighValue: Story = {
  args: { value: 88 },
};

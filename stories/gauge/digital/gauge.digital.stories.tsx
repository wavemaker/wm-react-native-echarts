import type { StoryObj } from '@storybook/react';
import meta from './meta';

export default { ...meta, title: 'Charts/Gauge/Digital' };
type Story = StoryObj<typeof meta>;

/** Default digital gauge (value 0–100, animated ticks and center value). */
export const Default: Story = {
  args: { value: 46 },
};

/** Digital gauge at low value. */
export const LowValue: Story = {
  args: { value: 12 },
};

/** Digital gauge at high value. */
export const HighValue: Story = {
  args: { value: 99 },
};

/** Digital gauge with custom scale (e.g. 0–200). */
export const CustomScale: Story = {
  args: {
    value: 185,
    max: 200,
  },
};

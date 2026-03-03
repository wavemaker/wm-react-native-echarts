import type { StoryObj } from '@storybook/react';
import meta from './meta';

export default { ...meta, title: 'Charts/Gauge/Radial' };
type Story = StoryObj<typeof meta>;

/** Default radial gauge (value 0–100, pointer + arc). */
export const Default: Story = {
  args: { value: 75 },
};

/** Radial gauge at low value. */
export const LowValue: Story = {
  args: { value: 25 },
};

/** Radial gauge at high value. */
export const HighValue: Story = {
  args: { value: 92 },
};

/** Radial gauge with custom scale (e.g. 0–200). */
export const CustomScale: Story = {
  args: {
    value: 140,
    max: 200,
  },
};

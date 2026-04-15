import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Gauge/Digital/Scale' };
type Story = StoryObj<typeof meta>;

/** Default scale: value 0–100. */
export const Default: Story = {
  args: { value: 50 },
};

/** Custom max: scale 0–200. */
export const CustomMax: Story = {
  args: {
    value: 140,
    max: 200,
  },
};

/** Custom min and max: scale 50–150. */
export const CustomMinMax: Story = {
  args: {
    value: 100,
    min: 50,
    max: 150,
  },
};

/** Value at scale start. */
export const AtMinimum: Story = {
  args: { value: 0 },
};

/** Value at scale end. */
export const AtMaximum: Story = {
  args: { value: 100 },
};

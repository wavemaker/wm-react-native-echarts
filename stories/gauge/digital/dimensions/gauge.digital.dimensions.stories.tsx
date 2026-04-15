import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Gauge/Digital/Dimensions' };
type Story = StoryObj<typeof meta>;

/** Default size (from meta args: width 240, height 240). */
export const Default: Story = {
  args: { value: 60 },
};

/** Custom width and height (square). */
export const CustomSquare: Story = {
  args: {
    value: 60,
    width: 320,
    height: 320,
  },
};

/** Custom width and height (wider). */
export const CustomWider: Story = {
  args: {
    value: 60,
    width: 400,
    height: 240,
  },
};

/** Smaller gauge. */
export const Small: Story = {
  args: {
    value: 60,
    width: 160,
    height: 160,
  },
};

import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Gauge/Digital/Options' };
type Story = StoryObj<typeof meta>;

/** Default: no inner arc, standard animation. */
export const Default: Story = {
  args: { value: 55 },
};

/** Inner arc visible (connects inner scale ticks). */
export const WithInnerArc: Story = {
  args: {
    value: 55,
    showInnerArc: true,
  },
};

/** Slower animation (2 seconds). */
export const SlowAnimation: Story = {
  args: {
    value: 55,
    animationDuration: 2000,
  },
};

/** Fast animation (300 ms). */
export const FastAnimation: Story = {
  args: {
    value: 55,
    animationDuration: 300,
  },
};

/** Inner arc and custom animation duration. */
export const InnerArcAndSlowAnimation: Story = {
  args: {
    value: 55,
    showInnerArc: true,
    animationDuration: 1500,
  },
};

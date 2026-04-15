import type { StoryObj } from '@storybook/react';
import meta from './meta';

export default { ...meta, title: 'Charts/Gauge/Simple' };
type Story = StoryObj<typeof meta>;

/** Simple gauge with title and detail text. */
export const Default: Story = {
  args: {
    value: 42,
    title: 'Score',
    detailText: '42%',
  },
};

/** Simple gauge at low value. */
export const LowValue: Story = {
  args: {
    value: 18,
    title: 'Progress',
    detailText: '18%',
  },
};

/** Simple gauge at high value. */
export const HighValue: Story = {
  args: {
    value: 95,
    title: 'Completion',
    detailText: '95%',
  },
};

import type { StoryObj } from '@storybook/react';
import meta from './meta';

export default { ...meta, title: 'Charts/Gauge', tags: ['autodocs'] };
type Story = StoryObj<typeof meta>;

/** Default radial gauge (value 0–100, pointer + arc). */
export const Default: Story = {
  args: {
    value: 75,
    min: 0,
    max: 100,
    width: 220,
    height: 240,
  },
};


import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Gauge/Colors' };
type Story = StoryObj<typeof meta>;

/** Default theme colors. */
export const Default: Story = {
  args: {
    value: 65,
    min: 0,
    max: 100,
    width: 220,
    height: 240,
  },
};

/** Custom progress and accent colors. */
export const CustomColors: Story = {
  args: {
    value: 65,
    min: 0,
    max: 100,
    width: 220,
    height: 240,
    colors: ['#F2A65A', '#6F8F72', '#132440'],
  },
};

/** Single custom color. */
export const SingleColor: Story = {
  args: {
    value: 80,
    min: 0,
    max: 100,
    width: 220,
    height: 240,
    colors: ['#e74c3c'],
  },
};

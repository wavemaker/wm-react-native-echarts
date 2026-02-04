import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Radial/Dimensions' };
type Story = StoryObj<typeof meta>;

const data = [
  { value: 85 },
  { value: 70 },
  { value: 50 },
  { value: 35 },
  { value: 22 },
];

/** Default size: width 220, height 350. */
export const Default: Story = {
  args: { data },
};

/** Custom width and height. */
export const WithWidthAndHeight: Story = {
  args: {
    data,
    width: 400,
    height: 400,
  },
};

/** Larger center hole (innerRadius). */
export const InnerRadius: Story = {
  args: {
    data,
    width: 320,
    height: 320,
    innerRadius: '30%',
  },
};

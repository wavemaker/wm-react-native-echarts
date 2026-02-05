import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Radial/Dimensions' };
type Story = StoryObj<typeof meta>;

const data = [
  { label: 'Chrome', value: 92 },
  { label: 'Firefox', value: 78 },
  { label: 'Safari', value: 65 },
  { label: 'Brave', value: 52 },
  { label: 'Edge', value: 38 },
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

/** Custom inner radius (larger center hole). */
export const LargeCenterHole: Story = {
  args: {
    data,
    innerRadius: '35%',
  },
};

import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Pie/Dimensions' };
type Story = StoryObj<typeof meta>;

const data = [
  { name: 'Desktop', value: 275 },
  { name: 'Mobile', value: 200 },
  { name: 'Tablet', value: 187 },
  { name: 'Other', value: 90 },
];

/** Default size: width 220, height 350. */
export const Default: Story = {
  args: { data },
};

/** Custom width and height. */
export const WithWidthAndHeight: Story = {
  args: { data, width: 320, height: 300 },
};

/** Larger chart. */
export const Large: Story = {
  args: { data, width: 400, height: 400 },
};

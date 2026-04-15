import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Geo/Dimensions' };
type Story = StoryObj<typeof meta>;

const data = [
  { name: 'United States', value: 500 },
  { name: 'China', value: 600 },
  { name: 'Japan', value: 300 },
  { name: 'Germany', value: 250 },
  { name: 'India', value: 400 },
];

/** Default size: width 400, height 300. */
export const Default: Story = {
  args: { data },
};

/** Custom width and height. */
export const CustomSize: Story = {
  args: { data, width: 500, height: 350 },
};

/** Narrow map. */
export const Narrow: Story = {
  args: { data, width: 320, height: 240 },
};

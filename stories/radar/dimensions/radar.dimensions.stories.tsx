import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Radar/Dimensions' };
type Story = StoryObj<typeof meta>;

const indicators = [
  { name: 'Sales', max: 100 },
  { name: 'Marketing', max: 100 },
  { name: 'Dev', max: 100 },
  { name: 'Support', max: 100 },
];
const data = [40, 82, 91, 74];

/** Default size: width 220, height 350. */
export const Default: Story = {
  args: { indicators, data },
};

/** Custom width and height. */
export const WithWidthAndHeight: Story = {
  args: { indicators, data, width: 320, height: 300 },
};

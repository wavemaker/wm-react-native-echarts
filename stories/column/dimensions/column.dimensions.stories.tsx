import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Column/Dimensions' };
type Story = StoryObj<typeof meta>;

const data = [40, 82, 91, 74, 120, 95];

/** Default size: width 220, height 350. */
export const Default: Story = {
  args: { data },
};

/** Custom width and height. */
export const WithWidthAndHeight: Story = {
  args: { data, width: 320, height: 300 },
};

/** Custom grid padding (percent). */
export const GridPercentPadding: Story = {
  args: {
    data,
    grid: {
      left: '15%',
      right: '10%',
      top: '10%',
      bottom: '15%',
    },
  },
};

/** Custom grid padding (pixels). */
export const GridPixelPadding: Story = {
  args: {
    data,
    grid: {
      left: 40,
      right: 24,
      top: 24,
      bottom: 36,
    },
  },
};

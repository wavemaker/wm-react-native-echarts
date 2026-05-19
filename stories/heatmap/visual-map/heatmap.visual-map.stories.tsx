import type { StoryObj } from '@storybook/react';
import meta from '../meta';
import { heatmapBaseArgs, heatmapPiecewiseArgs } from '../heatmap.args';

export default { ...meta, title: 'Charts/Heatmap/Visual Map' };
type Story = StoryObj<typeof meta>;

/** Continuous scale — range derived from data. */
export const Continuous: Story = {
  args: { ...heatmapBaseArgs, visualMapMode: 'continuous' },
};

/** visualMapMin / visualMapMax — fixed color scale bounds. */
export const FixedRange: Story = {
  args: {
    ...heatmapBaseArgs,
    visualMapMin: 0,
    visualMapMax: 5,
  },
};

/** visualMapMode="piecewise" with custom bands. */
export const Piecewise: Story = {
  args: { ...heatmapPiecewiseArgs },
};

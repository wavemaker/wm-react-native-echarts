import type { StoryObj } from '@storybook/react';
import meta from './meta';
import { heatmapBaseArgs } from './heatmap.args';

export default { ...meta, title: 'Charts/Heatmap', tags: ['autodocs'] };
type Story = StoryObj<typeof meta>;

/** Default heatmap with theme-based cell coloring. */
export const Default: Story = {
  args: { ...heatmapBaseArgs },
};

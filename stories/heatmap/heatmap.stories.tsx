import type { StoryObj } from '@storybook/react';
import meta from './meta';
import { heatmapBaseArgs } from './heatmap.args';

export default { ...meta, title: 'Charts/Heatmap', tags: ['autodocs'] };
type Story = StoryObj<typeof meta>;

/** Default heatmap with continuous color scale. */
export const Default: Story = {
  args: { ...heatmapBaseArgs },
};

/** showLegend={false} — hides the visual map (color scale). */
export const NoLegend: Story = {
  args: { ...heatmapBaseArgs, showLegend: false },
};

/** showHighlighter={false} — no cell emphasis on hover. */
export const NoHighlighter: Story = {
  args: { ...heatmapBaseArgs, showHighlighter: false },
};

import type { StoryObj } from '@storybook/react';
import meta from '../meta';
import { heatmapBaseArgs } from '../heatmap.args';

export default { ...meta, title: 'Charts/Heatmap/Axes' };
type Story = StoryObj<typeof meta>;

/** Both category axes visible (default). */
export const Default: Story = {
  args: { ...heatmapBaseArgs },
};

/** showXAxis={false} — hide column labels. */
export const HideXAxis: Story = {
  args: { ...heatmapBaseArgs, showXAxis: false },
};

/** showYAxis={false} — hide row labels. */
export const HideYAxis: Story = {
  args: { ...heatmapBaseArgs, showYAxis: false },
};

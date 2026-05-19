import type { StoryObj } from '@storybook/react';
import meta from '../meta';
import { buildHeatmapDemoData, heatmapDemoDays, heatmapDemoHours } from '../heatmap.args';

export default { ...meta, title: 'Charts/Heatmap/Dimensions' };
type Story = StoryObj<typeof meta>;

const data = buildHeatmapDemoData();

/** Default size: width 420, height 280. */
export const Default: Story = {
  args: {
    width: 420,
    height: 280,
    xAxisData: heatmapDemoHours,
    yAxisData: heatmapDemoDays,
    data,
  },
};

/** Custom width and height. */
export const CustomSize: Story = {
  args: {
    width: 520,
    height: 360,
    xAxisData: heatmapDemoHours,
    yAxisData: heatmapDemoDays,
    data,
  },
};

/** Compact chart for dense matrices. */
export const Compact: Story = {
  args: {
    width: 300,
    height: 220,
    xAxisData: heatmapDemoHours.slice(0, 8),
    yAxisData: heatmapDemoDays,
    data: buildHeatmapDemoData(8),
  },
};

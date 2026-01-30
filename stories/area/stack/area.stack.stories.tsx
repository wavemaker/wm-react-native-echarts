import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Area/Stack' };
type Story = StoryObj<typeof meta>;

const xAxisLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const multipleSeries = [
  { name: 'Series A', data: [40, 82, 91, 74, 90, 88] },
  { name: 'Series B', data: [20, 62, 71, 54, 70, 68] },
  { name: 'Series C', data: [30, 42, 51, 64, 50, 58] },
];

const colors = ['#F2A65A', '#6F8F72', '#132440'];

/** Multiple series without stacking (default). */
export const Default: Story = {
  args: {
    xAxisData: xAxisLabels,
    data: multipleSeries,
    showLegend: true,
    colors: colors
  },
};

/** Multiple series stacked: stack="total". Areas stack on top of each other. */
export const Stacked: Story = {
  args: {
    xAxisData: xAxisLabels,
    data: multipleSeries,
    stack: 'total',
    showLegend: true,
    colors: colors
  },
};

/** Stacked and normalized: stack="total" with stackNormalize={true}. Shows percentages (0–100%). */
export const StackNormalized: Story = {
  args: {
    xAxisData: xAxisLabels,
    data: multipleSeries,
    stack: 'total',
    stackNormalize: true,
    showLegend: true,
    areaFill: 'solid',
    colors: colors
  },
};

import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Area/Legend' };
type Story = StoryObj<typeof meta>;

/** Multiple series with longer names so the horizontal legend wraps on small widths. */
const wrapLegendSeries = [
  { name: 'North America retail', data: [40, 52, 61, 54, 60, 58] },
  { name: 'Europe online channel', data: [20, 42, 51, 44, 50, 48] },
  { name: 'Asia Pacific B2B', data: [30, 32, 41, 64, 45, 50] },
  { name: 'Latin America partners', data: [15, 28, 35, 40, 38, 42] },
];

const twoSeries = [
  { name: 'Series A', data: [40, 52, 61, 54, 60, 58] },
  { name: 'Series B', data: [20, 42, 51, 44, 50, 48] },
];

/** Named series with the legend hidden (`showLegend={false}`). */
export const HideLegend: Story = {
  args: {
    data: twoSeries,
    showLegend: false,
  },
};

/** Legend at bottom, horizontal and wrapped when needed. */
export const LegendBottom: Story = {
  args: {
    data: wrapLegendSeries,
    legendPosition: 'bottom',
  },
};

/** Legend above the chart. */
export const LegendTop: Story = {
  args: {
    data: wrapLegendSeries,
    legendPosition: 'top',
  },
};

/** Legend on the left (vertical). */
export const LegendLeft: Story = {
  args: {
    data: wrapLegendSeries,
    legendPosition: 'left',
  },
};

/** Legend on the right (vertical). */
export const LegendRight: Story = {
  args: {
    data: wrapLegendSeries,
    legendPosition: 'right',
  },
};

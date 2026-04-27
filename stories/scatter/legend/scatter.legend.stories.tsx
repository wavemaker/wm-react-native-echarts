import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Scatter/Legend' };
type Story = StoryObj<typeof meta>;

const ptsA: number[][] = [
  [2, 3], [4, 6], [12, 22], [14, 26], [16, 30], [6, 11], [8, 15], [10, 19], [18, 35],
];
const ptsB: number[][] = [
  [0, -6], [2, 1], [4, 2], [6, 6], [8, 11], [10, 15], [12, 19], [14, 23], [16, 27],
];

const multiSeries = [
  { name: 'North America cohort', data: ptsA },
  { name: 'Europe control group', data: ptsB },
  { name: 'Asia Pacific sample', data: ptsA.map(([x, y]) => [x + 1, y - 2]) },
];

const twoSeries = [
  { name: 'Series A', data: ptsA },
  { name: 'Series B', data: ptsB },
];

/** Named series with the legend hidden (`showLegend={false}`). */
export const HideLegend: Story = {
  args: {
    data: twoSeries,
    showLegend: false,
  },
};

/** Legend at bottom (default). */
export const LegendBottom: Story = {
  args: {
    data: multiSeries,
    legendPosition: 'bottom',
  },
};

/** Legend at top. */
export const LegendTop: Story = {
  args: {
    data: multiSeries,
    legendPosition: 'top',
  },
};

/** Legend on the left. */
export const LegendLeft: Story = {
  args: {
    data: multiSeries,
    legendPosition: 'left',
  },
};

/** Legend on the right. */
export const LegendRight: Story = {
  args: {
    data: multiSeries,
    legendPosition: 'right',
  },
};

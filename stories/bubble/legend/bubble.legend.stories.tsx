import type { StoryObj } from '@storybook/react';
import type { BubbleSeriesData } from '@components/chart/bubble';
import meta from '../meta';

export default { ...meta, title: 'Charts/Bubble/Legend' };
type Story = StoryObj<typeof meta>;

const a: [number, number, number][] = [
  [10, 20, 30],
  [15, 25, 15],
  [20, 15, 45],
  [25, 30, 25],
  [30, 22, 35],
];
const b: [number, number, number][] = [
  [12, 18, 25],
  [18, 22, 35],
  [22, 28, 20],
  [28, 14, 40],
  [32, 26, 30],
];

const multiSeries: BubbleSeriesData = [
  { name: 'Campaign A impressions', data: a },
  { name: 'Campaign B engagement', data: b },
  { name: 'Campaign C reach', data: a.map(([x, y, z]) => [x + 2, y + 1, z] as [number, number, number]) },
];

const twoSeries: BubbleSeriesData = [
  { name: 'Series A', data: a },
  { name: 'Series B', data: b },
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

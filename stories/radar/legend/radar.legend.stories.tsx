import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Radar/Legend' };
type Story = StoryObj<typeof meta>;

const indicators = [
  { name: 'Sales', max: 100 },
  { name: 'Marketing', max: 100 },
  { name: 'Development', max: 100 },
  { name: 'Support', max: 100 },
  { name: 'Admin', max: 100 },
];

const multiSeries = [
  { name: 'North region', value: [80, 60, 75, 55, 70] },
  { name: 'South region', value: [50, 70, 65, 80, 60] },
  { name: 'East region', value: [70, 50, 85, 45, 75] },
];

const colors = ['#F2A65A', '#6F8F72', '#132440'];

const twoSeries = [
  { name: 'North region', value: [80, 60, 75, 55, 70] },
  { name: 'South region', value: [50, 70, 65, 80, 60] },
];

/** Named series with the legend hidden (`showLegend={false}`). */
export const HideLegend: Story = {
  args: {
    indicators,
    data: twoSeries,
    colors,
    showLegend: false,
  },
};

/** Legend at bottom (default). */
export const LegendBottom: Story = {
  args: {
    indicators,
    data: multiSeries,
    colors,
    legendPosition: 'bottom',
  },
};

/** Legend at top. */
export const LegendTop: Story = {
  args: {
    indicators,
    data: multiSeries,
    colors,
    legendPosition: 'top',
  },
};

/** Legend on the left. */
export const LegendLeft: Story = {
  args: {
    indicators,
    data: multiSeries,
    colors,
    legendPosition: 'left',
  },
};

/** Legend on the right. */
export const LegendRight: Story = {
  args: {
    indicators,
    data: multiSeries,
    colors,
    legendPosition: 'right',
  },
};

import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Pie/Legend' };
type Story = StoryObj<typeof meta>;

const data = [
  { name: 'Chrome', value: 275 },
  { name: 'Safari', value: 200 },
  { name: 'Firefox', value: 187 },
  { name: 'Edge', value: 173 },
  { name: 'Other', value: 90 },
];

/** Long slice names to exercise wrapped horizontal legend. */
const wrapData = [
  { name: 'Chrome desktop', value: 275 },
  { name: 'Safari mobile', value: 200 },
  { name: 'Firefox developer', value: 187 },
  { name: 'Edge enterprise', value: 173 },
  { name: 'Other browsers', value: 90 },
];

const smallPie = [
  { name: 'Alpha', value: 45 },
  { name: 'Beta', value: 35 },
  { name: 'Gamma', value: 20 },
];

/** Slices rendered without the legend (`showLegend={false}`). */
export const HideLegend: Story = {
  args: {
    data: smallPie,
    showLegend: false,
  },
};

/** Legend above the pie. */
export const LegendTop: Story = {
  args: {
    data: wrapData,
    legendPosition: 'top',
  },
};

/** Legend on the left. */
export const LegendLeft: Story = {
  args: {
    data: wrapData,
    legendPosition: 'left',
  },
};

/** Legend on the right. */
export const LegendRight: Story = {
  args: {
    data: wrapData,
    legendPosition: 'right',
  },
};

/** Legend at bottom (explicit). */
export const LegendBottom: Story = {
  args: {
    data: wrapData,
    legendPosition: 'bottom',
  },
};

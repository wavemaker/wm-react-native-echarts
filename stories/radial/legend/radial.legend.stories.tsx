import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Radial/Legend' };
type Story = StoryObj<typeof meta>;

const data = [
  { label: 'Chrome', value: 92 },
  { label: 'Firefox', value: 78 },
  { label: 'Safari', value: 65 },
  { label: 'Brave', value: 52 },
  { label: 'Edge', value: 38 },
];

/** All rings without the ring legend (`showLegend={false}`). */
export const HideLegend: Story = {
  args: {
    data,
    showLegend: false,
  },
};

/** Legend at bottom (explicit). */
export const LegendBottom: Story = {
  args: {
    data,
    legendPosition: 'bottom',
  },
};

/** Legend above. */
export const LegendTop: Story = {
  args: {
    data,
    legendPosition: 'top',
  },
};

/** Legend on the left. */
export const LegendLeft: Story = {
  args: {
    data,
    legendPosition: 'left',
  },
};

/** Legend on the right. */
export const LegendRight: Story = {
  args: {
    data,
    legendPosition: 'right',
  },
};

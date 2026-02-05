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

/** Default: legend at bottom. */
export const Default: Story = {
  args: {
    data,
  },
};

/** Without legend. */
export const HideLegend: Story = {
  args: {
    data,
    showLegend: false,
  },
};

/** Legend above. */
export const LegendTop: Story = {
  args: {
    data,
    showLegend: true,
    legendPosition: 'top',
  },
};

/** Legend on the left. */
export const LegendLeft: Story = {
  args: {
    data,
    showLegend: true,
    legendPosition: 'left',
  },
};

/** Legend on the right. */
export const LegendRight: Story = {
  args: {
    data,
    showLegend: true,
    legendPosition: 'right',
  },
};

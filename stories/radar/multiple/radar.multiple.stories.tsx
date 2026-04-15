import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Radar/Multiple' };
type Story = StoryObj<typeof meta>;

const indicators = [
  { name: 'Sales', max: 100 },
  { name: 'Marketing', max: 100 },
  { name: 'Development', max: 100 },
  { name: 'Support', max: 100 },
  { name: 'Admin', max: 100 },
];
const multipleSeries = [
  { name: 'Series A', value: [80, 60, 75, 55, 70] },
  { name: 'Series B', value: [50, 70, 65, 80, 60] },
  { name: 'Series C', value: [70, 50, 85, 45, 75] },
];
const colors = ['#F2A65A', '#6F8F72', '#132440'];

/** Multiple series without legend. */
export const Default: Story = {
  args: {
    indicators,
    data: multipleSeries,
    colors,
  },
};

/** Multiple series with legend. */
export const WithLegend: Story = {
  args: {
    indicators,
    data: multipleSeries,
    showLegend: true,
    colors,
  },
};

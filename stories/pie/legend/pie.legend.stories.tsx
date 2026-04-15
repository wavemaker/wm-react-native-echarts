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

/** Pie with legend below. */
export const WithLegend: Story = {
  args: {
    data,
    showLegend: true,
  },
};

/** Pie with legend, custom colors. */
export const LegendWithColors: Story = {
  args: {
    data,
    showLegend: true,
    colors: ['#F2A65A', '#6F8F72', '#132440', '#7B68EE', '#50C878'],
  },
};

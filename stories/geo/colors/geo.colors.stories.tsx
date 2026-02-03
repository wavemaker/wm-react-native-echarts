import type { StoryObj } from '@storybook/react';
import type { ChartTheme } from '@components/chart/chart-theme.context';
import meta from '../meta';

export default {
  ...meta,
  title: 'Charts/Geo/Colors',
};
type Story = StoryObj<typeof meta>;


const data = [
  { name: 'United States', value: 500 },
  { name: 'China', value: 600 },
  { name: 'Japan', value: 300 },
  { name: 'Germany', value: 250 },
  { name: 'India', value: 400 },
  { name: 'Brazil', value: 220 },
];

const customColors = ['#F2A65A', '#6F8F72'];

/** Default theme colors for visual map. */
export const Default: Story = {
  args: { data },
};

/** Custom colors for the color scale (visual map). */
export const CustomColors: Story = {
  args: {
    data,
    colors: customColors,
  },
};

/** Theme override for series/legend styling. */
export const ThemeOverride: Story = {
  args: {
    data,
    theme: {
      series: [{ color: '#3b82f6' }, { color: '#93c5fd' }],
      legend: { textColor: '#1e293b', fontSize: 12 },
    } as Partial<ChartTheme>,
  },
};

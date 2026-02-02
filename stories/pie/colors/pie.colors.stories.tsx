import type { StoryObj } from '@storybook/react';
import type { ChartTheme } from '@components/chart/chart-theme.context';
import meta from '../meta';

export default { ...meta, title: 'Charts/Pie/Colors' };
type Story = StoryObj<typeof meta>;

const data = [
  { name: 'Desktop', value: 275 },
  { name: 'Mobile', value: 200 },
  { name: 'Tablet', value: 187 },
  { name: 'Other', value: 90 },
];

const colors = ['#F2A65A', '#6F8F72', '#132440', '#7B68EE'];

/** Default theme colors. */
export const Default: Story = {
  args: { data },
};

/** Custom series colors via colors prop. */
export const CustomColors: Story = {
  args: {
    data,
    colors,
  },
};

/** Theme override for legend and tooltip. */
export const ThemeOverride: Story = {
  args: {
    data,
    showLegend: true,
    theme: {
      series: colors.map(c => ({ color: c })),
      legend: {
        textColor: '#132440',
        fontSize: 14,
        backgroundColor: '#f0f0f0',
      },
    } as Partial<ChartTheme>,
  },
};

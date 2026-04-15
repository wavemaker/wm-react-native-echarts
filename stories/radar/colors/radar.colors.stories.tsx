import type { StoryObj } from '@storybook/react';
import type { ChartTheme } from '@components/chart/chart-theme.context';
import meta from '../meta';

export default {
  ...meta,
  title: 'Charts/Radar/Colors',
};
type Story = StoryObj<typeof meta>;

const indicators = [
  { name: 'A', max: 100 },
  { name: 'B', max: 100 },
  { name: 'C', max: 100 },
  { name: 'D', max: 100 },
];
const data = [40, 82, 91, 74];
const colors = ['#F2A65A', '#6F8F72', '#132440'];

/** Default theme colors (single series). */
export const Default: Story = {
  args: {
    indicators,
    data,
  },
};

/** Custom series color. */
export const CustomColor: Story = {
  args: {
    indicators,
    data,
    colors: colors,
  },
};

/** Multiple series with custom colors and legend. */
export const MultipleSeriesColors: Story = {
  args: {
    indicators,
    data: [
      { name: 'Series A', value: [40, 82, 91, 74] },
      { name: 'Series B', value: [20, 62, 71, 54] },
      { name: 'Series C', value: [60, 42, 51, 94] },
    ],
    colors: colors,
    showLegend: true,
  },
};

/** Theme override: axis and legend. */
export const ThemeOverride: Story = {
  args: {
    indicators,
    data,
    theme: {
      series: [{ color: colors[0] }],
      axis: {
        r: { tickLabelColor: colors[2], lineColor: colors[1] },
      },
    } as Partial<ChartTheme>,
  },
};

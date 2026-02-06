import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Bar/Examples' };
type Story = StoryObj<typeof meta>;

/** Bar chart with axes labels matching axes-area.png.
 * Features: Y-axis 0-600, X-axis months (Jan-Jun), grid lines, axis labels. */
export const AxesBar: Story = {
  args: {
    data: [200, 350, 500, 300, 450, 600],
    xAxisTickLabelFormatter: (value) => {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      const i = Number(value);
      return labels[i] ?? String(value);
    },
    yAxisTicks: [0, 100, 200, 300, 400, 500, 600],
    xAxisLabel: 'Month',
    yAxisLabel: 'Value',
    showXAxisSplitLines: false,
    showYAxisSplitLines: true,
    showYAxisTicks: false,
  },
};

/** Bar chart without axes, matching default-area.png.
 * Features: no axes, no grid lines. */
export const DefaultBar: Story = {
  args: {
    data: [200, 350, 500, 300, 450, 600],
    showXAxisSplitLines: false,
    showYAxisSplitLines: false,
    showYAxis: false,
    showXAxis: false,
    showYAxisTicks: false,
  },
};

/**
 * Bar chart with multiple series.
 */
export const MultipleSeries: Story = {
  args: {
    data: [
      { name: 'Series A', data: [200, 350, 500, 300, 450, 600] },
      { name: 'Series B', data: [100, 250, 600, 280, 350, 500] },
      { name: 'Series C', data: [150, 400, 200, 250, 400, 550] },
    ],
    showXAxisSplitLines: false,
    showYAxisSplitLines: false,
    showLegend: true,
  },
};

/**
 * Bar chart showing GDP of top economies over the last decade (2014-2024).
 * Features: shows GDP growth trends.
 */
export const GDPContribution: Story = {
  args: {
    data: [
      { name: 'United States', data: [17.4, 18.1, 18.7, 19.5, 20.5, 21.4, 21.0, 23.3, 25.5, 26.9, 27.9] },
      { name: 'China', data: [10.4, 11.0, 11.2, 12.2, 13.1, 14.3, 15.4, 17.7, 18.0, 17.9, 18.5] },
      { name: 'Japan', data: [4.6, 4.1, 4.9, 4.9, 4.9, 4.9, 4.9, 4.9, 4.9, 4.2, 4.2] },
      { name: 'Germany', data: [3.9, 3.4, 3.5, 3.7, 3.8, 3.8, 3.8, 4.1, 4.3, 4.1, 4.3] },
      { name: 'India', data: [2.0, 2.1, 2.3, 2.6, 2.7, 2.9, 3.2, 3.4, 3.7, 3.7, 4.1] },
    ],
    xAxisTickLabelFormatter: (value) => {
      const years = ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];
      const i = Number(value);
      return years[i] ?? String(value);
    },
    showXAxisSplitLines: false,
    showYAxisSplitLines: true,
    xAxisLabel: 'Year',
    yAxisLabel: 'GDP (Trillions USD)',
    yAxisTicks: [0, 5, 10, 15, 20, 25, 30],
    showLegend: true,
  },
};

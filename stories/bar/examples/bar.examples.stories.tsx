import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Examples/Bar' };
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

/** Horizontal bar chart matching horizontal-bar.png.
 * Features: bars extend left to right, months (Jan–Jun) on Y-axis, value axis 0–350 with vertical grid, light blue bars. */
export const HorizontalBar: Story = {
  args: {
    data: [190, 300, 240, 70, 210, 210],
    xAxisTickLabelFormatter: (value) => {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      const i = Number(value);
      return labels[i] ?? String(value);
    },
    yAxisTicks: [0, 50, 100, 150, 200, 250, 300, 350],
    showXAxisSplitLines: false,
    showXAxisTicks: false,
    showYAxisSplitLines: true,
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
      { name: 'United States', data: [21.0, 23.3, 25.5, 26.9, 27.9] },
      { name: 'China', data: [15.4, 17.7, 18.0, 17.9, 18.5] },
      { name: 'Japan', data: [ 4.9, 4.9, 4.9, 4.2, 4.2] },
      { name: 'Germany', data: [3.8, 4.1, 4.3, 4.1, 4.3] },
      { name: 'India', data: [3.2, 3.4, 3.7, 3.7, 4.1] },
    ],
    xAxisTickLabelFormatter: (value) => {
      const years = ['2020', '2021', '2022', '2023', '2024'];
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

const browserLabels = ['Chrome', 'Safari', 'Firefox', 'Edge', 'Other'];

/** Bar chart with one bar highlighted (active), matching active-bar.png.
 * Features: single series, light blue bars, Firefox (index 2) active with darker blue and dashed outline, horizontal grid. */
export const ActiveBar: Story = {
  args: {
    data: [72, 28, 92, 82, 32],
    xAxisTickLabelFormatter: (value) => {
      const i = Number(value);
      return browserLabels[i] ?? String(value);
    },
    activeIndex: 2,
    activeColor: '#FDDA0D',
    showXAxisSplitLines: false,
    showYAxisSplitLines: true,
    showYAxisTicks: false,
  },
};

/** Horizontal bar chart with custom labels: month name inside each bar (white), value to the right, matching custom-label-bar.png. */
export const CustomLabelBar: Story = {
  args: {
    data: [
      ['January', 100],
      ['February', 150],
      ['March', 120],
      ['April', 40],
      ['May', 110],
      ['June', 120],
    ] as [string, number][],
    barInsideLabelFormatter: (_value, _index, category) => category ?? '',
    barOutsideLabelFormatter: (value) => String(value),
    cornerRadius: [4, 4, 4, 4],
    showXAxis: false,
    showYAxis: false,
    showXAxisSplitLines: false,
    showYAxisSplitLines: false,
    showXAxisTicks: false,
    showYAxisTicks: false,
  },
};

const mixedBarColors = ['#f97316', '#eab308', '#22c55e', '#06b6d4', '#8b5cf6'];

/** Horizontal bar chart with a different shade of blue per bar, matching mixed-bar.png.
 * Features: Chrome (top, longest) to Other (bottom, shortest), light-to-dark blue gradient, no axes or grid, rounded bar ends. */
export const MixedBar: Story = {
  args: {
    data: [50, 100, 180, 220, 300],
    xAxisTickLabelFormatter: (value) => {
      const labels = ['Other', 'Edge', 'Safari', 'Firefox', 'Chrome'];
      const i = Number(value);
      return labels[i] ?? String(value);
    },
    itemStyle: (_value, index) => ({ color: mixedBarColors[index] ?? undefined }),
    showXAxis: false,
    showYAxis: false,
    showXAxisSplitLines: false,
    showYAxisSplitLines: false,
    showXAxisTicks: true,
    cornerRadius: [4, 4, 4, 4],
  },
};

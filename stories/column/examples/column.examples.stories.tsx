import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Examples/Column' };
type Story = StoryObj<typeof meta>;


/** Default column chart matching default-bar.png.
 * Features: vertical bars, Jan–Jun x-axis labels, horizontal grid, no y-axis labels, light blue bars. */
export const StandardColumn: Story = {
  args: {
    data: [200, 500, 450, 100, 250, 300],
    xAxisTickLabelFormatter: (value) => {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      const i = Number(value);
      return labels[i] ?? String(value);
    },
    showYAxis: false,
    showXAxisSplitLines: false,
    showYAxisSplitLines: true,
    showYAxisTicks: false,
  },
};

/** Column chart with value labels on top of each bar, matching label-bar.png.
 * Features: six light blue columns, numerical label above each (186, 305, 237, 73, 209, 214), Jan–Jun x-axis, horizontal grid. */
export const LabelColumn: Story = {
  args: {
    data: [186, 305, 237, 73, 209, 214],
    xAxisTickLabelFormatter: (value) => {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      const i = Number(value);
      return labels[i] ?? String(value);
    },
    showYAxis: false,
    barOutsideLabelFormatter: (value) => String(value),
    showXAxisSplitLines: false,
    showYAxisSplitLines: true,
    showYAxisTicks: false,
  },
};

/**
 * Column chart with multiple series.
 */
export const MultipleSeries: Story = {
  args: {
    data: [
      { name: 'Baby Boomers', data: [200, 350, 500, 300, 450, 600] },
      { name: 'Gen X', data: [100, 250, 600, 280, 350, 500] },
    ],
    showYAxis: false,
    showXAxis: false,
    xAxisTickLabelFormatter: (value) => {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      const i = Number(value);
      return labels[i] ?? String(value);
    },
    cornerRadius: [4, 4, 4, 4],
    showXAxisSplitLines: false,
    showYAxisSplitLines: false,
  },
};


const browserLabels = ['Chrome', 'Safari', 'Firefox', 'Edge', 'Other'];

/** Column chart with one bar highlighted (active), matching active-bar.png.
 * Features: single series, light blue bars, Firefox (index 2) active with darker blue and dashed outline, horizontal grid. */
export const ActiveColumn: Story = {
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
    showYAxis: false,
  },
};

const interactiveDateLabels = [
  'Apr 1', 'Apr 8', 'Apr 15', 'Apr 22', 'Apr 29',
  'May 6', 'May 13', 'May 20', 'May 27',
  'Jun 3', 'Jun 10',
];

/** Interactive column chart matching interactive-bar.png.
 * Features: 11 vertical blue bars, date labels on x-axis (Apr–Jun), horizontal grid, tooltip/highlighter on interaction. */
export const InteractiveColumn: Story = {
  args: {
    data: [85, 120, 95, 140, 110, 160, 130, 175, 150, 125, 90],
    xAxisTickLabelFormatter: (value) => {
      const i = Number(value);
      return interactiveDateLabels[i] ?? String(value);
    },
    cornerRadius: 0,
    showYAxis: false,
    showXAxisSplitLines: false,
    showYAxisSplitLines: true,
    showYAxisTicks: false,
    showHighlighter: true,
  },
};

const monthLabels = ['January', 'February', 'March', 'April', 'May', 'June'];

/** Column chart with positive and negative values matching negative-bar.png.
 * Features: zero baseline, bars up (positive) and down (negative), light blue for positive and darker blue for negative, Jan–Jun labels, horizontal grid. */
export const NegativeColumn: Story = {
  args: {
    data: [120, 200, -80, 150, -50, 180],
    itemStyle: (value) => ({
      color: value >= 0 ? '#4F7942' : '#F54927',
    }),
    colors: ['#4F7942'],
    xAxisTickLabelFormatter: () => '',
    yAxisTickLabelFormatter: (value) => value == 0 ? '0' : '',
    barOutsideLabelFormatter: (value, index) => monthLabels[index] ?? String(value),
    barOutsideLabelPosition: (value, index) => value < 0 ? 'start' : 'end',
    cornerRadius: [4, 4, 4, 4],
    showXAxis: true,
    showXAxisTicks: false,
    showYAxis: false,
    showXAxisSplitLines: false,
    showYAxisSplitLines: true,
    showYAxisTicks: false,
  },
};

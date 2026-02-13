import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Area/Examples' };
type Story = StoryObj<typeof meta>;

/** Area chart with axes labels matching axes-area.png.
 * Features: smooth curve, Y-axis 0-600, X-axis months (Jan-Jun), grid lines, axis labels. */
export const AxesArea: Story = {
  args: {
    data: [200, 350, 500, 300, 450, 600],
    xAxisTickLabelFormatter: (value) => {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      const i = Number(value);
      return labels[i] ?? String(value);
    },
    type: 'smooth',
    yAxisTicks: [0, 100, 200, 300, 400, 500, 600],
    xAxisLabel: 'Month',
    yAxisLabel: 'Value',
    showXAxisSplitLines: false,
    showYAxisSplitLines: true,
    symbol: "circle",
    showYAxisTicks: false,
    areaFill: "transparent"
  },
};

/** Area chart without axes, matching default-area.png.
 * Features: smooth curve, no axes, no grid lines. */
export const AreaWithoutAxes: Story = {
  args: {
    data: [200, 350, 500, 300, 450, 600],
    type: 'smooth',
    showXAxisSplitLines: false,
    showYAxisSplitLines: false,
    showYAxis: false,
    xAxisTickLabelFormatter: (value, index) => {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      const i = Number(value);
      return labels[i] ?? String(value);
    },
    symbol: "circle",
    showYAxisTicks: false,
    areaFill: "transparent"
  },
};

const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
const gradientXFormatter = (value: string | number) => {
  const i = Number(value);
  return monthLabels[i] ?? String(value);
};

/** Two-series area chart with gradient fills, matching gradient-area.png.
 * Features: smooth curves, two layered blue series, gradient area fill, monthly x-axis, horizontal grid. */
export const GradientArea: Story = {
  args: {
    data: [
      { name: 'Series 1', data: [150, 280, 400, 250, 380, 500] },
      { name: 'Series 2', data: [200, 350, 500, 300, 450, 600] },
    ],
    type: 'smooth',
    areaFill: 'gradient',
    xAxisTickLabelFormatter: gradientXFormatter,
    showXAxisSplitLines: false,
    showYAxisSplitLines: true,
    showYAxis: false,
  },
};

/** Two-series area chart with circular data point markers, matching icons-area.png.
 * Features: smooth curves, two blue series, gradient fill, circle symbols at each point, monthly x-axis, horizontal grid. */
export const IconsArea: Story = {
  args: {
    data: [
      { name: 'Series 1', data: [150, 280, 400, 250, 380, 500] },
      { name: 'Series 2', data: [200, 350, 500, 300, 450, 600] },
    ],
    type: 'smooth',
    areaFill: 'gradient',
    symbol: 'circle',
    xAxisTickLabelFormatter: gradientXFormatter,
    showXAxisSplitLines: false,
    showYAxisSplitLines: true,
    showYAxis: false,
  },
};



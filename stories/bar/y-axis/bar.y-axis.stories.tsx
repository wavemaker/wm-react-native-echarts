import type { StoryObj } from '@storybook/react';
import meta from '../meta';

export default { ...meta, title: 'Charts/Bar/Y-Axis' };
type Story = StoryObj<typeof meta>;

const data = [40, 82, 91, 74, 90, 88];

/** Y-axis scale computed from the dataset. */
export const Default: Story = {
  args: { data },
};

/** showYAxis: false — Y-axis and its labels hidden. */
export const HideAxis: Story = {
  args: { data, showYAxis: false },
};

/** showYAxisTicks: false — Y-axis visible but tick marks hidden. */
export const NoTicks: Story = {
  args: { data, showYAxisTicks: false },
};

/** showYAxisSplitLines: false — horizontal grid lines hidden. */
export const NoSplitLines: Story = {
  args: { data, showYAxisSplitLines: false },
};

/** yAxisTickLabelFormatter: format Y-axis tick labels (e.g. add K for thousands). */
export const LabelFormatter: Story = {
  args: {
    data,
    yAxisTickLabelFormatter: (value) => {
      const n = Number(value);
      return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);
    },
  },
};

/** yAxisLabel — Y-axis label (horizontal bar: category axis). */
export const YAxisLabel: Story = {
  args: {
    data,
    yAxisLabel: 'Category',
  },
};

/** minX and maxX — fixed bounds on the **value** axis (horizontal bar: bar length along X; non-zero min). */
export const FixedMinMax: Story = {
  args: {
    data,
    minX: 30,
    maxX: 120,
  },
};

/** minX, maxX, and intervalX — explicit value scale and tick step along X. */
export const FixedInterval: Story = {
  args: {
    data,
    minX: 0,
    maxX: 100,
    intervalX: 10,
  },
};

/** minX — value-axis floor along X; maximum and tick step still chosen automatically. */
export const ValueAxisFloor: Story = {
  args: {
    data,
    minX: 20,
  },
};

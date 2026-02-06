/**
 * ArgTypes for Column chart (common + cartesian + column).
 * common -> cartesian -> column
 */
import { commonChartArgTypes } from '../args/common';
import { cartesianChartArgTypes } from '../args/cartesian';

const columnOnlyArgTypes = {
  data: {
    control: 'object',
    description:
      'Column chart data. Single series (number[]), with labels [string|number, number][], or multiple named series.',
  },
  boundaryGap: {
    control: 'boolean',
    description: 'Whether to leave gaps at the start and end of the axis. Default: true',
  },
  cornerRadius: {
    control: 'object',
    description:
      'Column corner radius: a number (all corners) or array of 4 values [topLeft, topRight, bottomRight, bottomLeft]. Default: [4, 4, 0, 0]',
  },
  horizontal: {
    control: 'boolean',
    description:
      'When true, bars are horizontal (categories on Y-axis). Bar chart is the horizontal orientation of column chart. Default: false',
  },
  stack: {
    control: 'text',
    description: 'Stack ID for stacking multiple series. When set, columns stack on top of each other.',
  },
  stackNormalize: {
    control: 'boolean',
    description: 'Whether to normalize stacked values to show percentages (0-100%). Default: false',
  },
} as const;

export const columnChartArgTypes = {
  ...commonChartArgTypes,
  ...cartesianChartArgTypes,
  ...columnOnlyArgTypes,
} as const;

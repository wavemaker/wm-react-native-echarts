/**
 * ArgTypes for Bar chart (common + cartesian + bar).
 * common -> cartesian -> bar
 */
import { commonChartArgTypes } from '../args/common';
import { cartesianChartArgTypes } from '../args/cartesian';

const barOnlyArgTypes = {
  data: {
    control: 'object',
    description:
      'Bar chart data. Single series (number[]), with labels [string|number, number][], or multiple named series.',
  },
  boundaryGap: {
    control: 'boolean',
    description: 'Whether to leave gaps at the start and end of the axis. Default: true',
  },
  cornerRadius: {
    control: 'object',
    description:
      'Bar corner radius: a number (all corners) or array of 4 values [topLeft, topRight, bottomRight, bottomLeft]. Default: [4, 4, 0, 0]',
  },
  horizontal: {
    control: 'boolean',
    description:
      'When true, bars are horizontal (categories on Y-axis). Corner radius applies to the right edge. Default: false',
  },
  stack: {
    control: 'text',
    description: 'Stack ID for stacking multiple series. When set, bars stack on top of each other.',
  },
  stackNormalize: {
    control: 'boolean',
    description: 'Whether to normalize stacked values to show percentages (0-100%). Default: false',
  },
} as const;

export const barChartArgTypes = {
  ...commonChartArgTypes,
  ...cartesianChartArgTypes,
  ...barOnlyArgTypes,
} as const;

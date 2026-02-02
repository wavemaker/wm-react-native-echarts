/**
 * ArgTypes for Line chart (common + cartesian + line).
 * common -> cartesian -> area -> line
 */
import { commonChartArgTypes } from '../args/common';
import { cartesianChartArgTypes } from '../args/cartesian';

const lineOnlyArgTypes = {
  type: {
    control: 'select',
    options: ['default', 'smooth', 'step'],
    description: 'Curve type: default (linear), smooth (Bezier), or step.',
  },
  step: {
    control: 'select',
    options: [false, 'start', 'middle', 'end'],
    description: 'Step mode when type="step". Default: start.',
  },
  stack: {
    control: 'text',
    description: 'Stack ID for stacking multiple series.',
  },
  stackNormalize: {
    control: 'boolean',
    description: 'Whether to normalize stacked values to show percentages (0-100%). Default: false',
  },
  symbol: {
    control: 'select',
    options: ['none', 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'],
    description: 'Symbol type for data points. Default: none',
  },
  symbolSize: {
    control: 'number',
    description: 'Size of the symbol. Can be a number, array [width, height], or function. Default: 8',
  },
} as const;

export const lineChartArgTypes = {
  ...commonChartArgTypes,
  ...cartesianChartArgTypes,
  ...lineOnlyArgTypes,
} as const;

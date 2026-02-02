/**
 * ArgTypes for Area chart (common + cartesian + area).
 * common -> cartesian -> area
 */
import { commonChartArgTypes } from '../args/common';
import { cartesianChartArgTypes } from '../args/cartesian';

const areaOnlyArgTypes = {
  type: {
    control: 'select',
    options: ['default', 'smooth', 'step'],
    description: 'Curve type: default (linear), smooth (Bezier), or step.',
  },
  step: {
    control: 'select',
    options: ['start', 'middle', 'end'],
    description: 'Step mode when type="step". Default: start.',
  },
  stack: {
    control: 'text',
    description: 'Stack ID for stacking multiple series. When set, series are stacked on top of each other.',
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
  areaOpacity: {
    control: { type: 'range', min: 0, max: 1, step: 0.1 },
    description: 'Opacity of the filled area (0-1). Default: 0.6',
  },
  areaFill: {
    control: 'select',
    options: ['gradient', 'transparent', 'solid'],
    description: 'Fill style for the area: gradient (default), transparent, or solid.',
  },
} as const;

export const areaChartArgTypes = {
  ...commonChartArgTypes,
  ...cartesianChartArgTypes,
  ...areaOnlyArgTypes,
} as const;

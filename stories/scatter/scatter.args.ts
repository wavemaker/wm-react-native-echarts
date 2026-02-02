/**
 * ArgTypes for Scatter chart (common + cartesian + scatter).
 * common -> cartesian -> scatter
 */
import { commonChartArgTypes } from '../args/common';
import { cartesianChartArgTypes } from '../args/cartesian';

const scatterOnlyArgTypes = {
  data: {
    control: 'object',
    description: 'Scatter data: array of [x, y] pairs, or multiple series with { name, data: number[][] }.',
  },
  symbol: {
    control: 'select',
    options: ['none', 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'],
    description: 'Symbol type for data points. Default: circle',
  },
  symbolSize: {
    control: 'number',
    description: 'Size of the symbol. Can be a number, array [width, height], or function. Default: 8',
  },
  showRegressionLine: {
    control: 'boolean',
    description: 'When true, draws a linear regression line per scatter series. Default: false',
  },
} as const;

export const scatterChartArgTypes = {
  ...commonChartArgTypes,
  ...cartesianChartArgTypes,
  ...scatterOnlyArgTypes,
} as const;

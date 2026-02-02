/**
 * ArgTypes for Candlestick chart (common + cartesian + candlestick).
 */
import { commonChartArgTypes } from '../args/common';
import { cartesianChartArgTypes } from '../args/cartesian';

const candlestickOnlyArgTypes = {
  data: {
    control: 'object',
    description: 'Candlestick data: array of [open, close, low, high] per period.',
  },
  xAxisData: {
    control: 'object',
    description: 'X-axis category labels. If omitted, indices are used.',
  },
  volumeData: {
    control: 'object',
    description: 'Optional volume data (bar series below candlestick).',
  },
  ma5: {
    control: 'object',
    description: 'Optional MA5 (5-period moving average) line data.',
  },
  ma10: {
    control: 'object',
    description: 'Optional MA10 (10-period moving average) line data.',
  },
  ma20: {
    control: 'object',
    description: 'Optional MA20 (20-period moving average) line data.',
  },
} as const;

export const candlestickChartArgTypes = {
  ...commonChartArgTypes,
  ...cartesianChartArgTypes,
  ...candlestickOnlyArgTypes,
} as const;

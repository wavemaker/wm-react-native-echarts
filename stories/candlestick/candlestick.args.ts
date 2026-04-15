/**
 * ArgTypes for Candlestick chart (common + cartesian + candlestick).
 * colors omitted; use positiveColor and negativeColor.
 */
import { commonChartArgTypes } from '../args/common';
import { cartesianChartArgTypes } from '../args/cartesian';

const { ...commonRest } = commonChartArgTypes;

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
  positiveColor: {
    control: 'color',
    description: 'Color for positive (up) candles.',
  },
  negativeColor: {
    control: 'color',
    description: 'Color for negative (down) candles.',
  },
} as const;

export const candlestickChartArgTypes = {
  ...commonRest,
  ...cartesianChartArgTypes,
  ...candlestickOnlyArgTypes,
} as const;

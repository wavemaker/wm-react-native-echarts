/**
 * ArgTypes for Bubble chart (common + cartesian + bubble).
 * common -> cartesian -> scatter -> bubble
 */
import { commonChartArgTypes } from '../args/common';
import { cartesianChartArgTypes } from '../args/cartesian';

const bubbleOnlyArgTypes = {
  data: {
    control: 'object',
    description: 'Bubble data: array of [x, y, size] per series. Size drives bubble radius.',
  },
  symbol: {
    control: 'select',
    options: ['none', 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'],
    description: 'Symbol shape for bubbles. Default: circle',
  },
  sizeRange: {
    control: 'object',
    description: 'Pixel size range [min, max] for scaling the third data value to bubble radius. Default: [8, 50]',
  },
} as const;

export const bubbleChartArgTypes = {
  ...commonChartArgTypes,
  ...cartesianChartArgTypes,
  ...bubbleOnlyArgTypes,
} as const;

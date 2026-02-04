/**
 * ArgTypes for Radial chart (common + radial-specific).
 */
import { commonChartArgTypes } from '../args/common';

const radialOnlyArgTypes = {
  data: {
    control: 'object',
    description:
      'One item per concentric ring. value = fill percentage (0–100). Example: [{ value: 90 }, { value: 80 }, { value: 50 }, { value: 40 }, { value: 25 }]',
  },
  innerRadius: {
    control: 'text',
    description: 'Inner radius of the chart (center hole), e.g. "20%".',
  },
  backgroundColor: {
    control: 'color',
    description: 'Color for the unfilled portion of each ring.',
  },
  centerText: {
    control: 'text',
    description: 'Optional center text (e.g. main value or title).',
  },
  centerSubtext: {
    control: 'text',
    description: 'Optional center subtext below center text (e.g. label or unit).',
  },
  showLabel: {
    control: 'boolean',
    description: 'Whether to show segment labels on the rings.',
  },
  startAngle: {
    control: { type: 'number', min: 0, max: 360, step: 15 },
    description: 'Start angle of the fill (degrees). 0 = right, 90 = top.',
  },
  clockwise: {
    control: 'boolean',
    description: 'Direction of the fill and animation: true = clockwise, false = counter-clockwise.',
  },
  ringGap: {
    control: 'text',
    description: 'Gap between concentric rings (e.g. "2%" or number).',
  },
} as const;

export const radialChartArgTypes = {
  ...commonChartArgTypes,
  ...radialOnlyArgTypes,
} as const;

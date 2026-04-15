/**
 * ArgTypes for common chart props (shared by all charts).
 * common -> cartesian -> area | bar | scatter
 */
export const commonChartArgTypes = {
  data: {
    control: 'object',
    description:
      'Chart data. Can be single series (number[]), multiple series without names, or multiple series with names.',
  },
  width: {
    control: 'number',
    description: 'Width of the chart in pixels. Default: 220',
  },
  height: {
    control: 'number',
    description: 'Height of the chart in pixels. Default: 350',
  },
  theme: {
    control: 'object',
    description: 'Partial theme override for customizing chart appearance.',
  },
  colors: {
    control: 'object',
    description: 'Colors for the chart series. Overrides theme colors.',
  },
} as const;

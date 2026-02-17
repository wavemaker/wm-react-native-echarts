/**
 * ArgTypes for Gauge charts (common gauge props).
 * Used by Radial, SemiCircular, Labeled, and Animated gauge charts.
 */
export const gaugeChartArgTypes = {
  value: {
    control: 'number',
    description: 'Current value to display on the gauge.',
  },
  min: {
    control: 'number',
    description: 'Minimum value of the gauge scale. Default: 0',
  },
  max: {
    control: 'number',
    description: 'Maximum value of the gauge scale. Default: 100',
  },
  width: {
    control: 'number',
    description: 'Width of the chart in pixels.',
  },
  height: {
    control: 'number',
    description: 'Height of the chart in pixels.',
  },
  theme: {
    control: 'object',
    description: 'Partial theme override for customizing chart appearance.',
  },
  colors: {
    control: 'object',
    description: 'Colors for the chart. Overrides theme colors.',
  },
} as const;

/** ArgTypes for SemiCircularGaugeChart (gauge.args + semi-circular specific). */
export const semiCircularGaugeArgTypes = {
  ...gaugeChartArgTypes,
  axisColors: {
    control: 'object',
    description:
      'Array of colors for axis segments. Example: [\'#e74c3c\', \'#3498db\', \'#2ecc71\']',
  },
  axisColorLengths: {
    control: 'object',
    description:
      'Endpoint values for each color segment. Length should match axisColors.',
  },
  axisBgColor: {
    control: 'color',
    description: 'Background color for the axis line. Default: transparent',
  },
  axisWidth: {
    control: 'number',
    description: 'Width of the axis line in pixels. Default: 30',
  },
  tickColor: {
    control: 'color',
    description: 'Color for tick marks and split lines.',
  },
} as const;

/** ArgTypes for LabeledGaugeChart (gauge.args + labeled specific). */
export const labeledGaugeArgTypes = {
  ...gaugeChartArgTypes,
  title: {
    control: 'text',
    description: 'Title text displayed on the gauge. Default: \'Metric\'',
  },
  detailText: {
    control: 'text',
    description: 'Detail text showing the value. Default: \'30%\'',
  },
} as const;

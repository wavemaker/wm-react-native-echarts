/**
 * ArgTypes for the unified GaugeChart (variant + all props).
 */
export const commonGaugeChartArgTypes = {
  variant: {
    control: 'select',
    options: ['radial', 'speedometer', 'simple', 'digital'],
    description: 'Gauge style: radial, speedometer, simple, or digital.',
  },
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
  axisColors: {
    control: 'object',
    description: 'Semi-circular: segment colors. E.g. [\'#e74c3c\', \'#3498db\', \'#2ecc71\']',
  },
  axisColorLengths: {
    control: 'object',
    description: 'Semi-circular: endpoint values for each segment.',
  },
  axisBgColor: {
    control: 'color',
    description: 'Semi-circular: axis line background color.',
  },
  axisWidth: {
    control: 'number',
    description: 'Semi-circular: axis line width in pixels.',
  },
  tickColor: {
    control: 'color',
    description: 'Semi-circular: tick/split line color.',
  },
  title: {
    control: 'text',
    description: 'Labeled: title text on the gauge.',
  },
  detailText: {
    control: 'text',
    description: 'Labeled: detail text (e.g. "30%").',
  },
} as const;

/**
 * ArgTypes for Gauge charts (common gauge props from BaseGaugeProps).
 * Used by Radial, Speedometer, Simple, and Digital gauge charts.
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
  axisBgColor: {
    control: 'color',
    description: 'Background color for the axis/track.',
  },
  axisWidth: {
    control: 'number',
    description: 'Width of the axis line in pixels.',
  },
  tickColor: {
    control: 'color',
    description: 'Color for tick marks and split lines.',
  },
} as const;

/** Common default args shared by all gauge stories (BaseGaugeProps). */
export const commonGaugeArgs = {
  value: 50,
  min: 0,
  max: 100,
  width: 320,
  height: 320,
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

/** ArgTypes for DigitalGauge (gauge.args + digital specific). */
export const digitalGaugeArgTypes = {
  ...gaugeChartArgTypes,
  showInnerArc: {
    control: 'boolean',
    description: 'Whether to show the inner arc. Default: false',
  },
  animationDuration: {
    control: 'number',
    description: 'Animation duration in milliseconds. Default: 1000',
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

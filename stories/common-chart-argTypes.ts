/**
 * Shared argTypes for chart components (Area, Line, etc.).
 * Common props use the same descriptions and default wording.
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
  boundaryGap: {
    control: 'boolean',
    description: 'Whether to leave gaps at the start and end of the axis. Default: false',
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
  grid: {
    control: 'object',
    description: 'Grid positioning configuration. Values can be percentages (strings) or pixel values (numbers).',
  },
  showLegend: {
    control: 'boolean',
    description: 'Whether to display a legend for named series. Default: false',
  },
  xAxisTickLabelFormatter: {
    control: false,
    description: 'Formatter for X-axis tick labels. (value, index?) => string',
  },
  yAxisTickLabelFormatter: {
    control: false,
    description: 'Formatter for Y-axis tick labels. (value, index?) => string',
  },
} as const;

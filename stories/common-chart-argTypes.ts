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
  showXAxis: {
    control: 'boolean',
    description: 'Whether to show the X-axis. Default: true',
  },
  showYAxis: {
    control: 'boolean',
    description: 'Whether to show the Y-axis. Default: true',
  },
  showXAxisTicks: {
    control: 'boolean',
    description: 'Whether to show X-axis tick marks. Default: true',
  },
  showYAxisTicks: {
    control: 'boolean',
    description: 'Whether to show Y-axis tick marks. Default: true',
  },
  showXAxisSplitLines: {
    control: 'boolean',
    description: 'Whether to show vertical grid lines. Default: true',
  },
  showYAxisSplitLines: {
    control: 'boolean',
    description: 'Whether to show horizontal grid lines. Default: true',
  },
  showHighlighter: {
    control: 'boolean',
    description:
      'Whether to show the highlighter (emphasis) when interacting with the chart. Default: true',
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

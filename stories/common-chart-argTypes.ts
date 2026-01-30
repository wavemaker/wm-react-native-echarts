/**
 * Shared argTypes for chart components (Area, Line, etc.).
 * Common props use the same descriptions and default wording.
 */
export const commonChartArgTypes = {
  xAxisData: {
    control: 'object',
    description: 'X-axis labels. Can be a string array or object array with label and value.',
  },
  data: {
    control: 'object',
    description:
      'Chart data. Can be single series (number[]), multiple series without names, or multiple series with names.',
  },
  yAxisData: {
    control: 'object',
    description: 'Y-axis labels (optional). When provided, enables custom Y-axis labels.',
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
} as const;

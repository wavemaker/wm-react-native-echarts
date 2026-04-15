/**
 * ArgTypes for Cartesian chart props (axes, grid, legend, highlighter).
 * common -> cartesian -> area | bar | scatter
 */
export const cartesianChartArgTypes = {
  xAxisTicks: {
    control: 'object',
    description:
      'Custom X-axis tick values (numbers only). When provided, used as x-axis data; labels are generated using xAxisTickLabelFormatter.',
  },
  yAxisTicks: {
    control: 'object',
    description: 'Custom Y-axis tick positions (for value axis).',
  },
  boundaryGap: {
    control: 'boolean',
    description: 'Whether to leave gaps at the start and end of the axis. Default: false',
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
  xAxisLabel: {
    control: 'text',
    description: 'Label text for the X-axis (displayed along the axis).',
  },
  yAxisLabel: {
    control: 'text',
    description: 'Label text for the Y-axis (displayed along the axis).',
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
  onSelect: {
    control: false,
    description:
      'Called when the user taps/clicks a data point (Cartesian charts). Receives seriesIndex, dataIndex, seriesName, x, y; optional z (bubble) or ohlc (candlestick).',
  },
} as const;

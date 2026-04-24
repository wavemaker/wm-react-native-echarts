/**
 * ArgTypes for Cartesian chart props (axes, grid, legend, highlighter).
 * common -> cartesian -> area | bar | scatter
 */
export const cartesianChartArgTypes = {
  minX: {
    control: 'number',
    description:
      'X-axis minimum when set. On horizontal bar/column, value (bar length) is on X — use minX for that scale.',
  },
  maxX: {
    control: 'number',
    description: 'X-axis maximum when set; otherwise derived or automatic.',
  },
  intervalX: {
    control: 'number',
    description: 'X-axis tick interval when set; otherwise automatic.',
  },
  minY: {
    control: 'number',
    description: 'Value-axis minimum when set; otherwise the axis minimum comes from the data.',
  },
  maxY: {
    control: 'number',
    description: 'Value-axis maximum when set; otherwise the axis maximum comes from the data.',
  },
  intervalY: {
    control: 'number',
    description: 'Value-axis tick interval when set; otherwise the step is chosen automatically.',
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
    description: 'X-axis tick marks when showXAxis is true. Default: true',
  },
  showYAxisTicks: {
    control: 'boolean',
    description: 'Y-axis tick marks when showYAxis is true. Default: true',
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
      'Emphasis (hover highlight) near the axis pointer. Column/bar default false; area/line default true.',
  },
  tooltip: {
    control: 'select',
    options: ['card', 'compact', 'kpi', 'striped', 'none'],
    description:
      "Built-in tooltip preset when renderTooltip is omitted (axis: area/line/column/bar; item: scatter/bubble). Default: 'card'. Use 'none' to hide. renderTooltip overrides the preset body.",
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
  renderTooltip: {
    control: false,
    description:
      'Optional RN tooltip body: axis charts (area, line, column, bar) use axis params; scatter/bubble define their own item `renderTooltip` on the chart props.',
  },
} as const;

/**
 * ArgTypes for Radar chart (common + radar-specific).
 */
import { commonChartArgTypes } from '../args/common';

const radarOnlyArgTypes = {
  indicators: {
    control: 'object',
    description: 'Indicator definitions: dimension names and optional max per axis.',
  },
  symbol: {
    control: 'select',
    options: ['none', 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'],
    description: 'Symbol type for data points. Default: none (not shown).',
  },
  symbolSize: {
    control: 'number',
    description: 'Size of the symbol. Used when symbol is not none. Default: 6',
  },
  showLegend: {
    control: 'boolean',
    description: 'Whether to display a legend for named series. Default: false',
  },
  showHighlighter: {
    control: 'boolean',
    description: 'Whether to show emphasis when interacting with the chart. Default: true',
  },
  showIndicatorLabels: {
    control: 'boolean',
    description: 'Whether to show indicator (axis) labels. Default: true',
  },
  showSplitLine: {
    control: 'boolean',
    description: 'Whether to show split lines (grid). Default: true',
  },
  showAxisLine: {
    control: 'boolean',
    description: 'Whether to show axis line for each indicator. Default: true',
  },
  tooltip: {
    control: 'select',
    options: ['card', 'dark', 'compact', 'kpi', 'striped', 'none'],
    description:
      "Built-in item tooltip preset when renderTooltip is omitted. Default: 'card'. Use 'none' to hide.",
  },
  renderTooltip: {
    control: false,
    description: 'Custom React Native tooltip body for the hovered radar polygon.',
  },
  onSelect: {
    control: false,
    description:
      'Called when the user taps/clicks a radar polygon. Receives seriesIndex, dataIndex, seriesName, value (point values per axis).',
  },
} as const;

export const radarChartArgTypes = {
  ...commonChartArgTypes,
  ...radarOnlyArgTypes,
} as const;

/**
 * ArgTypes for Heatmap chart (common + heatmap-specific only).
 */
import { commonChartArgTypes } from '../args/common';

const heatmapOnlyArgTypes = {
  xAxisData: {
    control: 'object',
    description: 'Category labels for the X axis (columns).',
  },
  yAxisData: {
    control: 'object',
    description: 'Category labels for the Y axis (rows).',
  },
  data: {
    control: 'object',
    description: 'Cell values as [xIndex, yIndex, value] tuples.',
  },
  showLabel: {
    control: 'boolean',
    description: 'When true, shows the numeric value on each cell. Default: false',
  },
  showLegend: {
    control: 'boolean',
    description: 'Whether to show the visual map (color scale). Default: true',
  },
  showHighlighter: {
    control: 'boolean',
    description: 'Whether to emphasize the hovered cell. Default: true',
  },
  showXAxis: {
    control: 'boolean',
    description: 'Whether to show the X-axis labels. Default: true',
  },
  showYAxis: {
    control: 'boolean',
    description: 'Whether to show the Y-axis labels. Default: true',
  },
  visualMapMin: {
    control: 'number',
    description: 'Minimum value for the color scale. Auto-derived when omitted.',
  },
  visualMapMax: {
    control: 'number',
    description: 'Maximum value for the color scale. Auto-derived when omitted.',
  },
  visualMapMode: {
    control: 'select',
    options: ['continuous', 'piecewise'],
    description: 'Color scale mode. Default: continuous',
  },
  piecewisePieces: {
    control: 'object',
    description: 'Bands when visualMapMode is piecewise: [{ min, max, label, color }].',
  },
  tooltip: {
    control: 'select',
    options: ['card', 'compact', 'kpi', 'striped', 'none'],
    description: "Built-in cell tooltip preset when renderTooltip is omitted. Default: 'card'.",
  },
  renderTooltip: {
    control: false,
    description: 'Custom React Native tooltip body for the hovered cell.',
  },
  onSelect: {
    control: false,
    description: 'Called when the user taps/clicks a cell. Receives indices, labels, and value.',
  },
} as const;

export const heatmapChartArgTypes = {
  ...commonChartArgTypes,
  ...heatmapOnlyArgTypes,
} as const;

export const heatmapDemoHours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a'];

export const heatmapDemoDays = ['Sat', 'Fri', 'Thu', 'Wed', 'Tue', 'Mon', 'Sun'];

export function buildHeatmapDemoData(
  hourCount = heatmapDemoHours.length,
  dayCount = heatmapDemoDays.length
): Array<[number, number, number]> {
  const points: Array<[number, number, number]> = [];
  for (let x = 0; x < hourCount; x++) {
    for (let y = 0; y < dayCount; y++) {
      points.push([x, y, (x * 7 + y * 3 + (x ^ y)) % 10]);
    }
  }
  return points;
}

export const heatmapBaseArgs = {
  width: 420,
  height: 280,
  xAxisData: heatmapDemoHours,
  yAxisData: heatmapDemoDays,
  data: buildHeatmapDemoData(),
} as const;

export const heatmapPiecewiseArgs = {
  width: 420,
  height: 280,
  xAxisData: ['Low', 'Mid', 'High'],
  yAxisData: ['A', 'B', 'C', 'D'],
  data: [
    [0, 0, 2],
    [0, 1, 8],
    [0, 2, 4],
    [0, 3, 1],
    [1, 0, 5],
    [1, 1, 3],
    [1, 2, 9],
    [1, 3, 6],
    [2, 0, 7],
    [2, 1, 2],
    [2, 2, 5],
    [2, 3, 10],
  ] as Array<[number, number, number]>,
  visualMapMode: 'piecewise' as const,
  piecewisePieces: [
    { min: 0, max: 3, label: 'Low', color: '#dbeafe' },
    { min: 3, max: 7, label: 'Mid', color: '#3b82f6' },
    { min: 7, max: 10, label: 'High', color: '#1e3a8a' },
  ],
};

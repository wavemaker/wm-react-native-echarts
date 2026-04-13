/**
 * ArgTypes for Pie chart (common + pie-specific).
 */
import { commonChartArgTypes } from '../args/common';

const pieOnlyArgTypes = {
  data: {
    ...commonChartArgTypes.data,
    description:
      'Single pie: [{ name, value }, ...]. Concentric: [{ name?, radius: [inner, outer], data: [{ name, value }, ...] }, ...].',
  },
  radius: {
    control: 'text',
    description: 'Radius of the pie. Number, string (e.g. "60%"), or [inner, outer] for donut. Default: "75%"',
  },
  showLegend: {
    control: 'boolean',
    description: 'Whether to show the legend for slices. Default: false',
  },
  showLabel: {
    control: 'boolean',
    description: 'Whether to show slice labels on the chart. Default: true',
  },
  labelPosition: {
    control: 'select',
    options: ['outside', 'inside', 'center'],
    description: 'Label position: outside, inside, or center. Default: outside',
  },
  showLabelLine: {
    control: 'boolean',
    description: 'Whether to show label lines (connectors). Default: true when labels outside',
  },
  showHighlighter: {
    control: 'boolean',
    description: 'Whether to emphasize the hovered slice. Default: true',
  },
  tooltipFormatter: {
    control: false,
    description: 'Custom formatter for tooltip. (params) => string',
  },
  onSelect: {
    control: false,
    description:
      'Called when the user taps/clicks a slice. Receives seriesIndex, dataIndex, name, value, optional seriesName, percent.',
  },
} as const;

export const pieChartArgTypes = {
  ...commonChartArgTypes,
  ...pieOnlyArgTypes,
} as const;

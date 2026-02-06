import type { ColumnChartProps } from '../column/column-chart.props';

/**
 * Props for BarChart.
 * Bar chart is the horizontal orientation of column chart; horizontal is always true.
 */
export type BarChartProps = Omit<ColumnChartProps, 'horizontal'>;

import type { CartesianChartProps } from '../props/cartesian';
import type { SeriesData } from '../area/area-chart.props';

/**
 * Props for ColumnChart.
 * common -> cartesian -> column
 */
export interface ColumnChartProps extends CartesianChartProps {
  /**
   * Chart data. Same shape as area: single series, with labels, or multiple named series.
   */
  data: SeriesData;
  /**
   * Whether to leave gaps at the start and end of the axis.
   * @default true
   */
  boundaryGap?: boolean;
  /**
   * Bar corner radius: number (all corners) or [topLeft, topRight, bottomRight, bottomLeft].
   * @default [4, 4, 0, 0]
   */
  cornerRadius?: number | [number, number, number, number];
  /**
   * When true, bars are horizontal (categories on Y-axis, values on X-axis).
   * Bar chart is the horizontal orientation of column chart.
   * @default false
   */
  horizontal?: boolean;
  /**
   * Stack ID for stacking multiple series.
   */
  stack?: string | false;
  /**
   * When true with stack, show stacked bars as percentages (0–100%).
   * @default false
   */
  stackNormalize?: boolean;
}

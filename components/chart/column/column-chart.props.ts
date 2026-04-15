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
  /**
   * Zero-based index of the bar to highlight (active state). Only applies to single series.
   * The active bar uses activeColor and a dashed border.
   */
  activeIndex?: number;
  /**
   * Color for the active bar when activeIndex is set.
   * @default darker shade of series color
   */
  activeColor?: string;
  /**
   * Position of the label inside the bar.
   * @default 'start'
   */
  barInsideLabelPosition?: 'start' | 'middle' | 'end' | ((value: number, index: number, category?: string) => 'start' | 'middle' | 'end');
  /**
   * Formatter for the label inside the bar.
   * @default undefined
   */
  barInsideLabelFormatter?: (value: number, index: number, category?: string) => string;
  /**
   * Position of the label outside the bar.
   * @default 'start'
   */
  barOutsideLabelPosition?: 'start' | 'end' | ((value: number, index: number, category?: string) => 'start' | 'end');
  /**
   * Formatter for the label outside the bar.
   * @default undefined
   */
  barOutsideLabelFormatter?: (value: number, index: number, category?: string) => string;
  /**
   * Per-bar item style override. When provided for single series, called for each bar with (value, index).
   * Returned object is merged over the base itemStyle (e.g. color, borderColor, borderRadius).
   */
  itemStyle?: (value: number, index: number) => BarItemStyle;
}

/**
 * Per-bar style overrides (ECharts itemStyle subset).
 */
export interface BarItemStyle {
  color?: string;
  borderColor?: string;
  borderWidth?: number;
  borderType?: 'solid' | 'dashed' | 'dotted';
  borderRadius?: number | number[];
}

import type { CommonChartProps } from './common';

/**
 * Grid positioning configuration.
 * Values can be percentages (strings like '10%') or pixel values (numbers).
 */
export interface CartesianGrid {
  left?: string | number;
  right?: string | number;
  top?: string | number;
  bottom?: string | number;
}

/**
 * Props shared by all Cartesian chart components (axes, grid, legend, highlighter).
 * common -> cartesian -> area | bar | scatter
 */
export interface CartesianChartProps extends CommonChartProps {
  /**
   * Whether to leave gaps at the start and end of the axis.
   * @default false (area/line/scatter); true (bar)
   */
  boundaryGap?: boolean;
  /**
   * Custom X-axis tick values (numbers only). When provided, used as the x-axis data; labels are
   * generated using xAxisTickLabelFormatter. Otherwise each chart derives x-axis from data.
   * @default undefined
   */
  xAxisTicks?: number[];
  /**
   * Custom Y-axis tick positions (for value axis).
   * @default undefined
   */
  yAxisTicks?: number[];
  /**
   * Whether to show the X-axis line and labels.
   * @default true
   */
  showXAxis?: boolean;
  /**
   * Whether to show X-axis tick marks.
   * @default true
   */
  showXAxisTicks?: boolean;
  /**
   * Whether to show the Y-axis line and labels.
   * @default true
   */
  showYAxis?: boolean;
  /**
   * Whether to show Y-axis tick marks.
   * @default true
   */
  showYAxisTicks?: boolean;
  /**
   * Whether to show vertical grid lines (X-axis split lines).
   * @default true
   */
  showXAxisSplitLines?: boolean;
  /**
   * Whether to show horizontal grid lines (Y-axis split lines).
   * @default true
   */
  showYAxisSplitLines?: boolean;
  /**
   * Label text for the X-axis (displayed along the axis).
   * @default undefined
   */
  xAxisLabel?: string;
  /**
   * Label text for the Y-axis (displayed along the axis).
   * @default undefined
   */
  yAxisLabel?: string;
  /**
   * Grid positioning configuration.
   */
  grid?: CartesianGrid;
  /**
   * Whether to display a legend for named series.
   * @default false
   */
  showLegend?: boolean;
  /**
   * Whether to show the highlighter (emphasis) when interacting with the chart.
   * @default true
   */
  showHighlighter?: boolean;
  /**
   * Formatter for X-axis tick labels. (value, index?) => string
   */
  xAxisTickLabelFormatter?: (value: string | number, index?: number) => string;
  /**
   * Formatter for Y-axis tick labels. (value, index?) => string
   */
  yAxisTickLabelFormatter?: (value: string | number, index?: number) => string;
}

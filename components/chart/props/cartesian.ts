import type { ReactNode } from 'react';
import type { AxisTooltipParams } from '../cartesian/tooltip/axis-tooltip.types';
import type { ChartTooltipOption } from '../tooltip';
import type { CommonChartProps } from './common';

/**
 * Emitted when the user taps/clicks a series data point on Cartesian-based charts
 * (area, line, column, bar, scatter, bubble, candlestick, etc.).
 */
export interface CartesianChartSelectEvent {
  seriesIndex: number;
  dataIndex: number;
  seriesName: string;
  x: string | number;
  y: number;
  /** Third numeric dimension when present (e.g. bubble size). */
  z?: number;
  /** Set when the gesture targets a candlestick series. */
  ohlc?: {
    open: number;
    close: number;
    low: number;
    high: number;
  };
}

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
   * Whether ECharts applies **emphasis** (hover highlight) while the axis pointer / tooltip is near the series.
   * Column and bar charts default this to `false`; area defaults to `true`.
   */
  showHighlighter?: boolean;
  /**
   * Built-in axis tooltip preset when `renderTooltip` is omitted (area, line, column, bar). Use `none` to hide the overlay.
   * When `renderTooltip` is set, it replaces the preset body. The overlay is hidden only when `tooltip` is `none` and `renderTooltip` is omitted.
   * Scatter and bubble use the same prop for **item** tooltips.
   * @default 'card'
   */
  tooltip?: ChartTooltipOption;
  /**
   * Formatter for X-axis tick labels. (value, index?) => string
   */
  xAxisTickLabelFormatter?: (value: string | number, index?: number) => string;
  /**
   * Formatter for Y-axis tick labels. (value, index?) => string
   */
  yAxisTickLabelFormatter?: (value: string | number, index?: number) => string;
  /**
   * Called when the user selects (taps/clicks) a data point on a series (when supported).
   */
  onSelect?: (event: CartesianChartSelectEvent) => void;
  /**
   * Overrides the default React Native axis tooltip body for charts that use the axis tooltip overlay (area, line, column, bar).
   * Scatter and bubble charts use item tooltip `renderTooltip` on their own props instead.
   * Takes precedence over {@link tooltip}.
   */
  renderTooltip?: (params: AxisTooltipParams) => ReactNode;
}

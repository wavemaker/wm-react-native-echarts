import type { CommonChartProps } from '../props/common';

/** Emitted when the user taps/clicks a radar series (polygon). */
export interface RadarChartSelectEvent {
  seriesIndex: number;
  dataIndex: number;
  seriesName: string;
  value: number[];
}

/**
 * One dimension (axis) of the radar chart.
 */
export interface RadarIndicator {
  /** Display name for the axis. */
  name: string;
  /** Optional maximum value for the axis. When omitted, max is derived from data. */
  max?: number;
}

/**
 * Radar series data shape:
 * - Single series: number[] (one value per indicator)
 * - Multiple series: Array<{ name?: string; value: number[] }>
 */
export type RadarSeriesData =
  | number[]
  | Array<{ name?: string; value: number[] }>;

/**
 * Props for RadarChart.
 * common -> radar (no cartesian axes)
 */
export interface RadarChartProps extends CommonChartProps {
  /**
   * Indicator definitions: dimension names and optional max per axis.
   * Length must match the length of each series value array.
   */
  indicators: RadarIndicator[];
  /**
   * Chart data. Single series (number[]) or multiple named series.
   */
  data: RadarSeriesData;
  /**
   * Symbol type for data points. Set to 'none' to hide (default).
   * @default 'none'
   */
  symbol?: 'none' | 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | string;
  /**
   * Size of the symbol. Used when symbol is not 'none'.
   */
  symbolSize?: number | number[] | ((value: unknown) => number | number[]);
  /**
   * Whether to display a legend for named series.
   * @default false
   */
  showLegend?: boolean;
  /**
   * Whether to show emphasis (highlight) when interacting with the chart.
   * @default true
   */
  showHighlighter?: boolean;
  /**
   * Whether to show indicator (axis) labels.
   * @default true
   */
  showIndicatorLabels?: boolean;
  /**
   * Whether to show split lines (grid) for the radar.
   * @default true
   */
  showSplitLine?: boolean;
  /**
   * Whether to show axis line for each indicator.
   * @default true
   */
  showAxisLine?: boolean;
  /**
   * Called when the user selects (taps/clicks) a radar series polygon.
   */
  onSelect?: (event: RadarChartSelectEvent) => void;
}

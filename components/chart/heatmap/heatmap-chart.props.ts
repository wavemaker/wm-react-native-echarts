import type { CommonChartProps } from '../props/common';
import type { ChartTooltipOption } from '../tooltip';
import type { ReactNode } from 'react';
import type { HeatmapItemTooltipParams } from './tooltip/heatmap-item-tooltip.types';

/** Single heatmap cell: `[xIndex, yIndex, value]` using indices into {@link HeatmapChartProps.xAxisData} / `yAxisData`. */
export type HeatmapDataPoint = [number, number, number];

/** Emitted when the user taps/clicks a heatmap cell. */
export interface HeatmapChartSelectEvent {
  xIndex: number;
  yIndex: number;
  xLabel: string;
  yLabel: string;
  value: number;
}

/**
 * Props for HeatmapChart.
 * common -> heatmap (matrix chart with category axes and visual map)
 */
export interface HeatmapChartProps extends CommonChartProps {
  /** Category labels for the X axis (columns). */
  xAxisData: string[];
  /** Category labels for the Y axis (rows). */
  yAxisData: string[];
  /** Cell values as `[xIndex, yIndex, value]` tuples. */
  data: HeatmapDataPoint[];
  /** When true, shows the numeric value on each cell. @default false */
  showLabel?: boolean;
  /** Whether to show the color scale (visual map). @default true */
  showLegend?: boolean;
  /** Whether to emphasize the hovered cell. @default true */
  showHighlighter?: boolean;
  /** Whether to show the X-axis line and category labels. @default true */
  showXAxis?: boolean;
  /** Whether to show the Y-axis line and category labels. @default true */
  showYAxis?: boolean;
  /** Minimum value for the visual map scale. Auto-derived from data if not set. */
  visualMapMin?: number;
  /** Maximum value for the visual map scale. Auto-derived from data if not set. */
  visualMapMax?: number;
  /**
   * Visual map mode: `continuous` (gradient) or `piecewise` (distinct bands).
   * @default 'continuous'
   */
  visualMapMode?: 'continuous' | 'piecewise';
  /** When `visualMapMode` is `piecewise`, define bands: `[{ min, max, label, color }]`. */
  piecewisePieces?: Array<{ min: number; max: number; label: string; color: string }>;
  /**
   * Built-in cell tooltip preset when `renderTooltip` is omitted. Use `none` to hide the overlay.
   * @default 'card'
   */
  tooltip?: ChartTooltipOption;
  /** Overrides the default React Native item tooltip body (see {@link HeatmapItemTooltipParams}). */
  renderTooltip?: (params: HeatmapItemTooltipParams) => ReactNode;
  /** Called when the user selects (taps/clicks) a heatmap cell. */
  onSelect?: (event: HeatmapChartSelectEvent) => void;
}

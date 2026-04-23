/**
 * Item tooltip for radar (`trigger: 'item'`, one ECharts radar series with multiple polygons).
 */

export interface RadarItemTooltipDimension {
  indicatorName: string;
  value: number;
}

export interface RadarItemTooltipParams {
  pointerX: number;
  pointerY: number;
  /** ECharts series index (typically `0` for a single radar series). */
  seriesIndex: number;
  /** Index of the hovered polygon / named series row. */
  dataIndex: number;
  seriesName: string;
  dimensionValues: RadarItemTooltipDimension[];
  color?: string;
}

export interface RadarItemTooltipContext {
  indicators: Array<{ name: string }>;
  normalizedSeries: Array<{ name: string; value: number[] }>;
}

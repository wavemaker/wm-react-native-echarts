/**
 * Item tooltip payload for scatter / bubble (ECharts `trigger: 'item'`, `showTip` without `dataByCoordSys`).
 */

export interface ScatterItemTooltipParams {
  pointerX: number;
  pointerY: number;
  seriesIndex: number;
  dataIndex: number;
  seriesName: string;
  x: number;
  y: number;
  /** Third dimension (bubble size) when present. */
  z?: number;
  color?: string;
}

export interface ScatterItemTooltipContext {
  normalizedSeries: Array<{ name?: string; data: number[][] }>;
}

/**
 * Item tooltip payload for pie / donut (ECharts `trigger: 'item'`, `showTip` without `dataByCoordSys`).
 */

export interface PieItemTooltipParams {
  pointerX: number;
  pointerY: number;
  seriesIndex: number;
  dataIndex: number;
  /** Slice label */
  name: string;
  value: number;
  /** Share of this pie ring (0–100). */
  percent: number;
  color?: string;
  /** Ring / series display name when concentric or `name` is set on the series. */
  ringName?: string;
}

export interface PieItemTooltipContext {
  /** One entry per pie series (single chart has one; concentric has one per ring). */
  normalizedSeries: Array<{ name?: string; data: Array<{ name: string; value: number }> }>;
}

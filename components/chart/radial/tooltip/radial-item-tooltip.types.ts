/**
 * Item tooltip for radial ring chart (multiple ECharts `pie` series; filled slice is `dataIndex` 0).
 */

export interface RadialItemTooltipParams {
  pointerX: number;
  pointerY: number;
  /** Ring index (matches `data` array order). */
  seriesIndex: number;
  /** Always `0` for the filled segment (background track uses index 1 and has no tooltip). */
  dataIndex: number;
  /** Ring label from data, or a generated name. */
  ringLabel: string;
  /** Fill amount 0–100. */
  value: number;
  color?: string;
}

export interface RadialItemTooltipContext {
  normalizedSeries: Array<{ label?: string; value: number }>;
}

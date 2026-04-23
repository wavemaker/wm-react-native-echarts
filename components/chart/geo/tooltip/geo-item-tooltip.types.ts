/**
 * Item tooltip for map / geo (`trigger: 'item'`, `series.type` === `map`).
 */

export interface GeoItemTooltipParams {
  pointerX: number;
  pointerY: number;
  /** Region name (matches map feature / data `name`). */
  name: string;
  value: number;
  color?: string;
}

export interface GeoItemTooltipContext {
  /** Normalized `{ name, value }` rows from chart `data` (for lookup when the event omits value). */
  regions: Array<{ name: string; value: number }>;
}

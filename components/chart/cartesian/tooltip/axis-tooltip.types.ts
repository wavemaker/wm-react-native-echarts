/**
 * Types for axis-triggered tooltips (category axis + one value per series).
 * Used by area, line, column, and bar charts.
 */

/** One series row at the hovered category index. */
export interface AxisTooltipSeriesItem {
  seriesName: string;
  value: number;
  seriesIndex: number;
  color?: string;
}

/** Axis tooltip fields without pointer position. */
export interface AxisTooltipContentParams {
  axisValue: string | number;
  dataIndex: number;
  series: AxisTooltipSeriesItem[];
}

/** Payload for `renderTooltip` (includes pointer in chart pixel space). */
export interface AxisTooltipParams extends AxisTooltipContentParams {
  pointerX: number;
  pointerY: number;
}

/**
 * Ref snapshot read when `showTip` fires. Keep `categoryAxisData` in sync with the chart’s category axis `data`.
 */
export interface AxisTooltipContext {
  displaySeries: Array<{ name?: string; data: [string | number, number][] | number[] }>;
  categoryAxisData: (string | number)[];
  /**
   * Set when the category axis is Y (horizontal column/bar). `showTip` lists that axis in `dataByAxis`;
   * reading `[0]` would be the value axis and yields a stuck `dataIndex`.
   */
  categoryAxisIsY?: boolean;
}

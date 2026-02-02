import type { CommonChartProps } from '../props/common';

/**
 * Single slice data for pie/donut charts.
 */
export interface PieDataItem {
  /** Display name for the slice */
  name: string;
  /** Numeric value (determines slice size) */
  value: number;
  /** Optional per-item color override */
  itemStyle?: { color?: string };
}

/**
 * Data for one ring in a concentric (multi-ring) pie.
 * Each ring has its own radius range and slice data.
 */
export interface PieRingData {
  /** Optional name for the ring (e.g. for legend). */
  name?: string;
  /** Inner and outer radius as [inner, outer], e.g. ['0%', '35%'] or ['45%', '60%']. */
  radius: (number | string)[];
  /** Slice data for this ring. */
  data: PieDataItem[];
}

/**
 * Chart data: single pie (array of slices) or concentric (array of rings).
 */
export type PieChartData = PieDataItem[] | PieRingData[];

/**
 * Type guard: true if data is concentric (array of rings).
 */
export function isConcentricPieData(
  data: PieChartData
): data is PieRingData[] {
  if (!Array.isArray(data) || data.length === 0) return false;
  const first = data[0] as PieRingData | PieDataItem;
  return (
    'data' in first &&
    Array.isArray(first.data) &&
    'radius' in first &&
    Array.isArray((first as PieRingData).radius)
  );
}

/**
 * Props for PieChart.
 * Extends common chart props (width, height, theme, colors).
 */
export interface PieChartProps extends CommonChartProps {
  /**
   * Chart data: single pie (array of { name, value }) or concentric (array of { name?, radius, data }).
   */
  data: PieChartData;
  /**
   * Radius of the pie. Number (e.g. 100), string (e.g. '60%'), or [inner, outer] for donut.
   * @default '75%'
   */
  radius?: number | string | (number | string)[];
  /**
   * Whether to show the legend for slices.
   * @default false
   */
  showLegend?: boolean;
  /**
   * Whether to show slice labels (name/value on the chart).
   * @default true
   */
  showLabel?: boolean;
  /**
   * Label position: 'outside' | 'inside' | 'center'.
   * @default 'outside'
   */
  labelPosition?: 'outside' | 'inside' | 'center';
  /**
   * Whether to show label lines (connectors from slice to label).
   * @default true when labelPosition is 'outside'
   */
  showLabelLine?: boolean;
  /**
   * Whether to emphasize (scale/highlight) the hovered slice.
   * @default true
   */
  showHighlighter?: boolean;
  /**
   * Formatter for tooltip. (params) => string. Params include name, value, percent.
   */
  tooltipFormatter?: (params: { name: string; value: number; percent?: number }) => string;
}

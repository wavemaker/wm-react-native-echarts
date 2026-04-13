import type { CommonChartProps } from '../props/common';

/** Emitted when the user taps/clicks a ring’s filled segment. */
export interface RadialChartSelectEvent {
  seriesIndex: number;
  dataIndex: number;
  label: string;
  value: number;
}

/**
 * Single data item for radial chart: one concentric ring.
 * value = fill percentage (0–100) for that ring; label optional (tooltip).
 */
export interface RadialDataItem {
  label?: string;
  value: number;
}

/**
 * Props for RadialChart (concentric ring chart).
 * common -> radial
 */
export interface RadialChartProps extends CommonChartProps {
  /**
   * Chart data: one item per concentric ring. value = fill percentage (0–100).
   */
  data: RadialDataItem[];
  /**
   * Inner radius of the chart (center hole), e.g. '20%' or 40.
   * @default '20%'
   */
  innerRadius?: string | number;
  /**
   * Color for the unfilled portion of each ring.
   * @default '#e8e8e899'
   */
  backgroundColor?: string;
  /**
   * Optional center text (e.g. main value or title).
   */
  centerText?: string;
  /**
   * Optional center subtext shown below center text (e.g. label or unit).
   */
  centerSubtext?: string;
  /**
   * Start angle of the fill (and animation), in degrees. 0 = right (3 o'clock), 90 = top (12 o'clock).
   * @default 0
   */
  startAngle?: number;
  /**
   * Direction of the fill and animation. true = clockwise, false = counter-clockwise (anti-clockwise).
   * @default false
   */
  clockwise?: boolean;
  /**
   * Gap between concentric rings, as percentage of chart radius (e.g. '4%') or number.
   * @default '4%'
   */
  ringGap?: string | number;
  /**
   * Whether to show the legend (ring labels).
   * @default true
   */
  showLegend?: boolean;
  /**
   * Position of the legend.
   * @default 'bottom'
   */
  legendPosition?: 'left' | 'right' | 'top' | 'bottom';
  /**
   * Called when the user selects (taps/clicks) a ring’s value segment.
   */
  onSelect?: (event: RadialChartSelectEvent) => void;
}

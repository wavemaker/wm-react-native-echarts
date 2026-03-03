import type { ChartTheme } from '../chart-theme.context';

/**
 * Common props shared by all gauge chart components.
 * Individual gauge components extend this interface with their specific props.
 */
export interface BaseGaugeProps {
  /**
   * Current value to display on the gauge.
   */
  value: number;

  /**
   * Minimum value of the gauge scale.
   * @default 0
   */
  min?: number;

  /**
   * Maximum value of the gauge scale.
   * @default 100
   */
  max?: number;

  /**
   * Width of the chart in pixels.
   */
  width?: number;

  /**
   * Height of the chart in pixels.
   */
  height?: number;

  /**
   * Partial theme override for customizing chart appearance.
   */
  theme?: Partial<ChartTheme>;

  /**
   * Colors for the chart.
   * @default theme.itemStyles.map(item => item.color)
   */
  colors?: string[];

  /**
   * Background color for the axis/track.
   */
  axisBgColor?: string;

  /**
   * Width of the axis line in pixels.
   */
  axisWidth?: number;

  /**
   * Color for tick marks and split lines.
   */
  tickColor?: string;
}

import type { ChartTheme } from '../chart-theme.context';

/**
 * Props shared by all chart components (common base).
 * common -> cartesian -> area | bar | scatter -> line (extends area) | bubble (extends scatter)
 */
export interface CommonChartProps {
  /**
   * Width of the chart in pixels.
   * @default 220
   */
  width?: number;
  /**
   * Height of the chart in pixels.
   * @default 350
   */
  height?: number;
  /**
   * Partial theme override for customizing chart appearance.
   * Merged with the default theme from ChartThemeContext.
   */
  theme?: Partial<ChartTheme>;
  /**
   * Colors for the chart series. Overrides theme colors.
   * When provided, these colors will be used for the series in order.
   */
  colors?: string[];
}

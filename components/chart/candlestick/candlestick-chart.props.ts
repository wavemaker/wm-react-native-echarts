import type { CartesianChartProps } from '../props/cartesian';

/**
 * One candlestick data point: [open, close, low, high].
 */
export type CandlestickItem = [number, number, number, number];

/**
 * Candlestick chart data: array of [open, close, low, high] per period.
 */
export type CandlestickData = CandlestickItem[];

/**
 * Props for CandlestickChart.
 * common -> cartesian -> candlestick
 */
export interface CandlestickChartProps extends CartesianChartProps {
  /**
   * Candlestick data: array of [open, close, low, high] per period.
   */
  data: CandlestickData;
  /**
   * X-axis category labels. If omitted, indices (0, 1, 2, ...) are used.
   */
  xAxisData?: (string | number)[];
  /**
   * Optional volume data (bar series below candlestick). Length should match data.
   */
  volumeData?: number[];
  /**
   * Optional MA5 (5-period moving average) line. Length should match data.
   */
  ma5?: number[];
  /**
   * Optional MA10 (10-period moving average) line. Length should match data.
   */
  ma10?: number[];
  /**
   * Optional MA20 (20-period moving average) line. Length should match data.
   */
  ma20?: number[];
}

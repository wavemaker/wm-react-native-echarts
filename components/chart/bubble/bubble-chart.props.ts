import type { ScatterChartProps } from '../scatter/scatter-chart.props';

/**
 * Bubble data: [x, y, size]. The third value (size) drives the bubble radius.
 * - Single series: [number, number, number][]
 * - Multiple series: Array<{ name: string; data: [number, number, number][] }>
 */
export type BubbleSeriesData =
  | [number, number, number][]
  | Array<{ name: string; data: [number, number, number][] }>;

/**
 * Props for BubbleChart.
 * common -> cartesian -> scatter -> bubble
 */
export interface BubbleChartProps extends Omit<ScatterChartProps, 'data' | 'symbolSize'> {
  /**
   * Bubble data: array of [x, y, size] per series. Size drives bubble radius.
   */
  data: BubbleSeriesData;
  /**
   * Pixel size range [min, max] for scaling the third data value to bubble radius.
   * @default [8, 50]
   */
  sizeRange?: [number, number];
}

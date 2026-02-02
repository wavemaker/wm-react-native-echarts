import type { CartesianChartProps } from '../props/cartesian';

/**
 * Scatter data: array of [x, y] pairs per series.
 * - Single series: number[][]
 * - Multiple series: Array<{ name: string; data: number[][] }>
 */
export type ScatterSeriesData =
  | number[][]
  | Array<{ name: string; data: number[][] }>;

/**
 * Props for ScatterChart.
 * common -> cartesian -> scatter
 */
export interface ScatterChartProps extends CartesianChartProps {
  /**
   * Scatter data: array of [x, y] pairs per series.
   */
  data: ScatterSeriesData;
  /**
   * Symbol shape for points.
   * @default 'circle'
   */
  symbol?: 'none' | 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | string;
  /**
   * Symbol size. Number, [width, height], or function.
   * @default 8
   */
  symbolSize?: number | number[] | ((value: unknown) => number | number[]);
  /**
   * When true, draws a linear regression line per scatter series.
   * @default false
   */
  showRegressionLine?: boolean;
}

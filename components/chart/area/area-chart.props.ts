import type { CartesianChartProps, CartesianChartSelectEvent } from '../props/cartesian';
import type { ChartTooltipOption } from '../tooltip';

/** @deprecated Use {@link ChartTooltipOption} from `../tooltip`. */
export type AreaChartTooltip = ChartTooltipOption;

/**
 * Area/line/bar series data shape:
 * - Single series: number[]
 * - Single series with labels: [string | number, number][]
 * - Multiple series: Array<{ name?: string; data: number[] }> or Array<{ name?: string; data: [string | number, number][] }>
 */
export type SeriesData =
  | number[]
  | [string | number, number][]
  | Array<{ name?: string; data: number[] }>
  | Array<{ name?: string; data: [string | number, number][] }>;

/** @deprecated Use {@link CartesianChartSelectEvent} from `../props/cartesian`. */
export type AreaChartSelectEvent = CartesianChartSelectEvent;

export type {
  AxisTooltipParams as AreaChartAxisTooltipParams,
  AxisTooltipSeriesItem as AreaChartTooltipSeriesItem,
} from '../cartesian/tooltip/axis-tooltip.types';

/**
 * Props for AreaChart.
 * common -> cartesian -> area
 */
export interface AreaChartProps extends CartesianChartProps {
  /**
   * Chart data. Single series (number[]), multiple unnamed (number[][]), or multiple named series.
   */
  data: SeriesData;
  /**
   * Curve type: 'default' (linear), 'smooth' (Bezier), or 'step'.
   * @default 'default'
   */
  type?: 'default' | 'smooth' | 'step';
  /**
   * Step mode when type="step". 'start' | 'middle' | 'end'.
   */
  step?: 'start' | 'middle' | 'end' | false;
  /**
   * Stack ID for stacking multiple series. Use false to disable.
   */
  stack?: string | false;
  /**
   * When true with stack, show stacked values as percentages (0–100%).
   * @default false
   */
  stackNormalize?: boolean;
  /**
   * Symbol type for data points. Set to 'none' to hide.
   * @default 'none'
   */
  symbol?: 'none' | 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | string;
  /**
   * Size of the symbol. Number, [width, height], or function.
   */
  symbolSize?: number | number[] | ((value: unknown) => number | number[]);
  /**
   * Opacity of the filled area (0-1).
   * @default 0.6
   */
  areaOpacity?: number;
  /**
   * Fill style for the area under the line: 'gradient' | 'transparent' | 'solid'.
   * @default 'gradient'
   */
  areaFill?: 'gradient' | 'transparent' | 'solid';
}

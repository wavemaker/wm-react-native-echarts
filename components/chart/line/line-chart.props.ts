import type { AreaChartProps } from '../area/area-chart.props';
import type { CartesianChartSelectEvent } from '../props/cartesian';
import type { AxisTooltipParams, AxisTooltipSeriesItem } from '../cartesian/tooltip/axis-tooltip.types';

/**
 * Props for LineChart.
 * Line chart is AreaChart with no fill (areaOpacity=0, areaFill='transparent').
 * Inherits Cartesian chart props (axes, grid, legend, {@link CartesianChartProps#onSelect | onSelect}, …).
 * common -> cartesian -> area -> line
 */
export type LineChartProps = Omit<AreaChartProps, 'areaOpacity' | 'areaFill'>;

/** Per-series row in axis tooltip params for {@link LineChartProps#renderTooltip}. */
export type LineChartTooltipSeriesItem = AxisTooltipSeriesItem;

/** Axis tooltip params for {@link LineChartProps#renderTooltip}. */
export type LineChartAxisTooltipParams = AxisTooltipParams;

/** Selection payload for {@link LineChartProps} / `onSelect` (same as {@link CartesianChartSelectEvent}). */
export type LineChartSelectEvent = CartesianChartSelectEvent;

import type { AreaChartProps } from '../area/area-chart.props';
import type { CartesianChartSelectEvent } from '../props/cartesian';

/**
 * Props for LineChart.
 * Line chart is AreaChart with no fill (areaOpacity=0, areaFill='transparent').
 * Inherits Cartesian chart props (axes, grid, legend, {@link CartesianChartProps#onSelect | onSelect}, …).
 * common -> cartesian -> area -> line
 */
export type LineChartProps = Omit<AreaChartProps, 'areaOpacity' | 'areaFill'>;

/** Selection payload for {@link LineChartProps} / `onSelect` (same as {@link CartesianChartSelectEvent}). */
export type LineChartSelectEvent = CartesianChartSelectEvent;

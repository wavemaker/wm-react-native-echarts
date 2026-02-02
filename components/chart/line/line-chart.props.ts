import type { AreaChartProps } from '../area/area-chart.props';

/**
 * Props for LineChart.
 * Line chart is AreaChart with no fill (areaOpacity=0, areaFill='transparent').
 * common -> cartesian -> area -> line
 */
export type LineChartProps = Omit<AreaChartProps, 'areaOpacity' | 'areaFill'>;

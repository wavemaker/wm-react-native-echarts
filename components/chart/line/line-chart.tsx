import React from 'react';
import { AreaChart } from '../area/area-chart';
import type { AreaChartProps } from '../area/area-chart';

/**
 * Line chart props: same as AreaChart except areaOpacity and areaFill are fixed (no fill).
 * Line chart is implemented as AreaChart with areaOpacity=0.
 */
export type LineChartProps = Omit<AreaChartProps, 'areaOpacity' | 'areaFill'>;

function LineChartComponent(props: LineChartProps) {
  return <AreaChart {...props} areaOpacity={0} areaFill="transparent" />;
}

export const LineChart = Object.assign(LineChartComponent, {
  displayName: 'LineChart',
});

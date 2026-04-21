import React from 'react';
import { AreaChart } from '../area/area-chart';
import type { LineChartProps } from './line-chart.props';

/** common -> cartesian -> area -> line */
export type {
  LineChartProps,
  LineChartAxisTooltipParams,
  LineChartTooltipSeriesItem,
} from './line-chart.props';

function LineChartComponent(props: LineChartProps) {
  return <AreaChart {...props} areaOpacity={0} areaFill="transparent" />;
}

export const LineChart = Object.assign(LineChartComponent, {
  displayName: 'LineChart',
});

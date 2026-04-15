import React from 'react';
import { ColumnChart } from '../column/column-chart';
import type { BarChartProps } from './bar-chart.props';

/**
 * Bar chart is the horizontal orientation of column chart.
 * Renders ColumnChart with horizontal={true}.
 */
export type { BarChartProps } from './bar-chart.props';

const BarChartComponent = (props: BarChartProps) => (
  <ColumnChart {...props} horizontal={true} />
);

export const BarChart = Object.assign(BarChartComponent, {
  displayName: 'BarChart',
});

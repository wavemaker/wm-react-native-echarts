import React from 'react';
import { GeoChart } from './geo-chart';
import type { GeoChartProps } from './geo-chart.props';

export type WorldChartProps = Omit<GeoChartProps, 'mapJson'> & {
  /** @default 'world' */
  mapName?: string;
};

/**
 * Wrapper around GeoChart with the world map pre-loaded (uses default in GeoChart).
 * Pass data with country/region names matching world.json (e.g. "United States", "China").
 */
export function WorldChart({ mapName = 'world', ...props }: WorldChartProps) {
  return <GeoChart mapName={mapName} {...props} />;
}

WorldChart.displayName = 'WorldChart';

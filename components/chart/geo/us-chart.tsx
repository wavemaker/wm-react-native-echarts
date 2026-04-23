import React from 'react';
import usStatesRaw from './us-states.json';
import { GeoChart, GeoMapJsonContext } from './geo-chart';
import type { GeoChartProps, GeoJSONMap } from './geo-chart.props';

/** US states GeoJSON — bundled once for USChart (static import avoids top-level await in Vite builds). */
const usStatesMapJson = usStatesRaw as GeoJSONMap;

export type USChartProps = Omit<GeoChartProps, 'mapJson' | 'mapName'> & {
  /** @default 'usa' */
  mapName?: string;
};

/**
 * Wrapper around GeoChart with the US states map pre-loaded.
 * Pass data with state names matching us-states.json (e.g. "Alabama", "California").
 */
export function USChart(props: USChartProps) {
  return (
    <GeoMapJsonContext.Provider value={usStatesMapJson}>
      <GeoChart mapName='usa' {...props} />
    </GeoMapJsonContext.Provider>
  );
}

USChart.displayName = 'USChart';

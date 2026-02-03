import React from 'react';
import { GeoChart, GeoMapJsonContext } from './geo-chart';
import type { GeoChartProps, GeoJSONMap } from './geo-chart.props';

/** US states GeoJSON — loaded once for USChart. */
const usStatesMapJson: GeoJSONMap =
  await (async () => {
    const raw = (await import('../../../data/us-states.json')).default;
    return raw as GeoJSONMap;
  })();

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

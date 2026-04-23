import type { StoryObj } from '@storybook/react';
import meta from '../meta';
import { USChart } from '@components/chart/geo';
import type { GeoItemTooltipParams } from '@components/chart/geo';
import presidentialResultsByState from '../../../data/senate-results-by-state.json';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Light colors for presidential map (used in both legend and region fill)
const LIGHT_BLUE = '#93c5fd';
const LIGHT_RED = '#fca5a5';

// Electoral-style data per state { name, republican, democrat } (see data file name)
// Map to chart format: value = Republican EV, itemStyle.areaColor = light color so colors always show
const presidentialChartData = presidentialResultsByState.map((s: { name: string; republican: number }) => ({
  name: s.name,
  value: s.republican,
  itemStyle: { areaColor: s.republican === 0 ? LIGHT_BLUE : LIGHT_RED },
}));

export default {
  ...meta,
  title: 'Charts/Geo/Map',
  component: USChart,
};
type Story = StoryObj<typeof meta>;

/** Last presidential election: electoral votes by state. Light blue = Democrat, light red = Republican. Legend on right (no overlay). */
export const PresidentialResults: Story = {
  args: {
    data: presidentialChartData,
    width: 500,
    height: 350,
    visualMapMin: 0,
    visualMapMax: 54,
    visualMapMode: 'piecewise',
    piecewisePieces: [
      { min: 0, max: 0.5, label: 'Democrat', color: LIGHT_BLUE },
      { min: 0.5, max: 55, label: 'Republican', color: LIGHT_RED },
    ],
    showLegend: true,
    showHighlighter: true,
    renderTooltip: ({ name }: GeoItemTooltipParams) => {
      const row = presidentialResultsByState.find((s: { name: string }) => s.name === name) as
        | { name: string; republican: number; democrat: number }
        | undefined;
      return (
        <View
          style={{
            paddingHorizontal: 12,
            paddingVertical: 10,
            borderRadius: 10,
            backgroundColor: '#fff',
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: 'rgba(0,0,0,0.12)',
            minWidth: 160,
          }}
        >
          <Text style={{ fontSize: 13, fontWeight: '700', color: '#0f172a', marginBottom: 6 }}>{name}</Text>
          {row != null ? (
            <>
              <Text style={{ fontSize: 12, color: '#334155' }}>Republican: {row.republican} EV</Text>
              <Text style={{ fontSize: 12, color: '#334155', marginTop: 2 }}>Democrat: {row.democrat} EV</Text>
            </>
          ) : (
            <Text style={{ fontSize: 12, color: '#64748b' }}>No detail row</Text>
          )}
        </View>
      );
    },
  },
};

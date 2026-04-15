import type { GeoChartSelectEvent } from '@components/chart/geo/geo-chart.props';
import { GeoChart, GeoMapJsonContext } from '@components/chart/geo/geo-chart';
import type { StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import worldJson from '../../../data/world.json';
import meta from '../meta';

export default { ...meta, title: 'Charts/Geo/Interaction' };
type Story = StoryObj<typeof meta>;

const styles = StyleSheet.create({
  hint: { fontSize: 13, color: 'rgba(0,0,0,0.55)', marginBottom: 8 },
  payload: {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    fontSize: 12,
    color: 'rgba(0,0,0,0.85)',
  },
});

const defaultData = [
  { name: 'United States', value: 500 },
  { name: 'China', value: 600 },
  { name: 'Japan', value: 300 },
  { name: 'Germany', value: 250 },
];

/** Tap a country/region on the map. */
export const OnSelect: Story = {
  render: (args) => {
    const [selection, setSelection] = useState<GeoChartSelectEvent | null>(null);
    return (
      <GeoMapJsonContext.Provider value={worldJson as never}>
        <View>
          <Text style={styles.hint}>Tap a region on the map to trigger onSelect.</Text>
          <GeoChart {...args} onSelect={(e) => setSelection(e)} />
          <Text style={styles.payload} selectable>
            {selection == null ? 'No selection yet.' : JSON.stringify(selection, null, 2)}
          </Text>
        </View>
      </GeoMapJsonContext.Provider>
    );
  },
  args: {
    data: defaultData,
    width: 400,
    height: 280,
  },
};

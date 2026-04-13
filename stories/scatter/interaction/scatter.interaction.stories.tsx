import type { CartesianChartSelectEvent } from '@components/chart/props/cartesian';
import { ScatterChart } from '@components/chart/scatter/scatter-chart';
import type { StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import meta from '../meta';

export default { ...meta, title: 'Charts/Scatter/Interaction' };
type Story = StoryObj<typeof meta>;

const styles = StyleSheet.create({
  hint: { fontSize: 13, color: 'rgba(0,0,0,0.55)', marginBottom: 8 },
  payload: {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    fontSize: 12,
    color: 'rgba(0,0,0,0.85)',
  },
});

const samplePoints: number[][] = [
  [2, 3],
  [4, 6],
  [12, 22],
  [14, 26],
  [16, 30],
];

/** Tap a scatter point. */
export const OnSelect: Story = {
  render: (args) => {
    const [selection, setSelection] = useState<CartesianChartSelectEvent | null>(null);
    return (
      <View>
        <Text style={styles.hint}>Tap a point in the scatter series.</Text>
        <ScatterChart {...args} onSelect={(e) => setSelection(e)} />
        <Text style={styles.payload} selectable>
          {selection == null ? 'No selection yet.' : JSON.stringify(selection, null, 2)}
        </Text>
      </View>
    );
  },
  args: {
    data: samplePoints,
    symbol: 'circle',
  },
};

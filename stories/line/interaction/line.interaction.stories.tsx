import { LineChart } from '@components/chart/line/line-chart';
import type { CartesianChartSelectEvent } from '@components/chart/props/cartesian';
import type { StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import meta from '../meta';

export default { ...meta, title: 'Charts/Line/Interaction' };
type Story = StoryObj<typeof meta>;

const styles = StyleSheet.create({
  hint: { fontSize: 13, color: 'rgba(0,0,0,0.55)', marginBottom: 8 },
  payload: {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    fontSize: 12,
    color: 'rgba(0,0,0,0.85)',
  },
});

/** Tap a point on the line series; LineChart uses AreaChart under the hood. */
export const OnSelect: Story = {
  render: (args) => {
    const [selection, setSelection] = useState<CartesianChartSelectEvent | null>(null);
    return (
      <View>
        <Text style={styles.hint}>Tap a data point on the line.</Text>
        <LineChart {...args} onSelect={(e) => setSelection(e)} />
        <Text style={styles.payload} selectable>
          {selection == null ? 'No selection yet.' : JSON.stringify(selection, null, 2)}
        </Text>
      </View>
    );
  },
  args: {
    data: [
      { name: 'Series A', data: [186, 305, 237, 73, 209, 214] },
      { name: 'Series B', data: [120, 200, 150, 90, 180, 160] },
    ],
    type: 'smooth',
    symbol: 'circle',
    showLegend: true,
  },
};

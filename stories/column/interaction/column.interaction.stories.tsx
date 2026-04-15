import { ColumnChart } from '@components/chart/column/column-chart';
import type { CartesianChartSelectEvent } from '@components/chart/props/cartesian';
import type { StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import meta from '../meta';

export default { ...meta, title: 'Charts/Column/Interaction' };
type Story = StoryObj<typeof meta>;

const styles = StyleSheet.create({
  hint: { fontSize: 13, color: 'rgba(0,0,0,0.55)', marginBottom: 8 },
  payload: {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    fontSize: 12,
    color: 'rgba(0,0,0,0.85)',
  },
});

/** Tap a column; the last selection is shown below the chart. */
export const OnSelect: Story = {
  render: (args) => {
    const [selection, setSelection] = useState<CartesianChartSelectEvent | null>(null);
    return (
      <View>
        <Text style={styles.hint}>Tap a column to trigger onSelect.</Text>
        <ColumnChart {...args} onSelect={(e) => setSelection(e)} />
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
    showLegend: true,
  },
};

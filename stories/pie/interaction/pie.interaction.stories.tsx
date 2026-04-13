import { PieChart } from '@components/chart/pie/pie-chart';
import type { PieChartSelectEvent } from '@components/chart/pie/pie-chart.props';
import type { StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import meta from '../meta';

export default { ...meta, title: 'Charts/Pie/Interaction' };
type Story = StoryObj<typeof meta>;

const styles = StyleSheet.create({
  hint: { fontSize: 13, color: 'rgba(0,0,0,0.55)', marginBottom: 8 },
  payload: {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    fontSize: 12,
    color: 'rgba(0,0,0,0.85)',
  },
});

/** Tap a slice. */
export const OnSelect: Story = {
  render: (args) => {
    const [selection, setSelection] = useState<PieChartSelectEvent | null>(null);
    return (
      <View>
        <Text style={styles.hint}>Tap a slice to trigger onSelect.</Text>
        <PieChart {...args} onSelect={(e) => setSelection(e)} />
        <Text style={styles.payload} selectable>
          {selection == null ? 'No selection yet.' : JSON.stringify(selection, null, 2)}
        </Text>
      </View>
    );
  },
  args: {
    data: [
      { name: 'Chrome', value: 335 },
      { name: 'Firefox', value: 310 },
      { name: 'Safari', value: 234 },
      { name: 'Edge', value: 135 },
    ],
    showLegend: true,
  },
};

import { RadarChart } from '@components/chart/radar/radar-chart';
import type { RadarChartSelectEvent } from '@components/chart/radar/radar-chart.props';
import type { StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import meta from '../meta';

export default { ...meta, title: 'Charts/Radar/Interaction' };
type Story = StoryObj<typeof meta>;

const styles = StyleSheet.create({
  hint: { fontSize: 13, color: 'rgba(0,0,0,0.55)', marginBottom: 8 },
  payload: {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    fontSize: 12,
    color: 'rgba(0,0,0,0.85)',
  },
});

const defaultIndicators = [
  { name: 'Sales', max: 100 },
  { name: 'Marketing', max: 100 },
  { name: 'Development', max: 100 },
  { name: 'Support', max: 100 },
  { name: 'Admin', max: 100 },
];

/** Tap the radar polygon. */
export const OnSelect: Story = {
  render: (args) => {
    const [selection, setSelection] = useState<RadarChartSelectEvent | null>(null);
    return (
      <View>
        <Text style={styles.hint}>Tap the radar area to trigger onSelect.</Text>
        <RadarChart {...args} onSelect={(e) => setSelection(e)} />
        <Text style={styles.payload} selectable>
          {selection == null ? 'No selection yet.' : JSON.stringify(selection, null, 2)}
        </Text>
      </View>
    );
  },
  args: {
    indicators: defaultIndicators,
    data: [80, 60, 75, 55, 70],
    symbol: 'circle',
    symbolSize: 8,
  },
};

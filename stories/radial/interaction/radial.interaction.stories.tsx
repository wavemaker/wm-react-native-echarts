import type { RadialChartSelectEvent } from '@components/chart/radial/radial-chart.props';
import { RadialChart } from '@components/chart/radial/radial-chart';
import type { StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import meta from '../meta';

export default { ...meta, title: 'Charts/Radial/Interaction' };
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
  { label: 'Chrome', value: 92 },
  { label: 'Firefox', value: 78 },
  { label: 'Safari', value: 65 },
  { label: 'Brave', value: 52 },
  { label: 'Edge', value: 38 },
];

/** Tap a ring’s filled segment. */
export const OnSelect: Story = {
  render: (args) => {
    const [selection, setSelection] = useState<RadialChartSelectEvent | null>(null);
    return (
      <View>
        <Text style={styles.hint}>Tap a colored ring segment to trigger onSelect.</Text>
        <RadialChart {...args} onSelect={(e) => setSelection(e)} />
        <Text style={styles.payload} selectable>
          {selection == null ? 'No selection yet.' : JSON.stringify(selection, null, 2)}
        </Text>
      </View>
    );
  },
  args: {
    data: defaultData,
    showLegend: true,
  },
};

import { HeatmapChart } from '@components/chart/heatmap/heatmap-chart';
import type { HeatmapChartSelectEvent } from '@components/chart/heatmap/heatmap-chart.props';
import type { StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import meta from '../meta';
import { heatmapBaseArgs } from '../heatmap.args';

export default { ...meta, title: 'Charts/Heatmap/Interaction' };
type Story = StoryObj<typeof meta>;

const styles = StyleSheet.create({
  hint: { fontSize: 13, color: 'rgba(0,0,0,0.55)', marginBottom: 8 },
  payload: {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    fontSize: 12,
    color: 'rgba(0,0,0,0.85)',
  },
});

/** Tap a cell to trigger onSelect. */
export const OnSelect: Story = {
  render: (args) => {
    const [selection, setSelection] = useState<HeatmapChartSelectEvent | null>(null);
    return (
      <View>
        <Text style={styles.hint}>Tap a cell to trigger onSelect.</Text>
        <HeatmapChart {...args} onSelect={(e) => setSelection(e)} />
        <Text style={styles.payload} selectable>
          {selection == null ? 'No selection yet.' : JSON.stringify(selection, null, 2)}
        </Text>
      </View>
    );
  },
  args: { ...heatmapBaseArgs },
};

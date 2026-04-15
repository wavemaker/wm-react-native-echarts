import { BubbleChart } from '@components/chart/bubble/bubble-chart';
import type { CartesianChartSelectEvent } from '@components/chart/props/cartesian';
import type { StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import meta from '../meta';

export default { ...meta, title: 'Charts/Bubble/Interaction' };
type Story = StoryObj<typeof meta>;

const styles = StyleSheet.create({
  hint: { fontSize: 13, color: 'rgba(0,0,0,0.55)', marginBottom: 8 },
  payload: {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    fontSize: 12,
    color: 'rgba(0,0,0,0.85)',
  },
});

/** Tap a bubble; `z` is the size dimension when present. */
export const OnSelect: Story = {
  render: (args) => {
    const [selection, setSelection] = useState<CartesianChartSelectEvent | null>(null);
    return (
      <View>
        <Text style={styles.hint}>Tap a bubble to trigger onSelect.</Text>
        <BubbleChart {...args} onSelect={(e) => setSelection(e)} />
        <Text style={styles.payload} selectable>
          {selection == null ? 'No selection yet.' : JSON.stringify(selection, null, 2)}
        </Text>
      </View>
    );
  },
  args: {
    data: [
      [2, 3, 18],
      [8, 12, 40],
      [14, 18, 28],
      [20, 24, 55],
      [26, 30, 35],
    ],
    symbol: 'circle',
  },
};

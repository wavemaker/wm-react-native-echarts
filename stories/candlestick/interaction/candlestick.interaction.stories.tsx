import { CandlestickChart } from '@components/chart/candlestick/candlestick-chart';
import type { CartesianChartSelectEvent } from '@components/chart/props/cartesian';
import type { StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import meta from '../meta';

export default { ...meta, title: 'Charts/Candlestick/Interaction' };
type Story = StoryObj<typeof meta>;

const styles = StyleSheet.create({
  hint: { fontSize: 13, color: 'rgba(0,0,0,0.55)', marginBottom: 8 },
  payload: {
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    fontSize: 12,
    color: 'rgba(0,0,0,0.85)',
  },
});

const ohlc: [number, number, number, number][] = [
  [100, 102, 98, 103],
  [102, 101, 99, 104],
  [101, 105, 100, 106],
  [105, 103, 102, 106],
  [103, 107, 102, 108],
];

/** Tap a candle; payload includes ohlc. */
export const OnSelect: Story = {
  render: (args) => {
    const [selection, setSelection] = useState<CartesianChartSelectEvent | null>(null);
    return (
      <View>
        <Text style={styles.hint}>Tap a candlestick to trigger onSelect.</Text>
        <CandlestickChart {...args} onSelect={(e) => setSelection(e)} />
        <Text style={styles.payload} selectable>
          {selection == null ? 'No selection yet.' : JSON.stringify(selection, null, 2)}
        </Text>
      </View>
    );
  },
  args: {
    data: ohlc,
    xAxisData: ['M', 'T', 'W', 'T', 'F'],
  },
};

import { BubbleChart } from '@components/chart/bubble/bubble-chart';
import type { ScatterItemTooltipParams } from '@components/chart/scatter';
import type { StoryObj } from '@storybook/react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import meta from '../meta';

export default { ...meta, title: 'Charts/Bubble/Tooltip' };
type Story = StoryObj<typeof meta>;

const SAMPLE: [number, number, number][] = [
  [2, 12, 20],
  [5, 18, 35],
  [8, 9, 15],
  [11, 22, 40],
  [14, 16, 28],
];

const styles = StyleSheet.create({
  hint: {
    fontSize: 13,
    color: 'rgba(0,0,0,0.55)',
    marginBottom: 8,
  },
});

const baseArgs = {
  width: '100%',
  height: 300,
  data: SAMPLE,
  showLegend: false,
} as any;

export const Default: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Default tooltip preset is card (includes size when present).</Text>
      <BubbleChart {...args} />
    </View>
  ),
  args: { ...baseArgs },
};

export const Dark: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Dark preset.</Text>
      <BubbleChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'dark' },
};

export const Compact: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Compact preset.</Text>
      <BubbleChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'compact' },
};

export const Kpi: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>KPI preset.</Text>
      <BubbleChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'kpi' },
};

export const Striped: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Striped preset.</Text>
      <BubbleChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'striped' },
};

export const CustomOverride: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>renderTooltip wins over the dark preset.</Text>
      <BubbleChart {...args} />
    </View>
  ),
  args: {
    ...baseArgs,
    tooltip: 'dark',
    renderTooltip: ({ seriesName, x, y }: ScatterItemTooltipParams) => (
      <View style={{ padding: 10, borderRadius: 8, backgroundColor: '#e0e7ff' }}>
        <Text style={{ fontWeight: '700' }}>{seriesName}</Text>
        <Text>
          {x}, {y}
        </Text>
      </View>
    ),
  },
};

export const None: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>None: tooltip overlay hidden.</Text>
      <BubbleChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'none' },
};

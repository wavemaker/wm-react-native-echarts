import { ScatterChart, type ScatterItemTooltipParams } from '@components/chart/scatter';
import type { StoryObj } from '@storybook/react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import meta from '../meta';

export default { ...meta, title: 'Charts/Scatter/Tooltip' };
type Story = StoryObj<typeof meta>;

const SAMPLE_POINTS: number[][] = [
  [2, 12],
  [5, 18],
  [8, 9],
  [11, 22],
  [14, 16],
  [17, 11],
];

const SAMPLE_MULTI = [
  { name: 'Group A', data: SAMPLE_POINTS },
  { name: 'Group B', data: SAMPLE_POINTS.map(([x, y]) => [x + 1, y - 3]) },
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
  data: SAMPLE_MULTI,
  showLegend: true,
} as any;

export const Default: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Default tooltip preset is card.</Text>
      <ScatterChart {...args} />
    </View>
  ),
  args: { ...baseArgs },
};

export const Card: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Explicit card preset.</Text>
      <ScatterChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'card' },
};

export const Dark: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Dark preset.</Text>
      <ScatterChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'dark' },
};

export const Compact: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Compact preset.</Text>
      <ScatterChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'compact' },
};

export const Kpi: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>KPI preset.</Text>
      <ScatterChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'kpi' },
};

export const Striped: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Striped preset.</Text>
      <ScatterChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'striped' },
};

export const CustomOverride: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>renderTooltip wins over the dark preset.</Text>
      <ScatterChart {...args} />
    </View>
  ),
  args: {
    ...baseArgs,
    tooltip: 'dark',
    renderTooltip: ({ seriesName }: ScatterItemTooltipParams) => (
      <View style={{ padding: 12, borderRadius: 8, backgroundColor: '#dcfce7', borderWidth: 2, borderColor: '#16a34a' }}>
        <Text style={{ fontWeight: '700', color: '#14532d' }}>Custom</Text>
        <Text style={{ marginTop: 4, color: '#14532d' }}>{seriesName}</Text>
      </View>
    ),
  },
};

export const None: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>None: tooltip overlay hidden.</Text>
      <ScatterChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'none' },
};

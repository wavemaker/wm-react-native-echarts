import { RadarChart } from '@components/chart/radar/radar-chart';
import type { RadarItemTooltipParams } from '@components/chart/radar';
import type { StoryObj } from '@storybook/react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import meta from '../meta';

export default { ...meta, title: 'Charts/Radar/Tooltip' };
type Story = StoryObj<typeof meta>;

const INDICATORS = [
  { name: 'Sales', max: 100 },
  { name: 'Marketing', max: 100 },
  { name: 'Development', max: 100 },
  { name: 'Support', max: 100 },
  { name: 'Admin', max: 100 },
];

const MULTI_SERIES = [
  { name: 'Team A', value: [82, 58, 76, 52, 68] },
  { name: 'Team B', value: [64, 72, 61, 78, 55] },
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
  height: 340,
  indicators: INDICATORS,
  data: MULTI_SERIES,
  showLegend: true,
  symbol: 'circle' as const,
  symbolSize: 6,
} as any;

export const Default: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Default tooltip preset is card.</Text>
      <RadarChart {...args} />
    </View>
  ),
  args: { ...baseArgs },
};

export const Card: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Explicit card preset.</Text>
      <RadarChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'card' },
};

export const Dark: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Dark preset.</Text>
      <RadarChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'dark' },
};

export const Compact: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Compact preset.</Text>
      <RadarChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'compact' },
};

export const Kpi: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>KPI preset.</Text>
      <RadarChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'kpi' },
};

export const Striped: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Striped preset.</Text>
      <RadarChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'striped' },
};

export const CustomOverride: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>renderTooltip wins over the dark preset.</Text>
      <RadarChart {...args} />
    </View>
  ),
  args: {
    ...baseArgs,
    tooltip: 'dark',
    renderTooltip: ({ seriesName }: RadarItemTooltipParams) => (
      <View style={{ padding: 10, borderRadius: 8, backgroundColor: '#cffafe' }}>
        <Text style={{ fontWeight: '700' }}>Custom</Text>
        <Text>{seriesName}</Text>
      </View>
    ),
  },
};

export const None: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>None: tooltip overlay hidden.</Text>
      <RadarChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'none' },
};

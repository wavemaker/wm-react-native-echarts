import { PieChart } from '@components/chart/pie/pie-chart';
import type { PieItemTooltipParams, PieRingData } from '@components/chart/pie';
import type { StoryObj } from '@storybook/react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import meta from '../meta';

export default { ...meta, title: 'Charts/Pie/Tooltip' };
type Story = StoryObj<typeof meta>;

const SAMPLE_SLICES = [
  { name: 'Product A', value: 320 },
  { name: 'Product B', value: 240 },
  { name: 'Product C', value: 180 },
  { name: 'Other', value: 90 },
];

const CONCENTRIC: PieRingData[] = [
  {
    name: 'Inner',
    radius: ['0%', '38%'],
    data: [
      { name: 'North', value: 120 },
      { name: 'South', value: 95 },
      { name: 'East', value: 88 },
    ],
  },
  {
    name: 'Outer',
    radius: ['48%', '72%'],
    data: [
      { name: 'North', value: 200 },
      { name: 'South', value: 160 },
      { name: 'East', value: 140 },
    ],
  },
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
  height: 320,
  data: SAMPLE_SLICES,
  showLegend: true,
} as any;

export const Default: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Default tooltip preset is card.</Text>
      <PieChart {...args} />
    </View>
  ),
  args: { ...baseArgs },
};

export const Concentric: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Concentric rings: card preset shows ring name when applicable.</Text>
      <PieChart {...args} />
    </View>
  ),
  args: {
    width: '100%',
    height: 340,
    data: CONCENTRIC,
    showLegend: true,
  } as any,
};

export const Card: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Explicit card preset.</Text>
      <PieChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'card' },
};

export const Compact: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Compact preset.</Text>
      <PieChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'compact' },
};

export const Kpi: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>KPI preset.</Text>
      <PieChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'kpi' },
};

export const Striped: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Striped preset.</Text>
      <PieChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'striped' },
};

export const CustomOverride: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>renderTooltip wins over the compact preset.</Text>
      <PieChart {...args} />
    </View>
  ),
  args: {
    ...baseArgs,
    tooltip: 'compact',
    renderTooltip: ({ name }: PieItemTooltipParams) => (
      <View style={{ padding: 12, borderRadius: 8, backgroundColor: '#fce7f3', borderWidth: 2, borderColor: '#db2777' }}>
        <Text style={{ fontWeight: '700', color: '#831843' }}>Custom slice</Text>
        <Text style={{ marginTop: 4, color: '#831843' }}>{name}</Text>
      </View>
    ),
  },
};

export const None: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>None: tooltip overlay hidden.</Text>
      <PieChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'none' },
};

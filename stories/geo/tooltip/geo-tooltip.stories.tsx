import { WorldChart } from '@components/chart/geo';
import type { GeoItemTooltipParams } from '@components/chart/geo';
import type { StoryObj } from '@storybook/react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import meta from '../meta';

export default { ...meta, title: 'Charts/Geo/Tooltip', component: WorldChart };
type Story = StoryObj<typeof meta>;

const WORLD_SAMPLE = [
  { name: 'United States', value: 331 },
  { name: 'China', value: 1439 },
  { name: 'India', value: 1380 },
  { name: 'Brazil', value: 213 },
  { name: 'Russia', value: 146 },
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
  data: WORLD_SAMPLE,
  showLegend: true,
} as any;

export const Default: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Default tooltip preset is card.</Text>
      <WorldChart {...args} />
    </View>
  ),
  args: { ...baseArgs },
};

export const Card: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Explicit card preset.</Text>
      <WorldChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'card' },
};

export const Dark: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Dark preset.</Text>
      <WorldChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'dark' },
};

export const Compact: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Compact preset.</Text>
      <WorldChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'compact' },
};

export const Kpi: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>KPI preset.</Text>
      <WorldChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'kpi' },
};

export const Striped: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Striped preset.</Text>
      <WorldChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'striped' },
};

export const CustomOverride: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>renderTooltip wins over the dark preset.</Text>
      <WorldChart {...args} />
    </View>
  ),
  args: {
    ...baseArgs,
    tooltip: 'dark',
    renderTooltip: ({ name }: GeoItemTooltipParams) => (
      <View style={{ padding: 10, borderRadius: 8, backgroundColor: '#fef3c7' }}>
        <Text style={{ fontWeight: '700' }}>Region</Text>
        <Text>{name}</Text>
      </View>
    ),
  },
};

export const None: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>None: tooltip overlay hidden.</Text>
      <WorldChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'none' },
};

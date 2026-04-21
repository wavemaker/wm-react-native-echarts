import { RadialChart } from '@components/chart/radial/radial-chart';
import type { RadialItemTooltipParams } from '@components/chart/radial';
import type { StoryObj } from '@storybook/react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import meta from '../meta';

export default { ...meta, title: 'Charts/Radial/Tooltip' };
type Story = StoryObj<typeof meta>;

const SAMPLE_RINGS = [
  { label: 'Chrome', value: 92 },
  { label: 'Firefox', value: 78 },
  { label: 'Safari', value: 65 },
  { label: 'Brave', value: 52 },
  { label: 'Edge', value: 38 },
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
  height: 360,
  data: SAMPLE_RINGS,
  showLegend: true,
} as any;

export const Default: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Default tooltip preset is card.</Text>
      <RadialChart {...args} />
    </View>
  ),
  args: { ...baseArgs },
};

export const Card: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Explicit card preset.</Text>
      <RadialChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'card' },
};

export const Dark: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Dark preset.</Text>
      <RadialChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'dark' },
};

export const Compact: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Compact preset.</Text>
      <RadialChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'compact' },
};

export const Kpi: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>KPI preset.</Text>
      <RadialChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'kpi' },
};

export const Striped: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Striped preset.</Text>
      <RadialChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'striped' },
};

export const CustomOverride: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>renderTooltip wins over the dark preset.</Text>
      <RadialChart {...args} />
    </View>
  ),
  args: {
    ...baseArgs,
    tooltip: 'dark',
    renderTooltip: ({ ringLabel }: RadialItemTooltipParams) => (
      <View style={{ padding: 10, borderRadius: 8, backgroundColor: '#ede9fe' }}>
        <Text style={{ fontWeight: '700' }}>Custom ring</Text>
        <Text>{ringLabel}</Text>
      </View>
    ),
  },
};

export const WithCenterText: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Card preset alongside center title.</Text>
      <RadialChart {...args} />
    </View>
  ),
  args: {
    ...baseArgs,
    centerText: 'Browsers',
    centerSubtext: 'share',
  },
};

export const None: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>None: tooltip overlay hidden.</Text>
      <RadialChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'none' },
};

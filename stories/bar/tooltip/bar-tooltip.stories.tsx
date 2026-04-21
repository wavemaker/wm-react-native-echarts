import { BarChart } from '@components/chart/bar/bar-chart';
import type { AxisTooltipParams } from '@components/chart/cartesian/tooltip';
import type { StoryObj } from '@storybook/react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import meta from '../meta';

export default { ...meta, title: 'Charts/Bar/Tooltip' };
type Story = StoryObj<typeof meta>;

const SAMPLE_AXIS_DATA = [186, 305, 237, 73, 209, 214];

const SAMPLE_MULTI = [
  { name: 'Revenue', data: SAMPLE_AXIS_DATA },
  { name: 'Cost', data: [120, 200, 150, 90, 180, 160] },
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
      <BarChart {...args} />
    </View>
  ),
  args: { ...baseArgs },
};

export const Card: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Explicit card preset.</Text>
      <BarChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'card' },
};

export const Dark: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Dark preset.</Text>
      <BarChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'dark' },
};

export const Compact: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Compact preset.</Text>
      <BarChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'compact' },
};

export const Kpi: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>KPI preset.</Text>
      <BarChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'kpi' },
};

export const Striped: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Striped preset.</Text>
      <BarChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'striped' },
};

export const CustomOverride: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>renderTooltip wins over the dark preset.</Text>
      <BarChart {...args} />
    </View>
  ),
  args: {
    ...baseArgs,
    tooltip: 'dark',
    renderTooltip: ({ axisValue }: AxisTooltipParams) => (
      <View style={{ padding: 12, borderRadius: 8, backgroundColor: '#ffedd5', borderWidth: 2, borderColor: '#ea580c' }}>
        <Text style={{ fontWeight: '700', color: '#9a3412' }}>Custom</Text>
        <Text style={{ marginTop: 4, color: '#431407' }}>{String(axisValue)}</Text>
      </View>
    ),
  },
};

export const None: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>None: tooltip overlay hidden.</Text>
      <BarChart {...args} />
    </View>
  ),
  args: { ...baseArgs, tooltip: 'none' },
};

import { AreaChart } from '@components/chart/area/area-chart';
import type { AxisTooltipParams } from '@components/chart/cartesian/tooltip';
import type { StoryObj } from '@storybook/react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import meta from '../meta';

export default { ...meta, title: 'Charts/Area/Tooltip' };
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
  type: 'smooth' as const,
  symbol: 'circle' as const,
} as any;

/** Default built-in axis tooltip (`tooltip` defaults to `card`). */
export const Default: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Default tooltip preset is card (omit renderTooltip).</Text>
      <AreaChart {...args} />
    </View>
  ),
  args: {
    ...baseArgs,
  },
};

/** Explicit card preset (same as default). */
export const Card: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Explicit tooltip preset: card (same as default).</Text>
      <AreaChart {...args} />
    </View>
  ),
  args: {
    ...baseArgs,
    tooltip: 'card',
  },
};

/** Compact inline preset. */
export const Compact: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Compact preset.</Text>
      <AreaChart {...args} />
    </View>
  ),
  args: {
    ...baseArgs,
    tooltip: 'compact',
  },
};

/** KPI-style preset. */
export const Kpi: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>KPI preset.</Text>
      <AreaChart {...args} />
    </View>
  ),
  args: {
    ...baseArgs,
    tooltip: 'kpi',
  },
};

/** Striped table preset. */
export const Striped: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Striped preset.</Text>
      <AreaChart {...args} />
    </View>
  ),
  args: {
    ...baseArgs,
    tooltip: 'striped',
  },
};

/** Custom `renderTooltip` overrides the `tooltip` preset body. */
export const CustomOverride: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>
        renderTooltip is set: orange custom body wins over the compact preset.
      </Text>
      <AreaChart {...args} />
    </View>
  ),
  args: {
    ...baseArgs,
    tooltip: 'compact',
    renderTooltip: ({ axisValue }: AxisTooltipParams) => (
      <View style={{ padding: 12, borderRadius: 8, backgroundColor: '#ffedd5', borderWidth: 2, borderColor: '#ea580c' }}>
        <Text style={{ fontWeight: '700', color: '#9a3412' }}>Custom</Text>
        <Text style={{ marginTop: 4, color: '#431407' }}>{String(axisValue)}</Text>
      </View>
    ),
  },
};

/** No tooltip overlay. */
export const None: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>None: tooltip overlay hidden.</Text>
      <AreaChart {...args} />
    </View>
  ),
  args: {
    ...baseArgs,
    tooltip: 'none',
  },
};

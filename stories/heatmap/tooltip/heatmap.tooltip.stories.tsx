import { HeatmapChart } from '@components/chart/heatmap/heatmap-chart';
import type { HeatmapItemTooltipParams } from '@components/chart/heatmap';
import type { StoryObj } from '@storybook/react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import meta from '../meta';
import { heatmapBaseArgs } from '../heatmap.args';

export default { ...meta, title: 'Charts/Heatmap/Tooltip', component: HeatmapChart };
type Story = StoryObj<typeof meta>;

const styles = StyleSheet.create({
  hint: {
    fontSize: 13,
    color: 'rgba(0,0,0,0.55)',
    marginBottom: 8,
  },
});

const baseArgs = { ...heatmapBaseArgs, showLegend: true };

export const Default: Story = {
  render: (args) => (
    <View>
      <Text style={styles.hint}>Default tooltip preset is card.</Text>
      <HeatmapChart {...args} />
    </View>
  ),
  args: { ...baseArgs },
};

export const Card: Story = {
  args: { ...baseArgs, tooltip: 'card' },
};

export const Compact: Story = {
  args: { ...baseArgs, tooltip: 'compact' },
};

export const Kpi: Story = {
  args: { ...baseArgs, tooltip: 'kpi' },
};

export const Striped: Story = {
  args: { ...baseArgs, tooltip: 'striped' },
};

export const CustomOverride: Story = {
  args: {
    ...baseArgs,
    tooltip: 'compact',
    renderTooltip: ({ xLabel, yLabel, value }: HeatmapItemTooltipParams) => (
      <View style={{ padding: 10, borderRadius: 8, backgroundColor: '#fef3c7' }}>
        <Text style={{ fontWeight: '700' }}>{yLabel}</Text>
        <Text>
          {xLabel}: {String(value)}
        </Text>
      </View>
    ),
  },
};

export const None: Story = {
  args: { ...baseArgs, tooltip: 'none' },
};

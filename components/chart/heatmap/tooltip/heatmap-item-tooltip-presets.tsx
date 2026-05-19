import React from 'react';
import { Text } from 'react-native';
import type { ChartTooltipPreset } from '../../tooltip';
import {
  TooltipPresetCard,
  TooltipPresetCompact,
  TooltipPresetKpi,
  TooltipPresetStriped,
} from '../../tooltip/chart-tooltip-preset-shells';
import type { HeatmapItemTooltipParams } from './heatmap-item-tooltip.types';

function heatmapCardFromParams(p: HeatmapItemTooltipParams) {
  const { seriesName, xLabel, yLabel, value, color } = p;
  return (
    <TooltipPresetCard header={{ swatchColor: color, title: seriesName }}>
      <Text style={{ fontSize: 12, color: '#64748b' }}>
        {yLabel} · {xLabel}
      </Text>
      <Text style={{ fontSize: 14, fontWeight: '700', color: '#0f172a', marginTop: 4 }}>{String(value)}</Text>
    </TooltipPresetCard>
  );
}

function heatmapCompactFromParams(p: HeatmapItemTooltipParams) {
  const { seriesName, xLabel, yLabel, value } = p;
  return (
    <TooltipPresetCompact
      emphasis={seriesName}
      detail={`${yLabel} · ${xLabel}: ${String(value)}`}
      wrap
    />
  );
}

function heatmapKpiFromParams(p: HeatmapItemTooltipParams) {
  const { seriesName, xLabel, yLabel, value, color } = p;
  return (
    <TooltipPresetKpi
      accentColor={color ?? '#3b82f6'}
      minWidth={140}
      overline={seriesName}
      metric={String(value)}
      caption={`${yLabel} at ${xLabel}`}
    />
  );
}

function heatmapStripedFromParams(p: HeatmapItemTooltipParams) {
  const { seriesName, xLabel, yLabel, value, color } = p;
  return (
    <TooltipPresetStriped
      headerSwatch={{ color: color ?? '#64748b', title: seriesName }}
      rows={[
        { key: 'row', leftLabel: 'row', right: yLabel },
        { key: 'col', leftLabel: 'col', right: xLabel },
        { key: 'value', leftLabel: 'value', right: String(value) },
      ]}
    />
  );
}

export function createHeatmapTooltipPreset(
  preset: ChartTooltipPreset
): (params: HeatmapItemTooltipParams) => React.ReactElement {
  switch (preset) {
    case 'card':
      return (p) => heatmapCardFromParams(p);
    case 'compact':
      return (p) => heatmapCompactFromParams(p);
    case 'kpi':
      return (p) => heatmapKpiFromParams(p);
    case 'striped':
      return (p) => heatmapStripedFromParams(p);
  }
  throw new Error(`Unknown tooltip preset: ${String(preset)}`);
}

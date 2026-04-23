import React from 'react';
import { Text } from 'react-native';
import type { ChartTooltipPreset } from '../../tooltip';
import {
  TooltipPresetCard,
  TooltipPresetCompact,
  TooltipPresetKpi,
  TooltipPresetStriped,
} from '../../tooltip/chart-tooltip-preset-shells';
import type { PieItemTooltipParams } from './pie-item-tooltip.types';

function pieCardFromParams(p: PieItemTooltipParams) {
  const { name, value, percent, color, ringName } = p;
  return (
    <TooltipPresetCard
      eyebrow={ringName != null && ringName !== '' ? ringName : undefined}
      header={{ swatchColor: color, title: name, marginBottom: 6 }}
    >
      <Text style={{ fontSize: 14, fontWeight: '700', color: '#0f172a' }}>
        {value} <Text style={{ fontWeight: '500', color: '#64748b' }}>({percent.toFixed(1)}%)</Text>
      </Text>
    </TooltipPresetCard>
  );
}

function pieCompactFromParams(p: PieItemTooltipParams) {
  const { name, value, percent } = p;
  return <TooltipPresetCompact emphasis={name} detail={`${value} (${percent.toFixed(1)}%)`} wrap />;
}

function pieKpiFromParams(p: PieItemTooltipParams) {
  const { name, value, percent, color } = p;
  return (
    <TooltipPresetKpi
      accentColor={color ?? '#3b82f6'}
      minWidth={140}
      overline={name}
      metric={String(value)}
      caption={`${percent.toFixed(1)}% of total`}
    />
  );
}

function pieStripedFromParams(p: PieItemTooltipParams) {
  const { name, value, percent, color } = p;
  return (
    <TooltipPresetStriped
      headerSwatch={{ color: color ?? '#64748b', title: name }}
      rows={[
        { key: 'value', leftLabel: 'value', right: String(value) },
        { key: 'share', leftLabel: 'share', right: `${percent.toFixed(1)}%` },
      ]}
    />
  );
}

export function createPieTooltipPreset(
  preset: ChartTooltipPreset
): (params: PieItemTooltipParams) => React.ReactElement {
  switch (preset) {
    case 'card':
      return (p) => pieCardFromParams(p);
    case 'compact':
      return (p) => pieCompactFromParams(p);
    case 'kpi':
      return (p) => pieKpiFromParams(p);
    case 'striped':
      return (p) => pieStripedFromParams(p);
  }
  throw new Error(`Unknown tooltip preset: ${String(preset)}`);
}

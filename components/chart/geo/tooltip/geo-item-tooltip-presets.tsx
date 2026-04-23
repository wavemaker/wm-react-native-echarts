import React from 'react';
import { Text } from 'react-native';
import type { ChartTooltipPreset } from '../../tooltip';
import {
  TooltipPresetCard,
  TooltipPresetCompact,
  TooltipPresetKpi,
  TooltipPresetStriped,
} from '../../tooltip/chart-tooltip-preset-shells';
import type { GeoItemTooltipParams } from './geo-item-tooltip.types';

function geoCardFromParams(p: GeoItemTooltipParams) {
  const { name, value, color } = p;
  return (
    <TooltipPresetCard
      minWidth={140}
      header={{ swatchColor: color, title: name, titleVariant: 'emphasis', marginBottom: 6 }}
    >
      <Text style={{ fontSize: 20, fontWeight: '800', color: '#0f172a' }}>{String(value)}</Text>
      <Text style={{ fontSize: 11, color: '#64748b', marginTop: 4 }}>Value</Text>
    </TooltipPresetCard>
  );
}

function geoCompactFromParams(p: GeoItemTooltipParams) {
  const { name, value } = p;
  return <TooltipPresetCompact emphasis={name} detail={String(value)} wrap={false} />;
}

function geoKpiFromParams(p: GeoItemTooltipParams) {
  const { name, value, color } = p;
  return (
    <TooltipPresetKpi
      accentColor={color ?? '#3b82f6'}
      minWidth={140}
      overline={name}
      metric={String(value)}
      caption="Region value"
    />
  );
}

function geoStripedFromParams(p: GeoItemTooltipParams) {
  const { name, value, color } = p;
  return (
    <TooltipPresetStriped
      headerSwatch={{ color: color ?? '#64748b', title: name }}
      rows={[{ key: 'value', leftLabel: 'value', right: String(value) }]}
    />
  );
}

export function createGeoTooltipPreset(
  preset: ChartTooltipPreset
): (params: GeoItemTooltipParams) => React.ReactElement {
  switch (preset) {
    case 'card':
      return (p) => geoCardFromParams(p);
    case 'compact':
      return (p) => geoCompactFromParams(p);
    case 'kpi':
      return (p) => geoKpiFromParams(p);
    case 'striped':
      return (p) => geoStripedFromParams(p);
  }
  throw new Error(`Unknown tooltip preset: ${String(preset)}`);
}

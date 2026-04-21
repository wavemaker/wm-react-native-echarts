import React from 'react';
import { Text } from 'react-native';
import type { ChartTooltipPreset } from '../../tooltip';
import {
  TooltipPresetCard,
  TooltipPresetCompact,
  TooltipPresetKpi,
  TooltipPresetStriped,
} from '../../tooltip/chart-tooltip-preset-shells';
import type { ScatterItemTooltipParams } from './scatter-item-tooltip.types';

function scatterCardFromParams(p: ScatterItemTooltipParams) {
  const { seriesName, x, y, z, color } = p;
  return (
    <TooltipPresetCard header={{ swatchColor: color, title: seriesName }}>
      <Text style={{ fontSize: 14, fontWeight: '700', color: '#0f172a' }}>
        ({String(x)}, {String(y)})
      </Text>
      {z != null && Number.isFinite(z) ? (
        <Text style={{ fontSize: 12, color: '#64748b', marginTop: 4 }}>size: {String(z)}</Text>
      ) : null}
    </TooltipPresetCard>
  );
}

function scatterCompactFromParams(p: ScatterItemTooltipParams) {
  const { seriesName, x, y, z } = p;
  const zPart = z != null && Number.isFinite(z) ? ` · ${String(z)}` : '';
  return (
    <TooltipPresetCompact
      emphasis={seriesName}
      detail={`(${String(x)}, ${String(y)}${zPart})`}
      wrap
    />
  );
}

function scatterKpiFromParams(p: ScatterItemTooltipParams) {
  const { seriesName, x, y, z, color } = p;
  return (
    <TooltipPresetKpi
      accentColor={color ?? '#3b82f6'}
      minWidth={140}
      overline={seriesName}
      metric={String(y)}
      caption={`y at x = ${String(x)}${z != null && Number.isFinite(z) ? ` · size ${String(z)}` : ''}`}
    />
  );
}

function scatterStripedFromParams(p: ScatterItemTooltipParams) {
  const { seriesName, x, y, z, color } = p;
  const rows = [
    { key: 'x' as const, leftLabel: 'x' as const, right: String(x) },
    { key: 'y' as const, leftLabel: 'y' as const, right: String(y) },
    ...(z != null && Number.isFinite(z)
      ? [{ key: 'size' as const, leftLabel: 'size' as const, right: String(z) }]
      : []),
  ];
  return (
    <TooltipPresetStriped
      headerSwatch={{ color: color ?? '#64748b', title: seriesName }}
      rows={rows.map((row) => ({
        key: row.key,
        leftLabel: row.leftLabel,
        right: row.right,
      }))}
    />
  );
}

export function createScatterTooltipPreset(
  preset: ChartTooltipPreset
): (params: ScatterItemTooltipParams) => React.ReactElement {
  switch (preset) {
    case 'card':
      return (p) => scatterCardFromParams(p);
    case 'compact':
      return (p) => scatterCompactFromParams(p);
    case 'kpi':
      return (p) => scatterKpiFromParams(p);
    case 'striped':
      return (p) => scatterStripedFromParams(p);
  }
  throw new Error(`Unknown tooltip preset: ${String(preset)}`);
}

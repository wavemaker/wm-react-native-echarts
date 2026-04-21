import React from 'react';
import { Text } from 'react-native';
import { useChartTheme } from '../../chart-theme.context';
import type { ChartTooltipPreset } from '../../tooltip';
import {
  TooltipPresetCard,
  TooltipPresetCompact,
  TooltipPresetDark,
  TooltipPresetKpi,
  TooltipPresetStriped,
} from '../../tooltip/chart-tooltip-preset-shells';
import type { RadialItemTooltipParams } from './radial-item-tooltip.types';

function radialCardFromParams(p: RadialItemTooltipParams) {
  const { ringLabel, value, color } = p;
  return (
    <TooltipPresetCard header={{ swatchColor: color, title: ringLabel, marginBottom: 6 }}>
      <Text style={{ fontSize: 22, fontWeight: '800', color: '#0f172a' }}>{value.toFixed(0)}%</Text>
      <Text style={{ fontSize: 12, color: '#64748b', marginTop: 4 }}>filled vs 100%</Text>
    </TooltipPresetCard>
  );
}

function radialDarkFromParams(p: RadialItemTooltipParams) {
  const { ringLabel, value, color } = p;
  return (
    <TooltipPresetDark
      kind="item"
      minWidth={140}
      barColor={color ?? '#64748b'}
      title={ringLabel}
      headerMarginBottom={6}
      primaryValue={`${value.toFixed(0)}%`}
      primaryValueSize="xl"
      footnote="ring fill"
    />
  );
}

function radialCompactFromParams(p: RadialItemTooltipParams) {
  const { ringLabel, value } = p;
  return <TooltipPresetCompact emphasis={ringLabel} detail={`${value.toFixed(0)}% fill`} wrap />;
}

function RadialKpiPresetBody(p: RadialItemTooltipParams) {
  const { theme } = useChartTheme();
  const { ringLabel, value, color } = p;
  return (
    <TooltipPresetKpi
      accentColor={color ?? '#3b82f6'}
      minWidth={140}
      overline={ringLabel}
      metric={
        <Text style={{ fontSize: 32, fontWeight: '800', color: theme.tooltip.valueColor, marginTop: 4 }}>
          {value.toFixed(0)}%
        </Text>
      }
      caption="of ring capacity"
    />
  );
}

function radialStripedFromParams(p: RadialItemTooltipParams) {
  const { ringLabel, value, color } = p;
  const rest = Math.max(0, 100 - value);
  return (
    <TooltipPresetStriped
      headerSwatch={{ color: color ?? '#64748b', title: ringLabel }}
      rows={[
        { key: 'filled', leftLabel: 'filled', right: `${value.toFixed(0)}%` },
        { key: 'remaining', leftLabel: 'remaining', right: `${rest.toFixed(0)}%` },
      ]}
    />
  );
}

export function createRadialTooltipPreset(
  preset: ChartTooltipPreset
): (params: RadialItemTooltipParams) => React.ReactElement {
  switch (preset) {
    case 'card':
      return (p) => radialCardFromParams(p);
    case 'dark':
      return (p) => radialDarkFromParams(p);
    case 'compact':
      return (p) => radialCompactFromParams(p);
    case 'kpi':
      return (p) => <RadialKpiPresetBody {...p} />;
    case 'striped':
      return (p) => radialStripedFromParams(p);
  }
  throw new Error(`Unknown tooltip preset: ${String(preset)}`);
}

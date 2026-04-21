import React from 'react';
import type { ChartTooltipPreset } from '../../tooltip';
import {
  TooltipPresetCard,
  TooltipPresetCompact,
  TooltipPresetDark,
  TooltipPresetKpi,
  TooltipPresetStriped,
} from '../../tooltip/chart-tooltip-preset-shells';
import type { RadarItemTooltipParams } from './radar-item-tooltip.types';

function radarCardFromParams(p: RadarItemTooltipParams) {
  const { seriesName, dimensionValues, color } = p;
  return (
    <TooltipPresetCard
      header={{ swatchColor: color, title: seriesName }}
      keyValueRows={dimensionValues.map((d) => ({
        key: d.indicatorName,
        left: d.indicatorName,
        right: String(d.value),
      }))}
    />
  );
}

function radarDarkFromParams(p: RadarItemTooltipParams) {
  const { seriesName, dimensionValues, color } = p;
  return (
    <TooltipPresetDark
      kind="item"
      minWidth={160}
      barColor={color ?? '#64748b'}
      title={seriesName}
      headerMarginBottom={8}
      kvRows={dimensionValues.map((d) => ({
        key: d.indicatorName,
        left: d.indicatorName,
        right: String(d.value),
      }))}
    />
  );
}

function radarCompactFromParams(p: RadarItemTooltipParams) {
  const { seriesName, dimensionValues } = p;
  const avg =
    dimensionValues.length > 0
      ? dimensionValues.reduce((s, d) => s + (Number.isFinite(d.value) ? d.value : 0), 0) / dimensionValues.length
      : 0;
  return (
    <TooltipPresetCompact
      emphasis={seriesName}
      detail={`avg ${avg.toFixed(1)} · ${dimensionValues.length} axes`}
      wrap
    />
  );
}

function radarKpiFromParams(p: RadarItemTooltipParams) {
  const { seriesName, dimensionValues, color } = p;
  const primary = dimensionValues[0];
  const rest = dimensionValues.slice(1);
  return (
    <TooltipPresetKpi
      accentColor={color ?? '#3b82f6'}
      minWidth={160}
      overline={seriesName}
      metric={primary != null ? String(primary.value) : ''}
      caption={primary?.indicatorName}
      footerRows={
        rest.length > 0
          ? rest.map((d) => ({
              key: d.indicatorName,
              left: d.indicatorName,
              right: String(d.value),
            }))
          : undefined
      }
    />
  );
}

function radarStripedFromParams(p: RadarItemTooltipParams) {
  const { seriesName, dimensionValues, color } = p;
  return (
    <TooltipPresetStriped
      headerSwatch={{ color: color ?? '#64748b', title: seriesName }}
      rows={dimensionValues.map((d) => ({
        key: d.indicatorName,
        leftLabel: d.indicatorName,
        right: String(d.value),
      }))}
    />
  );
}

export function createRadarTooltipPreset(
  preset: ChartTooltipPreset
): (params: RadarItemTooltipParams) => React.ReactElement {
  switch (preset) {
    case 'card':
      return (p) => radarCardFromParams(p);
    case 'dark':
      return (p) => radarDarkFromParams(p);
    case 'compact':
      return (p) => radarCompactFromParams(p);
    case 'kpi':
      return (p) => radarKpiFromParams(p);
    case 'striped':
      return (p) => radarStripedFromParams(p);
  }
}

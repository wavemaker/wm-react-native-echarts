import React from 'react';
import type { ChartTooltipPreset } from '../../tooltip';
import {
  TooltipPresetCard,
  TooltipPresetCompact,
  TooltipPresetDark,
  TooltipPresetKpi,
  TooltipPresetStriped,
} from '../../tooltip/chart-tooltip-preset-shells';
import type { AxisTooltipParams } from './axis-tooltip.types';

function axisCardFromParams({ axisValue, series }: AxisTooltipParams) {
  return (
    <TooltipPresetCard
      categoryTitle={String(axisValue)}
      seriesRows={series.map((s) => ({
        key: s.seriesIndex,
        swatchColor: s.color ?? '#94a3b8',
        label: s.seriesName,
        value: s.value,
      }))}
    />
  );
}

function axisDarkFromParams({ axisValue, series }: AxisTooltipParams) {
  return (
    <TooltipPresetDark
      kind="axis"
      categoryTitle={String(axisValue)}
      seriesRows={series.map((s) => ({
        key: s.seriesIndex,
        barColor: s.color ?? '#64748b',
        label: s.seriesName,
        value: s.value,
      }))}
    />
  );
}

function axisCompactFromParams({ axisValue, series }: AxisTooltipParams) {
  const detail = series.map((s) => `${s.seriesName} ${s.value}`).join(' · ');
  return <TooltipPresetCompact emphasis={String(axisValue)} detail={detail} wrap />;
}

function axisKpiFromParams({ axisValue, series }: AxisTooltipParams) {
  const primary = series[0];
  const rest = series.slice(1);
  return (
    <TooltipPresetKpi
      accentColor={primary?.color ?? '#3b82f6'}
      minWidth={160}
      overline={String(axisValue)}
      metric={primary?.value ?? ''}
      caption={primary?.seriesName}
      footerRows={
        rest.length > 0
          ? rest.map((s) => ({
              key: s.seriesIndex,
              left: s.seriesName,
              right: s.value,
            }))
          : undefined
      }
    />
  );
}

function axisStripedFromParams({ axisValue, series }: AxisTooltipParams) {
  return (
    <TooltipPresetStriped
      headerTitle={String(axisValue)}
      rows={series.map((s) => ({
        key: `s-${s.seriesIndex}`,
        leftLabel: s.seriesName,
        leftSwatchColor: s.color ?? '#64748b',
        right: s.value,
      }))}
    />
  );
}

export function createAxisTooltipPreset(
  preset: ChartTooltipPreset
): (params: AxisTooltipParams) => React.ReactElement {
  switch (preset) {
    case 'card':
      return (p) => axisCardFromParams(p);
    case 'dark':
      return (p) => axisDarkFromParams(p);
    case 'compact':
      return (p) => axisCompactFromParams(p);
    case 'kpi':
      return (p) => axisKpiFromParams(p);
    case 'striped':
      return (p) => axisStripedFromParams(p);
  }
}

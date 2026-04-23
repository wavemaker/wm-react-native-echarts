import type { RadarItemTooltipContext, RadarItemTooltipParams } from './radar-item-tooltip.types';

function resolveDataIndexInside(data: any, evt: any): number | null {
  if (typeof evt?.dataIndexInside === 'number' && !Number.isNaN(evt.dataIndexInside)) {
    return evt.dataIndexInside;
  }
  if (typeof evt?.dataIndex === 'number' && !Number.isNaN(evt.dataIndex)) {
    const mapped = typeof data?.indexOfRawIndex === 'function' ? data.indexOfRawIndex(evt.dataIndex) : evt.dataIndex;
    if (typeof mapped === 'number' && !Number.isNaN(mapped)) return mapped;
  }
  return null;
}

function pointerFromEventOrCenter(chart: any, evt: any): { x: number; y: number } {
  const ex = evt?.x;
  const ey = evt?.y;
  if (typeof ex === 'number' && typeof ey === 'number' && !Number.isNaN(ex) && !Number.isNaN(ey)) {
    return { x: ex, y: ey };
  }
  const w = typeof chart?.getWidth === 'function' ? chart.getWidth() : 0;
  const h = typeof chart?.getHeight === 'function' ? chart.getHeight() : 0;
  return { x: w > 0 ? w / 2 : 0, y: h > 0 ? h / 2 : 0 };
}

/**
 * Build radar item tooltip params from an ECharts `showTip` payload.
 * Ignores axis-style payloads (`dataByCoordSys`).
 */
export function radarItemParamsFromShowTip(
  chart: any,
  evt: any,
  ctx: RadarItemTooltipContext,
  themeSeries: Array<{ color: string }>
): RadarItemTooltipParams | null {
  if (!chart || !evt) return null;
  if (Array.isArray(evt.dataByCoordSys) && evt.dataByCoordSys.length > 0) return null;

  const si = typeof evt.seriesIndex === 'number' ? evt.seriesIndex : 0;
  const seriesModel = chart.getModel?.().getSeriesByIndex?.(si);
  const seriesKind = seriesModel?.subType ?? seriesModel?.get?.('type');
  if (!seriesModel || seriesKind !== 'radar') return null;

  const data = seriesModel.getData?.();
  if (!data) return null;

  const diInside = resolveDataIndexInside(data, evt);
  if (diInside == null || diInside < 0) return null;

  const row = ctx.normalizedSeries[diInside];
  if (!row?.value?.length) return null;

  const pixel = pointerFromEventOrCenter(chart, evt);

  const seriesName =
    String(data.getName?.(diInside) ?? row.name ?? '') || `Series ${diInside + 1}`;

  const dimensionValues = ctx.indicators.map((ind, i) => ({
    indicatorName: ind.name,
    value: Number(row.value[i]),
  }));

  let color: string | undefined;
  try {
    const style = data.getItemVisual?.(diInside, 'style');
    const stroke = style?.stroke;
    const fill = style?.fill;
    if (typeof stroke === 'string' && stroke !== '') color = stroke;
    else if (typeof fill === 'string' && fill !== '') color = fill;
  } catch {
    /* ignore */
  }
  if (color == null) {
    const themeLen = Math.max(themeSeries.length, 1);
    color = themeSeries[diInside % themeLen]?.color;
  }

  return {
    pointerX: pixel.x,
    pointerY: pixel.y,
    seriesIndex: si,
    dataIndex: diInside,
    seriesName,
    dimensionValues,
    ...(typeof color === 'string' ? { color } : {}),
  };
}

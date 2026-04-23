import type { ScatterItemTooltipContext, ScatterItemTooltipParams } from './scatter-item-tooltip.types';

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

function scatterItemPixel(chart: any, seriesModel: any, data: any, diInside: number): { x: number; y: number } | null {
  const layout = data.getItemLayout?.(diInside);
  if (layout && Number.isFinite(layout.x) && Number.isFinite(layout.y)) {
    const w = typeof layout.width === 'number' ? layout.width : 0;
    const h = typeof layout.height === 'number' ? layout.height : 0;
    return { x: layout.x + w / 2, y: layout.y + h / 2 };
  }
  try {
    const dims = data.dimensions ?? [];
    if (dims.length >= 2 && typeof chart.convertToPixel === 'function') {
      const v0 = data.get(dims[0], diInside);
      const v1 = data.get(dims[1], diInside);
      const pt = chart.convertToPixel({ seriesIndex: seriesModel.seriesIndex }, [v0, v1]);
      if (Array.isArray(pt) && pt.length >= 2 && Number.isFinite(pt[0]) && Number.isFinite(pt[1])) {
        return { x: pt[0], y: pt[1] };
      }
    }
  } catch {
    /* ignore */
  }
  return null;
}

/**
 * Build scatter/bubble tooltip params from an ECharts `showTip` action and chart instance.
 * Ignores axis-style payloads (`dataByCoordSys`). Skips non-scatter series (e.g. regression line).
 */
export function scatterItemParamsFromShowTip(
  chart: any,
  evt: any,
  ctx: ScatterItemTooltipContext,
  themeSeries: Array<{ color: string }>
): ScatterItemTooltipParams | null {
  if (!chart || !evt) return null;
  if (Array.isArray(evt.dataByCoordSys) && evt.dataByCoordSys.length > 0) return null;

  const si = evt.seriesIndex;
  if (typeof si !== 'number' || si < 0) return null;

  const seriesModel = chart.getModel?.().getSeriesByIndex?.(si);
  const seriesKind = seriesModel?.subType ?? seriesModel?.get?.('type');
  if (!seriesModel || seriesKind !== 'scatter') return null;

  const data = seriesModel.getData?.();
  if (!data) return null;

  const diInside = resolveDataIndexInside(data, evt);
  if (diInside == null || diInside < 0) return null;

  const pixel = scatterItemPixel(chart, seriesModel, data, diInside);
  if (!pixel) return null;

  const s = ctx.normalizedSeries[si];
  const row = s?.data?.[diInside];
  if (!row || row.length < 2) return null;

  const x = Number(row[0]);
  const y = Number(row[1]);
  const z = row.length >= 3 ? Number(row[2]) : undefined;
  if (!Number.isFinite(x) || !Number.isFinite(y)) return null;

  const seriesName =
    s?.name != null && s.name !== '' ? String(s.name) : `Series ${si + 1}`;
  const themeLen = Math.max(themeSeries.length, 1);
  const color = themeSeries[si % themeLen]?.color;

  return {
    pointerX: pixel.x,
    pointerY: pixel.y,
    seriesIndex: si,
    dataIndex: diInside,
    seriesName,
    x,
    y,
    ...(Number.isFinite(z) ? { z } : {}),
    ...(typeof color === 'string' ? { color } : {}),
  };
}

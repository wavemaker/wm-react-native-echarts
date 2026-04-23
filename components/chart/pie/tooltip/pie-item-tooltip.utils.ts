import type { PieItemTooltipContext, PieItemTooltipParams } from './pie-item-tooltip.types';

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

function pieSectorCenter(data: any, diInside: number): { x: number; y: number } | null {
  const layout = data.getItemLayout?.(diInside);
  if (!layout || !Number.isFinite(layout.cx) || !Number.isFinite(layout.cy)) return null;
  const cx = Number(layout.cx);
  const cy = Number(layout.cy);
  const r = Number(layout.r);
  const r0 = Number(layout.r0 ?? 0);
  const startAngle = Number(layout.startAngle);
  const endAngle = Number(layout.endAngle);
  if (!Number.isFinite(startAngle) || !Number.isFinite(endAngle)) return null;
  const mid = (startAngle + endAngle) / 2;
  const avgR = (r0 + r) / 2;
  return {
    x: cx + Math.cos(mid) * avgR,
    y: cy + Math.sin(mid) * avgR,
  };
}

function pointerFromEventOrSector(chart: any, evt: any, seriesModel: any, data: any, diInside: number): { x: number; y: number } | null {
  const ex = evt?.x;
  const ey = evt?.y;
  if (typeof ex === 'number' && typeof ey === 'number' && !Number.isNaN(ex) && !Number.isNaN(ey)) {
    return { x: ex, y: ey };
  }
  return pieSectorCenter(data, diInside);
}

function sliceValueAt(data: any, diInside: number): number {
  try {
    const dim = typeof data.mapDimension === 'function' ? data.mapDimension('value') : null;
    if (dim != null) {
      const v = data.get(dim, diInside);
      const n = Number(v);
      if (Number.isFinite(n)) return n;
    }
  } catch {
    /* ignore */
  }
  const v0 = data.get?.(0, diInside);
  const n0 = Number(v0);
  if (Number.isFinite(n0)) return n0;
  try {
    const n1 = Number(data.get?.('value', diInside));
    if (Number.isFinite(n1)) return n1;
  } catch {
    /* ignore */
  }
  return NaN;
}

function seriesValueTotal(data: any): number {
  const n = typeof data.count === 'function' ? data.count() : 0;
  let total = 0;
  for (let i = 0; i < n; i++) {
    const v = sliceValueAt(data, i);
    if (Number.isFinite(v)) total += v;
  }
  return total;
}

/**
 * Build pie item tooltip params from an ECharts `showTip` payload and chart instance.
 * Ignores axis-style payloads (`dataByCoordSys`).
 */
export function pieItemParamsFromShowTip(
  chart: any,
  evt: any,
  ctx: PieItemTooltipContext,
  themeSeries: Array<{ color: string }>
): PieItemTooltipParams | null {
  if (!chart || !evt) return null;
  if (Array.isArray(evt.dataByCoordSys) && evt.dataByCoordSys.length > 0) return null;

  const si = evt.seriesIndex;
  if (typeof si !== 'number' || si < 0) return null;

  const seriesModel = chart.getModel?.().getSeriesByIndex?.(si);
  const seriesKind = seriesModel?.subType ?? seriesModel?.get?.('type');
  if (!seriesModel || seriesKind !== 'pie') return null;

  const data = seriesModel.getData?.();
  if (!data) return null;

  const diInside = resolveDataIndexInside(data, evt);
  if (diInside == null || diInside < 0) return null;

  const pixel = pointerFromEventOrSector(chart, evt, seriesModel, data, diInside);
  if (!pixel) return null;

  const ring = ctx.normalizedSeries[si];
  const row = ring?.data?.[diInside];
  if (!row) return null;

  const name = String(data.getName?.(diInside) ?? row.name ?? '');
  const fromModel = sliceValueAt(data, diInside);
  const value = Number.isFinite(fromModel) ? fromModel : Number(row.value);
  const total = seriesValueTotal(data);
  const percent = total > 0 ? (value / total) * 100 : 0;

  let color: string | undefined;
  try {
    const style = data.getItemVisual?.(diInside, 'style');
    const fill = style?.fill;
    if (typeof fill === 'string' && fill !== '') color = fill;
  } catch {
    /* ignore */
  }
  if (color == null) {
    const themeLen = Math.max(themeSeries.length, 1);
    color = themeSeries[diInside % themeLen]?.color;
  }

  const ringNameRaw = seriesModel.get?.('name');
  const ringName =
    typeof ringNameRaw === 'string' && ringNameRaw !== '' ? ringNameRaw : ring?.name != null && ring.name !== ''
      ? String(ring.name)
      : undefined;

  return {
    pointerX: pixel.x,
    pointerY: pixel.y,
    seriesIndex: si,
    dataIndex: diInside,
    name,
    value,
    percent,
    ...(typeof color === 'string' ? { color } : {}),
    ...(ringName != null ? { ringName } : {}),
  };
}

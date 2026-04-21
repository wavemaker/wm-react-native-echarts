import type { GeoItemTooltipContext, GeoItemTooltipParams } from './geo-item-tooltip.types';

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

/** Resolve region row index in series data when `showTip` only carries `name`. */
function resolveRegionDataIndex(data: any, name: string, diInside: number | null): number | null {
  if (diInside != null && diInside >= 0) return diInside;
  if (!data || name === '') return null;
  try {
    if (typeof data.indexOfName === 'function') {
      const i = data.indexOfName(name);
      if (typeof i === 'number' && i >= 0) return i;
    }
  } catch {
    /* ignore */
  }
  try {
    const n = typeof data.count === 'function' ? data.count() : 0;
    for (let i = 0; i < n; i++) {
      if (String(data.getName?.(i) ?? '') === name) return i;
    }
  } catch {
    /* ignore */
  }
  return null;
}

/**
 * Pointer from `showTip` / zrender when present (map dispatch often omits `x`/`y`).
 */
function pointerFromEvent(evt: any): { x: number; y: number } | null {
  const pairs: Array<[unknown, unknown]> = [
    [evt?.x, evt?.y],
    [evt?.offsetX, evt?.offsetY],
    [evt?.event?.offsetX, evt?.event?.offsetY],
    [evt?.event?.zrX, evt?.event?.zrY],
  ];
  for (const [x, y] of pairs) {
    if (typeof x === 'number' && typeof y === 'number' && !Number.isNaN(x) && !Number.isNaN(y)) {
      return { x, y };
    }
  }
  return null;
}

/** Last zrender pointer (chart pixel space); `showTip` for `trigger: 'item'` map often omits x/y. */
function pointerFromZrLast(last: { x: number; y: number } | null | undefined): { x: number; y: number } | null {
  if (last == null) return null;
  const { x, y } = last;
  if (typeof x === 'number' && typeof y === 'number' && !Number.isNaN(x) && !Number.isNaN(y)) {
    return { x, y };
  }
  return null;
}

/** Match ECharts `findPointFromSeries`: series tooltip position or region graphic centroid. */
function pointerFromMapRegion(chart: any, seriesIndex: number, dataIndexInside: number): { x: number; y: number } | null {
  try {
    const seriesModel = chart.getModel?.().getSeriesByIndex?.(seriesIndex);
    if (!seriesModel) return null;
    const data = seriesModel.getData?.();
    if (!data) return null;
    if (typeof seriesModel.getTooltipPosition === 'function') {
      const pt = seriesModel.getTooltipPosition(dataIndexInside);
      if (Array.isArray(pt) && pt.length >= 2 && Number.isFinite(pt[0]) && Number.isFinite(pt[1])) {
        return { x: pt[0], y: pt[1] };
      }
    }
    const el = data.getItemGraphicEl?.(dataIndexInside);
    if (el && typeof el.getBoundingRect === 'function') {
      const rect = el.getBoundingRect().clone();
      const transform = (el as { transform?: unknown }).transform;
      if (rect && typeof rect.applyTransform === 'function' && transform != null) {
        rect.applyTransform(transform as never);
      }
      const cx = rect.x + rect.width / 2;
      const cy = rect.y + rect.height / 2;
      if (Number.isFinite(cx) && Number.isFinite(cy)) {
        return { x: cx, y: cy };
      }
    }
  } catch {
    /* ignore */
  }
  return null;
}

function pointerFromConvertToPixel(chart: any, seriesIndex: number, name: string): { x: number; y: number } | null {
  try {
    if (typeof chart.convertToPixel !== 'function') return null;
    const pt = chart.convertToPixel({ seriesIndex }, name);
    if (Array.isArray(pt) && pt.length >= 2 && Number.isFinite(pt[0]) && Number.isFinite(pt[1])) {
      return { x: pt[0], y: pt[1] };
    }
  } catch {
    /* ignore */
  }
  return null;
}

function pointerFromEventOrCenter(chart: any, evt: any): { x: number; y: number } {
  const w = typeof chart?.getWidth === 'function' ? chart.getWidth() : 0;
  const h = typeof chart?.getHeight === 'function' ? chart.getHeight() : 0;
  return { x: w > 0 ? w / 2 : 0, y: h > 0 ? h / 2 : 0 };
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

/**
 * Build geo map item tooltip params from an ECharts `showTip` payload.
 * Ignores axis-style payloads (`dataByCoordSys`).
 */
export function geoItemParamsFromShowTip(
  chart: any,
  evt: any,
  ctx: GeoItemTooltipContext,
  themeSeries: Array<{ color: string }>,
  /** Prefer over region centroid: matches the pointer that drove hover / emphasis. */
  lastZrPointer?: { x: number; y: number } | null
): GeoItemTooltipParams | null {
  if (!chart || !evt) return null;
  if (Array.isArray(evt.dataByCoordSys) && evt.dataByCoordSys.length > 0) return null;

  const si = typeof evt.seriesIndex === 'number' ? evt.seriesIndex : 0;
  const seriesModel = chart.getModel?.().getSeriesByIndex?.(si);
  const seriesKind = seriesModel?.subType ?? seriesModel?.get?.('type');
  if (!seriesModel || seriesKind !== 'map') return null;

  const data = seriesModel.getData?.();
  if (!data) return null;

  const diInside = resolveDataIndexInside(data, evt);
  let name =
    typeof evt.name === 'string' && evt.name.trim() !== ''
      ? evt.name.trim()
      : '';
  if (name === '' && diInside != null && typeof data.getName === 'function') {
    name = String(data.getName(diInside) ?? '').trim();
  }
  if (name === '') return null;

  const regionDi = resolveRegionDataIndex(data, name, diInside);

  const row = ctx.regions.find((r) => r.name === name);
  let value = row != null ? Number(row.value) : NaN;
  if (!Number.isFinite(value)) {
    const fromEvt =
      typeof evt.value === 'number'
        ? evt.value
        : typeof evt.data?.value === 'number'
          ? evt.data.value
          : NaN;
    value =
      Number.isFinite(fromEvt) ? fromEvt : regionDi != null && regionDi >= 0 ? sliceValueAt(data, regionDi) : NaN;
  }
  if (!Number.isFinite(value)) value = 0;

  const pixel =
    pointerFromZrLast(lastZrPointer) ??
    pointerFromEvent(evt) ??
    (regionDi != null && regionDi >= 0 ? pointerFromMapRegion(chart, si, regionDi) : null) ??
    (regionDi != null && regionDi >= 0 ? pointerFromConvertToPixel(chart, si, name) : null) ??
    pointerFromEventOrCenter(chart, evt);

  let color: string | undefined;
  if (regionDi != null && regionDi >= 0) {
    try {
      const style = data.getItemVisual?.(regionDi, 'style');
      const area = style?.areaColor;
      const fill = style?.fill;
      if (typeof area === 'string' && area !== '') color = area;
      else if (typeof fill === 'string' && fill !== '') color = fill;
    } catch {
      /* ignore */
    }
  }
  if (color == null) {
    const themeLen = Math.max(themeSeries.length, 1);
    color = themeSeries[0 % themeLen]?.color;
  }

  return {
    pointerX: pixel.x,
    pointerY: pixel.y,
    name,
    value,
    ...(typeof color === 'string' ? { color } : {}),
  };
}

import type { HeatmapItemTooltipContext, HeatmapItemTooltipParams } from './heatmap-item-tooltip.types';

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

function heatmapItemPixel(chart: any, seriesModel: any, data: any, diInside: number): { x: number; y: number } | null {
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
 * Build heatmap tooltip params from an ECharts `showTip` action and chart instance.
 */
export function heatmapItemParamsFromShowTip(
  chart: any,
  evt: any,
  ctx: HeatmapItemTooltipContext,
  themeSeries: Array<{ color: string }>
): HeatmapItemTooltipParams | null {
  if (!chart || !evt) return null;
  if (Array.isArray(evt.dataByCoordSys) && evt.dataByCoordSys.length > 0) return null;

  const si = evt.seriesIndex;
  if (typeof si !== 'number' || si < 0) return null;

  const seriesModel = chart.getModel?.().getSeriesByIndex?.(si);
  const seriesKind = seriesModel?.subType ?? seriesModel?.get?.('type');
  if (!seriesModel || seriesKind !== 'heatmap') return null;

  const data = seriesModel.getData?.();
  if (!data) return null;

  const diInside = resolveDataIndexInside(data, evt);
  if (diInside == null || diInside < 0) return null;

  const pixel = heatmapItemPixel(chart, seriesModel, data, diInside);
  if (!pixel) return null;

  const row = ctx.data[diInside];
  if (!row || row.length < 3) return null;

  const xIndex = Number(row[0]);
  const yIndex = Number(row[1]);
  const value = Number(row[2]);
  if (!Number.isFinite(xIndex) || !Number.isFinite(yIndex) || !Number.isFinite(value)) return null;

  const xLabel = ctx.xAxisData[xIndex] ?? String(xIndex);
  const yLabel = ctx.yAxisData[yIndex] ?? String(yIndex);
  const seriesName =
    ctx.seriesName != null && ctx.seriesName !== ''
      ? String(ctx.seriesName)
      : `Series ${si + 1}`;
  const themeLen = Math.max(themeSeries.length, 1);
  const color = themeSeries[si % themeLen]?.color;

  return {
    pointerX: pixel.x,
    pointerY: pixel.y,
    seriesIndex: si,
    dataIndex: diInside,
    seriesName,
    xIndex,
    yIndex,
    xLabel,
    yLabel,
    value,
    ...(typeof color === 'string' ? { color } : {}),
  };
}

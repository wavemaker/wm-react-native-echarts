import type { AxisTooltipContext, AxisTooltipParams, AxisTooltipSeriesItem } from './axis-tooltip.types';

function isCategoryAxisEntry(a: any): boolean {
  return String(a?.axisType ?? '').toLowerCase() === 'category';
}

function hasSeriesIndices(a: any): boolean {
  return Array.isArray(a?.seriesDataIndices) && a.seriesDataIndices.length > 0;
}

/** First numeric `dataIndex` carried on the axis tooltip batch (the authoritative index for that axis). */
function dataIndexFromSeriesDataIndices(indices: any[] | undefined): number | undefined {
  if (!Array.isArray(indices)) return undefined;
  for (const item of indices) {
    const d = item?.dataIndex;
    if (typeof d === 'number' && !Number.isNaN(d)) return d;
  }
  return undefined;
}

function seriesDataIndicesFromShowTipEvt(
  evt: any,
  categoryAxisIsY: boolean | undefined
): { indices: any[]; axisEntry: any } | null {
  const axes = evt?.dataByCoordSys?.[0]?.dataByAxis;
  if (!Array.isArray(axes) || axes.length === 0) return null;

  const categoryAxes = axes.filter(isCategoryAxisEntry);
  if (categoryAxes.length === 1) {
    const axisEntry = categoryAxes[0];
    return {
      indices: Array.isArray(axisEntry.seriesDataIndices) ? axisEntry.seriesDataIndices : [],
      axisEntry,
    };
  }
  if (categoryAxes.length > 1 && categoryAxisIsY != null) {
    const dim = categoryAxisIsY ? 'y' : 'x';
    const axisEntry =
      categoryAxes.find((a: any) => a?.axisDim === dim && hasSeriesIndices(a)) ??
      categoryAxes.find((a: any) => a?.axisDim === dim) ??
      categoryAxes[0];
    return {
      indices: Array.isArray(axisEntry.seriesDataIndices) ? axisEntry.seriesDataIndices : [],
      axisEntry,
    };
  }

  if (categoryAxisIsY === true) {
    const yWith = axes.find((a: any) => a?.axisDim === 'y' && hasSeriesIndices(a));
    if (yWith) return { indices: yWith.seriesDataIndices, axisEntry: yWith };
    const yAxis = axes.find((a: any) => a?.axisDim === 'y');
    if (yAxis) return { indices: Array.isArray(yAxis.seriesDataIndices) ? yAxis.seriesDataIndices : [], axisEntry: yAxis };
    return null;
  }
  if (categoryAxisIsY === false) {
    const xWith = axes.find((a: any) => a?.axisDim === 'x' && hasSeriesIndices(a));
    if (xWith) return { indices: xWith.seriesDataIndices, axisEntry: xWith };
    const xAxis = axes.find((a: any) => a?.axisDim === 'x');
    if (xAxis) return { indices: Array.isArray(xAxis.seriesDataIndices) ? xAxis.seriesDataIndices : [], axisEntry: xAxis };
    return null;
  }

  const preferred = axes.find((a: any) => a?.axisDim === 'x' && hasSeriesIndices(a));
  const fallback = axes.find((a: any) => hasSeriesIndices(a));
  const axisEntry = preferred ?? fallback ?? axes[0];
  const indices = axisEntry?.seriesDataIndices;
  if (!Array.isArray(indices) || indices.length === 0) return null;
  return { indices, axisEntry };
}

/** Build axis tooltip params from an ECharts `showTip` dispatch payload. */
export function axisTooltipParamsFromShowTipEvent(
  evt: any,
  ctx: AxisTooltipContext,
  seriesTheme: Array<{ color: string }>
): AxisTooltipParams | null {
  const pointerX = evt?.x;
  const pointerY = evt?.y;
  if (typeof pointerX !== 'number' || typeof pointerY !== 'number') return null;
  if (Number.isNaN(pointerX) || Number.isNaN(pointerY)) return null;

  const picked = seriesDataIndicesFromShowTipEvt(evt, ctx.categoryAxisIsY);
  if (picked == null) return null;
  const { indices, axisEntry } = picked;

  const dataIndexRaw =
    dataIndexFromSeriesDataIndices(indices) ??
    (typeof axisEntry?.dataIndex === 'number' && !Number.isNaN(axisEntry.dataIndex)
      ? axisEntry.dataIndex
      : undefined) ??
    (typeof evt?.dataIndex === 'number' && !Number.isNaN(evt.dataIndex) ? evt.dataIndex : undefined) ??
    0;

  const { displaySeries: ds, categoryAxisData: cats } = ctx;
  if (!ds?.length || dataIndexRaw < 0) return null;

  const indicesForSeries =
    Array.isArray(indices) && indices.length > 0
      ? indices
      : ds.map((_, seriesIndex) => ({ seriesIndex, dataIndex: dataIndexRaw }));

  const axisValue = cats[dataIndexRaw] ?? dataIndexRaw;
  const themeLen = Math.max(seriesTheme.length, 1);

  const series: AxisTooltipSeriesItem[] = indicesForSeries.map((item: any) => {
    const seriesIndex = typeof item.seriesIndex === 'number' ? item.seriesIndex : 0;
    const s = ds[seriesIndex];
    const seriesName =
      s?.name != null && s.name !== '' ? String(s.name) : `Series ${seriesIndex + 1}`;
    let value = 0;
    const pt = s?.data?.[dataIndexRaw];
    if (typeof pt === 'number') value = pt;
    else if (Array.isArray(pt) && pt.length >= 2) value = Number(pt[1]);
    const color = seriesTheme[seriesIndex % themeLen]?.color;
    return {
      seriesName,
      value,
      seriesIndex,
      ...(typeof color === 'string' ? { color } : {}),
    };
  });

  return {
    axisValue,
    dataIndex: dataIndexRaw,
    series,
    pointerX,
    pointerY,
  };
}

/** Spread onto ECharts `tooltip` when using an RN overlay (`showTip` / `hideTip` still fire). */
export function axisTooltipShowContentFlag(
  useCustomTooltipOverlay: boolean
): { showContent: boolean } {
  return { showContent: !useCustomTooltipOverlay };
}

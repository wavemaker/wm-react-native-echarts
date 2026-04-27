import type { LegendPosition } from '../props/common';
import type { CartesianGrid } from '../props/cartesian';

/** Grid margin (% of width) reserved when the legend is vertical on the left or right. */
const GRID_LEGEND_SIDE_PCT = '32%';

/** Extra grid margin (px) when the legend is horizontal at the top or bottom. */
const GRID_LEGEND_TOP_BOTTOM_PX = 84;

/**
 * Merges optional user `grid` with margins so the plot area clears the legend.
 * Only adds a side when the user has not set that side on `grid`.
 */
export function mergeCartesianGridForLegend(
  userGrid: CartesianGrid | undefined,
  legendPosition: LegendPosition,
  showLegend: boolean,
  hasLegendContent: boolean
): CartesianGrid | undefined {
  if (!showLegend || !hasLegendContent) {
    return userGrid;
  }

  const patch: CartesianGrid = {};
  switch (legendPosition) {
    case 'left':
      if (userGrid?.left === undefined) patch.left = GRID_LEGEND_SIDE_PCT;
      break;
    case 'right':
      if (userGrid?.right === undefined) patch.right = GRID_LEGEND_SIDE_PCT;
      break;
    case 'top':
      if (userGrid?.top === undefined) patch.top = GRID_LEGEND_TOP_BOTTOM_PX;
      break;
    case 'bottom':
    default:
      if (userGrid?.bottom === undefined) patch.bottom = GRID_LEGEND_TOP_BOTTOM_PX;
      break;
  }

  if (Object.keys(patch).length === 0) {
    return userGrid;
  }

  return { ...(userGrid ?? {}), ...patch };
}

/** Shifts radar center / radius so a vertical legend does not cover the chart. */
export function radarGeometryForLegend(
  legendPosition: LegendPosition,
  showLegend: boolean,
  hasLegend: boolean
): { center?: [string, string]; radius?: string } {
  if (!showLegend || !hasLegend) return {};
  switch (legendPosition) {
    case 'left':
      return { center: ['60%', '50%'], radius: '54%' };
    case 'right':
      return { center: ['40%', '50%'], radius: '54%' };
    case 'top':
    case 'bottom':
    default:
      return {};
  }
}

/**
 * ECharts legend fields: horizontal (top/bottom) with width so items wrap;
 * vertical (left/right) in a single column.
 */
export function echartsLegendLayoutFragment(legendPosition: LegendPosition): Record<string, unknown> {
  switch (legendPosition) {
    case 'left':
      return {
        orient: 'vertical' as const,
        top: 'middle',
        left: 8,
      };
    case 'right':
      return {
        orient: 'vertical' as const,
        top: 'middle',
        right: 8,
      };
    case 'top':
      return {
        orient: 'horizontal' as const,
        left: 'center',
        width: '92%',
        top: 8,
      };
    case 'bottom':
    default:
      return {
        orient: 'horizontal' as const,
        left: 'center',
        width: '92%',
        bottom: 8,
      };
  }
}

/** Shifts pie center slightly when a side legend is shown so slices do not overlap the legend. */
export function pieCenterForLegend(
  legendPosition: LegendPosition,
  showLegend: boolean
): [string, string] | undefined {
  if (!showLegend) return undefined;
  switch (legendPosition) {
    case 'top':
      return ['50%', '54%'];
    case 'left':
      return ['56%', '50%'];
    case 'right':
      return ['44%', '50%'];
    case 'bottom':
    default:
      return undefined;
  }
}

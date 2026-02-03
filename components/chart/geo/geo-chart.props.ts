import type { CommonChartProps } from '../props/common';

/**
 * GeoJSON Feature Collection (map geometry).
 * Used with echarts.registerMap() so region names in data match feature properties.
 */
export interface GeoJSONMap {
  type: 'FeatureCollection';
  features: Array<{
    type: string;
    geometry: { type: string; coordinates: unknown };
    properties?: Record<string, unknown>;
  }>;
  crs?: unknown;
}

/**
 * Single region data item: region name (must match map feature name) and value for color scale.
 */
export interface GeoDataItem {
  /** Region name; must match the name in the map GeoJSON (e.g. "United States", "China"). */
  name: string;
  /** Numeric value used for visual encoding (e.g. color scale). */
  value: number;
}

/**
 * Props for GeoChart.
 * Extends common chart props (width, height, theme, colors).
 */
export interface GeoChartProps extends CommonChartProps {
  /**
   * Chart data: array of { name, value } for each region.
   * Region names must match the map GeoJSON feature names.
   */
  data: GeoDataItem[];
  /**
   * GeoJSON map to display. Pass the FeatureCollection; it will be registered with mapName.
   */
  mapJson?: GeoJSONMap;
  /**
   * Name used when registering the map. Use the same value in the chart option.
   * @default 'world'
   */
  mapName?: string;
  /**
   * Whether to show the legend for the color scale (visual map).
   * @default true
   */
  showLegend?: boolean;
  /**
   * Whether to emphasize (highlight) the hovered region.
   * @default true
   */
  showHighlighter?: boolean;
  /**
   * Formatter for tooltip. (params) => string. Params include name, value.
   */
  tooltipFormatter?: (params: { name: string; value: number }) => string;
  /**
   * Minimum value for the visual map scale. Auto-derived from data if not set.
   */
  visualMapMin?: number;
  /**
   * Maximum value for the visual map scale. Auto-derived from data if not set.
   */
  visualMapMax?: number;
  /**
   * Visual map mode: 'continuous' (gradient) or 'piecewise' (distinct bands, e.g. Democrat / Competitive / Republican).
   * @default 'continuous'
   */
  visualMapMode?: 'continuous' | 'piecewise';
  /**
   * When visualMapMode is 'piecewise', define bands: [{ min, max, label, color }].
   * Example: [{ min: 0, max: 45, label: 'Democrat', color: '#3b82f6' }, { min: 45, max: 55, label: 'Competitive', color: '#94a3b8' }, { min: 55, max: 100, label: 'Republican', color: '#dc2626' }].
   */
  piecewisePieces?: Array<{ min: number; max: number; label: string; color: string }>;
}

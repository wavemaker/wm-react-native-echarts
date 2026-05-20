/**
 * Item tooltip payload for heatmap cells (ECharts `trigger: 'item'`, `seriesType: 'heatmap'`).
 */

export interface HeatmapItemTooltipParams {
  pointerX: number;
  pointerY: number;
  seriesIndex: number;
  dataIndex: number;
  seriesName: string;
  xIndex: number;
  yIndex: number;
  xLabel: string;
  yLabel: string;
  value: number;
  color?: string;
}

export interface HeatmapItemTooltipContext {
  xAxisData: string[];
  yAxisData: string[];
  data: Array<[number, number, number]>;
  seriesName?: string;
}

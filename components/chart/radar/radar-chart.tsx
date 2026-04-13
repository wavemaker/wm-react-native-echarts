import { withResponsiveContainer } from '../chart-container';
import { useChartTheme, withChartTheme } from '../chart-theme.context';
import type {
  RadarChartProps,
  RadarChartSelectEvent,
  RadarIndicator,
  RadarSeriesData,
} from './radar-chart.props';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { RadarChart as EChartsRadarChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import React, { useEffect, useMemo, useRef } from 'react';

export type {
  RadarChartProps,
  RadarChartSelectEvent,
  RadarIndicator,
  RadarSeriesData,
} from './radar-chart.props';

echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  SkiaRenderer,
  EChartsRadarChart,
]);

function normalizeRadarSeries(data: RadarSeriesData, indicatorCount: number): Array<{ name: string; value: number[] }> {
  if (!Array.isArray(data) || data.length === 0) return [];
  const first = data[0];
  if (typeof first === 'number') {
    const values = data as number[];
    if (values.length !== indicatorCount) return [];
    return [{ name: 'Series 1', value: values }];
  }
  return (data as Array<{ name?: string; value: number[] }>).map((item, index) => ({
    name: item.name ?? `Series ${index + 1}`,
    value: item.value,
  }));
}

const ChartComponent = ({
  indicators,
  data,
  width = 220,
  height = 350,
  symbol = 'none',
  symbolSize,
  showLegend = false,
  showHighlighter = true,
  showIndicatorLabels = true,
  showSplitLine = true,
  showAxisLine = true,
  onSelect,
  ...props
}: RadarChartProps) => {
  const { theme } = useChartTheme(props.theme, props.colors);
  const chartRef = useRef<any>(null);
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;
  const selectContextRef = useRef<Array<{ name: string; value: number[] }>>([]);

  const normalizedSeries = useMemo(() => {
    const count = indicators?.length ?? 0;
    return normalizeRadarSeries(data, count);
  }, [data, indicators?.length]);

  selectContextRef.current = normalizedSeries;

  const indicatorMax = useMemo(() => {
    if (!indicators?.length) return [];
    return indicators.map((ind, i) => {
      if (ind.max != null) return ind.max;
      let max = 0;
      normalizedSeries.forEach(s => {
        const v = s.value[i];
        if (typeof v === 'number' && v > max) max = v;
      });
      return max > 0 ? Math.ceil(max * 1.1) : 100;
    });
  }, [indicators, normalizedSeries]);

  const option = useMemo(() => {
    if (!indicators?.length) return { series: [] };
    const radarAxis = theme.axis.r;
    const gridStyle = theme.grid.r;

    const radarConfig: any = {
      indicator: indicators.map((ind, i) => ({
        name: ind.name,
        max: indicatorMax[i] ?? ind.max ?? 100,
      })),
      axisName: {
        show: showIndicatorLabels,
        color: radarAxis.tickLabelColor,
      },
      axisLine: showAxisLine
        ? {
            lineStyle: {
              color: radarAxis.lineColor,
              width: radarAxis.lineWidth,
            },
          }
        : { show: false },
      splitLine: showSplitLine
        ? {
            lineStyle: {
              color: gridStyle.lineColor,
              width: gridStyle.lineWidth,
            },
          }
        : { show: false },
      splitArea: {
        show: false,
      },
    };

    const radarDataItems = normalizedSeries.map(s => ({ value: s.value, name: s.name }));
    const seriesConfig: any = {
      type: 'radar',
      data: radarDataItems.map((item, index) => {
        const seriesColor = theme.series[index % theme.series.length].color;
        const seriesLineWidth = theme.series[index]?.lineWidth ?? theme.series[0].lineWidth ?? 2;
        const areaOpacityHex = Math.round(0.25 * 255).toString(16).padStart(2, '0');
        const areaColor = seriesColor + areaOpacityHex;
        return {
          value: item.value,
          name: item.name,
          symbol: symbol === 'none' ? 'circle' : symbol,
          symbolSize: symbol === 'none' ? 0 : (symbolSize ?? 6),
          lineStyle: { color: seriesColor, width: seriesLineWidth },
          areaStyle: { color: areaColor },
          emphasis: showHighlighter
            ? { focus: 'self', lineStyle: { width: seriesLineWidth + 1 }, areaStyle: { opacity: 0.8 } }
            : { focus: 'none' },
        };
      }),
    };

    const legendConfig =
      showLegend && normalizedSeries.some(s => s.name)
        ? {
            data: normalizedSeries.map(s => s.name),
            textStyle: {
              color: theme.legend.textColor,
              fontSize: theme.legend.fontSize,
            },
            backgroundColor: theme.legend.backgroundColor,
          }
        : undefined;

    const config: any = {
      radar: radarConfig,
      series: [seriesConfig],
      tooltip: {
        trigger: 'item',
      },
    };
    if (legendConfig) config.legend = legendConfig;
    return config;
  }, [
    theme,
    indicators,
    indicatorMax,
    normalizedSeries,
    symbol,
    symbolSize,
    showLegend,
    showHighlighter,
    showIndicatorLabels,
    showSplitLine,
    showAxisLine,
  ]);

  useEffect(() => {
    let chart: any;
    if (chartRef.current) {
      try {
        chart = echarts.init(chartRef.current, 'light', {
          width,
          height,
        });
        chart.setOption(option);

        const handleRadarClick = (params: {
          componentType?: string;
          seriesType?: string;
          seriesIndex?: number;
          dataIndex?: number;
        }) => {
          const cb = onSelectRef.current;
          if (typeof cb !== 'function') return;
          if (params.componentType !== 'series') return;
          if (params.seriesType !== 'radar') return;
          const dataIndex = params.dataIndex;
          if (typeof dataIndex !== 'number' || dataIndex < 0) return;
          const row = selectContextRef.current[dataIndex];
          if (!row) return;
          const event: RadarChartSelectEvent = {
            seriesIndex: params.seriesIndex ?? 0,
            dataIndex,
            seriesName: row.name,
            value: [...row.value],
          };
          cb(event);
        };

        chart.on('click', handleRadarClick);
      } catch (error) {
        console.warn('Radar chart initialization error:', error);
      }
    }
    return () => {
      if (chart) {
        try {
          chart.dispose();
        } catch (error) {
          console.warn('Radar chart disposal error:', error);
        }
      }
    };
  }, [option, width, height]);

  return <SkiaChart ref={chartRef} useRNGH />;
};

const RadarChartComponent = withResponsiveContainer(withChartTheme(ChartComponent));
export const RadarChart = Object.assign(RadarChartComponent, {
  displayName: 'RadarChart',
});

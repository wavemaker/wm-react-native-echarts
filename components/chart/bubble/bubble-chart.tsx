import { withResponsiveContainer } from '../chart-container';
import { useChartTheme, withChartTheme } from '../chart-theme.context';
import type { BubbleChartProps } from './bubble-chart.props';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { ScatterChart as EChartsScatterChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import React, { useEffect, useMemo, useRef } from 'react';

/** common -> cartesian -> scatter -> bubble */
export type { BubbleChartProps, BubbleSeriesData } from './bubble-chart.props';

echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  SkiaRenderer,
  EChartsScatterChart,
]);

function scaleSize(value: number, dataMin: number, dataMax: number, outMin: number, outMax: number): number {
  if (dataMax <= dataMin) return outMin;
  const t = (value - dataMin) / (dataMax - dataMin);
  return outMin + t * (outMax - outMin);
}

const ChartComponent = ({
  data,
  width = 220,
  height = 350,
  symbol = 'circle',
  sizeRange = [8, 50],
  showXAxis = true,
  showXAxisTicks = true,
  showYAxis = true,
  showYAxisTicks = true,
  showXAxisSplitLines = true,
  showYAxisSplitLines = true,
  boundaryGap = false,
  grid,
  showLegend = false,
  showHighlighter = true,
  xAxisTickLabelFormatter,
  yAxisTickLabelFormatter,
  xAxisLabel,
  yAxisLabel,
  ...props
}: BubbleChartProps) => {
  const { theme } = useChartTheme(props.theme, props.colors);
  const chartRef = useRef<any>(null);

  const normalizedSeries = useMemo((): Array<{ name?: string; data: [number, number, number][] }> => {
    if (!Array.isArray(data) || data.length === 0) return [];
    const first = data[0];
    if (Array.isArray(first) && first.length >= 2 && typeof first[0] === 'number') {
      const rows = data as (number[])[];
      const normalized = rows.map((row) => {
        const x = Number(row[0]);
        const y = Number(row[1]);
        const size = row.length >= 3 && typeof row[2] === 'number' ? Number(row[2]) : 10;
        return [x, y, size] as [number, number, number];
      });
      return [{ data: normalized }];
    }
    if (typeof first === 'object' && first !== null && 'data' in first) {
      return (data as Array<{ name: string; data: (number[])[] }>).map((s) => ({
        name: s.name,
        data: s.data.map((row) => {
          const x = Number(row[0]);
          const y = Number(row[1]);
          const size = row.length >= 3 && typeof row[2] === 'number' ? Number(row[2]) : 10;
          return [x, y, size] as [number, number, number];
        }),
      }));
    }
    return [];
  }, [data]);

  const hasNamedSeries = useMemo(
    () => normalizedSeries.some((s) => 'name' in s && s.name),
    [normalizedSeries]
  );

  const option = useMemo(() => {
    const tooltipConfig: any = showHighlighter
      ? {
          trigger: 'item',
          axisPointer: {
            type: 'cross',
            lineStyle: {
              type: 'line',
              width: 1,
              color: theme.series[0]?.color ?? '#999',
            },
          },
          formatter: (params: any) => {
            const p = Array.isArray(params) ? params[0] : params;
            const d = p?.data;
            if (!d || !Array.isArray(d)) return '';
            const name = p.seriesName ? `${p.seriesName}<br/>` : '';
            return `${name}x: ${d[0]}, y: ${d[1]}${d[2] != null ? `, size: ${d[2]}` : ''}`;
          },
        }
      : {
          trigger: 'item',
          formatter: (params: any) => {
            const p = Array.isArray(params) ? params[0] : params;
            const d = p?.data;
            if (!d || !Array.isArray(d)) return '';
            const name = p.seriesName ? `${p.seriesName}<br/>` : '';
            return `${name}x: ${d[0]}, y: ${d[1]}${d[2] != null ? `, size: ${d[2]}` : ''}`;
          },
        };

    const xAxisConfig: any = {
      type: 'value',
      boundaryGap,
      ...(xAxisLabel != null && xAxisLabel !== '' && {
        name: xAxisLabel,
        nameLocation: 'middle',
        nameGap: 25,
        nameTextStyle: { color: theme.axis.x.tickLabelColor },
      }),
      axisLabel: {
        show: showXAxis,
        color: theme.axis.x.tickLabelColor,
        ...(xAxisTickLabelFormatter && { formatter: xAxisTickLabelFormatter }),
      },
      axisLine: showXAxis
        ? {
            show: true,
            lineStyle: {
              color: theme.axis.x.lineColor,
              width: theme.axis.x.lineWidth,
            },
          }
        : { show: false },
      axisTick: {
        show: showXAxisTicks,
        lineStyle: {
          color: theme.axis.x.tickColor,
          width: theme.axis.x.tickWidth,
        },
      },
      splitLine: {
        show: showXAxisSplitLines,
        lineStyle: {
          color: theme.axis.x.splitLineColor,
          width: theme.axis.x.splitLineWidth,
        },
      },
    };

    const yAxisConfig: any = {
      type: 'value',
      ...(yAxisLabel != null && yAxisLabel !== '' && {
        name: yAxisLabel,
        nameLocation: 'middle',
        nameGap: 40,
        nameTextStyle: { color: theme.axis.y.tickLabelColor },
      }),
      axisLabel: {
        show: showYAxis,
        color: theme.axis.y.tickLabelColor,
        ...(yAxisTickLabelFormatter && { formatter: yAxisTickLabelFormatter }),
      },
      axisLine: showYAxis
        ? {
            show: true,
            lineStyle: {
              color: theme.axis.y.lineColor,
              width: theme.axis.y.lineWidth,
            },
          }
        : { show: false },
      axisTick: {
        show: showYAxisTicks,
        lineStyle: {
          color: theme.axis.y.tickColor,
          width: theme.axis.y.tickWidth,
        },
      },
      splitLine: {
        show: showYAxisSplitLines,
        lineStyle: {
          color: theme.axis.y.splitLineColor,
          width: theme.axis.y.splitLineWidth,
        },
      },
    };

    const legendConfig: any =
      showLegend && hasNamedSeries
        ? {
            data: normalizedSeries
              .filter((s) => 'name' in s && s.name)
              .map((s) => (s as { name: string }).name),
            textStyle: {
              color: theme.legend.textColor,
              fontSize: theme.legend.fontSize,
            },
            backgroundColor: theme.legend.backgroundColor,
          }
        : undefined;

    const [sizeMinPx, sizeMaxPx] = sizeRange;
    const seriesConfig: any[] = [];

    normalizedSeries.forEach((s, index) => {
      const seriesColor = theme.series[index % theme.series.length].color;
      const seriesData = 'data' in s ? s.data : [];
      const seriesName = 'name' in s && s.name ? s.name : undefined;

      const sizes = seriesData.map((d) => d[2]);
      const dataSizeMin = sizes.length ? Math.min(...sizes) : 0;
      const dataSizeMax = sizes.length ? Math.max(...sizes) : 10;

      const scatterSeries: any = {
        type: 'scatter',
        data: seriesData,
        symbol: symbol === 'none' ? 'circle' : symbol,
        symbolSize: (value: number, params: any) => {
          const d = params.data;
          const sizeVal = Array.isArray(d) && typeof d[2] === 'number' ? d[2] : 10;
          return scaleSize(sizeVal, dataSizeMin, dataSizeMax, sizeMinPx, sizeMaxPx);
        },
        itemStyle: { color: seriesColor },
        emphasis: showHighlighter
          ? {
              focus: 'self',
              scale: true,
              itemStyle: {
                color: seriesColor,
                borderColor: '#FFFFFF',
                borderWidth: 2,
              },
            }
          : { focus: 'none', scale: false },
      };
      if (seriesName) scatterSeries.name = seriesName;
      seriesConfig.push(scatterSeries);
    });

    const config: any = {
      tooltip: tooltipConfig,
      xAxis: xAxisConfig,
      yAxis: yAxisConfig,
      series: seriesConfig,
    };
    if (legendConfig) config.legend = legendConfig;
    if (grid) config.grid = grid;
    return config;
  }, [
    theme,
    normalizedSeries,
    symbol,
    sizeRange,
    showXAxis,
    showXAxisTicks,
    showYAxis,
    showYAxisTicks,
    showXAxisSplitLines,
    showYAxisSplitLines,
    boundaryGap,
    grid,
    showLegend,
    hasNamedSeries,
    showHighlighter,
    xAxisTickLabelFormatter,
    yAxisTickLabelFormatter,
    xAxisLabel,
    yAxisLabel,
  ]);

  useEffect(() => {
    let chart: any;
    if (chartRef.current) {
      try {
        chart = echarts.init(chartRef.current, 'light', { width, height });
        chart.setOption(option);
      } catch (error) {
        console.warn('Chart initialization error:', error);
      }
    }
    return () => {
      if (chart) {
        try {
          chart.dispose();
        } catch (error) {
          console.warn('Chart disposal error:', error);
        }
      }
    };
  }, [option, width, height]);

  return <SkiaChart ref={chartRef} useRNGH />;
};

const BubbleChartComponent = withResponsiveContainer(withChartTheme(ChartComponent));
export const BubbleChart = Object.assign(BubbleChartComponent, {
  displayName: 'BubbleChart',
});

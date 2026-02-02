import { withResponsiveContainer } from '../chart-container';
import { useChartTheme, withChartTheme } from '../chart-theme.context';
import type { ScatterChartProps } from './scatter-chart.props';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { LineChart as EChartsLineChart, ScatterChart as EChartsScatterChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import React, { useEffect, useMemo, useRef } from 'react';
import { getAxis } from '../axis';

/** common -> cartesian -> scatter */
export type { ScatterChartProps, ScatterSeriesData } from './scatter-chart.props';

echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  SkiaRenderer,
  EChartsScatterChart,
  EChartsLineChart,
]);

/** Linear regression: returns [slope, intercept] for y = slope * x + intercept. */
function linearRegression(points: number[][]): { slope: number; intercept: number } {
  const n = points.length;
  if (n === 0) return { slope: 0, intercept: 0 };
  let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
  for (const [x, y] of points) {
    sumX += x;
    sumY += y;
    sumXY += x * y;
    sumX2 += x * x;
  }
  const denom = n * sumX2 - sumX * sumX;
  const slope = denom === 0 ? 0 : (n * sumXY - sumX * sumY) / denom;
  const intercept = (sumY - slope * sumX) / n;
  return { slope, intercept };
}

const ChartComponent = ({
  data,
  width = 220,
  height = 350,
  symbol = 'circle',
  symbolSize = 8,
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
  showRegressionLine = false,
  xAxisTickLabelFormatter,
  yAxisTickLabelFormatter,
  ...props
}: ScatterChartProps) => {
  const { theme } = useChartTheme(props.theme, props.colors);
  const chartRef = useRef<any>(null);

  const normalizedSeries = useMemo((): Array<{ name?: string; data: number[][] }> => {
    if (!Array.isArray(data) || data.length === 0) return [];
    const first = data[0];
    if (Array.isArray(first) && first.length >= 2 && typeof first[0] === 'number') {
      return [{ data: data as number[][] }];
    }
    if (typeof first === 'object' && first !== null && 'data' in first) {
      return data as Array<{ name: string; data: number[][] }>;
    }
    return [];
  }, [data]);

  const hasNamedSeries = useMemo(
    () => normalizedSeries.some((s) => 'name' in s && s.name),
    [normalizedSeries]
  );

  const option = useMemo(() => {
    const dataPoints = normalizedSeries.map(s => s.data.map(item => item[0] as number)).flat();
    const xAxisLabels = getAxis(dataPoints).map(String);
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
        }
      : { trigger: 'item' };

    // Scatter uses value axes for both x and y (data is [x, y] pairs)
    const xAxisConfig: any = {
      type: 'category',
      boundaryGap,
      data: xAxisLabels,
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

    const seriesConfig: any[] = [];
    normalizedSeries.forEach((s, index) => {
      const seriesColor = theme.series[index % theme.series.length].color;
      const seriesData = 'data' in s ? s.data : [];
      const seriesName = 'name' in s && s.name ? s.name : undefined;

      const scatterSeries: any = {
        type: 'scatter',
        data: seriesData,
        symbol: symbol === 'none' ? 'circle' : symbol,
        symbolSize: symbol === 'none' ? 8 : symbolSize,
        itemStyle: { color: seriesColor },
        emphasis: showHighlighter
          ? {
              focus: 'self',
              scale: true,
              symbol: 'circle',
              symbolSize: 8,
              itemStyle: {
                color: seriesColor,
                borderColor: '#FFFFFF',
                borderWidth: 2,
              },
            }
          : { focus: 'none', scale: false, symbolSize: 0 },
      };
      if (seriesName) scatterSeries.name = seriesName;
      seriesConfig.push(scatterSeries);

      if (showRegressionLine && seriesData.length >= 2) {
        const { slope, intercept } = linearRegression(seriesData);
        const xs = seriesData.map((p) => p[0]);
        const xMin = Math.min(...xs);
        const xMax = Math.max(...xs);
        const regressionData: number[][] = [
          [xMin, slope * xMin + intercept],
          [xMax, slope * xMax + intercept],
        ];
        const lineSeries: any = {
          type: 'line',
          data: regressionData,
          symbol: 'none',
          lineStyle: {
            color: seriesColor,
            width: 2,
            type: 'solid',
          },
          showSymbol: false,
        };
        if (seriesName) lineSeries.name = seriesName;
        seriesConfig.push(lineSeries);
      }
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
    symbolSize,
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
    showRegressionLine,
    xAxisTickLabelFormatter,
    yAxisTickLabelFormatter,
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

const ScatterChartComponent = withResponsiveContainer(withChartTheme(ChartComponent));
export const ScatterChart = Object.assign(ScatterChartComponent, {
  displayName: 'ScatterChart',
});

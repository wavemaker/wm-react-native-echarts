import { withResponsiveContainer } from '../chart-container';
import { useChartTheme, withChartTheme } from '../chart-theme.context';
import type { CandlestickChartProps, CandlestickData } from './candlestick-chart.props';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { BarChart, CandlestickChart as EChartsCandlestickChart, LineChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import React, { useEffect, useMemo, useRef } from 'react';

export type { CandlestickChartProps, CandlestickData, CandlestickItem } from './candlestick-chart.props';

echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  SkiaRenderer,
  EChartsCandlestickChart,
  BarChart,
  LineChart,
]);

const ChartComponent = ({
  data,
  xAxisData,
  volumeData,
  ma5,
  ma10,
  ma20,
  width = 220,
  height = 350,
  boundaryGap = true,
  showXAxis = true,
  showXAxisTicks = true,
  showYAxis = true,
  showYAxisTicks = true,
  showXAxisSplitLines = true,
  showYAxisSplitLines = true,
  grid,
  showLegend = false,
  showHighlighter = true,
  xAxisTickLabelFormatter,
  yAxisTickLabelFormatter,
  xAxisTicks,
  ...props
}: CandlestickChartProps) => {
  const { theme } = useChartTheme(props.theme, props.colors);
  const chartRef = useRef<any>(null);

  const categories = useMemo(() => {
    if (xAxisTicks != null && xAxisTicks.length > 0) return xAxisTicks;
    if (xAxisData?.length) return xAxisData.map(String);
    return data.map((_, i) => String(i));
  }, [xAxisTicks, xAxisData, data]);

  const hasVolume = volumeData != null && volumeData.length > 0;
  const hasMA = (ma5?.length ?? 0) > 0 || (ma10?.length ?? 0) > 0 || (ma20?.length ?? 0) > 0;

  const option = useMemo(() => {
    if (!data?.length) return { series: [] };

    const tooltipConfig: any = showHighlighter
      ? {
          trigger: 'axis',
          axisPointer: { type: 'cross' },
        }
      : { trigger: 'axis' };

    const candlestickColorUp = theme.series[0]?.color ?? '#26a69a';
    const candlestickColorDown = theme.series[1]?.color ?? '#ef5350';
    const volumeColorUp = candlestickColorUp + '40';
    const volumeColorDown = candlestickColorDown + '40';

    const mainGrid: any = hasVolume
      ? { left: '10%', right: '8%', top: '8%', height: '55%' }
      : grid ?? { left: '10%', right: '8%', top: '8%', bottom: '15%' };
    const volumeGrid: any = hasVolume
      ? { left: '10%', right: '8%', top: '72%', height: '18%' }
      : undefined;

    const xAxisMain: any = {
      type: 'category',
      data: categories,
      boundaryGap,
      axisLabel: {
        show: showXAxis,
        color: theme.axis.x.tickLabelColor,
        formatter: xAxisTickLabelFormatter ?? undefined,
      },
      axisLine: showXAxis
        ? { show: true, lineStyle: { color: theme.axis.x.lineColor, width: theme.axis.x.lineWidth } }
        : { show: false },
      axisTick: {
        show: showXAxisTicks,
        lineStyle: { color: theme.axis.x.tickColor, width: theme.axis.x.tickWidth },
      },
      splitLine: {
        show: showXAxisSplitLines,
        lineStyle: { color: theme.axis.x.splitLineColor, width: theme.axis.x.splitLineWidth },
      },
    };
    if (hasVolume) {
      xAxisMain.gridIndex = 0;
      xAxisMain.axisLabel = { ...xAxisMain.axisLabel, show: false };
    }

    const yAxisMain: any = {
      type: 'value',
      scale: true,
      axisLabel: {
        show: showYAxis,
        color: theme.axis.y.tickLabelColor,
        formatter: yAxisTickLabelFormatter ?? undefined,
      },
      axisLine: showYAxis
        ? { show: true, lineStyle: { color: theme.axis.y.lineColor, width: theme.axis.y.lineWidth } }
        : { show: false },
      axisTick: {
        show: showYAxisTicks,
        lineStyle: { color: theme.axis.y.tickColor, width: theme.axis.y.tickWidth },
      },
      splitLine: {
        show: showYAxisSplitLines,
        lineStyle: { color: theme.axis.y.splitLineColor, width: theme.axis.y.splitLineWidth },
      },
    };
    if (hasVolume) yAxisMain.gridIndex = 0;

    const candlestickSeries: any = {
      type: 'candlestick',
      data,
      itemStyle: {
        color: candlestickColorUp,
        color0: candlestickColorDown,
        borderColor: candlestickColorUp,
        borderColor0: candlestickColorDown,
      },
      emphasis: showHighlighter ? { focus: 'self' } : { focus: 'none' },
    };
    if (hasVolume) {
      candlestickSeries.xAxisIndex = 0;
      candlestickSeries.yAxisIndex = 0;
    }

    const series: any[] = [candlestickSeries];

    if (ma5?.length) {
      series.push({
        type: 'line',
        name: 'MA5',
        data: ma5,
        smooth: true,
        symbol: 'none',
        lineStyle: { width: 2, color: theme.series[2]?.color ?? '#ff9800' },
        xAxisIndex: hasVolume ? 0 : undefined,
        yAxisIndex: hasVolume ? 0 : undefined,
      });
    }
    if (ma10?.length) {
      series.push({
        type: 'line',
        name: 'MA10',
        data: ma10,
        smooth: true,
        symbol: 'none',
        lineStyle: { width: 2, color: theme.series[3]?.color ?? '#2196f3' },
        xAxisIndex: hasVolume ? 0 : undefined,
        yAxisIndex: hasVolume ? 0 : undefined,
      });
    }
    if (ma20?.length) {
      series.push({
        type: 'line',
        name: 'MA20',
        data: ma20,
        smooth: true,
        symbol: 'none',
        lineStyle: { width: 2, color: theme.series[4]?.color ?? '#9c27b0' },
        xAxisIndex: hasVolume ? 0 : undefined,
        yAxisIndex: hasVolume ? 0 : undefined,
      });
    }

    const config: any = {
      tooltip: tooltipConfig,
      grid: hasVolume ? [mainGrid, volumeGrid] : mainGrid,
      xAxis: hasVolume ? [xAxisMain, { ...xAxisMain, gridIndex: 1, axisLabel: { ...xAxisMain.axisLabel, show: true } }] : xAxisMain,
      yAxis: hasVolume
        ? [
            yAxisMain,
            {
              type: 'value',
              gridIndex: 1,
              axisLabel: { show: showYAxis, color: theme.axis.y.tickLabelColor },
              axisLine: { show: false },
              axisTick: { show: false },
              splitLine: { show: showYAxisSplitLines, lineStyle: { color: theme.axis.y.splitLineColor } },
            },
          ]
        : yAxisMain,
      series,
    };

    if (hasVolume) {
      const volumeBarData = volumeData!.map((v, i) => {
        const ohlc = data[i];
        const isUp = ohlc && ohlc[1] >= ohlc[0];
        return { value: v, itemStyle: { color: isUp ? volumeColorUp : volumeColorDown } };
      });
      series.push({
        type: 'bar',
        name: 'Volume',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: volumeBarData,
        emphasis: showHighlighter ? { focus: 'self' } : { focus: 'none' },
      });
    }

    if (showLegend && hasMA) {
      config.legend = {
        data: ['MA5', 'MA10', 'MA20'].filter((name) => {
          if (name === 'MA5') return ma5?.length;
          if (name === 'MA10') return ma10?.length;
          return ma20?.length;
        }),
        textStyle: { color: theme.legend.textColor, fontSize: theme.legend.fontSize },
        backgroundColor: theme.legend.backgroundColor,
      };
    }

    return config;
  }, [
    data,
    categories,
    volumeData,
    ma5,
    ma10,
    ma20,
    hasVolume,
    hasMA,
    theme,
    boundaryGap,
    showXAxis,
    showXAxisTicks,
    showYAxis,
    showYAxisTicks,
    showXAxisSplitLines,
    showYAxisSplitLines,
    grid,
    showLegend,
    showHighlighter,
    xAxisTickLabelFormatter,
    yAxisTickLabelFormatter,
    xAxisTicks,
  ]);

  useEffect(() => {
    let chart: any;
    if (chartRef.current) {
      try {
        chart = echarts.init(chartRef.current, 'light', { width, height });
        chart.setOption(option);
      } catch (error) {
        console.warn('Candlestick chart initialization error:', error);
      }
    }
    return () => {
      if (chart) {
        try {
          chart.dispose();
        } catch (error) {
          console.warn('Candlestick chart disposal error:', error);
        }
      }
    };
  }, [option, width, height]);

  return <SkiaChart ref={chartRef} useRNGH />;
};

const CandlestickChartComponent = withResponsiveContainer(withChartTheme(ChartComponent));
export const CandlestickChart = Object.assign(CandlestickChartComponent, {
  displayName: 'CandlestickChart',
});

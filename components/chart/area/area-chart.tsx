import { withResponsiveContainer } from '../chart-container';
import { useChartTheme, withChartTheme } from '../chart-theme.context';
import type { AreaChartProps, SeriesData } from './area-chart.props';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { LineChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import React, { useEffect, useMemo, useRef } from 'react';
import { getAxis } from '../axis';

// Re-export types for backward compatibility (common -> cartesian -> area)
export type { AreaChartProps, SeriesData } from './area-chart.props';

// Register necessary components for this chart
echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  SkiaRenderer,
  LineChart,
]);

const ChartComponent = ({
  data,
  width = 220,
  height = 350,
  type = 'default',
  step,
  boundaryGap = false,
  stack,
  stackNormalize = false,
  symbol = 'none',
  symbolSize,
  areaOpacity = 0.6,
  areaFill = 'gradient',
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
  xAxisLabel,
  yAxisLabel,
  ...props
}: AreaChartProps) => {
  const { theme } = useChartTheme(props.theme, props.colors);
  const chartRef = useRef<any>(null);

  // Derive smooth/step from type
  const effectiveSmooth = type === 'smooth';
  const effectiveStep = type === 'step' ? (step ?? 'start') : (step ?? false);

  // Normalize data to array of { data: number[] } or { name: string; data: number[] }
  const normalizedSeries = useMemo(() => {
    let normalizedData: Array<{
      name: string;
      data: [string | number, number][];
    }> = [];
    if (!Array.isArray(data) || data.length === 0) return normalizedData;
    const first = data[0];

    // Single series: number[] → one series
    if (typeof first === 'number') {
      normalizedData = [{ name: 'Series 1', data: (data as number[]).map((value, index) => [String(index), value]) as [string, number][] }];
    } else if (Array.isArray(first) && first.length ===2 ) {
      normalizedData = [{ name: 'Series 1', data: (data as [string | number, number][])}];
    } else {
      normalizedData = (JSON.parse(JSON.stringify(data)) as Array<{ name?: string; data: [string | number, number][] | number[] }>)
      .filter(item => item.data && item.data.length > 0)
      .map((item, index) => {
        const first = item.data[0];
        // Single series: number[] → one series
        if (typeof first === 'number') {
          item.data = (item.data as number[]).map((value, index) => [String(index), value]) as [string, number][];
        } 
        return {
          name: item.name || 'Series ' + (index + 1),
          data: [...item.data as [string | number, number][]],
        };
      });
    }
    return normalizedData;
  }, [data]);

  // Check if series have names
  const hasNamedSeries = useMemo(() => {
    return normalizedSeries.some(s => 'name' in s && s.name);
  }, [normalizedSeries]);

  // When stackNormalize is true, convert each series to percentages (0–100) per x-index so stacked area sums to 100%
  const displaySeries = useMemo(() => {
    if (!stackNormalize || normalizedSeries.length <= 1) {
      return normalizedSeries;
    }
    const len = normalizedSeries[0]?.data?.length ?? 0;
    if (len === 0) return normalizedSeries;
    return normalizedSeries.map(s => {
      const rawData = s.data;
      const sumsAt = new Array(len).fill(0);
      normalizedSeries.forEach((other, _i) => {
        const d = 'data' in other ? other.data : [];
        d.forEach((v, i) => { if (i < len) sumsAt[i] += v; });
      });
      const normalizedData = rawData.map((v, i) => {
        const sum = sumsAt[i] || 1;
        return sum > 0 ? (v[1] / sum) * 100 : 0;
      });
      return 'name' in s && s.name
        ? { name: s.name, data: normalizedData }
        : { data: normalizedData };
    });
  }, [normalizedSeries, stackNormalize]);

  const option = useMemo(() => {
    const dataPoints = normalizedSeries.map(s => s.data.map(item => item[0] as number)).flat();
    const xAxisData =
      xAxisTicks != null && xAxisTicks.length > 0
        ? xAxisTicks
        : getAxis(dataPoints).map(String);

    // Build tooltip config
    // axisPointer with snap: true so the pointer snaps to data points and triggers
    // series emphasis (circle) at the hovered position. See https://echarts.apache.org/en/option.html#tooltip.axisPointer
    const tooltipConfig: any = showHighlighter ?  {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
        snap: true,
        lineStyle: {
          type: 'solid',
          width: 1,
          color: theme.series[0].color ?? '#999',
        },
      },
    } : null;

    // Build xAxis config (category with data indices)
    const xAxisConfig: any = {
      type: 'category',
      data: xAxisData,
      ...(xAxisLabel != null && xAxisLabel !== '' && {
        name: xAxisLabel,
        nameLocation: 'middle',
        nameGap: 25,
        nameTextStyle: { color: theme.axis.x.tickLabelColor },
      }),
      axisLabel: {
        show: showXAxis,
        color: theme.axis.x.tickLabelColor,
        formatter: xAxisTickLabelFormatter ?? undefined,
      },
      axisLine: showXAxis ? {
        show: true,
        lineStyle: {
          color: theme.axis.x.lineColor,
          width: theme.axis.x.lineWidth,
        },
      } : {
        show: false,
      },
      axisTick: {
        show: showXAxis && showXAxisTicks,
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
    
    xAxisConfig.boundaryGap = boundaryGap;

    // Build yAxis config (value, auto-scale from data)
    const yAxisConfig: any = {
      type: 'value',
      ...(stackNormalize && displaySeries.length > 1 && {
        min: 0,
        max: 100,
      }),
      ...(yAxisLabel != null && yAxisLabel !== '' && {
        name: yAxisLabel,
        nameLocation: 'middle',
        nameGap: 40,
        nameTextStyle: { color: theme.axis.y.tickLabelColor },
      }),
      axisLabel: {
        show: showYAxis,
        color: theme.axis.y.tickLabelColor,
        formatter: yAxisTickLabelFormatter ?? (stackNormalize && displaySeries.length > 1
          ? (value: number) => `${value}%`
          : undefined),
      },
      axisLine: showYAxis ? {
        show: true,
        lineStyle: {
          color: theme.axis.y.lineColor,
          width: theme.axis.y.lineWidth,
        },
      } : {
        show: false,
      },
      axisTick: {
        show: showYAxis && showYAxisTicks,
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

    // Build legend config
    const legendConfigFinal: any = showLegend && hasNamedSeries ? {
      data: normalizedSeries
        .filter(s => 'name' in s && s.name)
        .map(s => s.name),
      textStyle: {
        color: theme.legend.textColor,
        fontSize: theme.legend.fontSize,
      },
      backgroundColor: theme.legend.backgroundColor,
    } : undefined;

    // Build series config (use displaySeries so stackNormalize uses percentage data)
    const seriesConfig = displaySeries.map((s, index) => {
      const seriesColor = theme.series[index % theme.series.length].color;
      const seriesLineWidth = theme.series[index]?.lineWidth ?? theme.series[0].lineWidth ?? 2;
      
      // Convert opacity (0-1) to hex (00-FF)
      const opacityHex = Math.round(areaOpacity * 255).toString(16).padStart(2, '0');
      const colorWithOpacity = seriesColor + opacityHex;
      const transparentColor = seriesColor + '00';
      const solidColor = seriesColor + 'ff';
      
      const areaStyleConfig =
        areaFill === 'gradient'
          ? {
              color: {
                type: 'linear' as const,
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: colorWithOpacity },
                  { offset: 1, color: transparentColor },
                ],
              },
            }
          : areaFill === 'transparent'
            ? { color: colorWithOpacity }
            : { color: solidColor };
      
      const series: any = {
        data: 'data' in s ? s.data : [],
        type: 'line',
        symbol: symbol === 'none' ? 'none' : symbol,
        symbolSize: symbol === 'none' ? 0 : symbolSize,
        showSymbol: symbol !== 'none',
        areaStyle: areaStyleConfig,
        itemStyle: {
          color: seriesColor,
        },
        lineStyle: {
          color: seriesColor,
          width: seriesLineWidth,
        },
        // Point highlight at cursor: solid circle on the curve when axis pointer highlights this point
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

      // Add name if present
      if ('name' in s && s.name) {
        series.name = s.name;
      }

      // Handle interpolation
      if (effectiveStep !== false) {
        series.step = effectiveStep;
      } else {
        series.smooth = effectiveSmooth;
      }

      // Handle stacking (when stackNormalize, data is already % so use same stack id so they stack to 100%)
      if (stack !== undefined && stack !== false) {
        series.stack = typeof stack === 'string' ? stack : 'total';
      } else if (stackNormalize && displaySeries.length > 1) {
        series.stack = 'total';
      }

      return series;
    });

    const config: any = {
      tooltip: tooltipConfig,
      xAxis: xAxisConfig,
      yAxis: yAxisConfig,
      series: seriesConfig,
    };

    // Add legend if configured
    if (legendConfigFinal) {
      config.legend = legendConfigFinal;
    }

    // Add grid if configured
    if (grid) {
      config.grid = grid;
    }

    return config;
  }, [
    theme,
    normalizedSeries,
    displaySeries,
    type,
    effectiveSmooth,
    effectiveStep,
    boundaryGap,
    stack,
    stackNormalize,
    symbol,
    symbolSize,
    areaOpacity,
    areaFill,
    showXAxis,
    showYAxis,
    showXAxisTicks,
    showYAxisTicks,
    showXAxisSplitLines,
    showYAxisSplitLines,
    grid,
    showLegend,
    hasNamedSeries,
    showHighlighter,
    xAxisTickLabelFormatter,
    yAxisTickLabelFormatter,
    xAxisTicks,
    xAxisLabel,
    yAxisLabel,
  ]);

  useEffect(() => {
    let chart: any;
    if (chartRef.current) {
      try {
        chart = echarts.init(chartRef.current, 'light', {
          width: width,
          height: height,
        });
        
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

const AreaChartComponent = withResponsiveContainer(withChartTheme(ChartComponent));
export const AreaChart = Object.assign(AreaChartComponent, {
  displayName: 'AreaChart',
});

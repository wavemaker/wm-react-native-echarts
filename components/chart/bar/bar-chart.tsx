import { withResponsiveContainer } from '../chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '../chart-theme.context';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { BarChart as EChartsBarChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import React, { useEffect, useMemo, useRef } from 'react';
import { getAxis } from '../axis';

echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  SkiaRenderer,
  EChartsBarChart,
]);

/**
 * Bar chart data. Same shape as area chart:
 * - Single series: number[] (categories 0, 1, 2, ...)
 * - Single series with labels: [string | number, number][]
 * - Multiple series: Array<{ name?: string; data: number[] }> or Array<{ name?: string; data: [string | number, number][] }>
 */
type SeriesData =
  | number[]
  | [string | number, number][]
  | Array<{ name?: string; data: number[] }>
  | Array<{ name?: string; data: [string | number, number][] }>;

export interface BarChartProps {
  /**
   * Chart data. Can be:
   * - Single series: number[] — categories 0, 1, 2, ...
   * - Single series with labels: [string | number, number][]
   * - Multiple series with names: Array<{ name: string; data: number[] }>
   */
  data: SeriesData;
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
  colors?: string[];
  /**
   * Whether to leave gaps at the start and end of the axis.
   * @default true (bars typically have gap)
   */
  boundaryGap?: boolean;
  /**
   * Bar corner radius: a number (all corners) or array of 4 values [topLeft, topRight, bottomRight, bottomLeft].
   * @default [4, 4, 0, 0] (vertical: top edge only; horizontal: use right edge [0, 4, 4, 0])
   */
  cornerRadius?: number | [number, number, number, number];
  /**
   * When true, bars are horizontal (categories on Y-axis, values on X-axis). Corner radius applies to the right edge.
   * @default false
   */
  horizontal?: boolean;
  /**
   * Stack ID for stacking multiple series. Same stack ID stacks together.
   * @example stack="total"
   */
  stack?: string | false;
  /**
   * When true with stack, show stacked bars as percentages (0–100%).
   * @default false
   */
  stackNormalize?: boolean;
  showXAxis?: boolean;
  showXAxisTicks?: boolean;
  showYAxis?: boolean;
  showYAxisTicks?: boolean;
  showXAxisSplitLines?: boolean;
  showYAxisSplitLines?: boolean;
  grid?: {
    left?: string | number;
    right?: string | number;
    top?: string | number;
    bottom?: string | number;
  };
  showLegend?: boolean;
  showHighlighter?: boolean;
  xAxisTickLabelFormatter?: (value: string, index?: number) => string;
  yAxisTickLabelFormatter?: (value: string, index?: number) => string;
}

const ChartComponent = ({
  data,
  width = 220,
  height = 350,
  boundaryGap = true,
  cornerRadius = [4, 4, 0, 0],
  horizontal = false,
  stack,
  stackNormalize = false,
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
  ...props
}: BarChartProps) => {
  const { theme } = useChartTheme(props.theme, props.colors);
  const chartRef = useRef<any>(null);

  const normalizedSeries = useMemo(() => {
    let normalizedData: Array<{
      name: string;
      data: [string | number, number][];
    }> = [];
    if (!Array.isArray(data) || data.length === 0) return normalizedData;
    const first = data[0];

    if (typeof first === 'number') {
      normalizedData = [
        {
          name: 'Series 1',
          data: (data as number[]).map((value, index) => [String(index), value]) as [string, number][],
        },
      ];
    } else if (Array.isArray(first) && first.length === 2) {
      normalizedData = [{ name: 'Series 1', data: data as [string | number, number][] }];
    } else {
      normalizedData = (
        JSON.parse(JSON.stringify(data)) as Array<{
          name?: string;
          data: [string | number, number][] | number[];
        }>
      )
        .filter((item) => item.data && item.data.length > 0)
        .map((item, index) => {
          const firstItem = item.data[0];
          if (typeof firstItem === 'number') {
            item.data = (item.data as number[]).map((value, i) => [
              String(i),
              value,
            ]) as [string, number][];
          }
          return {
            name: item.name || 'Series ' + (index + 1),
            data: [...(item.data as [string | number, number][])],
          };
        });
    }
    return normalizedData;
  }, [data]);

  const hasNamedSeries = useMemo(
    () => normalizedSeries.some((s) => 'name' in s && s.name),
    [normalizedSeries]
  );

  const displaySeries = useMemo(() => {
    if (!stackNormalize || normalizedSeries.length <= 1) return normalizedSeries;
    const len = normalizedSeries[0]?.data?.length ?? 0;
    if (len === 0) return normalizedSeries;
    return normalizedSeries.map((s) => {
      const rawData = s.data;
      const sumsAt = new Array(len).fill(0);
      normalizedSeries.forEach((other) => {
        const d = 'data' in other ? other.data : [];
        d.forEach((v, i) => {
          if (i < len) sumsAt[i] += typeof v === 'number' ? v : v[1];
        });
      });
      const normalizedData = rawData.map((v, i) => {
        const val = typeof v === 'number' ? v : v[1];
        const sum = sumsAt[i] || 1;
        return sum > 0 ? (val / sum) * 100 : 0;
      });
      return {
        name: s.name,
        data: rawData.map((v, i) => [v[0], normalizedData[i]] as [string | number, number]),
      };
    });
  }, [normalizedSeries, stackNormalize]);

  const option = useMemo(() => {
    const categories = (displaySeries[0]?.data ?? []).map((item) => String(item[0]));
    const dataPoints = displaySeries.flatMap((s) => s.data.map((d) => d[1]));
    const xAxisLabels = categories.length > 0 ? categories : getAxis(dataPoints).map(String);

    const tooltipConfig: any = showHighlighter
      ? {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            shadowStyle: {
              color: 'rgba(0,0,0,0.08)',
            },
          },
        }
      : { trigger: 'axis' };

    const categoryAxisConfig: any = {
      type: 'category',
      data: xAxisLabels,
      boundaryGap,
      axisLabel: {
        show: showXAxis,
        color: theme.axis.x.tickLabelColor,
        formatter: xAxisTickLabelFormatter ?? undefined,
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

    const valueAxisConfig: any = {
      type: 'value',
      ...(stackNormalize &&
        displaySeries.length > 1 && {
          min: 0,
          max: 100,
        }),
      axisLabel: {
        show: showYAxis,
        color: theme.axis.y.tickLabelColor,
        formatter:
          yAxisTickLabelFormatter ??
          (stackNormalize && displaySeries.length > 1
            ? (value: number) => `${value}%`
            : undefined),
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

    const xAxisConfig = horizontal ? valueAxisConfig : categoryAxisConfig;
    const yAxisConfig = horizontal ? categoryAxisConfig : valueAxisConfig;

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

    const isDefaultVerticalRadius =
      Array.isArray(cornerRadius) &&
      cornerRadius[0] === 4 &&
      cornerRadius[1] === 4 &&
      cornerRadius[2] === 0 &&
      cornerRadius[3] === 0;
    const effectiveCornerRadius: [number, number, number, number] = horizontal
      ? isDefaultVerticalRadius
        ? [0, 4, 4, 0]
        : Array.isArray(cornerRadius)
          ? cornerRadius
          : [0, cornerRadius, cornerRadius, 0]
      : Array.isArray(cornerRadius)
        ? cornerRadius
        : [cornerRadius, cornerRadius, cornerRadius, cornerRadius];

    const isStacked =
      (stack !== undefined && stack !== false) ||
      (stackNormalize && displaySeries.length > 1);

    const seriesConfig = displaySeries.map((s, index) => {
      const seriesColor = theme.series[index % theme.series.length].color;
      const isEndBar = index === displaySeries.length - 1;
      const barBorderRadius =
        isStacked && !isEndBar ? ([0, 0, 0, 0] as const) : effectiveCornerRadius;
      const barSeries: any = {
        type: 'bar',
        data: s.data.map((d) => d[1]),
        itemStyle: {
          color: seriesColor,
          borderRadius: barBorderRadius,
        },
        emphasis: showHighlighter
          ? {
              focus: 'self',
              itemStyle: {
                color: seriesColor,
                borderColor: '#fff',
                borderWidth: 1,
              },
            }
          : { focus: 'none' },
      };
      if (s.name) barSeries.name = s.name;
      if (stack !== undefined && stack !== false) {
        barSeries.stack = typeof stack === 'string' ? stack : 'total';
      } else if (stackNormalize && displaySeries.length > 1) {
        barSeries.stack = 'total';
      }
      return barSeries;
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
    displaySeries,
    boundaryGap,
    cornerRadius,
    horizontal,
    stack,
    stackNormalize,
    showXAxis,
    showXAxisTicks,
    showYAxis,
    showYAxisTicks,
    showXAxisSplitLines,
    showYAxisSplitLines,
    grid,
    showLegend,
    hasNamedSeries,
    showHighlighter,
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

const BarChartComponent = withResponsiveContainer(withChartTheme(ChartComponent));
export const BarChart = Object.assign(BarChartComponent, {
  displayName: 'BarChart',
});

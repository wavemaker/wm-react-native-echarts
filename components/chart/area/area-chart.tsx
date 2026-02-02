import { withResponsiveContainer } from '../chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '../chart-theme.context';
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

// Register necessary components for this chart
echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  SkiaRenderer,
  LineChart,
]);

/**
 * Type definition for series data. Can be:
 * - Single series: number[]
 * - Multiple series without names: Array<{ data: number[] }>
 * - Multiple series with names: Array<{ name: string; data: number[] }>
 */
/** Two-dimensional: array of series (each series is number[]), or named series. */
type SeriesData =
  | number[]
  | [string | number, number][]
  | Array<{ name?: string; data: number[] }>
  | Array<{ name?: string; data: [string | number, number][] }>;

/**
 * Props for the AreaChart component.
 * A unified area chart component that supports all area chart variations.
 * 
 * @example
 * // Basic single series area chart
 * <AreaChart data={[100, 200, 150]} />
 * 
 * @example
 * // Multiple named series with legend
 * <AreaChart
 *   data={[
 *     { name: 'Sales', data: [100, 150, 120] },
 *     { name: 'Revenue', data: [80, 130, 110] }
 *   ]}
 *   showLegend={true}
 * />
 */
export interface AreaChartProps {
  /**
   * Chart data. Can be:
   * - Single series: number[] - Simple array of numeric values
   * - Multiple series without names: number[][] - Rows = series (two-dimensional)
   * - Multiple series with names: Array<{ name: string; data: number[] }> - Named series for legends
   *
   * @example
   * // Single series
   * [186, 305, 237, 73, 209, 214]
   *
   * @example
   * // Multiple unnamed series (two-dimensional)
   * [[100, 150, 120], [80, 130, 110]]
   *
   * @example
   * // Multiple named series
   * [
   *   { name: 'Series A', data: [100, 150, 120] },
   *   { name: 'Series B', data: [80, 130, 110] }
   * ]
   */
  data: SeriesData;
  
  /**
   * Width of the chart in pixels.
   * Controls the horizontal size of the chart rendering area.
   * 
   * @default 220
   * @example
   * width={400}
   */
  width?: number;
  
  /**
   * Height of the chart in pixels.
   * Controls the vertical size of the chart rendering area.
   * 
   * @default 350
   * @example
   * height={450}
   */
  height?: number;
  
  /**
   * Partial theme override for customizing chart appearance.
   * Allows you to override specific theme properties without replacing the entire theme.
   * Merged with the default theme from ChartThemeContext.
   * 
   * @example
   * theme={{
   *   axis: {
   *     x: { tickLabelColor: '#333', lineColor: '#666' },
   *     y: { tickLabelColor: '#333', lineColor: '#666' }
   *   }
   * }}
   */
  theme?: Partial<ChartTheme>;
  
  /**
   * Colors for the chart series. Overrides theme colors.
   * When provided, these colors will be used for the series in order.
   * If there are more series than colors, colors will cycle.
   * 
   * @example
   * colors={['#FF6B6B', '#4ECDC4', '#45B7D1']}
   */
  colors?: string[];
  
  /**
   * Curve type for the area line.
   * - 'default': Straight lines between points (linear)
   * - 'smooth': Smooth Bezier curve interpolation
   * - 'step': Step lines (horizontal then vertical). When 'step', use step prop for mode ('start' | 'middle' | 'end').
   *
   * @default 'default'
   * @example
   * type="smooth"  // Smooth curves
   * type="step"   // Step chart (step mode defaults to 'start')
   */
  type?: 'default' | 'smooth' | 'step';

  /**
   * Step interpolation mode. When set, creates step lines instead of smooth curves.
   * When type="step", defaults to 'start' if not specified.
   * - 'start': Step starts at the data point
   * - 'middle': Step is centered on the data point
   * - 'end': Step ends at the data point
   *
   * @example
   * type="step" step="middle"
   */
  step?: 'start' | 'middle' | 'end' | false;
  
  /**
   * Whether to leave gaps at the start and end of the axis.
   * When true, there's padding between the first/last data points and the axis edges.
   * When false, the chart extends to the axis edges.
   * @default false
   * @example
   * boundaryGap={false} // Chart extends to edges (default)
   * boundaryGap={true}  // Padding at edges
   */
  boundaryGap?: boolean;
  
  /**
   * Stack ID for stacking multiple series. When set, series are stacked on top of each other.
   * All series with the same stack ID will be stacked together.
   * Use a string to specify a stack group, or false to disable stacking.
   * 
   * @example
   * stack="total" // All series stack together
   * stack="group1" // Only series with this stack ID stack together
   * stack={false} // No stacking
   */
  stack?: string | false;
  
  /**
   * Whether to normalize stacked values to show percentages (0-100%).
   * When true, stacked areas show relative percentages instead of absolute values.
   * Useful for comparing proportions across different time periods.
   * 
   * @default false
   * @example
   * stack="total"
   * stackNormalize={true} // Shows percentages instead of absolute values
   */
  stackNormalize?: boolean;
  
  /**
   * Symbol type for data points.
   * Controls the shape of markers displayed at each data point.
   * Set to 'none' to hide symbols (default).
   * 
   * @default 'none'
   * @example
   * symbol="circle" // Circular markers
   * symbol="rect" // Square markers
   * symbol="none" // No markers
   */
  symbol?: 'none' | 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | string;
  
  /**
   * Size of the symbol.
   * Can be a single number for uniform size, an array [width, height] for different dimensions,
   * or a function for dynamic sizing based on data.
   * Only applies when symbol is not 'none'.
   * 
   * @example
   * symbolSize={6} // All symbols are 6px
   * symbolSize={[8, 12]} // Symbols are 8px wide, 12px tall
   * symbolSize={(value) => value > 100 ? 10 : 5} // Dynamic size based on value
   */
  symbolSize?: number | number[] | Function;
  
  /**
   * Opacity of the filled area (0-1).
   * Controls the transparency of the area under the line.
   * 0 is fully transparent, 1 is fully opaque.
   * 
   * @default 0.6
   * @example
   * areaOpacity={0.5} // 50% opacity
   * areaOpacity={1} // Fully opaque
   */
  areaOpacity?: number;
  
  /**
   * Fill style for the area under the line.
   * - 'gradient': Gradient from color (with opacity) to transparent (default).
   * - 'transparent': Flat fill with areaOpacity applied.
   * - 'solid': Fully opaque fill.
   * 
   * @default 'gradient'
   * @example
   * areaFill="gradient"   // Fade from color to transparent
   * areaFill="transparent" // Semi-transparent flat fill
   * areaFill="solid"     // Opaque fill
   */
  areaFill?: 'gradient' | 'transparent' | 'solid';
  
  /**
   * Whether to show the X-axis line and labels.
   * When true, data indices (0, 1, 2, ...) are shown as X-axis labels.
   *
   * @default true
   * @example
   * showXAxis={true} // Show X-axis
   * showXAxis={false} // Hide X-axis
   */
  showXAxis?: boolean;
  
  /**
   * Whether to show X-axis tick marks.
   * Controls the visibility of tick marks along the X-axis.
   * 
   * @default true
   * @example
   * showXAxisTicks={true} // Show tick marks
   * showXAxisTicks={false} // Hide tick marks
   */
  showXAxisTicks?: boolean;
  
  /**
   * Whether to show the Y-axis line and labels.
   * When true, Y-axis scale is computed from the dataset.
   *
   * @default true
   * @example
   * showYAxis={true} // Show Y-axis
   * showYAxis={false} // Hide Y-axis
   */
  showYAxis?: boolean;
  
  /**
   * Whether to show Y-axis tick marks.
   * Controls the visibility of tick marks along the Y-axis.
   * 
   * @default true
   * @example
   * showYAxisTicks={true} // Show tick marks
   * showYAxisTicks={false} // Hide tick marks
   */
  showYAxisTicks?: boolean;
  
  /**
   * Whether to show vertical grid lines (X-axis split lines).
   * When false, vertical lines across the chart are hidden.
   * 
   * @default true
   * @example
   * showXAxisSplitLines={true} // Show vertical grid lines
   * showXAxisSplitLines={false} // Hide vertical grid lines
   */
  showXAxisSplitLines?: boolean;
  
  /**
   * Whether to show horizontal grid lines (Y-axis split lines).
   * When false, horizontal lines across the chart are hidden.
   * 
   * @default true
   * @example
   * showYAxisSplitLines={true} // Show horizontal grid lines
   * showYAxisSplitLines={false} // Hide horizontal grid lines
   */
  showYAxisSplitLines?: boolean;
  
  /**
   * Grid positioning configuration.
   * Controls the spacing and positioning of the chart grid area.
   * Values can be percentages (strings like '10%') or pixel values (numbers).
   * 
   * @example
   * grid={{
   *   left: '10%',   // 10% padding on left
   *   right: '5%',   // 5% padding on right
   *   top: '10%',    // 10% padding on top
   *   bottom: '10%'  // 10% padding on bottom
   * }}
   * 
   * @example
   * grid={{
   *   left: 50,      // 50px padding on left
   *   right: 20,     // 20px padding on right
   * }}
   */
  grid?: {
    left?: string | number;
    right?: string | number;
    top?: string | number;
    bottom?: string | number;
  };
  
  /**
   * Whether to display a legend for named series.
   * The legend only appears when series have names and this is set to true.
   *
   * @default false
   * @example
   * showLegend={true} // Show legend for named series
   */
  showLegend?: boolean;

  /**
   * Whether to show the highlighter (emphasis circle) at the cursor position when interacting with the chart.
   *
   * @default true
   * @example
   * showHighlighter={true}  // Show circle at hovered point (default)
   * showHighlighter={false} // Hide highlighter
   */
  showHighlighter?: boolean;

  /**
   * Formatter for X-axis tick labels. Receives the axis value (and optional index) and returns the display string.
   *
   * @example
   * xAxisTickLabelFormatter={(value) => `${value}%`}
   * xAxisTickLabelFormatter={(value, index) => index % 2 === 0 ? String(value) : ''}
   */
  xAxisTickLabelFormatter?: (value: string, index?: number) => string;

  /**
   * Formatter for Y-axis tick labels. Receives the axis value (and optional index) and returns the display string.
   *
   * @example
   * yAxisTickLabelFormatter={(value) => `$${value}`}
   */
  yAxisTickLabelFormatter?: (value: string, index?: number) => string;
}

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
    const xAxisLabels = getAxis(dataPoints).map(String);

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
      data: xAxisLabels,
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
    
    xAxisConfig.boundaryGap = boundaryGap;

    // Build yAxis config (value, auto-scale from data)
    const yAxisConfig: any = {
      type: 'value',
      ...(stackNormalize && displaySeries.length > 1 && {
        min: 0,
        max: 100,
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
        symbol: symbol === 'none' ? 'circle' : symbol,
        symbolSize: symbol === 'none' ? 8 : symbolSize,
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

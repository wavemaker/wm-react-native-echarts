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

// Register necessary components for this chart
echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  SkiaRenderer,
  LineChart,
]);

/**
 * Type definition for axis data. Can be either a simple string array or an array of objects with label and value.
 * @example
 * // String array
 * ['Jan', 'Feb', 'Mar']
 * // Object array
 * [{ label: 'Q1', value: 0 }, { label: 'Q2', value: 3 }]
 */
type AxisData = string[] | Array<{ label: string; value: number }>;

/**
 * Type definition for series data. Can be:
 * - Single series: number[]
 * - Multiple series without names: Array<{ data: number[] }>
 * - Multiple series with names: Array<{ name: string; data: number[] }>
 */
type SeriesData = 
  | number[] 
  | Array<{ data: number[] }> 
  | Array<{ name: string; data: number[] }>;

/**
 * Props for the AreaChart component.
 * A unified area chart component that supports all area chart variations.
 * 
 * @example
 * // Basic single series area chart
 * <AreaChart
 *   xAxisData={['Jan', 'Feb', 'Mar']}
 *   data={[100, 200, 150]}
 * />
 * 
 * @example
 * // Multiple named series with legend
 * <AreaChart
 *   xAxisData={['Q1', 'Q2', 'Q3']}
 *   data={[
 *     { name: 'Sales', data: [100, 150, 120] },
 *     { name: 'Revenue', data: [80, 130, 110] }
 *   ]}
 *   showLegend={true}
 * />
 */
export interface AreaChartProps {
  /**
   * X-axis labels. Can be a string array or object array with label and value.
   * When using object format, the chart will use value-based positioning.
   * 
   * @example
   * // String array
   * ['Jan', 'Feb', 'Mar', 'Apr']
   * 
   * @example
   * // Object array with custom positioning
   * [{ label: 'Q1', value: 0 }, { label: 'Q2', value: 3 }, { label: 'Q3', value: 6 }]
   */
  xAxisData: AxisData;
  
  /**
   * Chart data. Can be:
   * - Single series: number[] - Simple array of numeric values
   * - Multiple series without names: Array<{ data: number[] }> - Multiple series without labels
   * - Multiple series with names: Array<{ name: string; data: number[] }> - Named series for legends
   * 
   * @example
   * // Single series
   * [186, 305, 237, 73, 209, 214]
   * 
   * @example
   * // Multiple unnamed series
   * [{ data: [100, 150, 120] }, { data: [80, 130, 110] }]
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
   * Y-axis labels. When provided, enables custom Y-axis labels.
   * Similar to xAxisData, can be a string array or object array with label and value.
   * When provided, Y-axis labels will be shown automatically.
   * 
   * @example
   * // String array
   * ['0', '50', '100', '150', '200']
   * 
   * @example
   * // Object array
   * [{ label: 'Low', value: 0 }, { label: 'Medium', value: 50 }, { label: 'High', value: 100 }]
   */
  yAxisData?: AxisData;
  
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
   * Whether to use smooth curve interpolation.
   * When true, the area chart uses smooth Bezier curves.
   * When false, uses straight lines between points.
   * Ignored if step is set.
   * 
   * @default true
   * @example
   * smooth={true}  // Smooth curves
   * smooth={false} // Straight lines
   */
  smooth?: boolean;
  
  /**
   * Step interpolation mode. When set, creates step lines instead of smooth curves.
   * Takes precedence over smooth property.
   * - 'start': Step starts at the data point
   * - 'middle': Step is centered on the data point
   * - 'end': Step ends at the data point
   * - false: Disables step mode (uses smooth or linear based on smooth prop)
   * 
   * @example
   * step="middle" // Creates a step chart with steps centered on data points
   */
  step?: 'start' | 'middle' | 'end' | false;
  
  /**
   * Whether to leave gaps at the start and end of the axis.
   * When true, there's padding between the first/last data points and the axis edges.
   * When false, the chart extends to the axis edges.
   * When undefined, uses ECharts default behavior (typically false for category axes).
   * 
   * @example
   * boundaryGap={false} // Chart extends to edges
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
   * Whether to show the X-axis line.
   * Controls the visibility of the X-axis line itself (not just labels).
   * 
   * @default false
   * @example
   * showXAxis={true} // Show X-axis line
   * showXAxis={false} // Hide X-axis line
   */
  showXAxis?: boolean;
  
  /**
   * Whether to show X-axis tick marks.
   * Controls the visibility of tick marks along the X-axis.
   * 
   * @default false
   * @example
   * showXAxisTicks={true} // Show tick marks
   * showXAxisTicks={false} // Hide tick marks
   */
  showXAxisTicks?: boolean;
  
  /**
   * Whether to show X-axis labels.
   * Controls the visibility of labels along the X-axis.
   * 
   * @default false
   * @example
   * showXAxisLabels={true} // Show labels
   * showXAxisLabels={false} // Hide labels
   */
  showXAxisLabels?: boolean;
  
  /**
   * Whether to show the Y-axis line.
   * Controls the visibility of the Y-axis line itself (not just labels or grid lines).
   * 
   * @default false
   * @example
   * showYAxis={true} // Show Y-axis line
   * showYAxis={false} // Hide Y-axis line
   */
  showYAxis?: boolean;
  
  /**
   * Whether to show Y-axis tick marks.
   * Controls the visibility of tick marks along the Y-axis.
   * 
   * @default false
   * @example
   * showYAxisTicks={true} // Show tick marks
   * showYAxisTicks={false} // Hide tick marks
   */
  showYAxisTicks?: boolean;
  
  /**
   * Whether to show Y-axis labels.
   * Controls the visibility of labels along the Y-axis.
   * Note: Y-axis labels are automatically shown when yAxisData is provided.
   * 
   * @default false
   * @example
   * showYAxisLabels={true} // Show labels
   */
  showYAxisLabels?: boolean;
  
  /**
   * Whether to show vertical grid lines (X-axis split lines).
   * When false, vertical lines across the chart are hidden.
   * 
   * @default false
   * @example
   * showXAxisSplitLines={true} // Show vertical grid lines
   * showXAxisSplitLines={false} // Hide vertical grid lines
   */
  showXAxisSplitLines?: boolean;
  
  /**
   * Whether to show horizontal grid lines (Y-axis split lines).
   * When false, horizontal lines across the chart are hidden.
   * 
   * @default false
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
   * Use legendConfig to customize the legend appearance and position.
   * 
   * @default false
   * @example
   * showLegend={true} // Show legend for named series
   */
  showLegend?: boolean;
  
  /**
   * Legend configuration options.
   * Allows customization of legend position, style, and behavior.
   * Only applies when showLegend is true and series have names.
   * 
   * @example
   * legendConfig={{
   *   position: 'top', // 'top' | 'bottom' | 'left' | 'right'
   *   itemGap: 20,     // Space between legend items
   *   textStyle: { fontSize: 12 }
   * }}
   */
  legendConfig?: {
    position?: 'top' | 'bottom' | 'left' | 'right';
    [key: string]: any;
  };
  
  /**
   * Tooltip axis pointer configuration.
   * Controls the appearance and behavior of the tooltip's axis pointer.
   * The axis pointer appears when hovering over the chart.
   * 
   * @example
   * tooltipAxisPointer={{
   *   type: 'line',   // 'line' | 'shadow' | 'none' | 'cross'
   *   lineStyle: { color: '#333', width: 1 }
   * }}
   * 
   * @example
   * tooltipAxisPointer={{
   *   type: 'shadow', // Shadow highlight
   *   shadowStyle: { color: 'rgba(0,0,0,0.1)' }
   * }}
   */
  tooltipAxisPointer?: {
    type?: 'line' | 'shadow' | 'none' | 'cross';
    [key: string]: any;
  };
}

const ChartComponent = ({
  xAxisData,
  data,
  yAxisData,
  width = 220,
  height = 350,
  smooth = true,
  step,
  boundaryGap,
  stack,
  stackNormalize = false,
  symbol = 'none',
  symbolSize,
  areaOpacity = 0.6,
  areaFill = 'gradient',
  showXAxis = false,
  showXAxisTicks = false,
  showXAxisLabels = false,
  showYAxis = false,
  showYAxisTicks = false,
  showYAxisLabels = false,
  showXAxisSplitLines = false,
  showYAxisSplitLines = false,
  grid,
  showLegend = false,
  legendConfig,
  tooltipAxisPointer,
  ...props
}: AreaChartProps) => {
  const { theme } = useChartTheme(props.theme, props.colors);
  const chartRef = useRef<any>(null);

  // Normalize data format to always work with array of series
  const normalizedSeries = useMemo(() => {
    if (Array.isArray(data) && data.length > 0) {
      // Check if it's a single number array
      if (typeof data[0] === 'number') {
        return [{ data: data as number[] }];
      }
      // Check if it's array of objects with data property
      if ('data' in data[0] && !('name' in data[0])) {
        return data as Array<{ data: number[] }>;
      }
      // It's array of objects with name and data
      return data as Array<{ name: string; data: number[] }>;
    }
    return [];
  }, [data]);

  // Check if series have names
  const hasNamedSeries = useMemo(() => {
    return normalizedSeries.some(s => 'name' in s && s.name);
  }, [normalizedSeries]);

  const option = useMemo(() => {
    // Helper to extract labels
    const getAxisLabels = (axisData: AxisData): string[] => {
      if (!Array.isArray(axisData) || axisData.length === 0) {
        return [];
      }
      if (typeof axisData[0] === 'string') {
        return axisData as string[];
      }
      return (axisData as Array<{ label: string; value: number }>).map(item => item.label);
    };

    // Helper to check if axis data is in object format
    const isObjectFormat = (axisData: AxisData): boolean => {
      if (!Array.isArray(axisData) || axisData.length === 0) {
        return false;
      }
      return typeof axisData[0] === 'object';
    };

    const xAxisLabels = getAxisLabels(xAxisData);
    const xAxisIsObjectFormat = isObjectFormat(xAxisData);

    // Build tooltip config
    const tooltipConfig: any = {
      trigger: 'axis',
    };
    if (tooltipAxisPointer) {
      tooltipConfig.axisPointer = tooltipAxisPointer;
    }

    // Build xAxis config
    const xAxisConfig: any = {
      type: xAxisIsObjectFormat ? 'value' : 'category',
      data: xAxisIsObjectFormat ? undefined : xAxisLabels,
      axisLabel: {
        show: showXAxisLabels,
        color: theme.axis.x.tickLabelColor,
        formatter: xAxisIsObjectFormat 
          ? (value: number) => {
              const item = (xAxisData as Array<{ label: string; value: number }>).find(x => x.value === value);
              return item ? item.label : value.toString();
            }
          : undefined,
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
    
    // Only set boundaryGap if explicitly provided
    if (boundaryGap !== undefined) {
      xAxisConfig.boundaryGap = boundaryGap;
    }

    // Build yAxis config
    let yAxisLabels: string[] | undefined;
    let yAxisIsObjectFormat = false;
    if (yAxisData) {
      yAxisLabels = getAxisLabels(yAxisData);
      yAxisIsObjectFormat = isObjectFormat(yAxisData);
    }

    const yAxisConfig: any = {
      type: yAxisData 
        ? (yAxisIsObjectFormat ? 'value' : 'category')
        : 'value',
      data: yAxisData && !yAxisIsObjectFormat ? yAxisLabels : undefined,
      axisLabel: {
        show: showYAxisLabels || !!yAxisData,
        color: theme.axis.y.tickLabelColor,
        formatter: yAxisData && yAxisIsObjectFormat
          ? (value: number) => {
              const item = (yAxisData as Array<{ label: string; value: number }>).find(y => y.value === value);
              return item ? item.label : value.toString();
            }
          : undefined,
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
        .map(s => (s as { name: string; data: number[] }).name),
      textStyle: {
        color: theme.legend.textColor,
        fontSize: theme.legend.fontSize,
      },
      backgroundColor: theme.legend.backgroundColor,
      ...legendConfig,
    } : undefined;

    // Build series config
    const seriesConfig = normalizedSeries.map((s, index) => {
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
        symbol: symbol,
        areaStyle: areaStyleConfig,
        itemStyle: {
          color: seriesColor,
        },
        lineStyle: {
          color: seriesColor,
          width: seriesLineWidth,
        },
      };

      // Add name if present
      if ('name' in s && s.name) {
        series.name = s.name;
      }

      // Handle interpolation
      if (step !== undefined && step !== false) {
        series.step = step;
      } else {
        series.smooth = smooth;
      }

      // Handle symbol size
      if (symbolSize !== undefined) {
        series.symbolSize = symbolSize;
      }

      // Handle stacking
      if (stack !== undefined && stack !== false) {
        series.stack = stackNormalize ? 'normalized' : (typeof stack === 'string' ? stack : 'total');
      } else if (stackNormalize) {
        series.stack = 'normalized';
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
    xAxisData,
    yAxisData,
    normalizedSeries,
    smooth,
    step,
    boundaryGap,
    stack,
    stackNormalize,
    symbol,
    symbolSize,
    areaOpacity,
    areaFill,
    showXAxis,
    showXAxisTicks,
    showXAxisLabels,
    showYAxis,
    showYAxisTicks,
    showYAxisLabels,
    showXAxisSplitLines,
    showYAxisSplitLines,
    grid,
    showLegend,
    hasNamedSeries,
    legendConfig,
    tooltipAxisPointer,
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

  return <SkiaChart ref={chartRef} />;
};

export const AreaChart = withResponsiveContainer(withChartTheme(ChartComponent));

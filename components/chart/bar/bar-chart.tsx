import { withResponsiveContainer } from '../chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '../chart-theme.context';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { BarChart as EChartsBarChart } from 'echarts/charts';
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
  EChartsBarChart,
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
 * - Series with custom styling: Array<{ name?: string; data: number[] | Array<{ value: number; itemStyle?: any }>; borderRadius?: number[] }>
 */
type SeriesData = 
  | number[] 
  | Array<{ data: number[] }> 
  | Array<{ name: string; data: number[] }>
  | Array<{ name?: string; data: number[] | Array<{ value: number; itemStyle?: any }>; borderRadius?: number[] }>;

/**
 * Props for the BarChart component.
 * A unified bar chart component that supports all bar chart variations.
 */
export interface BarChartProps {
  /**
   * X-axis labels. Can be a string array or object array with label and value.
   * Required for vertical bar charts.
   */
  xAxisData?: AxisData;
  
  /**
   * Y-axis labels. Can be a string array or object array with label and value.
   * Required for horizontal bar charts.
   */
  yAxisData?: AxisData;
  
  /**
   * Chart data. Can be:
   * - Single series: number[]
   * - Multiple series without names: Array<{ data: number[] }>
   * - Multiple series with names: Array<{ name: string; data: number[] }>
   * - Series with custom styling: Array<{ name?: string; data: number[] | Array<{ value: number; itemStyle?: any }>; borderRadius?: number[] }>
   */
  data: SeriesData;
  
  /**
   * Width of the chart in pixels.
   * @default 220
   */
  width?: number;
  
  /**
   * Height of the chart in pixels.
   * @default 350
   */
  height?: number;
  
  /**
   * Partial theme override for customizing chart appearance.
   */
  theme?: Partial<ChartTheme>;

  /**
   * Colors for the chart series. Overrides theme colors.
   */
  colors?: string[];
  
  /**
   * Orientation of the bars.
   * @default 'vertical'
   */
  orientation?: 'vertical' | 'horizontal';
  
  /**
   * Stack ID for stacking multiple series. When set, series are stacked on top of each other.
   */
  stack?: string | false;
  
  /**
   * Whether to normalize stacked values to show percentages (0-100%).
   * @default false
   */
  stackNormalize?: boolean;
  
  /**
   * Width of the bars as a percentage string (e.g., '60%').
   */
  barWidth?: string;
  
  /**
   * Gap between bars as a percentage string (e.g., '10%').
   */
  barGap?: string;
  
  /**
   * Border radius for each corner of the bars [topLeft, topRight, bottomRight, bottomLeft].
   * @default [4, 4, 4, 4]
   */
  borderRadius?: number[];
  
  /**
   * Whether to show value labels on bars.
   * @default false
   */
  showLabels?: boolean;
  
  /**
   * Position of the value labels on the bars.
   * @default 'top'
   */
  labelPosition?: 'top' | 'inside' | 'insideTop' | 'insideLeft' | 'insideRight' | 'outside' | 'right';
  
  /**
   * Custom label formatter function.
   */
  labelFormatter?: (params: any) => string;
  
  /**
   * Whether to show X-axis labels.
   * @default true
   */
  showXAxisLabels?: boolean;
  
  /**
   * Whether to show Y-axis labels.
   * @default false
   */
  showYAxisLabels?: boolean;
  
  /**
   * Grid positioning configuration.
   */
  grid?: {
    left?: string | number;
    right?: string | number;
    top?: string | number;
    bottom?: string | number;
    show?: boolean;
    containLabel?: boolean;
  };
  
  /**
   * Whether to display a legend for named series.
   * @default false
   */
  showLegend?: boolean;
  
  /**
   * Legend configuration options.
   */
  legendConfig?: {
    position?: 'top' | 'bottom' | 'left' | 'right';
    [key: string]: any;
  };
  
  /**
   * Tooltip configuration.
   */
  tooltipConfig?: {
    show?: boolean;
    trigger?: 'axis' | 'item' | 'none';
    axisPointer?: {
      type?: 'line' | 'shadow' | 'none' | 'cross';
      [key: string]: any;
    };
    formatter?: (params: any) => string;
    [key: string]: any;
  };
  
  /**
   * For negative bar charts: color for positive values.
   */
  positiveColor?: string;
  
  /**
   * For negative bar charts: color for negative values.
   */
  negativeColor?: string;
  
  /**
   * For active bar charts: index of the bar to highlight (zero-based).
   */
  activeIndex?: number;
  
  /**
   * Whether to use different colors for each bar (mixed bar chart).
   * @default false
   */
  mixedColors?: boolean;
  
  /**
   * Whether to show split lines on the value axis.
   * @default false
   */
  showSplitLine?: boolean;
}

const ChartComponent = ({
  xAxisData,
  yAxisData,
  data,
  width = 220,
  height = 350,
  orientation = 'vertical',
  stack,
  stackNormalize = false,
  barWidth,
  barGap,
  borderRadius = [4, 4, 4, 4],
  showLabels = false,
  labelPosition = 'top',
  labelFormatter,
  showXAxisLabels = true,
  showYAxisLabels = false,
  grid,
  showLegend = false,
  legendConfig,
  tooltipConfig,
  positiveColor,
  negativeColor,
  activeIndex,
  mixedColors = false,
  showSplitLine = false,
  ...props
}: BarChartProps) => {
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
      if ('data' in data[0]) {
        return data as Array<{ name?: string; data: number[] | Array<{ value: number; itemStyle?: any }>; borderRadius?: number[] }>;
      }
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

    const isHorizontal = orientation === 'horizontal';
    const categoryAxisData = isHorizontal ? yAxisData : xAxisData;
    const valueAxisData = isHorizontal ? xAxisData : yAxisData;
    
    const categoryLabels = categoryAxisData ? getAxisLabels(categoryAxisData) : [];
    const categoryIsObjectFormat = categoryAxisData ? isObjectFormat(categoryAxisData) : false;

    // Build tooltip config
    const tooltipConfigFinal: any = {
      trigger: 'axis',
      ...tooltipConfig,
    };
    if (tooltipConfig?.show === false) {
      tooltipConfigFinal.show = false;
    }

    // Build category axis config (X for vertical, Y for horizontal)
    const categoryAxisConfig: any = {
      type: categoryIsObjectFormat ? 'value' : 'category',
      data: categoryIsObjectFormat ? undefined : categoryLabels,
      axisLabel: {
        show: isHorizontal ? showYAxisLabels : showXAxisLabels,
        fontSize: 10,
        color: theme.axis[isHorizontal ? 'y' : 'x'].tickLabelColor,
        formatter: categoryIsObjectFormat 
          ? (value: number) => {
              const item = (categoryAxisData as Array<{ label: string; value: number }>).find(x => x.value === value);
              return item ? item.label : value.toString();
            }
          : undefined,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    };

    // Build value axis config (Y for vertical, X for horizontal)
    const valueAxisConfig: any = {
      type: 'value',
      axisLabel: {
        show: showYAxisLabels && !isHorizontal,
        color: theme.axis[isHorizontal ? 'x' : 'y'].tickLabelColor,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: showSplitLine ? {
        show: true,
        lineStyle: {
          color: theme.axis[isHorizontal ? 'x' : 'y'].splitLineColor || theme.axis[isHorizontal ? 'x' : 'y'].tickColor,
          width: theme.axis[isHorizontal ? 'x' : 'y'].splitLineWidth || 1,
          opacity: 0.5,
        },
      } : {
        show: false,
      },
    };

    // Build legend config
    const legendConfigFinal: any = showLegend && hasNamedSeries ? {
      data: normalizedSeries
        .filter(s => 'name' in s && s.name)
        .map(s => (s as { name: string }).name),
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
      const seriesData = 'data' in s ? s.data : [];
      
      // Handle mixed colors - each bar gets a different color
      let processedData: any[] = [];
      if (mixedColors && Array.isArray(seriesData) && seriesData.length > 0 && typeof seriesData[0] === 'number') {
        processedData = (seriesData as number[]).map((value, dataIndex) => {
          const itemStyle = theme.series[dataIndex % theme.series.length];
          return {
            value,
            itemStyle: {
              color: itemStyle.color,
              borderRadius: itemStyle.borderRadius || borderRadius,
            },
          };
        });
      } else if (activeIndex !== undefined && Array.isArray(seriesData) && seriesData.length > 0 && typeof seriesData[0] === 'number') {
        // Handle active bar - highlight one bar
        processedData = (seriesData as number[]).map((value, dataIndex) => {
          const isActive = dataIndex === activeIndex;
          const itemStyle = theme.series[isActive ? 0 : 1 % theme.series.length];
          return {
            value,
            itemStyle: {
              color: itemStyle.color,
              borderColor: isActive ? (itemStyle.borderColor || itemStyle.color) : undefined,
              borderWidth: isActive ? 2 : 0,
              borderType: isActive ? 'dashed' as const : 'solid' as const,
              borderRadius: itemStyle.borderRadius || borderRadius,
            },
          };
        });
      } else if ((positiveColor || negativeColor) && Array.isArray(seriesData) && seriesData.length > 0 && typeof seriesData[0] === 'number') {
        // Handle negative bars - different colors for positive/negative
        processedData = (seriesData as number[]).map((value) => {
          const posColor = positiveColor || theme.series[1].color;
          const negColor = negativeColor || theme.series[0].color;
          return {
            value,
            itemStyle: {
              color: value >= 0 ? posColor : negColor,
              borderRadius: borderRadius,
            },
          };
        });
      } else {
        processedData = seriesData as any[];
      }
      
      const series: any = {
        data: processedData,
        type: 'bar',
        barWidth: barWidth,
        barGap: barGap,
        itemStyle: !mixedColors && activeIndex === undefined && !positiveColor && !negativeColor ? {
          color: seriesColor,
          borderRadius: ('borderRadius' in s && s.borderRadius) ? s.borderRadius : borderRadius,
        } : undefined,
      };

      // Add name if present
      if ('name' in s && s.name) {
        series.name = s.name;
      }

      // Handle stacking
      if (stack !== undefined && stack !== false) {
        series.stack = stackNormalize ? 'normalized' : (typeof stack === 'string' ? stack : 'total');
      } else if (stackNormalize) {
        series.stack = 'normalized';
      }

      // Handle labels
      if (showLabels || labelFormatter) {
        series.label = {
          show: true,
          position: labelPosition,
          fontSize: 10,
          color: theme.axis.x.tickLabelColor,
          formatter: labelFormatter,
        };
      }

      series.emphasis = {
        disabled: true,
      };

      return series;
    });

    const config: any = {
      tooltip: tooltipConfigFinal,
      grid: grid || {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        show: false,
        splitLine: {
          show: false,
        },
      },
      [isHorizontal ? 'yAxis' : 'xAxis']: categoryAxisConfig,
      [isHorizontal ? 'xAxis' : 'yAxis']: valueAxisConfig,
      series: seriesConfig,
    };

    // Add legend if configured
    if (legendConfigFinal) {
      config.legend = legendConfigFinal;
    }

    return config;
  }, [
    theme,
    xAxisData,
    yAxisData,
    normalizedSeries,
    orientation,
    stack,
    stackNormalize,
    barWidth,
    barGap,
    borderRadius,
    showLabels,
    labelPosition,
    labelFormatter,
    showXAxisLabels,
    showYAxisLabels,
    grid,
    showLegend,
    hasNamedSeries,
    legendConfig,
    tooltipConfig,
    positiveColor,
    negativeColor,
    activeIndex,
    mixedColors,
    showSplitLine,
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

export const BarChart = withResponsiveContainer(withChartTheme(ChartComponent));

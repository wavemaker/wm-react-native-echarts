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
 */
export interface AreaChartProps {
  /**
   * X-axis labels. Can be a string array or object array with label and value.
   */
  xAxisData: AxisData;
  
  /**
   * Chart data. Can be:
   * - Single series: number[]
   * - Multiple series without names: Array<{ data: number[] }>
   * - Multiple series with names: Array<{ name: string; data: number[] }>
   */
  data: SeriesData;
  
  /**
   * Y-axis labels. When provided, enables custom Y-axis labels.
   */
  yAxisData?: AxisData;
  
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
   * Whether to use smooth curve interpolation.
   * @default true
   */
  smooth?: boolean;
  
  /**
   * Step interpolation mode. When set, creates step lines instead of smooth curves.
   * Takes precedence over smooth.
   */
  step?: 'start' | 'middle' | 'end' | false;
  
  /**
   * Whether to leave gaps at the start and end of the axis.
   * When undefined, uses ECharts default behavior.
   */
  boundaryGap?: boolean;
  
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
   * Symbol type for data points.
   * @default 'none'
   */
  symbol?: 'none' | 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | string;
  
  /**
   * Size of the symbol.
   */
  symbolSize?: number | number[] | Function;
  
  /**
   * Opacity of the filled area (0-1).
   * @default 0.6
   */
  areaOpacity?: number;
  
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
   * Tooltip axis pointer configuration.
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
  showXAxisLabels = true,
  showYAxisLabels = false,
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
      axisLine: {
        lineStyle: {
          color: theme.axis.x.lineColor,
          width: theme.axis.x.lineWidth,
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
      axisLine: yAxisData ? {
        lineStyle: {
          color: theme.axis.y.lineColor,
          width: theme.axis.y.lineWidth,
        },
      } : undefined,
      splitLine: {
        show: true,
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
      
      const series: any = {
        data: 'data' in s ? s.data : [],
        type: 'line',
        symbol: symbol,
        areaStyle: {
          opacity: areaOpacity,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: seriesColor + '66' },
              { offset: 1, color: seriesColor + '66' },
            ],
          },
        },
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
    showXAxisLabels,
    showYAxisLabels,
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

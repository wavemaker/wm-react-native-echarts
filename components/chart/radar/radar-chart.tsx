import { withResponsiveContainer } from '../chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '../chart-theme.context';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { RadarChart as EChartsRadarChart } from 'echarts/charts';
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
  EChartsRadarChart,
]);

/**
 * Definition for a radar chart indicator (axis).
 */
export interface RadarIndicator {
  /** Name/label of the indicator */
  name: string;
  /** Maximum value for this indicator */
  max: number;
}

/**
 * Data structure for a radar series.
 */
export interface RadarSeriesData {
  /** Array of values for each indicator */
  value: number[];
  /** Optional name for the series */
  name?: string;
}

/**
 * Props for the RadarChart component.
 * A unified radar chart component that supports all radar chart variations.
 */
export interface RadarChartProps {
  /**
   * Array of indicators defining the radar axes.
   */
  indicators: RadarIndicator[];
  
  /**
   * Data for the chart. Can be:
   * - Single series: number[]
   * - Multiple series: Array<{ value: number[]; name?: string }>
   */
  data: number[] | RadarSeriesData[];
  
  /**
   * Width of the chart in pixels.
   * @default 220
   */
  width?: number;
  
  /**
   * Height of the chart in pixels.
   * @default 300
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
   * Shape of the radar grid. 'polygon' or 'circle'.
   * @default 'polygon'
   */
  shape?: 'polygon' | 'circle';
  
  /**
   * Whether to show split area (filled background).
   * @default false
   */
  showSplitArea?: boolean;
  
  /**
   * Whether to show split lines (grid lines).
   * @default true
   */
  showSplitLine?: boolean;
  
  /**
   * Whether to show area fill for data series.
   * @default true
   */
  showArea?: boolean;
  
  /**
   * Opacity of the area fill (0-1).
   * @default 0.5
   */
  areaOpacity?: number;
  
  /**
   * Whether to show symbols (dots) on data points.
   * @default false
   */
  showSymbol?: boolean;
  
  /**
   * Symbol type for data points.
   * @default 'circle'
   */
  symbol?: 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | string;
  
  /**
   * Size of the symbol.
   * @default 4
   */
  symbolSize?: number;
  
  /**
   * Whether to show lines connecting data points.
   * @default true
   */
  showLine?: boolean;
  
  /**
   * Width of the line.
   * @default 2
   */
  lineWidth?: number;
  
  /**
   * Whether to show a legend for multiple series.
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
    [key: string]: any;
  };
}

const ChartComponent = ({
  indicators,
  data,
  width = 220,
  height = 300,
  shape = 'polygon',
  showSplitArea = false,
  showSplitLine = true,
  showArea = true,
  areaOpacity = 0.5,
  showSymbol = false,
  symbol = 'circle',
  symbolSize = 4,
  showLine = true,
  lineWidth = 2,
  showLegend = false,
  legendConfig,
  tooltipConfig,
  ...props
}: RadarChartProps) => {
  const { theme } = useChartTheme(props.theme, props.colors);
  const chartRef = useRef<any>(null);

  // Normalize data format
  const normalizedData = useMemo(() => {
    if (Array.isArray(data) && data.length > 0) {
      // Check if it's a single number array
      if (typeof data[0] === 'number') {
        return [{ value: data as number[] }];
      }
      // It's array of objects with value property
      return data as RadarSeriesData[];
    }
    return [];
  }, [data]);

  // Check if series have names
  const hasNamedSeries = useMemo(() => {
    return normalizedData.some(s => s.name);
  }, [normalizedData]);

  const option = useMemo(() => {
    // Build tooltip config
    const tooltipConfigFinal: any = {
      ...tooltipConfig,
    };

    // Build legend config
    const legendConfigFinal: any = showLegend && hasNamedSeries ? {
      data: normalizedData
        .filter(s => s.name)
        .map(s => s.name),
      textStyle: {
        color: theme.legend.textColor,
        fontSize: theme.legend.fontSize,
      },
      backgroundColor: theme.legend.backgroundColor,
      ...legendConfig,
    } : undefined;

    // Build radar config
    const radarConfig: any = {
      indicator: indicators,
      shape: shape,
      splitArea: {
        show: showSplitArea,
      },
      splitLine: {
        show: showSplitLine,
        lineStyle: {
          color: theme.axis.r.tickColor,
        },
      },
      axisName: {
        color: theme.axis.r.tickLabelColor,
      },
      tick: {
        label: theme.axis.r.tickColor,
      },
      axisLine: {
        lineStyle: {
          color: theme.axis.r.lineColor,
        },
      },
    };

    // Build series config
    const seriesConfig = normalizedData.map((s, index) => {
      const seriesColor = theme.series[index % theme.series.length].color;
      
      const series: any = {
        type: 'radar',
        data: [
          {
            value: s.value,
            name: s.name,
            areaStyle: showArea ? { 
              opacity: areaOpacity,
              color: seriesColor,
            } : undefined,
            itemStyle: { 
              color: seriesColor,
              opacity: showSymbol ? 1 : 0,
            },
            symbol: showSymbol ? symbol : 'none',
            symbolSize: symbolSize,
            lineStyle: showLine ? { 
              width: lineWidth,
              color: seriesColor,
            } : { width: 0 },
          },
        ],
      };

      return series;
    });

    const config: any = {
      tooltip: tooltipConfigFinal,
      radar: radarConfig,
      series: seriesConfig,
    };

    // Add legend if configured
    if (legendConfigFinal) {
      config.legend = legendConfigFinal;
    }

    return config;
  }, [
    theme,
    indicators,
    normalizedData,
    shape,
    showSplitArea,
    showSplitLine,
    showArea,
    areaOpacity,
    showSymbol,
    symbol,
    symbolSize,
    showLine,
    lineWidth,
    showLegend,
    hasNamedSeries,
    legendConfig,
    tooltipConfig,
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

export const RadarChart = withResponsiveContainer(withChartTheme(ChartComponent));

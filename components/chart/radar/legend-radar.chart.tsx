import { withResponsiveContainer } from '../chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '../chart-theme.context';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { RadarChart } from 'echarts/charts';
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
  RadarChart,
]);

/**
 * Definition for a radar chart indicator (axis).
 */
interface RadarIndicator {
  /** Name/label of the indicator */
  name: string;
  /** Maximum value for this indicator */
  max: number;
}

/**
 * Data structure for a radar series.
 */
interface RadarSeriesData {
  /** Array of values for each indicator */
  value: number[];
  /** Name for the series (displayed in legend) */
  name: string;
}

/**
 * Props for the LegendRadarChart component.
 * A radar chart with multiple series and a legend.
 */
interface LegendRadarChartProps {
  /**
   * Array of indicators defining the radar axes.
   */
  indicators: RadarIndicator[];
  
  /**
   * Array of named data series to display.
   */
  data: RadarSeriesData[];
  
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
   * Colors for the chart.
   * @default theme.itemStyles.map(item => item.color)
   */
  colors?: string[];
}

const ChartComponent = ({
  indicators,
  data,
  width = 220,
  height = 300,
  ...props
}: LegendRadarChartProps) => {
  const { theme } = useChartTheme(props.theme, props.colors);
  const chartRef = useRef<any>(null);

  const option = useMemo(() => {
    return {
      tooltip: {},
      legend: {
        data: data.map((s, index) => ({
          name: s.name,
          itemStyle: {
            color: theme.series[index % theme.series.length].color,
            opacity: index === 0 ? 0.3 : 0.8,
            width: 1,
          },
        })),
        bottom: 5,
        textStyle: {
          color: theme.legend.textColor,
          fontSize: theme.legend.fontSize,
        },
        backgroundColor: theme.legend.backgroundColor,
      },
      radar: {
        indicator: indicators,
        shape: 'polygon',
        splitArea: {
          show: false,
        },
        splitLine: {
          show: true,
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
      },
      series: [
        {
          type: 'radar',
          data: data.map((s, index) => ({
            value: s.value,
            name: s.name,
            areaStyle: { opacity: index === 0 ? 0.3 : 0.8 },
            itemStyle: { color: theme.series[index % theme.series.length].color, opacity: 0 },
            lineStyle: { width: 0 },
          })),
        },
      ],
    };
  }, [theme, indicators, data]);

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

export const LegendRadarChart = withResponsiveContainer(withChartTheme(ChartComponent));


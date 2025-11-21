import { withResponsiveContainer } from '../chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '../chart-theme.context';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { RadarChart } from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { useEffect, useMemo, useRef } from 'react';

// Register necessary components for this chart
echarts.use([
  TooltipComponent,
  GridComponent,
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
  /** Optional name for the series */
  name?: string;
}

/**
 * Props for the MultipleRadarChart component.
 * A radar chart displaying multiple data series for comparison.
 */
interface MultipleRadarChartProps {
  /**
   * Array of indicators defining the radar axes.
   */
  indicators: RadarIndicator[];
  
  /**
   * Array of data series to display.
   */
  series: RadarSeriesData[];
  
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
}

const ChartComponent = ({
  indicators,
  series,
  width = 220,
  height = 300,
}: MultipleRadarChartProps) => {
  const { theme } = useChartTheme();
  const chartRef = useRef<any>(null);

  const option = useMemo(() => {
    return {
      tooltip: {},
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
          color: theme.axis.r.labelColor,
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
          data: series.map((s, index) => ({
            value: s.value,
            name: s.name,
            areaStyle: { opacity: index === 0 ? 0.3 : 0.8 },
            itemStyle: { color: theme.series.colors[index % theme.series.colors.length], opacity: 0 },
            lineStyle: { width: 0 },
          })),
        },
      ],
    };
  }, [theme, indicators, series]);

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

export const MultipleRadarChart = withResponsiveContainer(withChartTheme(ChartComponent));


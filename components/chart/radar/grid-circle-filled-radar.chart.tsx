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
 * Props for the GridCircleFilledRadarChart component.
 * A radar chart with circular grid and filled area.
 */
interface GridCircleFilledRadarChartProps {
  /**
   * Array of indicators defining the radar axes.
   */
  indicators: RadarIndicator[];
  
  /**
   * Array of values corresponding to each indicator.
   */
  data: number[];
  
  /**
   * Color for the filled area.
   * @default Theme color with opacity
   */
  areaColor?: string;
  
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
  data,
  areaColor = 'rgb(29, 10, 239)',
  width = 220,
  height = 300,
}: GridCircleFilledRadarChartProps) => {
  const { theme } = useChartTheme();
  const chartRef = useRef<any>(null);

  const option = useMemo(() => {
    return {
      tooltip: {},
      radar: {
        indicator: indicators,
        shape: 'circle',
        splitArea: {
          areaStyle: {
            color: [
              'rgba(96, 165, 250, 0.1)',
              'rgba(96, 165, 250, 0.2)',
              'rgba(96, 165, 250, 0.3)',
              'rgba(96, 165, 250, 0.4)',
              'rgba(96, 165, 250, 0.5)',
              'rgba(96, 165, 250, 0.6)',
            ],
          },
        },
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisName: {
          color: theme.axis.r.labelColor,
        },
        tick: {
          label: theme.axis.r.tickColor,
        },
      },
      series: [
        {
          type: 'radar',
          data: [
            {
              value: data,
              areaStyle: { opacity: 0.3, color: areaColor },
              itemStyle: { color: theme.series.colors[0], opacity: 0 },
              lineStyle: { width: 0 },
            },
          ],
        },
      ],
    };
  }, [theme, indicators, data, areaColor]);

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

export const GridCircleFilledRadarChart = withResponsiveContainer(withChartTheme(ChartComponent));


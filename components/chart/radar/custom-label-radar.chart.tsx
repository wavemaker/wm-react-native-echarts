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
 * Props for the CustomLabelRadarChart component.
 * A radar chart with customizable label formatting and positioning.
 */
interface CustomLabelRadarChartProps {
  /**
   * Array of indicators defining the radar axes.
   * @default 6 monthly indicators with max 400
   */
  indicators?: RadarIndicator[];
  
  /**
   * Array of values corresponding to each indicator.
   * @default Sample data values
   */
  data?: number[];
  
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
  indicators = [
    { name: 'January', max: 400 },
    { name: 'February', max: 400 },
    { name: 'March', max: 400 },
    { name: 'April', max: 400 },
    { name: 'May', max: 400 },
    { name: 'June', max: 400 },
  ],
  data = [240, 305, 237, 280, 209, 364],
  width = 220,
  height = 300,
}: CustomLabelRadarChartProps) => {
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
          data: [
            {
              value: data,
              areaStyle: { opacity: 0.3 },
              itemStyle: { color: theme.series.colors[0], width: 1 },
              label: {
                show: true,
                formatter: (params: any) => params.value,
                color: theme.axis.x.labelColor,
              },
            },
          ],
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

export const CustomLabelRadarChart = withResponsiveContainer(withChartTheme(ChartComponent));


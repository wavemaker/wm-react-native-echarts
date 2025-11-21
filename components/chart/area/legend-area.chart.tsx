import { withResponsiveContainer } from '../chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '../chart-theme.context';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { LineChart } from 'echarts/charts';
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
 * Props for the LegendAreaChart component.
 * An area chart with multiple named series and automatic legend display.
 */
interface LegendAreaChartProps {
  /**
   * X-axis labels. Can be a string array or object array with label and value.
   * @default ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
   */
  xAxisData?: AxisData;
  
  /**
   * Array of named data series. Each series has a name and data array.
   * @default [{ name: 'Mobile', data: [140, 180, 200, 150, 160, 210] }, { name: 'Desktop', data: [80, 120, 140, 90, 100, 150] }]
   */
  series?: Array<{
    name: string;
    data: number[];
  }>;
  
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
   * Width of the lines in pixels.
   * @default 2
   */
  lineWidth?: number;
  
  /**
   * Partial theme override for customizing chart appearance.
   */
  theme?: Partial<ChartTheme>;
}

const ChartComponent = ({
  xAxisData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series = [
    {
      name: 'Mobile',
      data: [140, 180, 200, 150, 160, 210],
    },
    {
      name: 'Desktop',
      data: [80, 120, 140, 90, 100, 150],
    },
  ],
  width = 220,
  height = 350,
  lineWidth = 2,
}: LegendAreaChartProps) => {
  const { theme } = useChartTheme();
  const chartRef = useRef<any>(null);

  const option = useMemo(() => {
    // Helper to extract labels
    const getAxisLabels = (axisData: AxisData): string[] => {
      if (typeof axisData[0] === 'string') {
        return axisData as string[];
      }
      return (axisData as Array<{ label: string; value: number }>).map(item => item.label);
    };

    // Helper to check if axis data is in object format
    const isObjectFormat = (axisData: AxisData): boolean => {
      return typeof axisData[0] === 'object';
    };

    const xAxisLabels = getAxisLabels(xAxisData);
    const xAxisIsObjectFormat = isObjectFormat(xAxisData);

    return {
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: xAxisIsObjectFormat ? 'value' : 'category',
        boundaryGap: false,
        data: xAxisIsObjectFormat ? undefined : xAxisLabels,
        axisLabel: {
          color: theme.axis.x.labelColor,
          formatter: xAxisIsObjectFormat 
            ? (value: number) => {
                const item = (xAxisData as Array<{ label: string; value: number }>).find(x => x.value === value);
                return item ? item.label : value.toString();
              }
            : undefined,
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          show: false,
        },
      },
      series: series.map((s, index) => ({
        name: s.name,
        data: s.data,
        type: 'line',
        smooth: true,
        symbol: 'none',
        areaStyle: {
          opacity: 0.5,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: theme.series.colors[index % theme.series.colors.length] + '66' },
              { offset: 1, color: theme.series.colors[index % theme.series.colors.length] + '66' },
            ],
          },
        },
        itemStyle: {
          color: theme.series.colors[index % theme.series.colors.length],
        },
        lineStyle: {
          color: theme.series.colors[index % theme.series.colors.length],
          width: lineWidth,
        },
      })),
    };
  }, [theme, xAxisData, series, lineWidth]);

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

export const LegendAreaChart = withResponsiveContainer(withChartTheme(ChartComponent));

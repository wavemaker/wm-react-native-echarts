import { withResponsiveContainer } from '../chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '../chart-theme.context';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { BarChart } from 'echarts/charts';
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
  BarChart,
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
 * Props for the HorizontalBarChart component.
 * A horizontal bar chart with bars extending from left to right.
 */
interface HorizontalBarChartProps {
  /**
   * Y-axis labels. Can be a string array or object array with label and value.
   * @default ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
   */
  yAxisData?: AxisData;
  
  /**
   * Array of numeric values for each bar.
   * @default [186, 305, 237, 73, 209, 214]
   */
  data?: number[];
  
  /**
   * Color for the bars. If not provided, uses theme color.
   * @default theme.series.colors[1]
   */
  color?: string;
  
  /**
   * Width of the bars as a percentage string.
   * @default '80%'
   */
  barWidth?: string;
  
  /**
   * Gap between bars as a percentage string.
   * @default undefined
   */
  barGap?: string;
  
  /**
   * Border radius for each corner of the bars [topLeft, topRight, bottomRight, bottomLeft].
   * @default [4, 4, 4, 4]
   */
  borderRadius?: number[];
  
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
  yAxisData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  data = [186, 305, 237, 73, 209, 214],
  color,
  barWidth = '80%',
  barGap,
  borderRadius = [4, 4, 4, 4],
  width = 220,
  height = 350,
}: HorizontalBarChartProps) => {
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

    const yAxisLabels = getAxisLabels(yAxisData);
    const yAxisIsObjectFormat = isObjectFormat(yAxisData);

    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        show: false,
      },
      xAxis: {
        axisLine: {
          show: false,
        },
      },
      yAxis: {
        type: yAxisIsObjectFormat ? 'value' : 'category',
        data: yAxisIsObjectFormat ? undefined : yAxisLabels,
        axisLine: {
          show: false,
        },
        axisLabel: {
          fontSize: 10,
          color: theme.axis.y.labelColor,
          formatter: yAxisIsObjectFormat 
            ? (value: number) => {
                const item = (yAxisData as Array<{ label: string; value: number }>).find(x => x.value === value);
                return item ? item.label : value.toString();
              }
            : undefined,
        },
        axisTick: {
          show: false,
        },
      },
      series: [
        {
          data: data,
          type: 'bar',
          barWidth: barWidth,
          barGap: barGap,
          itemStyle: {
            color: color || theme.series.colors[1],
            borderRadius: borderRadius,
          },
          emphasis: {
            disabled: true,
          },
        },
      ],
    };
  }, [theme, yAxisData, data, color, barWidth, barGap, borderRadius]);

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

export const HorizontalBarChart = withResponsiveContainer(withChartTheme(ChartComponent));


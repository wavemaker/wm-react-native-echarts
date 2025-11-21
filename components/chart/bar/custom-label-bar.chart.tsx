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
 * Props for the CustomLabelBarChart component.
 * A horizontal bar chart with category labels inside the bars and values displayed on the right.
 */
interface CustomLabelBarChartProps {
  /**
   * Y-axis labels. Can be a string array or object array with label and value.
   * @default ['January', 'February', 'March', 'April', 'May', 'June']
   */
  yAxisData?: AxisData;
  
  /**
   * Array of numeric values for each bar.
   * @default [100, 150, 120, 40, 110, 120]
   */
  data?: number[];
  
  /**
   * Color for the primary (data) bars.
   * @default theme.series.colors[0]
   */
  primaryColor?: string;
  
  /**
   * Color for the secondary (helper) series used for positioning labels.
   * @default theme.series.colors[1]
   */
  secondaryColor?: string;
  
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
  yAxisData = ['January', 'February', 'March', 'April', 'May', 'June'],
  data = [100, 150, 120, 40, 110, 120],
  primaryColor,
  secondaryColor,
  barWidth = '80%',
  barGap,
  width = 220,
  height = 350,
}: CustomLabelBarChartProps) => {
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
        formatter: function(params: any) {
          const param = params[0];
          return yAxisLabels[param.dataIndex] + ' ' + param.value;
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
      yAxis: {
        type: yAxisIsObjectFormat ? 'value' : 'category',
        data: yAxisIsObjectFormat ? undefined : yAxisLabels,
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
      series: [
        {
          name: 'Series A',
          data: data,
          type: 'bar',
          stack: 'total',
          barWidth: barWidth,
          barGap: barGap,
          itemStyle: {
            color: primaryColor || theme.series.colors[0],
            borderRadius: [4, 4, 4, 4],
          },
          label: {
            show: true,
            position: 'insideLeft',
            formatter: function(params: any) {
              return yAxisLabels[params.dataIndex];
            },
            fontSize: 10,
            color: '#ffffff',
            fontWeight: 'bold',
          },
          emphasis: {
            disabled: true,
          },
        },
        {
          name: 'Series B',
          data: [0, 0, 0, 0, 0, 0],
          type: 'bar',
          stack: 'total',
          barWidth: barWidth,
          barGap: barGap,
          tooltip: {
            show: false,
          },
          itemStyle: {
            color: secondaryColor || theme.series.colors[1],
            borderRadius: [4, 4, 4, 4],
          },
          label: {
            show: true,
            position: 'right',
            formatter: function(params: any) {
              return data[params.dataIndex];
            },
            fontSize: 10,
            color: theme.axis.x.labelColor,
          },
          emphasis: {
            disabled: true,
          },
        },
      ],
    };
  }, [theme, yAxisData, data, primaryColor, secondaryColor, barWidth, barGap]);

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

export const CustomLabelBarChart = withResponsiveContainer(withChartTheme(ChartComponent));


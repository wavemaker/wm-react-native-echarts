import React, { useEffect, useMemo, useRef } from 'react';
import { withResponsiveContainer } from '../chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '../chart-theme.context';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { BarChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';


// Register necessary components for this chart
echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
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
 * Props for the MultipleBarChart component.
 * A chart that displays multiple data series as grouped bars side by side.
 */
interface MultipleBarChartProps {
  /**
   * X-axis labels. Can be a string array or object array with label and value.
   */
  xAxisData: AxisData;
  
  /**
   * Array of data series to display. Each series has a name and data array.
   */
  data: Array<{
    name: string;
    data: number[];
  }>;
  
  /**
   * Width of each bar as a percentage string.
   * @default '40%'
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

  /**
   * Colors for the chart.
   * @default theme.itemStyles.map(item => item.color)
   */
  colors?: string[];
}

const ChartComponent = ({
  xAxisData,
  data,
  barWidth = '40%',
  barGap,
  borderRadius = [4, 4, 4, 4],
  width = 220,
  height = 350,
  ...props
}: MultipleBarChartProps) => {
  const { theme } = useChartTheme(props.theme, props.colors);
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
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: data.map(s => s.name),
        bottom: '5%',
        textStyle: {
          color: theme.legend.textColor,
          fontSize: theme.legend.fontSize,
        },
        backgroundColor: theme.legend.backgroundColor,
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        containLabel: true,
        show: false,
        splitLine: {
          show: false,
        },
      },
      xAxis: {
        type: xAxisIsObjectFormat ? 'value' : 'category',
        data: xAxisIsObjectFormat ? undefined : xAxisLabels,
        axisLabel: {
          show: true,
          fontSize: 10,
          color: theme.axis.x.tickLabelColor,
          formatter: xAxisIsObjectFormat 
            ? (value: number) => {
                const item = (xAxisData as Array<{ label: string; value: number }>).find(x => x.value === value);
                return item ? item.label : value.toString();
              }
            : undefined,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
      },
      yAxis: {
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
        splitLine: {
          show: true,
          lineStyle: {
            color: theme.axis.y.tickColor,
            opacity: 0.5,
          },
        },
      },
      series: data.map((s, index) => ({
        name: s.name,
        type: 'bar',
        data: s.data,
        barWidth: barWidth,
        barGap: barGap,
        itemStyle: {
          color: theme.series[index % theme.series.length].color,
          borderRadius: borderRadius,
        },
        emphasis: {
          disabled: true,
        },
      })),
    };
  }, [theme, xAxisData, data, barWidth, barGap, borderRadius]);

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

export const MultipleBarChart = withResponsiveContainer(withChartTheme(ChartComponent));


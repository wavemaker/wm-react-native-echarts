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
 * Props for the NegativeBarChart component.
 * A bar chart that can display both positive and negative values with different colors.
 */
interface NegativeBarChartProps {
  /**
   * X-axis labels. Can be a string array or object array with label and value.
   */
  xAxisData: AxisData;
  
  /**
   * Array of numeric values, can include negative numbers.
   */
  data: number[];
  
  /**
   * Color for positive values. If not provided, uses theme color.
   * @default theme.series.colors[1]
   */
  positiveColor?: string;
  
  /**
   * Color for negative values. If not provided, uses theme color.
   * @default theme.series.colors[0]
   */
  negativeColor?: string;
  
  /**
   * Width of the bars as a percentage string.
   * @default '60%'
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
   * Whether to show category labels on the bars.
   * @default true
   */
  showLabels?: boolean;
  
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
  xAxisData,
  data,
  positiveColor,
  negativeColor,
  barWidth = '60%',
  barGap,
  borderRadius = [4, 4, 4, 4],
  showLabels = true,
  width = 220,
  height = 350,
}: NegativeBarChartProps) => {
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
        show: false,
      },
      grid: {
        left: '5%',
        right: '5%',
        bottom: '3%',
        top: '5%',
        containLabel: true,
      },
      xAxis: {
        type: xAxisIsObjectFormat ? 'value' : 'category',
        data: xAxisIsObjectFormat ? undefined : xAxisLabels,
        axisLabel: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#aaa',
          },
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
      series: [
        {
          data: data,
          type: 'bar',
          barWidth: barWidth,
          barGap: barGap,
          itemStyle: {
            color: function(params: any) {
              const posColor = positiveColor || theme.series.colors[1];
              const negColor = negativeColor || theme.series.colors[0];
              return params.value >= 0 ? posColor : negColor;
            },
            borderRadius: borderRadius,
          },
          label: showLabels ? {
            show: true,
            position: 'outside',
            formatter: function(params: any) {
              return xAxisLabels[params.dataIndex];
            },
            fontSize: 10,
            color: theme.axis.x.labelColor,
          } : {
            show: false,
          },
          emphasis: {
            disabled: true,
          },
        },
      ],
    };
  }, [theme, xAxisData, data, positiveColor, negativeColor, barWidth, barGap, borderRadius, showLabels]);

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

export const NegativeBarChart = withResponsiveContainer(withChartTheme(ChartComponent));


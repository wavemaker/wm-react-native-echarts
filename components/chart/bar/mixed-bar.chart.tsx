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
 * Props for the MixedBarChart component.
 * A horizontal bar chart where each bar can have its own color and styling.
 */
interface MixedBarChartProps {
  /**
   * Y-axis labels. Can be a string array or object array with label and value.
   */
  yAxisData: AxisData;
  
  /**
   * Array of numeric values for each bar.
   */
  data: number[];
  
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
   * Use theme.itemStyles to customize bar colors and styling.
   */
  theme?: Partial<ChartTheme>;

  /**
   * Colors for the chart.
   * @default theme.itemStyles.map(item => item.color)
   */
  colors?: string[];
}

const ChartComponent = ({
  yAxisData,
  data,
  barWidth = '60%',
  barGap,
  width = 220,
  height = 350,
  ...props
}: MixedBarChartProps) => {
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

    const yAxisLabels = getAxisLabels(yAxisData);
    const yAxisIsObjectFormat = isObjectFormat(yAxisData);

    // Map data values to chart data with itemStyles from theme
    const chartData = data.map((value, index) => {
      const itemStyle = theme.itemStyles[index % theme.itemStyles.length];
      return {
        value,
        itemStyle: {
          color: itemStyle.color,
          borderRadius: itemStyle.borderRadius || [4, 4, 4, 4],
          borderColor: itemStyle.borderColor,
          borderWidth: itemStyle.borderWidth,
          borderType: itemStyle.borderType,
        },
      };
    });

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
          show: false,
        },
      },
      yAxis: {
        type: yAxisIsObjectFormat ? 'value' : 'category',
        data: yAxisIsObjectFormat ? undefined : yAxisLabels,
        axisLabel: {
          show: true,
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
        axisLine: {
          show: false,
        },
      },
      series: [
        {
          data: chartData,
          type: 'bar',
          barWidth: barWidth,
          barGap: barGap,
          emphasis: {
            disabled: true,
          },
        },
      ],
    };
  }, [theme, yAxisData, data, barWidth, barGap]);

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

export const MixedBarChart = withResponsiveContainer(withChartTheme(ChartComponent));


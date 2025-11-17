import { withResponsiveContainer } from '@/contexts/chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '@/contexts/chart-theme.context';
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

type AxisData = string[] | Array<{ label: string; value: number }>;

interface DefaultBarChartProps {
  xAxisData?: AxisData;
  data?: number[];
  color?: string;
  borderRadius?: number[];
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}

const ChartComponent = ({
  xAxisData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  data = [186, 305, 237, 73, 209, 214],
  color,
  borderRadius = [4, 4, 4, 4],
  width = 220,
  height = 350,
}: DefaultBarChartProps) => {
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
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        show: true,
        borderColor: 'transparent',
        backgroundColor: 'transparent',
        splitLine: {
          show: false,
        },
      },
      xAxis: {
        type: xAxisIsObjectFormat ? 'value' : 'category',
        data: xAxisIsObjectFormat ? undefined : xAxisLabels,
        axisLine: {
          show: false,
        },
        axisLabel: {
          fontSize: 10,
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
      series: [
        {
          data: data,
          type: 'bar',
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
  }, [theme, xAxisData, data, color, borderRadius]);

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

export const DefaultBarChart = withResponsiveContainer(withChartTheme(ChartComponent));


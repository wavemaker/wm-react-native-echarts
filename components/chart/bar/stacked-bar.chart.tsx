import { withResponsiveContainer } from '@/contexts/chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '@/contexts/chart-theme.context';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { BarChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { useEffect, useMemo, useRef } from 'react';

// Register necessary components for this chart
echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  SkiaRenderer,
  BarChart,
]);

type AxisData = string[] | Array<{ label: string; value: number }>;

interface StackedBarChartProps {
  xAxisData?: AxisData;
  series?: Array<{
    name: string;
    data: number[];
    borderRadius?: number[];
  }>;
  stack?: string;
  barWidth?: string;
  barGap?: string;
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}

const ChartComponent = ({
  xAxisData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series = [
    {
      name: 'Desktop',
      data: [100, 150, 120, 40, 110, 120],
      borderRadius: [0, 0, 4, 4],
    },
    {
      name: 'Mobile',
      data: [86, 155, 117, 33, 99, 94],
      borderRadius: [4, 4, 0, 0],
    },
  ],
  stack = 'total',
  barWidth,
  barGap,
  width = 220,
  height = 350,
}: StackedBarChartProps) => {
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
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: series.map(s => s.name),
        bottom: '5%',
        textStyle: {
          fontSize: 10,
          color: theme.axis.x.labelColor,
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        containLabel: true,
      },
      xAxis: {
        type: xAxisIsObjectFormat ? 'value' : 'category',
        data: xAxisIsObjectFormat ? undefined : xAxisLabels,
        axisLabel: {
          show: true,
          fontSize: 10,
          color: theme.axis.x.labelColor,
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
      },
      series: series.map((s, index) => ({
        name: s.name,
        type: 'bar',
        stack: stack,
        data: s.data,
        barWidth: barWidth,
        barGap: barGap,
        itemStyle: {
          color: theme.series.colors[index % theme.series.colors.length],
          borderRadius: s.borderRadius || [0, 0, 0, 0],
        },
        emphasis: {
          disabled: true,
        },
      })),
    };
  }, [theme, xAxisData, series, stack, barWidth, barGap]);

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

export const StackedBarChart = withResponsiveContainer(withChartTheme(ChartComponent));


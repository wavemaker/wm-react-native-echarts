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

interface ActiveBarChartProps {
  xAxisData?: AxisData;
  data?: Array<{
    value: number;
    itemStyle: {
      color: string;
      borderRadius: number[];
      borderColor?: string;
      borderWidth?: number;
      borderType?: 'solid' | 'dashed';
    };
  }>;
  activeIndex?: number;
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}

const ChartComponent = ({
  xAxisData = ['Chrome', 'Safari', 'Firefox', 'Edge', 'Other'],
  data,
  activeIndex = 2,
  width = 220,
  height = 350,
}: ActiveBarChartProps) => {
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

    // Generate data with one active bar
    const chartData = data || xAxisLabels.map((_, index) => {
      const value = Math.floor(Math.random() * 50) + (index === activeIndex ? 85 : 15);
      return {
        value,
        itemStyle: {
          color: index === activeIndex ? theme.series.colors[0] : theme.series.colors[1],
          borderColor: index === activeIndex ? theme.series.colors[0].replace('3b82f6', '1d4ed8') : undefined,
          borderWidth: index === activeIndex ? 2 : 0,
          borderType: index === activeIndex ? 'dashed' as 'dashed' : 'solid' as 'solid',
          borderRadius: [4, 4, 4, 4],
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
          data: chartData,
          type: 'bar',
          emphasis: {
            disabled: true,
          },
        },
      ],
    };
  }, [theme, xAxisData, data, activeIndex]);

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

export const ActiveBarChart = withResponsiveContainer(withChartTheme(ChartComponent));


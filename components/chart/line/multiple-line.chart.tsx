import { withResponsiveContainer } from '@/contexts/chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '@/contexts/chart-theme.context';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { LineChart } from 'echarts/charts';
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
  LineChart,
]);

type AxisData = string[] | Array<{ label: string; value: number }>;

interface MultipleLineChartProps {
  xAxisData?: AxisData;
  series?: Array<{
    name: string;
    data: number[];
  }>;
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}

const ChartComponent = ({
  xAxisData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series = [
    {
      name: 'Series A',
      data: [198, 287, 251, 89, 223, 202],
    },
    {
      name: 'Series B',
      data: [135, 185, 165, 95, 85, 125],
    },
  ],
  width = 220,
  height = 350,
}: MultipleLineChartProps) => {
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
      legend: {
        data: series.map(s => s.name),
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
        type: 'line',
        smooth: true,
        symbol: 'none',
        data: s.data,
        itemStyle: {
          color: theme.series.colors[index % theme.series.colors.length],
        },
        lineStyle: {
          color: theme.series.colors[index % theme.series.colors.length],
          width: 1,
        },
      })),
    };
  }, [theme, xAxisData, series]);

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

export const MultipleLineChart = withResponsiveContainer(withChartTheme(ChartComponent));


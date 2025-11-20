import { withResponsiveContainer } from '@/contexts/chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '@/contexts/chart-theme.context';
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

type AxisData = string[] | Array<{ label: string; value: number }>;

interface AxesAreaChartProps {
  xAxisData?: AxisData;
  yAxisData?: AxisData;
  data?: number[];
  width?: number;
  height?: number;
  lineWidth?: number;
  theme?: Partial<ChartTheme>;
}

const ChartComponent = ({
  xAxisData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  yAxisData = [
    { label: '0', value: 0 },
    { label: '200', value: 200 },
    { label: '400', value: 400 },
    { label: '600', value: 600 },
    { label: '800', value: 800 },
  ],
  data = [200, 350, 500, 300, 400, 600],
  width = 220,
  height = 350,
  lineWidth = 2,
}: AxesAreaChartProps) => {
  const { theme } = useChartTheme();
  const chartRef = useRef<any>(null);
  const option = useMemo(() => {
    // Helper to extract labels and check if it's object format
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
    const yAxisLabels = getAxisLabels(yAxisData);
    const xAxisIsObjectFormat = isObjectFormat(xAxisData);
    const yAxisIsObjectFormat = isObjectFormat(yAxisData);

    return {
        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          type: xAxisIsObjectFormat ? 'value' : 'category',
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
          type: yAxisIsObjectFormat ? 'value' : 'category',
          data: yAxisIsObjectFormat ? undefined : yAxisLabels,
          axisLabel: {
            color: theme.axis.y.labelColor,
            formatter: yAxisIsObjectFormat 
              ? (value: number) => {
                  const item = (yAxisData as Array<{ label: string; value: number }>).find(y => y.value === value);
                  return item ? item.label : value.toString();
                }
              : undefined,
          },
          axisLine: {
            lineStyle: {
              color: theme.axis.y.lineColor,
              width: theme.axis.y.lineWidth,
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: theme.axis.y.tickColor,
              width: theme.axis.y.tickWidth,
            },
          },
        },
        grid: {
          left: '10%',
          right: '5%',
          bottom: '10%',
          top: '10%',
        },
        series: [
          {
            data: data,
            type: 'line',
            smooth: true,
            symbol: 'none',
            areaStyle: {
              opacity: 0.6,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: theme.series.colors[0] + '66'},
                  { offset: 1, color: theme.series.colors[0] + '66' },
                ],
              },
            },
            itemStyle: {
              color: theme.series.colors[0],
            },
            lineStyle: {
              color: theme.series.colors[0],
              width: lineWidth,
            },
          },
        ],
      };
  }, [theme, xAxisData, yAxisData, data, lineWidth]);

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

export const AxesAreaChart = withResponsiveContainer(withChartTheme(ChartComponent));
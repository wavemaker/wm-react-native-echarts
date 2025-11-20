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

interface NegativeBarChartProps {
  xAxisData?: AxisData;
  data?: number[];
  positiveColor?: string;
  negativeColor?: string;
  barWidth?: string;
  barGap?: string;
  borderRadius?: number[];
  showLabels?: boolean;
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}

const ChartComponent = ({
  xAxisData = ['January', 'February', 'March', 'April', 'May', 'June'],
  data = [120, 150, -180, 110, -80, 160],
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


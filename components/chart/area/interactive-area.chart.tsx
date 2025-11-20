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

interface InteractiveAreaChartProps {
  xAxisData?: AxisData;
  series?: Array<{
    name: string;
    data: number[];
  }>;
  width?: number;
  height?: number;
  lineWidth?: number;
  theme?: Partial<ChartTheme>;
}

const ChartComponent = ({
  xAxisData = ['Apr 6', 'Apr 11', 'Apr 16', 'Apr 22', 'Apr 28', 'May 4', 'May 9', 'May 15', 'May 21', 'May 27', 'Jun 1', 'Jun 6', 'Jun 11', 'Jun 17', 'Jun 23', 'Jun 30'],
  series = [
    {
      name: 'Mobile',
      data: [5000, 7200, 15500, 18700, 22100, 19500, 25400, 23900, 27600, 26000, 23600, 25100, 23900, 23500, 23700, 23900],
    },
    {
      name: 'Desktop',
      data: [4000, 6400, 13500, 17500, 21200, 24600, 22900, 26300, 25000, 21600, 23900, 22700, 21900, 22100, 22300, 23800],
    },
  ],
  width = 220,
  height = 450,
  lineWidth = 2,
}: InteractiveAreaChartProps) => {
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
        areaStyle: {
          opacity: 0.6,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: theme.series.colors[index % theme.series.colors.length] + '66' },
              { offset: 1, color: theme.series.colors[index % theme.series.colors.length] + '66' },
            ],
          },
        },
        data: s.data,
        itemStyle: {
          color: theme.series.colors[index % theme.series.colors.length],
        },
        lineStyle: {
          color: theme.series.colors[index % theme.series.colors.length],
          width: lineWidth,
        },
      })),
    };
  }, [theme, xAxisData, series, lineWidth]);

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

export const InteractiveAreaChart = withResponsiveContainer(withChartTheme(ChartComponent));

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

interface InteractiveLineChartProps {
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
  xAxisData = ['Apr 2', 'Apr 7', 'Apr 12', 'Apr 17', 'Apr 22', 'Apr 28', 'May 4', 'May 9', 'May 15', 'May 21', 'May 27', 'Jun 2', 'Jun 7', 'Jun 12', 'Jun 18', 'Jun 24', 'Jun 30'],
  series = [
    {
      name: 'Desktop',
      data: [7000, 8900, 15200, 18900, 22300, 19800, 25600, 24100, 27800, 26200, 23800, 25300, 24100, 23700, 23900, 24100, 23828],
    },
    {
      name: 'Mobile',
      data: [5000, 6200, 12500, 17700, 21400, 24800, 23100, 26500, 25200, 21800, 24100, 22900, 22100, 22300, 22500, 24010],
    },
  ],
  width = 220,
  height = 450,
  lineWidth = 1,
}: InteractiveLineChartProps) => {
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

export const InteractiveLineChart = withResponsiveContainer(withChartTheme(ChartComponent));


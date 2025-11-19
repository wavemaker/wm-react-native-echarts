import { withResponsiveContainer } from '@/contexts/chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '@/contexts/chart-theme.context';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { useEffect, useMemo, useRef } from 'react';

// Register necessary components for this chart
echarts.use([
  TitleComponent,
  TooltipComponent,
  SkiaRenderer,
  PieChart,
]);

interface PieDataItem {
  value: number;
  name: string;
  itemStyle?: {
    color: string;
  };
}

interface SeriesConfig {
  name: string;
  radius: string[];
  data: PieDataItem[];
}

interface StackedPieChartProps {
  series?: SeriesConfig[];
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}

const ChartComponent = ({
  series = [
    {
      name: 'Q1-Q2',
      radius: ['0%', '35%'],
      data: [
        { value: 200, name: 'Desktop' },
        { value: 120, name: 'Mobile' },
        { value: 180, name: 'Tablet' },
        { value: 240, name: 'Other' },
      ],
    },
    {
      name: 'Q3-Q4',
      radius: ['45%', '60%'],
      data: [
        { value: 320, name: 'Desktop' },
        { value: 250, name: 'Mobile' },
        { value: 200, name: 'Tablet' },
        { value: 130, name: 'Other' },
      ],
    },
  ],
  width = 220,
  height = 400,
}: StackedPieChartProps) => {
  const { theme } = useChartTheme();
  const chartRef = useRef<any>(null);

  const option = useMemo(() => {
    const chartSeries = series.map((s) => ({
      name: s.name,
      type: 'pie',
      radius: s.radius,
      data: s.data.map((item, index) => ({
        ...item,
        itemStyle: item.itemStyle || {
          color: theme.series.colors[index % theme.series.colors.length],
        },
      })),
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
    }));

    return {
      tooltip: {
        trigger: 'item',
      },
      series: chartSeries,
    };
  }, [theme, series]);

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

export const StackedPieChart = withResponsiveContainer(withChartTheme(ChartComponent));


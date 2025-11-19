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
  selected?: boolean;
  itemStyle?: {
    color: string;
  };
}

interface DonutActiveChartProps {
  data?: PieDataItem[];
  radius?: string[];
  selectedOffset?: number;
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}

const ChartComponent = ({
  data = [
    { value: 275, name: 'Desktop', selected: true },
    { value: 200, name: 'Mobile' },
    { value: 187, name: 'Tablet' },
    { value: 90, name: 'Other' },
  ],
  radius = ['40%', '70%'],
  selectedOffset = 10,
  width = 220,
  height = 400,
}: DonutActiveChartProps) => {
  const { theme } = useChartTheme();
  const chartRef = useRef<any>(null);

  const option = useMemo(() => {
    // Apply theme colors to data if not specified
    const themedData = data.map((item, index) => ({
      ...item,
      itemStyle: item.itemStyle || {
        color: theme.series.colors[index % theme.series.colors.length],
      },
    }));

    return {
      tooltip: {
        trigger: 'item',
      },
      series: [
        {
          name: 'Data',
          type: 'pie',
          radius: radius,
          data: themedData,
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
          selectedMode: 'single',
          selectedOffset: selectedOffset,
        },
      ],
    };
  }, [theme, data, radius, selectedOffset]);

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

export const DonutActiveChart = withResponsiveContainer(withChartTheme(ChartComponent));


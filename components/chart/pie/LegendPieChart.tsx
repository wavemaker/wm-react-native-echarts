import { withResponsiveContainer } from '@/contexts/chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '@/contexts/chart-theme.context';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { PieChart } from 'echarts/charts';
import {
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { useEffect, useMemo, useRef } from 'react';

// Register necessary components for this chart
echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
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

interface LegendPieChartProps {
  data?: PieDataItem[];
  radius?: string;
  legendOrient?: 'horizontal' | 'vertical';
  legendBottom?: string;
  legendLeft?: string;
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}

const ChartComponent = ({
  data = [
    { value: 275, name: 'Chrome' },
    { value: 200, name: 'Safari' },
    { value: 187, name: 'Firefox' },
    { value: 173, name: 'Edge' },
    { value: 90, name: 'Other' },
  ],
  radius = '50%',
  legendOrient = 'horizontal',
  legendBottom = '10%',
  legendLeft = 'center',
  width = 220,
  height = 400,
}: LegendPieChartProps) => {
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
      legend: {
        orient: legendOrient,
        bottom: legendBottom,
        left: legendLeft,
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
        },
      ],
    };
  }, [theme, data, radius, legendOrient, legendBottom, legendLeft]);

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

export const LegendPieChart = withResponsiveContainer(withChartTheme(ChartComponent));


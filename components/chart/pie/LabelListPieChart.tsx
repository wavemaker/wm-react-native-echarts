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

interface LabelListPieChartProps {
  data?: PieDataItem[];
  radius?: string;
  labelFormatter?: string;
  labelFontSize?: number;
  labelColor?: string;
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
  labelFormatter = '{b}',
  labelFontSize = 11,
  labelColor = '#ffffff',
  width = 220,
  height = 400,
}: LabelListPieChartProps) => {
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
            show: true,
            formatter: labelFormatter,
            fontSize: labelFontSize,
            fontWeight: 'bold',
            color: labelColor,
          },
          labelLine: {
            show: false,
          },
        },
      ],
    };
  }, [theme, data, radius, labelFormatter, labelFontSize, labelColor]);

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

export const LabelListPieChart = withResponsiveContainer(withChartTheme(ChartComponent));


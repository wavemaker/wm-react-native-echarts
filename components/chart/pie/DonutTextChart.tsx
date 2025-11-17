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

interface DonutTextChartProps {
  data?: PieDataItem[];
  radius?: string[];
  centerText?: string;
  centerSubtext?: string;
  centerTextFontSize?: number;
  centerSubtextFontSize?: number;
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}

const ChartComponent = ({
  data = [
    { value: 275, name: 'Desktop' },
    { value: 200, name: 'Mobile' },
    { value: 187, name: 'Tablet' },
    { value: 90, name: 'Other' },
  ],
  radius = ['40%', '70%'],
  centerText = '752',
  centerSubtext = 'Visitors',
  centerTextFontSize = 24,
  centerSubtextFontSize = 14,
  width = 220,
  height = 400,
}: DonutTextChartProps) => {
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
          center: ['50%', '50%'],
          label: {
            show: true,
            position: 'center',
            formatter: `{total|${centerText}}\\n{active|${centerSubtext}}`,
            rich: {
              total: {
                fontSize: centerTextFontSize,
                fontWeight: 'bold',
                color: '#333',
              },
              active: {
                fontSize: centerSubtextFontSize,
                color: '#666',
              },
            },
          },
          labelLine: {
            show: false,
          },
        },
      ],
    };
  }, [theme, data, radius, centerText, centerSubtext, centerTextFontSize, centerSubtextFontSize]);

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

export const DonutTextChart = withResponsiveContainer(withChartTheme(ChartComponent));


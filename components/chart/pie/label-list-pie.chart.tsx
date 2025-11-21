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

/**
 * Data item structure for pie charts.
 */
interface PieDataItem {
  /** Numeric value for the slice */
  value: number;
  /** Name/label for the slice */
  name: string;
  /** Optional custom styling for the slice */
  itemStyle?: {
    /** Custom color for this slice */
    color: string;
  };
}

/**
 * Props for the LabelListPieChart component.
 * A pie chart with a list-style label display showing all categories.
 */
interface LabelListPieChartProps {
  /**
   * Array of data items for the pie slices.
   * @default Array of sample categories
   */
  data?: PieDataItem[];
  
  /**
   * Radius of the pie chart as a percentage string.
   * @default '70%'
   */
  radius?: string;
  
  /**
   * Format string for the labels.
   * @default '{b}: {c}'
   */
  labelFormatter?: string;
  
  /**
   * Font size for the labels in pixels.
   * @default 10
   */
  labelFontSize?: number;
  
  /**
   * Color for the label text.
   * @default theme text color
   */
  labelColor?: string;
  
  /**
   * Width of the chart in pixels.
   * @default 220
   */
  width?: number;
  
  /**
   * Height of the chart in pixels.
   * @default 350
   */
  height?: number;
  
  /**
   * Partial theme override for customizing chart appearance.
   */
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


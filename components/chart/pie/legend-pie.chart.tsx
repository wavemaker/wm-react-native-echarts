import { withResponsiveContainer } from '../chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '../chart-theme.context';
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
 * Props for the LegendPieChart component.
 * A pie chart with a customizable legend showing all categories.
 */
interface LegendPieChartProps {
  /**
   * Array of data items for the pie slices.
   * @default Array of sample categories
   */
  data?: PieDataItem[];
  
  /**
   * Radius of the pie chart as a percentage string.
   * @default '60%'
   */
  radius?: string;
  
  /**
   * Orientation of the legend.
   * @default 'horizontal'
   */
  legendOrient?: 'horizontal' | 'vertical';
  
  /**
   * Position of legend from bottom as percentage.
   * @default '5%'
   */
  legendBottom?: string;
  
  /**
   * Position of legend from left as percentage or alignment.
   * @default 'center'
   */
  legendLeft?: string;
  
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

  /**
   * Colors for the chart.
   * @default theme.itemStyles.map(item => item.color)
   */
  colors?: string[];
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
  ...props
}: LegendPieChartProps) => {
  const { theme } = useChartTheme(props.theme, props.colors);
  const chartRef = useRef<any>(null);

  const option = useMemo(() => {
    // Apply theme colors to data if not specified
    const themedData = data.map((item, index) => ({
      ...item,
      itemStyle: item.itemStyle || {
        color: theme.series[index % theme.series.length].color,
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
        textStyle: {
          color: theme.legend.textColor,
          fontSize: theme.legend.fontSize,
        },
        backgroundColor: theme.legend.backgroundColor,
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


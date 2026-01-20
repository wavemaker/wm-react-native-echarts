import { withResponsiveContainer } from '../chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '../chart-theme.context';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { PieChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import React, { useEffect, useMemo, useRef } from 'react';

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
 * Props for the CustomLabelPieChart component.
 * A pie chart with customizable label lines and formatting.
 */
interface CustomLabelPieChartProps {
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
   * Format string for the labels.
   * @default '{b}: {c}'
   */
  labelFormatter?: string;
  
  /**
   * Font size for the labels in pixels.
   * @default 12
   */
  labelFontSize?: number;
  
  /**
   * Length of the first segment of the label line.
   * @default 15
   */
  labelLineLength?: number;
  
  /**
   * Length of the second segment of the label line.
   * @default 10
   */
  labelLineLength2?: number;
  
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
    { value: 275, name: 'Desktop' },
    { value: 200, name: 'Mobile' },
    { value: 187, name: 'Tablet' },
    { value: 173, name: 'Other' },
    { value: 90, name: 'Unknown' },
  ],
  radius = '50%',
  labelFormatter = '{c}',
  labelFontSize = 12,
  labelLineLength = 10,
  labelLineLength2 = 5,
  width = 220,
  height = 400,
  ...props
}: CustomLabelPieChartProps) => {
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
          },
          labelLine: {
            show: true,
            length: labelLineLength,
            length2: labelLineLength2,
          },
        },
      ],
    };
  }, [theme, data, radius, labelFormatter, labelFontSize, labelLineLength, labelLineLength2]);

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

export const CustomLabelPieChart = withResponsiveContainer(withChartTheme(ChartComponent));


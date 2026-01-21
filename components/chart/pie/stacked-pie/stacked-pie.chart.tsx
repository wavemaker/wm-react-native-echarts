import { withResponsiveContainer } from '../../chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '../../chart-theme.context';
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
 * Configuration for a series in a stacked pie chart.
 */
interface SeriesConfig {
  /** Name of the series */
  name: string;
  /** Inner and outer radius for this ring [innerRadius, outerRadius] */
  radius: string[];
  /** Data items for this ring */
  data: PieDataItem[];
}

/**
 * Props for the StackedPieChart component.
 * Multiple concentric pie/donut charts stacked together (nested rings).
 */
interface StackedPieChartProps {
  /**
   * Array of configurations for each concentric ring.
   * @default Two sample series with different radii
   */
  data?: SeriesConfig[];
  
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
  ...props
}: StackedPieChartProps) => {
  const { theme } = useChartTheme(props.theme, props.colors);
  const chartRef = useRef<any>(null);

  const option = useMemo(() => {
    const chartSeries = data.map((s) => ({
      name: s.name,
      type: 'pie',
      radius: s.radius,
      data: s.data.map((item, index) => ({
        ...item,
        itemStyle: item.itemStyle || {
          color: theme.series[index % theme.series.length].color,
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
  }, [theme, data]);

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


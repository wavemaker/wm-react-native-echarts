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
 * Props for the DonutTextChart component.
 * A donut chart with customizable text displayed in the center.
 */
interface DonutTextChartProps {
  /**
   * Array of data items for the donut slices.
   * @default Array of sample categories
   */
  data?: PieDataItem[];
  
  /**
   * Inner and outer radius [innerRadius, outerRadius].
   * @default ['40%', '70%']
   */
  radius?: string[];
  
  /**
   * Main text to display in the center.
   * @default 'Total'
   */
  centerText?: string;
  
  /**
   * Subtitle text below the main center text.
   * @default Calculated total value
   */
  centerSubtext?: string;
  
  /**
   * Font size for the center main text.
   * @default 24
   */
  centerTextFontSize?: number;
  
  /**
   * Font size for the center subtitle.
   * @default 16
   */
  centerSubtextFontSize?: number;
  
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
    { value: 90, name: 'Other' },
  ],
  radius = ['40%', '70%'],
  centerText = '752',
  centerSubtext = 'Visitors',
  centerTextFontSize = 24,
  centerSubtextFontSize = 14,
  width = 220,
  height = 400,
  ...props
}: DonutTextChartProps) => {
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


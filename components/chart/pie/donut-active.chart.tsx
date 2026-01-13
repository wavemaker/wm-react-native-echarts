import { withResponsiveContainer } from '../chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '../chart-theme.context';
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
 * Data item structure for pie charts with selection state.
 */
interface PieDataItem {
  /** Numeric value for the slice */
  value: number;
  /** Name/label for the slice */
  name: string;
  /** Whether this slice is initially selected */
  selected?: boolean;
  /** Optional custom styling for the slice */
  itemStyle?: {
    /** Custom color for this slice */
    color: string;
  };
}

/**
 * Props for the DonutActiveChart component.
 * A donut chart with one or more slices initially selected and offset.
 */
interface DonutActiveChartProps {
  /**
   * Array of data items for the donut slices.
   * Items with selected=true will be initially offset.
   */
  data: PieDataItem[];
  
  /**
   * Inner and outer radius [innerRadius, outerRadius].
   * @default ['40%', '70%']
   */
  radius?: string[];
  
  /**
   * Distance to offset selected slices in pixels.
   * @default 10
   */
  selectedOffset?: number;
  
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
  data,
  radius = ['40%', '70%'],
  selectedOffset = 10,
  width = 220,
  height = 400,
  ...props
}: DonutActiveChartProps) => {
  const { theme } = useChartTheme(props.theme, props.colors);
  const chartRef = useRef<any>(null);

  const option = useMemo(() => {
    // Apply theme colors to data if not specified
    const themedData = data.map((item, index) => ({
      ...item,
      itemStyle: item.itemStyle || {
        color: theme.itemStyles[index % theme.itemStyles.length].color,
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


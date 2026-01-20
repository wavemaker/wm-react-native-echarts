import { withResponsiveContainer } from '../chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '../chart-theme.context';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { BarChart } from 'echarts/charts';
import {
  GridComponent,
  PolarComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import React, { useEffect, useMemo, useRef } from 'react';

// Register necessary components for this chart
echarts.use([
  TooltipComponent,
  GridComponent,
  PolarComponent,
  SkiaRenderer,
  BarChart,
]);

/**
 * Data structure for stacked series in radial chart.
 */
interface StackedSeriesData {
  /** Name of the series */
  name: string;
  /** Numeric value */
  value: number;
  /** Optional custom color */
  color?: string;
}

/**
 * Props for the StackedRadialChart component.
 * A radial chart with multiple stacked series with optional center text.
 */
interface StackedRadialChartProps {
  /**
   * Array of data to stack.
   */
  data: StackedSeriesData[];
  
  /**
   * Main text to display in the center.
   * @default undefined
   */
  centerText?: string;
  
  /**
   * Subtitle text below the main center text.
   * @default undefined
   */
  centerSubtext?: string;
  
  /**
   * Inner and outer width of the ring [start, end].
   * @default [20, 80]
   */
  ringWidth?: [number, number];
  
  /**
   * Gap between rings as percentage string.
   * @default '3%'
   */
  ringGap?: string;
  
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
  centerText = '1,830',
  centerSubtext = 'Visitors',
  ringWidth = [120, 200],
  ringGap,
  width = 220,
  height = 350,
  ...props
}: StackedRadialChartProps) => {
  const { theme } = useChartTheme(props.theme, props.colors);
  const chartRef = useRef<any>(null);

  const option = useMemo(() => {
    const categories = data.map(s => s.name);

    return {
      tooltip: {
        trigger: 'item',
        renderMode: 'richText',
        confine: true,
        formatter: `{b|{b}}: {c}%`,
        rich: {
          b: {
            color: theme.series[0].color,
            fontWeight: 'bold',
          },
          c: {
            color: theme.axis.r.tickLabelColor,
            fontWeight: 'normal',
          }
        }
      },
      polar: {
        radius: ringWidth,
      },
      angleAxis: {
        max: 100,
        startAngle: 0,
        clockwise: false,
        show: false,
      },
      radiusAxis: {
        type: 'category',
        data: categories,
        show: false,
      },
      series: data.map((s, index) => ({
        type: 'bar',
        data: [s.value],
        coordinateSystem: 'polar',
        name: s.name,
        barGap: ringGap,
        itemStyle: {
          color: s.color || theme.series[index % theme.series.length].color,
          borderRadius: [10, 10],
        },
        emphasis: {
          disabled: true,
        },
        stack: 'total',
      })),
      graphic: {
        elements: [
          {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
              text: centerText,
              fontSize: 32,
              fontWeight: 'bold',
              fill: theme.axis.r.tickLabelColor,
            },
          },
          {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
              text: centerSubtext,
              fontSize: 14,
              fill: theme.axis.r.tickColor,
              textAlign: 'center',
              textVerticalAlign: 'bottom',
              y: 20,
            },
          },
        ],
      },
    };
  }, [theme, data, centerText, centerSubtext, ringWidth, ringGap]);

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

export const StackedRadialChart = withResponsiveContainer(withChartTheme(ChartComponent));


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
import { useEffect, useMemo, useRef } from 'react';

// Register necessary components for this chart
echarts.use([
  TooltipComponent,
  GridComponent,
  PolarComponent,
  SkiaRenderer,
  BarChart,
]);

/**
 * Data structure for radial chart items.
 */
interface RadialData {
  /** Label for the item */
  label: string;
  /** Numeric value */
  value: number;
  /** Optional custom color */
  color?: string;
}

/**
 * Props for the GridRadialChart component.
 * A radial chart with visible grid lines and multiple data series.
 */
interface GridRadialChartProps {
  /**
   * Array of data items to display.
   * @default Sample data
   */
  data?: RadialData[];
  
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
}

const ChartComponent = ({
  data = [
    { label: 'A', value: 85, color: '#60a5fa' },
    { label: 'B', value: 70, color: '#3b82f6' },
    { label: 'C', value: 60, color: '#2563eb' },
    { label: 'D', value: 45, color: '#1e40af' },
    { label: 'E', value: 30, color: '#1e3a8a' },
  ],
  ringWidth = [30, 140],
  ringGap = '10%',
  width = 220,
  height = 450,
}: GridRadialChartProps) => {
  const { theme } = useChartTheme();
  const chartRef = useRef<any>(null);

  const option = useMemo(() => {
    const categories = data.map(d => d.label);
    const values = data.map(d => ({ value: d.value, itemStyle: { color: d.color || theme.series.colors[0] } }));

    return {
      tooltip: {
        trigger: 'item',
        renderMode: 'richText',
        confine: true,
        formatter: `{b|{b}}: {c}%`,
        rich: {
          b: {
            color: theme.series.colors[0],
            fontWeight: 'bold',
          },
          c: {
            color: theme.axis.r.labelColor,
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
        show: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: theme.axis.r.lineColor,
          },
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: theme.axis.r.tickColor,
          },
        },
        axisLabel: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: theme.axis.r.tickColor,
          },
        },
      },
      radiusAxis: {
        type: 'category',
        data: categories,
        show: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: theme.axis.r.lineColor,
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
      series: [
        {
          type: 'bar',
          data: Array(data.length).fill(100),
          coordinateSystem: 'polar',
          name: 'Background',
          tooltip: {
            show: false,
          },
          itemStyle: {
            color: theme.grid.r.lineColor,
          },
          animation: false,
          stack: 'total',
          barCategoryGap: ringGap,
          emphasis: {
            disabled: true,
          },
        },
        {
          type: 'bar',
          data: values,
          coordinateSystem: 'polar',
          name: 'Data',
          stack: 'total',
          barCategoryGap: ringGap,
          emphasis: {
            disabled: true,
          },
        },
      ],
    };
  }, [theme, data, ringWidth, ringGap]);

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

export const GridRadialChart = withResponsiveContainer(withChartTheme(ChartComponent));


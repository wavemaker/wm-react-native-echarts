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
 * Props for the ShapeRadialChart component.
 * A radial progress chart with customizable shape and center text.
 */
interface ShapeRadialChartProps {
  /**
   * Current value to display.
   */
  value: number;
  
  /**
   * Maximum value for the scale.
   */
  maxValue: number;
  
  /**
   * Label text for the value.
   * @default 'Visitors'
   */
  label?: string;
  
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
}

const ChartComponent = ({
  value,
  maxValue,
  label = 'Visitors',
  centerText,
  centerSubtext,
  ringWidth = [40, 80],
  ringGap,
  width = 220,
  height = 350,
}: ShapeRadialChartProps) => {
  const { theme } = useChartTheme();
  const chartRef = useRef<any>(null);

  const option = useMemo(() => {
    const percentage = (value / maxValue) * 100;
    const displayText = centerText || value.toLocaleString();
    const displaySubtext = centerSubtext || label;

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
        show: false,
      },
      radiusAxis: {
        type: 'category',
        data: [label],
        show: false,
      },
      series: [
        {
          type: 'bar',
          data: [100],
          coordinateSystem: 'polar',
          barWidth: '50%',
          barGap: ringGap,
          name: 'Background',
          tooltip: {
            show: false,
          },
          itemStyle: {
            color: theme.grid.r.lineColor,
          },
          animation: false,
          stack: 'total',
          emphasis: {
            disabled: true,
          },
        },
        {
          type: 'bar',
          data: [percentage],
          barWidth: '70%',
          barGap: ringGap,
          coordinateSystem: 'polar',
          name: label,
          itemStyle: {
            color: theme.series.colors[0],
          },
          stack: 'total',
          emphasis: {
            disabled: true,
          },
        },
      ],
      graphic: {
        elements: [
          {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
              text: displayText,
              fontSize: 32,
              fontWeight: 'bold',
              fill: theme.axis.r.labelColor,
            },
          },
          {
            type: 'text',
            left: 'center',
            top: 'center',
            style: {
              text: displaySubtext,
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
  }, [theme, value, maxValue, label, centerText, centerSubtext, ringWidth, ringGap]);

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

export const ShapeRadialChart = withResponsiveContainer(withChartTheme(ChartComponent));


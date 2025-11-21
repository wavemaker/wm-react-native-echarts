import { withResponsiveContainer } from '../chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '../chart-theme.context';
import { useTheme } from '@/contexts/ThemeContext';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { GaugeChart } from 'echarts/charts';
import * as echarts from 'echarts/core';
import { useEffect, useMemo, useRef } from 'react';

// Register necessary components for this chart
echarts.use([
  SkiaRenderer,
  GaugeChart,
]);

/**
 * Props for the DefaultGaugeChart component.
 * A basic gauge chart displaying a single value within a range.
 */
interface DefaultGaugeChartProps {
  /**
   * Current value to display on the gauge.
   * @default 75
   */
  value?: number;
  
  /**
   * Minimum value of the gauge scale.
   * @default 0
   */
  min?: number;
  
  /**
   * Maximum value of the gauge scale.
   * @default 100
   */
  max?: number;
  
  /**
   * Width of the chart in pixels.
   * @default 220
   */
  width?: number;
  
  /**
   * Height of the chart in pixels.
   * @default 240
   */
  height?: number;
  
  /**
   * Partial theme override for customizing chart appearance.
   */
  theme?: Partial<ChartTheme>;
}

const ChartComponent = ({
  value = 75,
  min = 0,
  max = 100,
  width = 220,
  height = 240,
}: DefaultGaugeChartProps) => {
  const { colorScheme } = useTheme();
  const { theme: chartTheme } = useChartTheme();
  const chartRef = useRef<any>(null);

  const option = useMemo(() => {
    const backgroundColor = chartTheme.axis.r.tickColor;
    const color1 = chartTheme.series.colors[0];
    const color2 = chartTheme.series.colors.length > 1 ? chartTheme.series.colors[1] : color1;
    const pointerColor = chartTheme.series.colors[0];
    const tickLineColor = chartTheme.grid.r.lineColor;
    const splitLineColor = chartTheme.grid.r.lineColor;
    const labelColor = chartTheme.axis.r.labelColor;
    const detailColor = chartTheme.series.colors[0];
    
    return {
      series: [
        {
          type: 'gauge',
          center: ['50%', '60%'],
          radius: '90%',
          startAngle: 200,
          endAngle: -20,
          min: min,
          max: max,
          splitNumber: 10,
          axisLine: {
            lineStyle: {
              width: 30,
              color: [
                [0.3, color1],
                [0.7, color2],
                [1, backgroundColor],
              ],
            },
          },
          pointer: {
            itemStyle: {
              color: pointerColor,
            },
            length: '70%',
            width: 6,
          },
          axisTick: {
            distance: -30,
            length: 8,
            lineStyle: {
              color: tickLineColor,
              width: 2,
            },
          },
          splitLine: {
            distance: -30,
            length: 15,
            lineStyle: {
              color: splitLineColor,
              width: 4,
            },
          },
          axisLabel: {
            distance: -10,
            color: labelColor,
            fontSize: 12,
          },
          detail: {
            valueAnimation: true,
            formatter: '{value}',
            color: detailColor,
            fontSize: 32,
            fontWeight: 'bold',
            offsetCenter: [0, '70%'],
          },
          data: [{ value: value }],
        },
      ],
    };
  }, [chartTheme, value, min, max]);

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

export const DefaultGaugeChart = withResponsiveContainer(withChartTheme(ChartComponent));


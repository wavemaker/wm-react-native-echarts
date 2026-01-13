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
 * Props for the LabeledGaugeChart component.
 * A gauge chart with customizable title and detail text labels.
 */
interface LabeledGaugeChartProps {
  /**
   * Current value to display on the gauge.
   */
  value: number;
  
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

  /**
   * Colors for the chart.
   * @default theme.itemStyles.map(item => item.color)
   */
  colors?: string[];
  
  /**
   * Title text displayed on the gauge.
   * @default 'Metric'
   */
  title?: string;
  
  /**
   * Detail text showing the value.
   * @default '30%'
   */
  detailText?: string;
}

const ChartComponent = ({
  value,
  min = 0,
  max = 100,
  width = 220,
  height = 240,
  title = 'Metric',
  detailText = '30%',
  ...props
}: LabeledGaugeChartProps) => {
  const { colorScheme } = useTheme();
  const { theme: chartTheme } = useChartTheme(props.theme, props.colors);
  const chartRef = useRef<any>(null);

  const option = useMemo(() => {
    const backgroundColor = chartTheme.axis.r.tickColor;
    const mainColor = chartTheme.itemStyles[0].color;
    const pointerColor = chartTheme.axis.r.lineColor;
    const titleColor = chartTheme.axis.r.labelColor;
    const detailColor = chartTheme.axis.r.labelColor;
    
    return {
      series: [
        {
          type: 'gauge',
          center: ['50%', '65%'],
          radius: '90%',
          startAngle: 170,
          endAngle: 10,
          min: min,
          max: max,
          axisLine: {
            lineStyle: {
              width: 50,
              color: [
                [value / max, mainColor],
                [1, backgroundColor],
              ],
            },
          },
          pointer: {
            length: '70%',
            width: 8,
            icon: 'path://M-2,0 L0,-51 L 2,0 A1, 1 0 0 1 -2, 0 Z',
            itemStyle: {
              color: pointerColor,
            },
          },
          axisTick: {
            show: false,

          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          title: {
            offsetCenter: [0, '85%'],
            fontSize: 13,
            fontWeight: '600',
            color: titleColor,
          },
          detail: {
            offsetCenter: [0, '115%'],
            fontSize: 11,
            color: detailColor,
          },
          data: [{ value: value, name: title, detail: { formatter: detailText } }],
        },
      ],
    };
  }, [chartTheme, value, min, max, title, detailText]);

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

export const LabeledGaugeChart = withResponsiveContainer(withChartTheme(ChartComponent), 'value');



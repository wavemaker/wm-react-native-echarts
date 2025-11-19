import { withResponsiveContainer } from '@/contexts/chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '@/contexts/chart-theme.context';
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

interface LabeledGaugeChartProps {
  value?: number;
  min?: number;
  max?: number;
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
  title?: string;
  detailText?: string;
}

const ChartComponent = ({
  value = 30,
  min = 0,
  max = 100,
  width = 220,
  height = 240,
  title = 'Metric',
  detailText = '30%',
}: LabeledGaugeChartProps) => {
  const { colorScheme } = useTheme();
  const { theme: chartTheme } = useChartTheme();
  const chartRef = useRef<any>(null);

  const option = useMemo(() => {
    const backgroundColor = chartTheme.axis.r.tickColor;
    const mainColor = chartTheme.series.colors[0];
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

export const LabeledGaugeChart = withResponsiveContainer(withChartTheme(ChartComponent));



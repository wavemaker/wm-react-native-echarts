import { withResponsiveContainer } from '@/contexts/chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '@/contexts/chart-theme.context';
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

interface StackedSeriesData {
  name: string;
  value: number;
  color?: string;
}

interface StackedRadialChartProps {
  series?: StackedSeriesData[];
  centerText?: string;
  centerSubtext?: string;
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}

const ChartComponent = ({
  series = [
    { name: 'Inner', value: 30, color: '#93c5fd' },
    { name: 'Outer', value: 20, color: '#3b82f6' },
  ],
  centerText = '1,830',
  centerSubtext = 'Visitors',
  width = 220,
  height = 350,
}: StackedRadialChartProps) => {
  const { theme } = useChartTheme();
  const chartRef = useRef<any>(null);

  const option = useMemo(() => {
    const categories = series.map(s => s.name);

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
        radius: [120, 200],
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
      series: series.map((s, index) => ({
        type: 'bar',
        data: [s.value],
        coordinateSystem: 'polar',
        name: s.name,
        itemStyle: {
          color: s.color || theme.series.colors[index % theme.series.colors.length],
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
              fill: theme.axis.r.labelColor,
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
  }, [theme, series, centerText, centerSubtext]);

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


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

interface RadialData {
  label: string;
  value: number;
  color?: string;
}

interface GridRadialChartProps {
  data?: RadialData[];
  width?: number;
  height?: number;
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
        radius: [30, 140],
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
          barCategoryGap: '10%',
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
          barCategoryGap: '10%',
          emphasis: {
            disabled: true,
          },
        },
      ],
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

export const GridRadialChart = withResponsiveContainer(withChartTheme(ChartComponent));


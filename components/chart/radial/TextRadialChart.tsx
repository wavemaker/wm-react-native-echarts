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

interface TextRadialChartProps {
  value?: number;
  maxValue?: number;
  label?: string;
  centerText?: string;
  centerSubtext?: string;
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}

const ChartComponent = ({
  value = 200,
  maxValue = 300,
  label = 'Visitors',
  centerText,
  centerSubtext,
  width = 220,
  height = 350,
}: TextRadialChartProps) => {
  const { theme } = useChartTheme();
  const chartRef = useRef<any>(null);

  const option = useMemo(() => {
    const percentage = (value / maxValue) * 100;
    const displayText = centerText || value.toString();
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
        radius: [60, 120],
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
          name: 'Background',
          tooltip: {
            show: false,
          },
          itemStyle: {
            color: theme.grid.r.lineColor,
          },
          animation: false,
          stack: 'total',
          barWidth: '50%',
          emphasis: {
            disabled: true,
          },
        },
        {
          type: 'bar',
          data: [percentage],
          coordinateSystem: 'polar',
          name: label,
          itemStyle: {
            color: theme.series.colors[0],
            borderRadius: [50, 50],
          },
          stack: 'total',
          barWidth: '50%',
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
            top: 'middle',
            z: 100,
            style: {
              text: `${displayText}\n${displaySubtext}`,
              fontSize: 32,
              fontWeight: 'bold',
              fill: theme.axis.r.labelColor,
              textAlign: 'center',
              textVerticalAlign: 'middle',
            },
          },
        ],
      },
    };
  }, [theme, value, maxValue, label, centerText, centerSubtext]);

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

export const TextRadialChart = withResponsiveContainer(withChartTheme(ChartComponent));


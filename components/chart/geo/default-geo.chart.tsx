import { withResponsiveContainer } from '@/contexts/chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '@/contexts/chart-theme.context';
import worldData from '@/data/world.json';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { MapChart } from 'echarts/charts';
import {
  GeoComponent,
  TooltipComponent,
  VisualMapComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { useEffect, useMemo, useRef } from 'react';

// Register necessary components for this chart
echarts.use([
  TooltipComponent,
  VisualMapComponent,
  GeoComponent,
  SkiaRenderer,
  MapChart,
]);

interface DefaultGeoChartProps {
  data?: Array<{ name: string; value: number }>;
  visualMapMin?: number;
  visualMapMax?: number;
  colors?: string[];
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}

const ChartComponent = ({
  data = [
    { name: 'United States', value: 500 },
    { name: 'China', value: 600 },
    { name: 'Japan', value: 300 },
    { name: 'Germany', value: 250 },
    { name: 'India', value: 400 },
    { name: 'United Kingdom', value: 200 },
    { name: 'France', value: 180 },
    { name: 'Brazil', value: 220 },
    { name: 'Canada', value: 150 },
    { name: 'Russia', value: 280 },
  ],
  visualMapMin = 0,
  visualMapMax = 600,
  colors = ['#91cc75', '#5470c6', '#ee6666'],
  width = 220,
  height = 350,
}: DefaultGeoChartProps) => {
  const { theme } = useChartTheme();
  const chartRef = useRef<any>(null);

  const option = useMemo(() => {
    return {
      tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>Value: {c}',
      },
      visualMap: {
        min: visualMapMin,
        max: visualMapMax,
        left: 'left',
        top: 'bottom',
        text: ['High', 'Low'],
        calculable: true,
        inRange: {
          color: colors,
        },
        textStyle: {
          color: theme.axis.x.labelColor,
        },
      },
      series: [
        {
          type: 'map',
          map: 'world',
          roam: false,
          emphasis: {
            label: {
              show: true,
              color: theme.axis.x.labelColor,
            },
            itemStyle: {
              areaColor: theme.series.colors[0],
            },
          },
          itemStyle: {
            borderColor: theme.grid.x.lineColor,
            borderWidth: 0.5,
          },
          label: {
            show: false,
          },
          data: data,
        },
      ],
    };
  }, [theme, data, visualMapMin, visualMapMax, colors]);

  useEffect(() => {
    let chart: any;
    if (chartRef.current) {
      try {
        // Register map data
        echarts.registerMap('world', worldData as any);
        
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

export const DefaultGeoChart = withResponsiveContainer(withChartTheme(ChartComponent));


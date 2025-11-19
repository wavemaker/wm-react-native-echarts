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

interface InteractiveGeoChartProps {
  data?: Array<{ name: string; value: number }>;
  visualMapMin?: number;
  visualMapMax?: number;
  colors?: string[];
  showLabel?: boolean;
  roam?: boolean;
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}

const ChartComponent = ({
  data = [
    { name: 'United States', value: 800 },
    { name: 'China', value: 950 },
    { name: 'Japan', value: 450 },
    { name: 'Germany', value: 420 },
    { name: 'India', value: 650 },
    { name: 'United Kingdom', value: 380 },
    { name: 'France', value: 360 },
    { name: 'Italy', value: 290 },
    { name: 'Brazil', value: 340 },
    { name: 'Canada', value: 320 },
    { name: 'Russia', value: 490 },
    { name: 'South Korea', value: 410 },
    { name: 'Australia', value: 350 },
    { name: 'Spain', value: 310 },
    { name: 'Mexico', value: 280 },
  ],
  visualMapMin = 0,
  visualMapMax = 1000,
  colors = ['#73c0de', '#5470c6', '#91cc75', '#fac858', '#ee6666'],
  showLabel = false,
  roam = true,
  width = 220,
  height = 450,
}: InteractiveGeoChartProps) => {
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
          roam: roam,
          emphasis: {
            label: {
              show: true,
              color: theme.axis.x.labelColor,
            },
            itemStyle: {
              areaColor: theme.series.colors[0],
            },
          },
          select: {
            label: {
              show: true,
              color: theme.axis.x.labelColor,
            },
            itemStyle: {
              areaColor: theme.series.colors[1],
            },
          },
          itemStyle: {
            borderColor: theme.grid.x.lineColor,
            borderWidth: 0.5,
          },
          label: {
            show: showLabel,
            color: theme.axis.x.labelColor,
          },
          data: data,
        },
      ],
    };
  }, [theme, data, visualMapMin, visualMapMax, colors, showLabel, roam]);

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

export const InteractiveGeoChart = withResponsiveContainer(withChartTheme(ChartComponent));


import { withResponsiveContainer } from '../chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '../chart-theme.context';
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

/**
 * Props for the DefaultGeoChart component.
 * A geographic/map chart displaying data by country with color-coded values.
 */
interface DefaultGeoChartProps {
  /**
   * Array of country data with names and values.
   */
  data: Array<{ name: string; value: number }>;
  
  /**
   * Minimum value for the visual map scale.
   * @default 0
   */
  visualMapMin?: number;
  
  /**
   * Maximum value for the visual map scale.
   * @default 1000
   */
  visualMapMax?: number;
  
  /**
   * Array of colors for the gradient scale.
   * @default Theme colors
   */
  colors?: string[];
  
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
  data,
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


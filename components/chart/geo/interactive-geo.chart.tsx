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
 * Props for the InteractiveGeoChart component.
 * A geographic chart with pan and zoom capabilities and country labels.
 */
interface InteractiveGeoChartProps {
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
   * Whether to show country name labels.
   * @default false
   */
  showLabel?: boolean;
  
  /**
   * Enable pan and zoom interactions.
   * @default true
   */
  roam?: boolean;
  
  /**
   * Width of the chart in pixels.
   * @default 220
   */
  width?: number;
  
  /**
   * Height of the chart in pixels.
   * @default 450
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


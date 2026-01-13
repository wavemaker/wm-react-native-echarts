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
 * Props for the GDPGeoChart component.
 * A geographic chart displaying GDP data by country.
 */
interface GDPGeoChartProps {
  /**
   * Array of country GDP data with names and values (in billions).
   */
  data: Array<{ name: string; value: number }>;
  
  /**
   * Minimum value for the visual map scale.
   * @default 0
   */
  visualMapMin?: number;
  
  /**
   * Maximum value for the visual map scale.
   * @default 25000
   */
  visualMapMax?: number;
  
  /**
   * Custom tooltip formatter string.
   * @default '{b}: ${c} billion'
   */
  tooltipFormatter?: string;
  
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

  /**
   * Colors for the chart item styles.
   * @default theme.itemStyles.map(item => item.color)
   */
  itemColors?: string[];
}

const ChartComponent = ({
  data,
  visualMapMin = 0,
  visualMapMax = 20000,
  tooltipFormatter = '{b}<br/>GDP: ${c}B',
  width = 220,
  height = 400,
  ...props
}: GDPGeoChartProps) => {
  const { theme } = useChartTheme(props.theme, props.itemColors);
  const chartRef = useRef<any>(null);

  const option = useMemo(() => {
    return {
      tooltip: {
        trigger: 'item',
        formatter: tooltipFormatter,
      },
      visualMap: {
        min: visualMapMin,
        max: visualMapMax,
        left: 'left',
        top: 'bottom',
        text: ['High GDP', 'Low GDP'],
        calculable: true,
        inRange: {
          color: ['#a8e6cf', '#4ecdc4', '#45b7d1', '#667eea', '#ff6b6b'],
        },
        textStyle: {
          color: theme.axis.x.labelColor,
        },
      },
      series: [
        {
          name: 'GDP',
          type: 'map',
          map: 'world',
          roam: true,
          emphasis: {
            label: {
              show: true,
              color: theme.axis.x.labelColor,
            },
            itemStyle: {
              areaColor: '#ff6b6b',
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
  }, [theme, data, visualMapMin, visualMapMax, tooltipFormatter]);

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

export const GDPGeoChart = withResponsiveContainer(withChartTheme(ChartComponent));


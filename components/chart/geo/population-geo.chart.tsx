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
import React, { useEffect, useMemo, useRef } from 'react';

// Register necessary components for this chart
echarts.use([
  TooltipComponent,
  VisualMapComponent,
  GeoComponent,
  SkiaRenderer,
  MapChart,
]);

/**
 * Props for the PopulationGeoChart component.
 * A geographic chart displaying population data by country.
 */
interface PopulationGeoChartProps {
  /**
   * Array of country population data with names and values (in millions).
   */
  data: Array<{ name: string; value: number }>;
  
  /**
   * Minimum value for the visual map scale.
   * @default 0
   */
  visualMapMin?: number;
  
  /**
   * Maximum value for the visual map scale.
   * @default 1500
   */
  visualMapMax?: number;
  
  /**
   * Custom tooltip formatter string.
   * @default '{b}: {c} million'
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
  visualMapMax = 1500,
  tooltipFormatter = '{b}<br/>Population: {c}M',
  width = 220,
  height = 400,
  ...props
}: PopulationGeoChartProps) => {
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
        text: ['High', 'Low'],
        calculable: true,
        inRange: {
          color: ['#4ecdc4', '#45b7d1', '#667eea', '#ff6b6b'],
        },
        textStyle: {
          color: theme.axis.x.tickLabelColor,
        },
      },
      series: [
        {
          name: 'Population',
          type: 'map',
          map: 'world',
          roam: true,
          emphasis: {
            label: {
              show: true,
              color: theme.axis.x.tickLabelColor,
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

export const PopulationGeoChart = withResponsiveContainer(withChartTheme(ChartComponent));


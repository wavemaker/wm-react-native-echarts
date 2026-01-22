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
 * Props for the GeoChart component.
 * A unified geographic/map chart component that supports all geo chart variations.
 */
export interface GeoChartProps {
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
   * If not provided, uses theme colors or default colors based on chart type.
   */
  colors?: string[];
  
  /**
   * Custom tooltip formatter string.
   * Use ECharts formatter syntax: '{b}' for name, '{c}' for value.
   * @default '{b}<br/>Value: {c}'
   */
  tooltipFormatter?: string;
  
  /**
   * Whether to show country name labels on the map.
   * @default false
   */
  showLabel?: boolean;
  
  /**
   * Enable pan and zoom interactions (roam).
   * Can be true (pan and zoom), false (disabled), 'scale' (zoom only), or 'move' (pan only).
   * @default false
   */
  roam?: boolean | 'scale' | 'move';
  
  /**
   * Visual map text labels. Array of two strings: [high label, low label].
   * @default ['High', 'Low']
   */
  visualMapText?: [string, string];
  
  /**
   * Series name for the map data.
   */
  seriesName?: string;
  
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

  /**
   * Colors for the chart item styles.
   * @default theme.itemStyles.map(item => item.color)
   */
  itemColors?: string[];
}

const ChartComponent = ({
  data,
  visualMapMin = 0,
  visualMapMax = 1000,
  colors,
  tooltipFormatter,
  showLabel = false,
  roam = false,
  visualMapText = ['High', 'Low'],
  seriesName,
  width = 220,
  height = 350,
  ...props
}: GeoChartProps) => {
  const { theme } = useChartTheme(props.theme, props.itemColors);
  const chartRef = useRef<any>(null);

  const option = useMemo(() => {
    // Determine colors to use
    let finalColors: string[];
    if (colors && colors.length > 0) {
      finalColors = colors;
    } else {
      // Default gradient colors
      finalColors = ['#91cc75', '#5470c6', '#ee6666'];
    }

    // Determine tooltip formatter
    const formatter = tooltipFormatter || '{b}<br/>Value: {c}';

    return {
      tooltip: {
        trigger: 'item',
        formatter: formatter,
      },
      visualMap: {
        min: visualMapMin,
        max: visualMapMax,
        left: 'left',
        top: 'bottom',
        text: visualMapText,
        calculable: true,
        inRange: {
          color: finalColors,
        },
        textStyle: {
          color: theme.axis.x.tickLabelColor,
        },
      },
      series: [
        {
          ...(seriesName ? { name: seriesName } : {}),
          type: 'map',
          map: 'world',
          roam: roam,
          emphasis: {
            label: {
              show: true,
              color: theme.axis.x.tickLabelColor,
            },
            itemStyle: {
              areaColor: theme.series[0].color,
            },
          },
          ...(roam ? {
            select: {
              label: {
                show: true,
                color: theme.axis.x.tickLabelColor,
              },
              itemStyle: {
                areaColor: theme.series[1]?.color || theme.series[0].color,
              },
            },
          } : {}),
          itemStyle: {
            borderColor: theme.grid.x.lineColor,
            borderWidth: 0.5,
          },
          label: {
            show: showLabel,
            color: theme.axis.x.tickLabelColor,
          },
          data: data,
        },
      ],
    };
  }, [theme, data, visualMapMin, visualMapMax, colors, tooltipFormatter, showLabel, roam, visualMapText, seriesName]);

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

export const GeoChart = withResponsiveContainer(withChartTheme(ChartComponent));

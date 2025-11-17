import { useTheme } from '@/contexts/ThemeContext';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import {
  BarChart,
  CandlestickChart,
  FunnelChart,
  GaugeChart,
  HeatmapChart,
  LineChart,
  MapChart,
  PieChart,
  RadarChart,
  ScatterChart
} from 'echarts/charts';
import {
  CalendarComponent,
  GeoComponent,
  GridComponent,
  LegendComponent,
  PolarComponent,
  RadarComponent,
  TitleComponent,
  TooltipComponent,
  TransformComponent,
  VisualMapComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { useEffect, useRef } from 'react';
import { Dimensions } from 'react-native';

// Register necessary components
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  RadarComponent,
  PolarComponent,
  VisualMapComponent,
  CalendarComponent,
  TransformComponent,
  GeoComponent,
  SkiaRenderer,
  LineChart,
  BarChart,
  PieChart,
  GaugeChart,
  ScatterChart,
  RadarChart,
  FunnelChart,
  HeatmapChart,
  CandlestickChart,
  MapChart,
]);

const screenWidth = Dimensions.get('window').width;

// Chart component
export const ChartComponent = ({ 
  option, 
  width = screenWidth - 40, 
  height = 300, 
  style,
  geoJson,
  mapName
}: {
  option: any;
  width?: number;
  height?: number;
  style?: any;
  geoJson?: any;
  mapName?: string;
}) => {
  const chartRef = useRef<any>(null);
  const { colorScheme } = useTheme();

  useEffect(() => {
    let chart: any;
    if (chartRef.current) {
      try {
        const theme = colorScheme === 'dark' ? 'dark' : 'light';
        chart = echarts.init(chartRef.current, theme, {
          renderer: 'svg',
          width: width,
          height: height,
        });
        
        // Register map data if provided
        if (geoJson && mapName) {
          echarts.registerMap(mapName, geoJson);
        }
        
        // Apply theme-aware styling
        const themedOption = {
          ...option,
          backgroundColor: style?.backgroundColor || (colorScheme === 'dark' ? '#1a1a1a' : '#ffffff'),
          textStyle: {
            color: colorScheme === 'dark' ? '#ffffff' : '#333333',
          },
        };
        
        chart.setOption(themedOption);
      } catch (error) {
        console.warn('Chart initialization error:', error);
        // Fallback to basic configuration
        if (chart) {
          chart.setOption({
            title: { text: 'Chart Error', left: 'center' },
            series: [{ type: 'bar', data: [1, 2, 3, 4, 5] }]
          });
        }
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
  }, [option, width, height, colorScheme, geoJson, mapName]);

  return <SkiaChart ref={chartRef} style={style} />;
};

import { withResponsiveContainer } from '../chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '../chart-theme.context';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { GaugeChart } from 'echarts/charts';
import * as echarts from 'echarts/core';
import React, { useEffect, useMemo, useRef } from 'react';
import { View, StyleSheet } from 'react-native';

// Register necessary components for this chart
echarts.use([
  SkiaRenderer,
  GaugeChart,
]);

/**
 * Props for the SemiCircularGaugeChart component.
 * A semi-circular gauge chart with color-coded segments and modern design.
 */
interface SemiCircularGaugeChartProps {
  /**
   * Current value to display on the gauge.
   * @default 85
   */
  value: number;
  
  /**
   * Minimum value of the gauge scale.
   * @default 0
   */
  min?: number;
  
  /**
   * Maximum value of the gauge scale.
   * @default 100
   */
  max?: number;
  
  /**
   * Width of the chart in pixels.
   * @default 400
   */
  width?: number;
  
  /**
   * Height of the chart in pixels.
   * @default 250
   */
  height?: number;
  
  /**
   * Partial theme override for customizing chart appearance.
   */
  theme?: Partial<ChartTheme>;
  
  /**
   * Array of colors for the axis segments.
   * If not provided, uses theme colors.
   * Example: ['#e74c3c', '#3498db', '#2ecc71']
   */
  axisColors?: string[];
  
  /**
   * Array of endpoint values for each color segment.
   * The length should match axisColors length.
   * Each value represents the endpoint (threshold) for that color segment.
   * Example: [40, 80, 120] means:
   *   - First color: 0 to 40
   *   - Second color: 40 to 80
   *   - Third color: 80 to 120
   * If not provided, segments are divided evenly based on max value.
   */
  axisColorLengths?: number[];
  
  /**
   * Background color for the axis line.
   * @default '#DDDDDD'
   */
  axisBgColor?: string;
  
  /**
   * Width of the axis line in pixels.
   * @default 30
   */
  axisWidth?: number;
  
  /**
   * Color for the tick marks and split lines.
   * If not provided, uses theme tick color.
   */
  tickColor?: string;

  /**
   * Colors for the chart.
   * @default theme.itemStyles.map(item => item.color)
   */
  colors?: string[];
}

const ChartComponent = ({
  value = 85,
  min = 0,
  max = 100,
  width = 400,
  height = 250,
  axisColors,
  axisColorLengths,
  axisBgColor = 'transparent',
  axisWidth = 30,
  tickColor: tickColorProp,
  ...props
}: SemiCircularGaugeChartProps) => {
  const { theme: chartTheme } = useChartTheme(props.theme, props.colors);
  const chartRef = useRef<any>(null);

  const axisRef = useRef<any>(null);
  const axisOption = useMemo(() => {
    return {
      series: [
        {
            type: 'gauge',
            center: ['50%', '50%'], // Positioned lower to show semi-circle with flat base at bottom
            radius: '90%',
            startAngle: 200, // Start from left (0 position)
            endAngle: -20,   // End at right (100 position) - creates top semi-circle
            min: min,
            max: max,
            splitNumber: 6, // 10 major divisions (0, 10, 20, ..., 100)
            axisLine: {
              lineStyle: {
                width: 50,
                color: [[1, axisBgColor]],
              },
            },
            pointer: {
                show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            detail: {
              show: false, // Hide the detail text to match the image
            },
            data: [{ value: max }],
        }]
    };
  }, [max, min, axisBgColor, axisWidth]);
  const option = useMemo(() => {
    const pointerColor = chartTheme.axis.r.lineColor || '#1e3a8a'; // Use axis line color for needle
    const whiteColor = '#ffffff';
    const tickColor = tickColorProp || chartTheme.axis.r.tickColor || chartTheme.grid.r.lineColor || '#666666'; // Use prop or theme tick color
    const labelColor = chartTheme.axis.r.tickLabelColor || '#666666'; // Use theme label color
    const backgroundColor = chartTheme.axis.r.tickColor || '#DDDDDD'; // Background color from theme
    
    // Determine colors to use
    let colors: string[];
    if (axisColors && axisColors.length > 0) {
      colors = axisColors;
    } else {
      // Fall back to theme colors
      colors = [
        chartTheme.series[0].color,
        chartTheme.series.length > 1 ? chartTheme.series[1].color : chartTheme.series[0].color
      ];
    }
    
    // Determine segment endpoints
    let endpoints: number[];
    if (axisColorLengths && axisColorLengths.length > 0) {
      endpoints = axisColorLengths;
    } else {
      // Default: divide evenly based on number of colors
      const segmentSize = (max - min) / colors.length;
      endpoints = colors.map((_, index) => min + (index + 1) * segmentSize);
    }
    
    // Ensure endpoints don't exceed max and match colors length
    const numSegments = Math.min(colors.length, endpoints.length);
    const finalEndpoints = endpoints.slice(0, numSegments).map(endpoint => Math.min(endpoint, max));
    const finalColors = colors.slice(0, numSegments);
    
    // Build color array for ECharts (as percentage thresholds)
    const axisLineColors: Array<[number, string]> = finalEndpoints.map((endpoint, index) => [
      endpoint / max,
      finalColors[index],
    ]);
    
    // Ensure the last segment goes to 1.0 (100%)
    if (axisLineColors.length > 0 && axisLineColors[axisLineColors.length - 1][0] < 1) {
      axisLineColors[axisLineColors.length - 1][0] = 1;
    }
    
    return {
      backgroundColor: 'transparent',
      series: [
        {
          type: 'gauge',
          center: ['50%', '50%'], // Positioned lower to show semi-circle with flat base at bottom
          radius: '90%',
          startAngle: 200, // Start from left (0 position)
          endAngle: -20,   // End at right (100 position) - creates top semi-circle
          min: min,
          max: max,
          splitNumber: (max - min) / 10, // 10 major divisions (0, 10, 20, ..., 100)
          axisLine: {
            lineStyle: {
              width: axisWidth,
              color: axisLineColors,
            },
          },
          pointer: {
            itemStyle: {
              color: pointerColor,
            },
            length: '70%',
            width: 4,
            icon: 'path://M-2,0 L0,-50 L2,0 A1,1 0 0,1 -2,0 Z', // Triangular pointer
          },
          axisTick: {
            distance: 0,
            length: 0,
            splitNumber: 20, // More tick marks for finer divisions
            lineStyle: {
              color: tickColor,
              width: 1,
            },
          },
          splitLine: {
            distance: 0,
            length: 10,
            lineStyle: {
              color: tickColor,
              width: 1.5,
            },
            show: function(value: number) {
              return value % 20 === 0;
            },
          },
          axisLabel: {
            show: true,
            distance: axisWidth,
            color: labelColor,
            fontSize: 12,
            fontWeight: 'bold',
            formatter: function(value: number) {
              return value % 20 === 0 ? value.toString() : '';
            },
          },
          anchor: {
            show: true,
            showAbove: true,
            size: 14,
            itemStyle: {
              color: whiteColor,
              borderColor: pointerColor,
              borderWidth: 2,
              shadowBlur: 4,
              shadowColor: 'rgba(0, 0, 0, 0.2)',
            },
          },
          detail: {
            show: false, // Hide the detail text to match the image
          },
          data: [{ value: value }],
        }
      ],
    };
  }, [chartTheme, value, min, max, axisColors, axisColorLengths, axisWidth, tickColorProp]);

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

  useEffect(() => {
    let chart: any;
    if (axisRef.current) {
      chart = echarts.init(axisRef.current, 'light', {
        width: width,
        height: height,
      });
    }
    chart.setOption(axisOption);
    return () => {
      if (chart) {
        chart.dispose();
      }
    };
  }, [axisOption, width, height]);

  return (
    <View style={[styles.container, { width, height }]}>
      {/* Blue transparent background overlay */}
      <View style={styles.chartContainer}>
        <SkiaChart ref={axisRef} />
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%'}}>
          <SkiaChart ref={chartRef} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

export const SemiCircularGaugeChart = withResponsiveContainer(withChartTheme(ChartComponent), 'value');


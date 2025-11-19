import { withResponsiveContainer } from '@/contexts/chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '@/contexts/chart-theme.context';
import { useTheme } from '@/contexts/ThemeContext';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { BarChart } from 'echarts/charts';
import { GaugeChart } from 'echarts/charts';
import { PolarComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import { useEffect, useMemo, useRef } from 'react';
import { View, StyleSheet } from 'react-native';

// Register necessary components for this chart
echarts.use([
  SkiaRenderer,
  GaugeChart,
  BarChart,
  PolarComponent,
]);

interface ProgressGaugeChartProps {
  value?: number;
  min?: number;
  max?: number;
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}

const ChartComponent = ({
  value = 23,
  min = 0,
  max = 100,
  width = 220,
  height = 240,
}: ProgressGaugeChartProps) => {
  const { colorScheme } = useTheme();
  const { theme: chartTheme } = useChartTheme();
  const chartRef = useRef<any>(null);
  const radialChartRef = useRef<any>(null);

  // Radial background chart option (textRadialOption)
  const radialOption = useMemo(() => {
    // Calculate radius as percentage of the smaller dimension with gap
    const minDim = Math.min(width, height);
    const innerRadius = minDim * 0.30;  // ~77px at 240px - inner edge of radial ring
    const outerRadius = minDim * 0.48;  // ~115px at 240px - outer edge of radial ring
    
    const backgroundColor = chartTheme.axis.r.tickColor;
    const progressColor = chartTheme.series.colors[0];
    
    return {
      polar: {
        center: ['50%', '50%'],
        radius: [innerRadius, outerRadius],
      },
      angleAxis: {
        max: max,
        startAngle: 225,
        endAngle: -45,
        clockwise: true,
        show: false
      },
      radiusAxis: {
        type: 'category',
        data: ['Visitors'],
        show: false
      },
      series: [
        {
          type: 'bar',
          data: [max],
          coordinateSystem: 'polar',
          name: 'Background',
          tooltip: {
            show: false,
          },
          itemStyle: {
            color: backgroundColor,
            borderRadius: [50, 50],
          },
          animation: false,
          barWidth: '50%',
          emphasis: {
            disabled: true,
          },
        },
        {
          type: 'bar',
          data: [value],
          coordinateSystem: 'polar',
          name: 'Visitors',
          itemStyle: {
            color: progressColor,
            borderRadius: [50, 50],
          },
          barWidth: '50%',
          barGap: '-100%',
          emphasis: {
            disabled: true,
          },
        },
      ]
    };
  }, [chartTheme, value, max, width, height]);

  // Gauge option (progressArcOption)
  const gaugeOption = useMemo(() => {
    // Gauge radius smaller than radial inner ring to create a gap
    const minDim = Math.min(width, height);
    const gaugeRadius = minDim * 0.32; // ~65px at 240px - creates gap with radial inner ring (77px)
    
    const axisLineColor = chartTheme.axis.r.tickColor;
    const pointerColor = chartTheme.axis.r.lineColor;
    const tickColor = chartTheme.axis.r.tickColor;
    const splitLineColor = chartTheme.axis.r.tickColor;
    const labelColor = chartTheme.axis.r.labelColor;
    const anchorColor = chartTheme.axis.r.lineColor;
    const anchorBorderColor = chartTheme.axis.r.tickColor;
    const valueColor = chartTheme.axis.r.labelColor;
    const unitColor = chartTheme.axis.r.labelColor;
    
    return {
      series: [
        {
          type: 'gauge',
          center: ['50%', '50%'],
          radius: gaugeRadius,
          startAngle: 225,
          endAngle: -45,
          min: min,
          max: max,
          splitNumber: 5,
          axisLine: {
            show: false,
            distance: 1,
            length: 8,
            lineStyle: {
              width: 1,
              color: [[1, axisLineColor]],
            },
          },
          pointer: {
            length: '80%',
            width: 8,
            icon: 'path://M-4,0 L-2,-50 A1, 1 0 0 1 2, -50 L4,0 A1, 1 0 0 1 -4, 0 Z',
            itemStyle: {
              color: pointerColor,
            },
          },
          axisTick: {
            distance: 1,
            length: 4,
            splitNumber: 16,
            lineStyle: {
              color: tickColor,
              width: 0.5,
            },
          },
          splitLine: {
            distance: 1,
            length: 8,
            lineStyle: {
              color: splitLineColor,
              width: 1,
            },
          },
          axisLabel: {
            show: true,
            distance: 16,
            fontSize: 12,
            color: labelColor,
            formatter: function(value: number) {
              if (value === 20 || value === 80) {
                return value.toString();
              }
              return '';
            },
          },
          anchor: {
            show: true,
            showAbove: true,
            size: 8,
            itemStyle: {
              color: anchorColor,
              borderColor: anchorBorderColor,
              borderWidth: 3,
              shadowBlur: 3,
              shadowColor: 'rgba(0,0,0,0.15)',
            },
          },
          detail: {
            valueAnimation: true,
            formatter: function(value: number) {
              return '{value|' + Math.round(value) + '}{unit|/100}';
            },
            offsetCenter: [0, '70%'],
            rich: {
              value: {
                fontSize: 40,
                fontWeight: 'bold',
                color: valueColor,
              },
              unit: {
                verticalAlign: 'bottom',
                fontSize: 16,
                color: unitColor,
                fontWeight: 'normal',
              },
            }
          },
          data: [{ value: value }],
        }
      ],
      style: {
        backgroundColor: 'transparent',
      },
    };
  }, [chartTheme, value, min, max, width, height]);

  // Initialize radial background chart
  useEffect(() => {
    let chart: any;
    if (radialChartRef.current) {
      try {
        chart = echarts.init(radialChartRef.current, 'light', {
          width: width,
          height: height,
        });
        
        chart.setOption(radialOption);
      } catch (error) {
        console.warn('Radial chart initialization error:', error);
      }
    }
    return () => {
      if (chart) {
        try {
          chart.dispose();
        } catch (error) {
          console.warn('Radial chart disposal error:', error);
        }
      }
    };
  }, [radialOption, width, height]);

  // Initialize gauge chart (same size as radial chart)
  useEffect(() => {
    let chart: any;
    if (chartRef.current) {
      try {
        chart = echarts.init(chartRef.current, 'light', {
          width: width,
          height: height,
        });
        
        chart.setOption(gaugeOption);
      } catch (error) {
        console.warn('Gauge chart initialization error:', error);
      }
    }
    return () => {
      if (chart) {
        try {
          chart.dispose();
        } catch (error) {
          console.warn('Gauge chart disposal error:', error);
        }
      }
    };
  }, [gaugeOption, width, height]);

  return (
    <View style={[styles.container, { width, height }]}>
      <View style={styles.radialChart}>
        <SkiaChart ref={radialChartRef}/>
      </View>
      <View style={styles.gaugeChart}>
        <SkiaChart ref={chartRef}/>
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
  radialChart: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  gaugeChart: {
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

export const ProgressGaugeChart = withResponsiveContainer(withChartTheme(ChartComponent));

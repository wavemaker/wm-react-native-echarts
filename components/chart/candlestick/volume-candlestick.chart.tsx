import { withResponsiveContainer } from '../chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '../chart-theme.context';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { BarChart, CandlestickChart } from 'echarts/charts';
import {
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  TooltipComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { useEffect, useMemo, useRef } from 'react';

// Register necessary components for this chart
echarts.use([
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DataZoomComponent,
  SkiaRenderer,
  CandlestickChart,
  BarChart,
]);

/**
 * Props for the VolumeCandlestickChart component.
 * A candlestick chart with volume bars displayed below.
 */
interface VolumeCandlestickChartProps {
  /**
   * Array of date/time labels for the X-axis.
   */
  xAxisData: string[];
  
  /**
   * Array of OHLC price data. Each item is [open, close, low, high].
   */
  priceData: number[][];
  
  /**
   * Array of volume data corresponding to each price period.
   */
  volumeData: number[];
  
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
  xAxisData,
  priceData,
  volumeData,
  width = 220,
  height = 450,
}: VolumeCandlestickChartProps) => {
  const { theme } = useChartTheme();
  const chartRef = useRef<any>(null);

  const option = useMemo(() => {
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
        backgroundColor: theme.tooltip.backgroundColor,
        borderColor: theme.tooltip.borderColor,
        borderWidth: theme.tooltip.borderWidth,
        textStyle: {
          color: theme.tooltip.valueColor,
        },
      },
      legend: {
        data: ['Price', 'Volume'],
      },
      grid: [
        {
          left: '10%',
          right: '8%',
          height: '50%',
        },
        {
          left: '10%',
          right: '8%',
          top: '63%',
          height: '16%',
        },
      ],
      xAxis: [
        {
          type: 'category',
          data: xAxisData,
          scale: true,
          boundaryGap: false,
          axisLine: { 
            onZero: false,
            lineStyle: {
              color: theme.axis.x.lineColor,
              width: theme.axis.x.lineWidth,
            },
          },
          splitLine: { show: false },
          min: 'dataMin',
          max: 'dataMax',
          axisLabel: {
            color: theme.axis.x.labelColor,
          },
        },
        {
          type: 'category',
          gridIndex: 1,
          data: xAxisData,
          scale: true,
          boundaryGap: false,
          axisLine: { 
            onZero: false,
            lineStyle: {
              color: theme.axis.x.lineColor,
              width: theme.axis.x.lineWidth,
            },
          },
          axisTick: { show: false },
          splitLine: { show: false },
          axisLabel: { show: false },
          min: 'dataMin',
          max: 'dataMax',
        },
      ],
      yAxis: [
        {
          scale: true,
          splitArea: {
            show: true,
          },
          axisLabel: {
            color: theme.axis.y.labelColor,
          },
          splitLine: {
            lineStyle: {
              color: theme.grid.y.lineColor,
              width: theme.grid.y.lineWidth,
            },
          },
        },
        {
          scale: true,
          gridIndex: 1,
          splitNumber: 2,
          axisLabel: { show: false },
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
        },
      ],
      dataZoom: [
        {
          type: 'inside',
          xAxisIndex: [0, 1],
          start: 50,
          end: 100,
        },
        {
          show: true,
          xAxisIndex: [0, 1],
          type: 'slider',
          top: '85%',
          start: 50,
          end: 100,
        },
      ],
      series: [
        {
          name: 'Price',
          type: 'candlestick',
          data: priceData,
          itemStyle: {
            color: '#ec0000',
            color0: '#00da3c',
            borderColor: '#8A0000',
            borderColor0: '#008F28',
          },
        },
        {
          name: 'Volume',
          type: 'bar',
          xAxisIndex: 1,
          yAxisIndex: 1,
          data: volumeData,
          itemStyle: {
            color: theme.series.colors[0],
            opacity: 0.7,
          },
        },
      ],
    };
  }, [theme, xAxisData, priceData, volumeData]);

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

  return <SkiaChart ref={chartRef} />;
};

export const VolumeCandlestickChart = withResponsiveContainer(withChartTheme(ChartComponent), 'priceData');


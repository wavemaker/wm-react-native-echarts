import { withResponsiveContainer } from '../chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '../chart-theme.context';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { BarChart, CandlestickChart as EChartsCandlestickChart, LineChart } from 'echarts/charts';
import {
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  TooltipComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import React, { useEffect, useMemo, useRef } from 'react';

// Register necessary components for this chart
echarts.use([
  TooltipComponent,
  LegendComponent,
  GridComponent,
  DataZoomComponent,
  SkiaRenderer,
  EChartsCandlestickChart,
  LineChart,
  BarChart,
]);

/**
 * Props for the CandlestickChart component.
 * A unified candlestick chart component that supports basic candlestick, moving averages, and volume.
 */
export interface CandlestickChartProps {
  /**
   * Array of date/time labels for the X-axis.
   */
  xAxisData: string[];
  
  /**
   * Array of OHLC price data. Each item is [open, close, low, high].
   * For basic candlestick, use this prop.
   * For MA or Volume charts, use priceData instead.
   */
  data?: number[][];
  
  /**
   * Array of OHLC price data. Each item is [open, close, low, high].
   * Used when moving averages or volume are enabled.
   */
  priceData?: number[][];
  
  /**
   * 5-period moving average data.
   * When provided, displays MA5 line overlay.
   */
  ma5Data?: number[];
  
  /**
   * 10-period moving average data.
   * When provided, displays MA10 line overlay.
   */
  ma10Data?: number[];
  
  /**
   * 20-period moving average data.
   * When provided, displays MA20 line overlay.
   */
  ma20Data?: number[];
  
  /**
   * Array of volume data corresponding to each price period.
   * When provided, displays volume bars below the candlestick chart.
   */
  volumeData?: number[];
  
  /**
   * Candlestick colors for up (rising) candles.
   * @default '#ec0000'
   */
  upColor?: string;
  
  /**
   * Candlestick colors for down (falling) candles.
   * @default '#00da3c'
   */
  downColor?: string;
  
  /**
   * Candlestick border color for up candles.
   * @default '#8A0000'
   */
  upBorderColor?: string;
  
  /**
   * Candlestick border color for down candles.
   * @default '#008F28'
   */
  downBorderColor?: string;
  
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
   * Colors for the chart.
   * @default theme.itemStyles.map(item => item.color)
   */
  colors?: string[];
}

const ChartComponent = ({
  xAxisData,
  data: dataProp,
  priceData,
  ma5Data,
  ma10Data,
  ma20Data,
  volumeData,
  upColor = '#ec0000',
  downColor = '#00da3c',
  upBorderColor = '#8A0000',
  downBorderColor = '#008F28',
  width = 220,
  height = 450,
  ...props
}: CandlestickChartProps) => {
  const { theme } = useChartTheme(props.theme, props.colors);
  const chartRef = useRef<any>(null);

  // Determine which data to use - prioritize priceData for MA/Volume charts, fallback to data
  const candlestickData = priceData || dataProp || [];
  const hasMA = !!(ma5Data || ma10Data || ma20Data);
  const hasVolume = !!volumeData;
  const showLegend = hasMA || hasVolume;

  const option = useMemo(() => {
    const series: any[] = [];
    
    // Candlestick series
    series.push({
      name: 'Price',
      type: 'candlestick',
      data: candlestickData,
      itemStyle: {
        color: upColor,
        color0: downColor,
        borderColor: upBorderColor,
        borderColor0: downBorderColor,
      },
    });

    // Moving average series
    if (ma5Data) {
      series.push({
        name: 'MA5',
        type: 'line',
        data: ma5Data,
        smooth: true,
        lineStyle: {
          opacity: 0.7,
          color: theme.series[0]?.color || '#5470c6',
          width: 2,
        },
      });
    }

    if (ma10Data) {
      series.push({
        name: 'MA10',
        type: 'line',
        data: ma10Data,
        smooth: true,
        lineStyle: {
          opacity: 0.7,
          color: theme.series[1]?.color || '#91cc75',
          width: 2,
        },
      });
    }

    if (ma20Data) {
      series.push({
        name: 'MA20',
        type: 'line',
        data: ma20Data,
        smooth: true,
        lineStyle: {
          opacity: 0.7,
          color: theme.series[2]?.color || '#fac858',
          width: 2,
        },
      });
    }

    // Volume series (if provided)
    if (volumeData) {
      series.push({
        name: 'Volume',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: volumeData,
        itemStyle: {
          color: theme.series[0]?.color || '#5470c6',
          opacity: 0.7,
        },
      });
    }

    // Build legend data
    const legendData: string[] = ['Price'];
    if (ma5Data) legendData.push('MA5');
    if (ma10Data) legendData.push('MA10');
    if (ma20Data) legendData.push('MA20');
    if (volumeData) legendData.push('Volume');

    // Configure grid based on whether volume is shown
    const gridConfig = hasVolume
      ? [
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
        ]
      : {
          left: '10%',
          right: '10%',
          bottom: '15%',
        };

    // Configure xAxis based on whether volume is shown
    const xAxisConfig = hasVolume
      ? [
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
              color: theme.axis.x.tickLabelColor,
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
        ]
      : {
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
            color: theme.axis.x.tickLabelColor,
          },
        };

    // Configure yAxis based on whether volume is shown
    const yAxisConfig = hasVolume
      ? [
          {
            scale: true,
            splitArea: {
              show: true,
            },
            axisLabel: {
              color: theme.axis.y.tickLabelColor,
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
        ]
      : {
          scale: true,
          splitArea: {
            show: true,
          },
          axisLabel: {
            color: theme.axis.y.tickLabelColor,
          },
          splitLine: {
            lineStyle: {
              color: theme.grid.y.lineColor,
              width: theme.grid.y.lineWidth,
            },
          },
        };

    // Configure dataZoom
    const dataZoomConfig = hasVolume
      ? [
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
        ]
      : [
          {
            type: 'inside',
            start: 50,
            end: 100,
          },
          {
            show: true,
            type: 'slider',
            top: '90%',
            start: 50,
            end: 100,
          },
        ];

    return {
      tooltip: {
        trigger: 'axis',
        ...(hasMA || hasVolume
          ? {
              axisPointer: {
                type: 'cross',
              },
            }
          : {}),
        backgroundColor: theme.tooltip.backgroundColor,
        borderColor: theme.tooltip.borderColor,
        borderWidth: theme.tooltip.borderWidth,
        textStyle: {
          color: theme.tooltip.valueColor,
        },
      },
      ...(showLegend
        ? {
            legend: {
              data: legendData,
              textStyle: {
                color: theme.legend.textColor,
                fontSize: theme.legend.fontSize,
              },
              backgroundColor: theme.legend.backgroundColor,
            },
          }
        : {}),
      grid: gridConfig,
      xAxis: xAxisConfig,
      yAxis: yAxisConfig,
      dataZoom: dataZoomConfig,
      series: series,
    };
  }, [
    theme,
    xAxisData,
    candlestickData,
    ma5Data,
    ma10Data,
    ma20Data,
    volumeData,
    upColor,
    downColor,
    upBorderColor,
    downBorderColor,
    hasMA,
    hasVolume,
    showLegend,
  ]);

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

// Wrapper to ensure data prop is always set for ChartContainer
// ChartContainer checks for props.data, so we need to ensure it's set from priceData if data is not provided
const ChartComponentWrapper = (props: CandlestickChartProps) => {
  // Ensure data is set from priceData if data is not provided, so ChartContainer can find it
  const data = props.data || props.priceData;
  return <ChartComponent {...props} data={data} />;
};

export const CandlestickChart = withResponsiveContainer(
  withChartTheme(ChartComponentWrapper),
  'data'
);

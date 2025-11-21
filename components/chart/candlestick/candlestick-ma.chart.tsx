import { withResponsiveContainer } from '@/contexts/chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '@/contexts/chart-theme.context';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { CandlestickChart, LineChart } from 'echarts/charts';
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
  LineChart,
]);

/**
 * Props for the CandlestickMAChart component.
 * A candlestick chart with moving average (MA) lines overlay.
 */
interface CandlestickMAChartProps {
  /**
   * Array of date/time labels for the X-axis.
   * @default ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
   */
  xAxisData?: string[];
  
  /**
   * Array of OHLC price data. Each item is [open, close, low, high].
   * @default Sample weekly data
   */
  priceData?: number[][];
  
  /**
   * 5-period moving average data.
   * @default Calculated from price data
   */
  ma5Data?: number[];
  
  /**
   * 10-period moving average data.
   * @default Calculated from price data
   */
  ma10Data?: number[];
  
  /**
   * 20-period moving average data.
   * @default Calculated from price data
   */
  ma20Data?: number[];
  
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
  xAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  priceData = [
    [20, 34, 10, 38],
    [40, 35, 30, 50],
    [31, 38, 33, 44],
    [38, 15, 5, 42],
    [25, 32, 28, 35],
    [30, 25, 20, 40],
    [35, 45, 30, 50],
  ],
  ma5Data = [25, 35, 32, 28, 30, 32, 38],
  ma10Data = [28, 32, 30, 26, 28, 30, 35],
  ma20Data = [30, 30, 28, 25, 27, 29, 32],
  width = 220,
  height = 400,
}: CandlestickMAChartProps) => {
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
        data: ['Price', 'MA5', 'MA10', 'MA20'],
      },
      grid: {
        left: '10%',
        right: '10%',
        bottom: '15%',
      },
      xAxis: {
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
      yAxis: {
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
      dataZoom: [
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
          name: 'MA5',
          type: 'line',
          data: ma5Data,
          smooth: true,
          lineStyle: {
            opacity: 0.7,
            color: theme.series.colors[0],
            width: 2,
          },
        },
        {
          name: 'MA10',
          type: 'line',
          data: ma10Data,
          smooth: true,
          lineStyle: {
            opacity: 0.7,
            color: '#91cc75',
            width: 2,
          },
        },
        {
          name: 'MA20',
          type: 'line',
          data: ma20Data,
          smooth: true,
          lineStyle: {
            opacity: 0.7,
            color: '#fac858',
            width: 2,
          },
        },
      ],
    };
  }, [theme, xAxisData, priceData, ma5Data, ma10Data, ma20Data]);

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

export const CandlestickMAChart = withResponsiveContainer(withChartTheme(ChartComponent));


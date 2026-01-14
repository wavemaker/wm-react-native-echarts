import { withResponsiveContainer } from '../chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '../chart-theme.context';
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
   */
  xAxisData: string[];
  
  /**
   * Array of OHLC price data. Each item is [open, close, low, high].
   */
  priceData: number[][];
  
  /**
   * 5-period moving average data.
   */
  ma5Data: number[];
  
  /**
   * 10-period moving average data.
   */
  ma10Data: number[];
  
  /**
   * 20-period moving average data.
   */
  ma20Data: number[];
  
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
  priceData,
  ma5Data,
  ma10Data,
  ma20Data,
  width = 220,
  height = 400,
  ...props
}: CandlestickMAChartProps) => {
  const { theme } = useChartTheme(props.theme, props.colors);
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
          color: theme.axis.x.tickLabelColor,
        },
      },
      yAxis: {
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
            color: theme.series[0].color,
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

export const CandlestickMAChart = withResponsiveContainer(withChartTheme(ChartComponent), 'priceData');


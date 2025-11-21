import { withResponsiveContainer } from '@/contexts/chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '@/contexts/chart-theme.context';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { CandlestickChart } from 'echarts/charts';
import {
  DataZoomComponent,
  GridComponent,
  TooltipComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { useEffect, useMemo, useRef } from 'react';

// Register necessary components for this chart
echarts.use([
  TooltipComponent,
  GridComponent,
  DataZoomComponent,
  SkiaRenderer,
  CandlestickChart,
]);

/**
 * Props for the BasicCandlestickChart component.
 * A financial chart displaying OHLC (Open, High, Low, Close) data as candlesticks.
 */
interface BasicCandlestickChartProps {
  /**
   * Array of date/time labels for the X-axis.
   * @default ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
   */
  xAxisData?: string[];
  
  /**
   * Array of OHLC data. Each item is [open, close, low, high].
   * @default Sample weekly data
   */
  data?: number[][];
  
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
  data = [
    [20, 34, 10, 38],
    [40, 35, 30, 50],
    [31, 38, 33, 44],
    [38, 15, 5, 42],
    [25, 32, 28, 35],
    [30, 25, 20, 40],
    [35, 45, 30, 50],
  ],
  width = 220,
  height = 400,
}: BasicCandlestickChartProps) => {
  const { theme } = useChartTheme();
  const chartRef = useRef<any>(null);

  const option = useMemo(() => {
    return {
      tooltip: {
        trigger: 'axis',
        backgroundColor: theme.tooltip.backgroundColor,
        borderColor: theme.tooltip.borderColor,
        borderWidth: theme.tooltip.borderWidth,
        textStyle: {
          color: theme.tooltip.valueColor,
        },
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
          name: 'Stock Price',
          type: 'candlestick',
          data: data,
          itemStyle: {
            color: '#ec0000',
            color0: '#00da3c',
            borderColor: '#8A0000',
            borderColor0: '#008F28',
          },
        },
      ],
    };
  }, [theme, xAxisData, data]);

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

export const BasicCandlestickChart = withResponsiveContainer(withChartTheme(ChartComponent));


import { withResponsiveContainer } from '../chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '../chart-theme.context';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { RadarChart } from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { useEffect, useMemo, useRef } from 'react';

// Register necessary components for this chart
echarts.use([
  TooltipComponent,
  GridComponent,
  SkiaRenderer,
  RadarChart,
]);

/**
 * Definition for a radar chart indicator (axis).
 */
interface RadarIndicator {
  /** Name/label of the indicator */
  name: string;
  /** Maximum value for this indicator */
  max: number;
}

/**
 * Props for the GridNoneRadarChart component.
 * A radar chart with no grid lines visible.
 */
interface GridNoneRadarChartProps {
  /**
   * Array of indicators defining the radar axes.
   */
  indicators: RadarIndicator[];
  
  /**
   * Array of values corresponding to each indicator.
   */
  data: number[];
  
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
   * Colors for the chart.
   * @default theme.itemStyles.map(item => item.color)
   */
  colors?: string[];
}

const ChartComponent = ({
  indicators,
  data,
  width = 220,
  height = 300,
  ...props
}: GridNoneRadarChartProps) => {
  const { theme } = useChartTheme(props.theme, props.colors);
  const chartRef = useRef<any>(null);

  const option = useMemo(() => {
    return {
      tooltip: {},
      radar: {
        indicator: indicators,
        shape: 'polygon',
        splitArea: { show: false },
        axisLine: { show: false },
        splitLine: { show: false },
        axisName: {
          color: theme.axis.r.labelColor,
        },
        tick: {
          label: theme.axis.r.tickColor,
        },
      },
      series: [
        {
          type: 'radar',
          data: [
            {
              value: data,
              areaStyle: { opacity: 0.5 },
              itemStyle: { color: theme.itemStyles[0].color, width: 1 },
            },
          ],
        },
      ],
    };
  }, [theme, indicators, data]);

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

export const GridNoneRadarChart = withResponsiveContainer(withChartTheme(ChartComponent));


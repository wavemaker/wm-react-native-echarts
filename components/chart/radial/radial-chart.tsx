import { withResponsiveContainer } from '../chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '../chart-theme.context';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { BarChart as EChartsBarChart } from 'echarts/charts';
import {
  GridComponent,
  PolarComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import React, { useEffect, useMemo, useRef } from 'react';

// Register necessary components for this chart
echarts.use([
  TooltipComponent,
  GridComponent,
  PolarComponent,
  SkiaRenderer,
  EChartsBarChart,
]);

/**
 * Data structure for radial chart items.
 */
export interface RadialDataItem {
  /** Label for the item */
  label: string;
  /** Numeric value */
  value: number;
  /** Optional custom color */
  color?: string;
}

/**
 * Data structure for stacked series in radial chart.
 */
export interface StackedRadialSeries {
  /** Name of the series */
  name: string;
  /** Numeric value */
  value: number;
  /** Optional custom color */
  color?: string;
}

/**
 * Props for the RadialChart component.
 * A unified radial chart component that supports all radial chart variations.
 */
export interface RadialChartProps {
  /**
   * Array of data items to display.
   * For stacked charts, use stackedData instead.
   */
  data?: RadialDataItem[];
  
  /**
   * Array of stacked series data.
   * When provided, takes precedence over data.
   */
  stackedData?: StackedRadialSeries[];
  
  /**
   * Inner and outer width of the ring [start, end].
   * @default [30, 140]
   */
  ringWidth?: [number, number];
  
  /**
   * Gap between rings as percentage string.
   * @default '10%'
   */
  ringGap?: string;
  
  /**
   * Whether to show grid lines.
   * @default true
   */
  showGrid?: boolean;
  
  /**
   * Whether to show angle axis (circular axis).
   * @default false
   */
  showAngleAxis?: boolean;
  
  /**
   * Whether to show radius axis labels.
   * @default false
   */
  showRadiusAxisLabels?: boolean;
  
  /**
   * Main text to display in the center.
   */
  centerText?: string;
  
  /**
   * Subtitle text below the main center text.
   */
  centerSubtext?: string;
  
  /**
   * Font size for the center main text.
   * @default 24
   */
  centerTextFontSize?: number;
  
  /**
   * Font size for the center subtitle.
   * @default 14
   */
  centerSubtextFontSize?: number;
  
  /**
   * Maximum value for the angle axis.
   * @default 100
   */
  angleAxisMax?: number;
  
  /**
   * Start angle in degrees (0-360).
   * @default 0
   */
  startAngle?: number;
  
  /**
   * Whether to render clockwise.
   * @default false
   */
  clockwise?: boolean;
  
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
   * Colors for the chart series. Overrides theme colors.
   */
  colors?: string[];
  
  /**
   * Tooltip configuration.
   */
  tooltipConfig?: {
    [key: string]: any;
  };
}

const ChartComponent = ({
  data,
  stackedData,
  ringWidth = [30, 140],
  ringGap = '10%',
  showGrid = true,
  showAngleAxis = false,
  showRadiusAxisLabels = false,
  centerText,
  centerSubtext,
  centerTextFontSize = 24,
  centerSubtextFontSize = 14,
  angleAxisMax = 100,
  startAngle = 0,
  clockwise = false,
  width = 220,
  height = 450,
  tooltipConfig,
  ...props
}: RadialChartProps) => {
  const { theme } = useChartTheme(props.theme, props.colors);
  const chartRef = useRef<any>(null);

  const option = useMemo(() => {
    // Build tooltip config
    const tooltipConfigFinal: any = {
      trigger: 'item',
      renderMode: 'richText',
      confine: true,
      formatter: `{b|{b}}: {c}%`,
      rich: {
        b: {
          color: theme.series[0].color,
          fontWeight: 'bold',
        },
        c: {
          color: theme.axis.r.tickLabelColor,
          fontWeight: 'normal',
        }
      },
      ...tooltipConfig,
    };

    // Handle stacked radial charts
    if (stackedData && stackedData.length > 0) {
      const categories = stackedData.map(d => d.name);
      const values = stackedData.map((d, index) => ({
        value: d.value,
        itemStyle: {
          color: d.color || theme.series[index % theme.series.length].color,
        },
      }));

      const seriesConfig: any[] = [
        {
          type: 'bar',
          data: Array(stackedData.length).fill(angleAxisMax),
          coordinateSystem: 'polar',
          name: 'Background',
          tooltip: {
            show: false,
          },
          itemStyle: {
            color: theme.grid.r.lineColor,
          },
          animation: false,
          stack: 'total',
          barCategoryGap: ringGap,
          emphasis: {
            disabled: true,
          },
        },
        {
          type: 'bar',
          data: values,
          coordinateSystem: 'polar',
          name: 'Data',
          stack: 'total',
          barCategoryGap: ringGap,
          emphasis: {
            disabled: true,
          },
        },
      ];

      // Add center text if provided
      if (centerText || centerSubtext) {
        seriesConfig.push({
          type: 'pie',
          radius: ['0%', '0%'],
          center: ['50%', '50%'],
          data: [{ value: 0 }],
          label: {
            show: true,
            position: 'center',
            formatter: `{total|${centerText || ''}}\\n{active|${centerSubtext || ''}}`,
            rich: {
              total: {
                fontSize: centerTextFontSize,
                fontWeight: 'bold',
                color: '#333',
              },
              active: {
                fontSize: centerSubtextFontSize,
                color: '#666',
              },
            },
          },
          labelLine: {
            show: false,
          },
          emphasis: {
            disabled: true,
          },
        });
      }

      return {
        tooltip: tooltipConfigFinal,
        polar: {
          radius: ringWidth,
        },
        angleAxis: {
          max: angleAxisMax,
          startAngle: startAngle,
          clockwise: clockwise,
          show: showAngleAxis,
        },
        radiusAxis: {
          type: 'category',
          data: categories,
          show: showRadiusAxisLabels,
        },
        series: seriesConfig,
      };
    }

    // Handle regular radial charts
    if (!data || data.length === 0) {
      return {
        tooltip: tooltipConfigFinal,
        polar: {
          radius: ringWidth,
        },
        angleAxis: {},
        radiusAxis: {},
        series: [],
      };
    }

    const categories = data.map(d => d.label);
    const values = data.map((d, index) => ({
      value: d.value,
      itemStyle: {
        color: d.color || theme.series[index % theme.series.length].color,
      },
    }));

    const seriesConfig: any[] = [
      {
        type: 'bar',
        data: Array(data.length).fill(angleAxisMax),
        coordinateSystem: 'polar',
        name: 'Background',
        tooltip: {
          show: false,
        },
        itemStyle: {
          color: theme.grid.r.lineColor,
        },
        animation: false,
        stack: 'total',
        barCategoryGap: ringGap,
        emphasis: {
          disabled: true,
        },
      },
      {
        type: 'bar',
        data: values,
        coordinateSystem: 'polar',
        name: 'Data',
        stack: 'total',
        barCategoryGap: ringGap,
        emphasis: {
          disabled: true,
        },
      },
    ];

    return {
      tooltip: tooltipConfigFinal,
      polar: {
        radius: ringWidth,
      },
      angleAxis: {
        max: angleAxisMax,
        startAngle: startAngle,
        clockwise: clockwise,
        show: showAngleAxis,
        axisLine: showGrid ? {
          show: true,
          lineStyle: {
            color: theme.axis.r.lineColor,
          },
        } : {
          show: false,
        },
        axisTick: showGrid ? {
          show: true,
          lineStyle: {
            color: theme.axis.r.tickColor,
          },
        } : {
          show: false,
        },
        splitLine: showGrid ? {
          show: true,
          lineStyle: {
            color: theme.axis.r.tickColor,
          },
        } : {
          show: false,
        },
      },
      radiusAxis: {
        type: 'category',
        data: categories,
        show: showRadiusAxisLabels,
        axisLine: {
          show: showRadiusAxisLabels,
          lineStyle: {
            color: theme.axis.r.lineColor,
          },
        },
        axisTick: {
          show: false,
        },
      },
      series: seriesConfig,
    };
  }, [
    theme,
    data,
    stackedData,
    ringWidth,
    ringGap,
    showGrid,
    showAngleAxis,
    showRadiusAxisLabels,
    centerText,
    centerSubtext,
    centerTextFontSize,
    centerSubtextFontSize,
    angleAxisMax,
    startAngle,
    clockwise,
    tooltipConfig,
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

export const RadialChart = withResponsiveContainer(withChartTheme(ChartComponent));

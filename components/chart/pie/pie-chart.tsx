import { withResponsiveContainer } from '../chart-container';
import { ChartTheme, useChartTheme, withChartTheme } from '../chart-theme.context';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { PieChart as EChartsPieChart } from 'echarts/charts';
import {
  TitleComponent,
  LegendComponent,
  TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import React, { useEffect, useMemo, useRef } from 'react';

// Register necessary components for this chart
echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  SkiaRenderer,
  EChartsPieChart,
]);

/**
 * Data item structure for pie charts.
 */
export interface PieDataItem {
  /** Numeric value for the slice */
  value: number;
  /** Name/label for the slice */
  name: string;
  /** Whether this slice is initially selected */
  selected?: boolean;
  /** Optional custom styling for the slice */
  itemStyle?: {
    /** Custom color for this slice */
    color: string;
  };
}

/**
 * Configuration for a series in a stacked pie chart.
 */
export interface StackedSeriesConfig {
  /** Name of the series */
  name: string;
  /** Inner and outer radius for this ring [innerRadius, outerRadius] */
  radius: string[];
  /** Data items for this ring */
  data: PieDataItem[];
}

/**
 * Props for the PieChart component.
 * A unified pie chart component that supports all pie chart variations.
 */
export interface PieChartProps {
  /**
   * Array of data items for the pie slices.
   * For stacked pie charts, use stackedData instead.
   */
  data?: PieDataItem[];
  
  /**
   * Array of configurations for stacked/concentric pie charts.
   * When provided, takes precedence over data.
   */
  stackedData?: StackedSeriesConfig[];
  
  /**
   * Radius of the pie chart. Can be:
   * - Single string for regular pie: '50%'
   * - Array of two strings for donut: ['40%', '70%']
   * @default '50%'
   */
  radius?: string | string[];
  
  /**
   * Whether to show labels on the slices.
   * @default false
   */
  showLabel?: boolean;
  
  /**
   * Whether to show lines connecting labels to slices.
   * @default false
   */
  showLabelLine?: boolean;
  
  /**
   * Format string for the labels (e.g., '{b}: {c}' for name: value, '{b}' for name only, '{c}' for value only).
   */
  labelFormatter?: string;
  
  /**
   * Font size for the labels in pixels.
   * @default 12
   */
  labelFontSize?: number;
  
  /**
   * Whether to show a legend.
   * @default false
   */
  showLegend?: boolean;
  
  /**
   * Legend configuration options.
   */
  legendConfig?: {
    orient?: 'horizontal' | 'vertical';
    position?: 'top' | 'bottom' | 'left' | 'right';
    bottom?: string;
    left?: string;
    [key: string]: any;
  };
  
  /**
   * Main text to display in the center (for donut charts).
   */
  centerText?: string;
  
  /**
   * Subtitle text below the main center text (for donut charts).
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
   * Distance to offset selected slices in pixels.
   * @default 10
   */
  selectedOffset?: number;
  
  /**
   * Whether to enable selection mode.
   * @default false
   */
  selectedMode?: boolean | 'single' | 'multiple';
  
  /**
   * Gap between slices (in degrees). Set to 0 for no separator.
   * @default undefined (uses ECharts default)
   */
  gap?: number;
  
  /**
   * Width of the chart in pixels.
   * @default 220
   */
  width?: number;
  
  /**
   * Height of the chart in pixels.
   * @default 400
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
    trigger?: 'item' | 'axis' | 'none';
    [key: string]: any;
  };
}

const ChartComponent = ({
  data,
  stackedData,
  radius = '50%',
  showLabel = false,
  showLabelLine = false,
  labelFormatter,
  labelFontSize = 12,
  showLegend = false,
  legendConfig,
  centerText,
  centerSubtext,
  centerTextFontSize = 24,
  centerSubtextFontSize = 14,
  selectedOffset = 10,
  selectedMode = false,
  gap,
  width = 220,
  height = 400,
  tooltipConfig,
  ...props
}: PieChartProps) => {
  const { theme } = useChartTheme(props.theme, props.colors);
  const chartRef = useRef<any>(null);

  const option = useMemo(() => {
    // Build tooltip config
    const tooltipConfigFinal: any = {
      trigger: 'item',
      ...tooltipConfig,
    };

    // Build legend config
    const legendConfigFinal: any = showLegend ? {
      orient: legendConfig?.orient || 'horizontal',
      bottom: legendConfig?.bottom || (legendConfig?.position === 'bottom' ? '10%' : undefined),
      left: legendConfig?.left || (legendConfig?.position === 'left' ? 'left' : 'center'),
      textStyle: {
        color: theme.legend.textColor,
        fontSize: theme.legend.fontSize,
      },
      backgroundColor: theme.legend.backgroundColor,
      ...legendConfig,
    } : undefined;

    // Handle stacked pie charts
    if (stackedData && stackedData.length > 0) {
      const chartSeries = stackedData.map((s) => ({
        name: s.name,
        type: 'pie',
        radius: s.radius,
        data: s.data.map((item, index) => ({
          ...item,
          itemStyle: item.itemStyle || {
            color: theme.series[index % theme.series.length].color,
          },
        })),
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
      }));

      return {
        tooltip: tooltipConfigFinal,
        legend: legendConfigFinal,
        series: chartSeries,
      };
    }

    // Handle regular pie/donut charts
    if (!data || data.length === 0) {
      return {
        tooltip: tooltipConfigFinal,
        legend: legendConfigFinal,
        series: [],
      };
    }

    // Apply theme colors to data if not specified
    const themedData = data.map((item, index) => ({
      ...item,
      itemStyle: item.itemStyle || {
        color: theme.series[index % theme.series.length].color,
      },
    }));

    // Determine if it's a donut chart (radius is array)
    const isDonut = Array.isArray(radius);
    const hasCenterText = centerText !== undefined || centerSubtext !== undefined;

    // Build label config
    let labelConfig: any = {
      show: showLabel || hasCenterText,
    };

    if (hasCenterText) {
      // Center text for donut charts
      labelConfig.position = 'center';
      labelConfig.formatter = `{total|${centerText || ''}}\\n{active|${centerSubtext || ''}}`;
      labelConfig.rich = {
        total: {
          fontSize: centerTextFontSize,
          fontWeight: 'bold',
          color: '#333',
        },
        active: {
          fontSize: centerSubtextFontSize,
          color: '#666',
        },
      };
    } else if (showLabel) {
      // Regular labels
      labelConfig.formatter = labelFormatter || '{b}';
      labelConfig.fontSize = labelFontSize;
    }

    const seriesConfig: any = {
      name: 'Data',
      type: 'pie',
      radius: radius,
      data: themedData,
      label: labelConfig,
      labelLine: {
        show: showLabelLine && !hasCenterText,
      },
    };

    // Add gap if specified
    if (gap !== undefined) {
      seriesConfig.avoidLabelOverlap = gap === 0 ? false : true;
      if (gap === 0) {
        seriesConfig.itemStyle = {
          borderWidth: 0,
        };
      }
    }

    // Add selection mode if enabled
    if (selectedMode) {
      seriesConfig.selectedMode = selectedMode === true ? 'single' : selectedMode;
      seriesConfig.selectedOffset = selectedOffset;
      seriesConfig.emphasis = {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      };
    }

    const config: any = {
      tooltip: tooltipConfigFinal,
      series: [seriesConfig],
    };

    // Add legend if configured
    if (legendConfigFinal) {
      config.legend = legendConfigFinal;
    }

    return config;
  }, [
    theme,
    data,
    stackedData,
    radius,
    showLabel,
    showLabelLine,
    labelFormatter,
    labelFontSize,
    showLegend,
    legendConfig,
    centerText,
    centerSubtext,
    centerTextFontSize,
    centerSubtextFontSize,
    selectedOffset,
    selectedMode,
    gap,
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

export const PieChart = withResponsiveContainer(withChartTheme(ChartComponent), 'data', 'stackedData');

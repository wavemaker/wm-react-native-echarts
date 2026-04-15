import { withResponsiveContainer } from '../chart-container';
import { useChartTheme, withChartTheme } from '../chart-theme.context';
import type {
  PieChartProps,
  PieChartSelectEvent,
  PieDataItem,
  PieRingData,
} from './pie-chart.props';
import { isConcentricPieData } from './pie-chart.props';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { PieChart as EChartsPieChart } from 'echarts/charts';
import {
  LegendComponent,
  TooltipComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import React, { useEffect, useMemo, useRef } from 'react';

// Re-export types
export type {
  PieChartProps,
  PieChartSelectEvent,
  PieDataItem,
  PieRingData,
  PieChartData,
} from './pie-chart.props';
export { isConcentricPieData } from './pie-chart.props';

echarts.use([
  TooltipComponent,
  LegendComponent,
  SkiaRenderer,
  EChartsPieChart,
]);

const ChartComponent = ({
  data,
  width = 220,
  height = 350,
  radius = '75%',
  showLegend = false,
  showLabel = true,
  labelPosition = 'outside',
  showLabelLine = true,
  showHighlighter = true,
  tooltipFormatter,
  onSelect,
  ...props
}: PieChartProps) => {
  const { theme } = useChartTheme(props.theme, props.colors);
  const chartRef = useRef<any>(null);
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  const option = useMemo(() => {
    if (!Array.isArray(data) || data.length === 0) {
      return { series: [] };
    }

    const seriesColors = theme.series.map(s => s.color);
    const labelStyle = {
      color: theme.legend.textColor,
      fontSize: theme.legend.fontSize,
    };

    const buildSeriesConfig = (
      pieData: Array<{ name: string; value: number; itemStyle?: { color?: string } }>,
      seriesRadius: number | string | (number | string)[],
      ringName?: string
    ): any => {
      const total = pieData.reduce((sum, d) => sum + d.value, 0);
      const labelConfig: any = showLabel
        ? {
            show: true,
            position: labelPosition,
            formatter: (params: any) => {
              const pct = total > 0 ? ((params.value / total) * 100).toFixed(1) : '0';
              return `${params.name}\n${pct}%`;
            },
            ...labelStyle,
          }
        : { show: false };

      return {
        type: 'pie',
        name: ringName,
        radius: Array.isArray(seriesRadius) ? seriesRadius : seriesRadius,
        data: pieData,
        label: labelConfig,
        labelLine: {
          show: showLabel && (labelPosition === 'outside' ? showLabelLine : false),
          lineStyle: { color: theme.legend.textColor },
        },
        emphasis: showHighlighter
          ? {
              scale: true,
              scaleSize: 5,
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
              },
            }
          : { disabled: true },
      };
    };

    if (isConcentricPieData(data)) {
      const rings = data as PieRingData[];
      let colorIndex = 0;
      const seriesConfigs = rings.map((ring) => {
        const pieData = ring.data.map((item) => ({
          name: item.name,
          value: item.value,
          itemStyle: item.itemStyle?.color
            ? { color: item.itemStyle.color }
            : { color: seriesColors[colorIndex++ % seriesColors.length] },
        }));
        return buildSeriesConfig(pieData, ring.radius, ring.name);
      });

      const legendData = showLegend
        ? Array.from(
            new Set(rings.flatMap((r) => r.data.map((d) => d.name)))
          )
        : undefined;

      const tooltipConfig: any = {
        trigger: 'item',
        backgroundColor: theme.tooltip.backgroundColor,
        borderColor: theme.tooltip.borderColor,
        borderWidth: theme.tooltip.borderWidth,
        borderRadius: theme.tooltip.borderRadius,
        padding: theme.tooltip.padding,
        textStyle: { color: theme.tooltip.valueColor },
        formatter: tooltipFormatter
          ? (params: any) =>
              tooltipFormatter({
                name: params.name,
                value: params.value,
                percent: params.percent,
              })
          : undefined,
      };

      const config: any = {
        tooltip: tooltipConfig,
        series: seriesConfigs,
      };
      if (legendData?.length) {
        config.legend = {
          orient: 'horizontal',
          left: 'center',
          bottom: 0,
          data: legendData,
          textStyle: labelStyle,
          backgroundColor: theme.legend.backgroundColor,
        };
      }
      return config;
    }

    const flatData = data as PieDataItem[];
    const pieData = flatData.map((item, index) => ({
      name: item.name,
      value: item.value,
      itemStyle: item.itemStyle?.color
        ? { color: item.itemStyle.color }
        : { color: seriesColors[index % seriesColors.length] },
    }));

    const seriesConfig = buildSeriesConfig(pieData, radius);

    const tooltipConfig: any = {
      trigger: 'item',
      backgroundColor: theme.tooltip.backgroundColor,
      borderColor: theme.tooltip.borderColor,
      borderWidth: theme.tooltip.borderWidth,
      borderRadius: theme.tooltip.borderRadius,
      padding: theme.tooltip.padding,
      textStyle: { color: theme.tooltip.valueColor },
      formatter: tooltipFormatter
        ? (params: any) =>
            tooltipFormatter({
              name: params.name,
              value: params.value,
              percent: params.percent,
            })
        : undefined,
    };

    const legendConfig =
      showLegend
        ? {
            orient: 'horizontal',
            left: 'center',
            bottom: 0,
            data: pieData.map((d) => d.name),
            textStyle: labelStyle,
            backgroundColor: theme.legend.backgroundColor,
          }
        : undefined;

    const config: any = {
      tooltip: tooltipConfig,
      series: [seriesConfig],
    };
    if (legendConfig) {
      config.legend = legendConfig;
    }
    return config;
  }, [
    data,
    radius,
    showLegend,
    showLabel,
    labelPosition,
    showLabelLine,
    showHighlighter,
    tooltipFormatter,
    theme,
  ]);

  useEffect(() => {
    let chart: any;
    if (chartRef.current) {
      try {
        chart = echarts.init(chartRef.current, 'light', {
          width,
          height,
        });
        chart.setOption(option);

        const handlePieClick = (params: {
          componentType?: string;
          seriesType?: string;
          seriesIndex?: number;
          dataIndex?: number;
          name?: string;
          value?: number;
          seriesName?: string;
          percent?: number;
        }) => {
          const cb = onSelectRef.current;
          if (typeof cb !== 'function') return;
          if (params.componentType !== 'series') return;
          if (params.seriesType !== 'pie') return;
          if (
            typeof params.dataIndex !== 'number' ||
            params.dataIndex < 0 ||
            params.name == null
          ) {
            return;
          }
          const event: PieChartSelectEvent = {
            seriesIndex: params.seriesIndex ?? 0,
            dataIndex: params.dataIndex,
            name: String(params.name),
            value: Number(params.value ?? 0),
            seriesName: params.seriesName,
            percent: params.percent,
          };
          cb(event);
        };

        chart.on('click', handlePieClick);
      } catch (error) {
        console.warn('Pie chart initialization error:', error);
      }
    }
    return () => {
      if (chart) {
        try {
          chart.dispose();
        } catch (error) {
          console.warn('Pie chart disposal error:', error);
        }
      }
    };
  }, [option, width, height]);

  return <SkiaChart ref={chartRef} useRNGH />;
};

const PieChartComponent = withResponsiveContainer(withChartTheme(ChartComponent), 'data');
export const PieChart = Object.assign(PieChartComponent, {
  displayName: 'PieChart',
});

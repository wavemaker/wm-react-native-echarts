import { withResponsiveContainer } from '../chart-container';
import { useChartTheme, withChartTheme } from '../chart-theme.context';
import type { RadialChartProps, RadialDataItem } from './radial-chart.props';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { PieChart as EChartsPieChart } from 'echarts/charts';
import { LegendComponent, TitleComponent, TooltipComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import React, { useEffect, useMemo, useRef } from 'react';

// Re-export types for backward compatibility
export type { RadialChartProps, RadialDataItem } from './radial-chart.props';

echarts.use([TooltipComponent, TitleComponent, LegendComponent, SkiaRenderer, EChartsPieChart]);

/** Percent of height reserved for horizontal legend (top/bottom) to avoid overlap */
const LEGEND_RESERVE_PCT = 22;
/** Percent of width reserved for vertical legend (left/right) to avoid overlap */
const LEGEND_RESERVE_WIDTH_PCT = 26;

/** Default blue gradient (outer dark → inner light) for concentric rings */
const DEFAULT_RING_COLORS = [
  '#1e3a8a',
  '#1e40af',
  '#2563eb',
  '#3b82f6',
  '#60a5fa',
  '#93c5fd',
  '#bfdbfe',
];

const ChartComponent = ({
  data,
  width = 220,
  height = 350,
  innerRadius = '20%',
  backgroundColor = '#e8e8e899',
  centerText,
  centerSubtext,
  showLegend = true,
  legendPosition = 'bottom',
  startAngle = 0,
  clockwise = false,
  ringGap = '4%',
  ...props
}: RadialChartProps) => {
  const { theme } = useChartTheme(props.theme, props.colors);
  const chartRef = useRef<any>(null);

  const normalizedData = useMemo(() => {
    if (!Array.isArray(data) || data.length === 0) return [] as RadialDataItem[];
    return data.map((d) => ({
      label: d.label,
      value: Math.min(100, Math.max(0, Number(d.value))),
    }));
  }, [data]);

  const option = useMemo(() => {
    if (normalizedData.length === 0) return { series: [] };

    const seriesColors =
      props.colors && props.colors.length > 0
        ? props.colors
        : theme.series.map((s) => s.color);
    const ringColors =
      seriesColors.length >= normalizedData.length
        ? seriesColors
        : DEFAULT_RING_COLORS.slice(0, normalizedData.length);

    const innerPct =
      typeof innerRadius === 'number'
        ? innerRadius
        : typeof innerRadius === 'string' && innerRadius.endsWith('%')
          ? parseFloat(innerRadius)
          : 20;
    const gapPct =
      typeof ringGap === 'number'
        ? ringGap
        : typeof ringGap === 'string' && ringGap.endsWith('%')
          ? parseFloat(ringGap)
          : 0;
    const n = normalizedData.length;
    const totalGap = (n - 1) * gapPct;
    const available = 100 - innerPct - totalGap;
    const ringStep = n > 0 ? available / n : 0;

    const legendTopBottom =
      showLegend && (legendPosition === 'top' || legendPosition === 'bottom');
    const legendLeftRight =
      showLegend && (legendPosition === 'left' || legendPosition === 'right');
    const radiusScaleY = legendTopBottom
      ? (100 - LEGEND_RESERVE_PCT) / 100
      : 1;
    const radiusScaleX = legendLeftRight
      ? (100 - LEGEND_RESERVE_WIDTH_PCT) / 100
      : 1;
    const radiusScale = Math.min(radiusScaleY, radiusScaleX);
    const centerY = legendTopBottom
      ? legendPosition === 'bottom'
        ? (100 - LEGEND_RESERVE_PCT) / 2
        : 100 - (100 - LEGEND_RESERVE_PCT) / 2
      : 50;
    const centerX = legendLeftRight
      ? legendPosition === 'left'
        ? 100 - (100 - LEGEND_RESERVE_WIDTH_PCT) / 2
        : (100 - LEGEND_RESERVE_WIDTH_PCT) / 2
      : 50;

    const seriesConfigs = normalizedData.map((item, index) => {
      const fillPct = item.value;
      const restPct = 100 - fillPct;
      const ringInner = innerPct + index * (ringStep + gapPct);
      const ringOuter = ringInner + ringStep;
      const color = ringColors[index % ringColors.length];
      const name = item.label ?? `Ring ${index + 1}`;
      const scaledInner = ringInner * radiusScale;
      const scaledOuter = ringOuter * radiusScale;

      return {
        type: 'pie',
        radius: [`${scaledInner}%`, `${scaledOuter}%`],
        center: [`${centerX}%`, `${centerY}%`],
        startAngle,
        clockwise,
        data: [
          {
            name: `${name} (${fillPct}%)`,
            value: fillPct,
            itemStyle: { color },
          },
          {
            name: '',
            value: restPct,
            itemStyle: { color: backgroundColor },
            label: { show: false },
            labelLine: { show: false },
          },
        ],
        label: { show: false },
        labelLine: { show: false },
        emphasis: {
          scale: false,
          itemStyle: {
            shadowBlur: 8,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.2)',
          },
        },
      };
    });

    const legendData = normalizedData.map((item, index) =>
      `${item.label ?? `Ring ${index + 1}`} (${item.value}%)`
    );

    const config: any = {
      tooltip: {
        trigger: 'item',
        formatter: (params: any) =>
          params.name ? params.name : '',
      },
      series: seriesConfigs,
    };

    if (showLegend) {
      const isVertical = legendPosition === 'left' || legendPosition === 'right';
      config.legend = {
        show: true,
        data: legendData,
        orient: isVertical ? 'vertical' : 'horizontal',
        ...(legendPosition === 'top' && { top: 8 }),
        ...(legendPosition === 'bottom' && { bottom: 8 }),
        ...(legendPosition === 'left' && { left: 8 }),
        ...(legendPosition === 'right' && { right: 8 }),
        textStyle: {
          color: theme.legend?.textColor ?? '#333333',
          fontSize: theme.legend?.fontSize ?? 11,
        },
      };
    }

    if (centerText != null && centerText !== '' || centerSubtext != null && centerSubtext !== '') {
      const textColor = theme.legend?.textColor ?? '#333333';
      config.title = {
        text: centerText ?? '',
        subtext: centerSubtext ?? '',
        left: 'center',
        top: 'middle',
        textStyle: {
          fontSize: 16,
          color: textColor,
          fontWeight: 'bold',
        },
        subtextStyle: {
          fontSize: 12,
          color: textColor,
        },
        itemGap: 4,
        z: 100,
      };
    }

    return config;
  }, [
    normalizedData,
    theme,
    innerRadius,
    backgroundColor,
    centerText,
    centerSubtext,
    showLegend,
    legendPosition,
    startAngle,
    clockwise,
    ringGap,
    props.colors,
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
  }, [option, width, height]);

  return <SkiaChart ref={chartRef} useRNGH />;
};

const RadialChartComponent = withResponsiveContainer(withChartTheme(ChartComponent));
export const RadialChart = Object.assign(RadialChartComponent, {
  displayName: 'RadialChart',
});

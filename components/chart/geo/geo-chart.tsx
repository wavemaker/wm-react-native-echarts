import { withResponsiveContainer } from '../chart-container';
import { useChartTheme, withChartTheme } from '../chart-theme.context';
import type { GeoChartProps, GeoChartSelectEvent, GeoDataItem } from './geo-chart.props';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
import { MapChart } from 'echarts/charts';
import { TooltipComponent, VisualMapComponent } from 'echarts/components';
import * as echarts from 'echarts/core';
import React, { createContext, useContext, useEffect, useMemo, useRef } from 'react';
import worldJson from '../../../data/world.json';
import type { GeoJSONMap } from './geo-chart.props';

export type { GeoChartProps, GeoChartSelectEvent, GeoDataItem, GeoJSONMap } from './geo-chart.props';

/** Optional context to provide mapJson without passing as prop (avoids Storybook serialization issues). */
export const GeoMapJsonContext = createContext<GeoJSONMap | null>(null);

echarts.use([
  TooltipComponent,
  VisualMapComponent,
  SkiaRenderer,
  MapChart,
]);

const DEFAULT_MAP_NAME = 'world';

const ChartComponent = ({
  data,
  mapJson: mapJsonProp,
  mapName = DEFAULT_MAP_NAME,
  width = 400,
  height = 300,
  showLegend = true,
  showHighlighter = true,
  tooltipFormatter,
  visualMapMin,
  visualMapMax,
  visualMapMode = 'continuous',
  piecewisePieces,
  onSelect,
  ...props
}: GeoChartProps) => {
  const { theme } = useChartTheme(props.theme, props.colors);
  const chartRef = useRef<any>(null);
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;
  const contextMapJson = useContext(GeoMapJsonContext);
  const mapJson = mapJsonProp ?? contextMapJson ?? (worldJson as any);

  useEffect(() => {
    if (mapJson?.type === 'FeatureCollection' && mapJson.features?.length) {
      try {
        echarts.registerMap(mapName, mapJson as any);
      } catch (e) {
        console.warn('GeoChart: registerMap failed', e);
      }
    }
  }, [mapName, mapJson]);

  const valueRange = useMemo(() => {
    if (!Array.isArray(data) || data.length === 0) return { min: 0, max: 100 };
    const values = data.map((d: GeoDataItem) => d.value).filter((v): v is number => typeof v === 'number');
    if (values.length === 0) return { min: 0, max: 100 };
    const min = visualMapMin ?? Math.min(...values);
    const max = visualMapMax ?? Math.max(...values);
    return { min: min === max ? min - 1 : min, max: min === max ? max + 1 : max };
  }, [data, visualMapMin, visualMapMax]);

  const option = useMemo(() => {
    if (!Array.isArray(data) || data.length === 0) {
      return { series: [{ type: 'map', map: mapName, data: [] }] };
    }

    const seriesColor = theme.series[0]?.color ?? '#3b82f6';

    const tooltipConfig: any = {
      trigger: 'item',
      formatter: tooltipFormatter
        ? (params: any) => {
            const p = params?.data ?? params;
            return tooltipFormatter({ name: p?.name ?? '', value: p?.value ?? 0 });
          }
        : undefined,
      backgroundColor: theme.tooltip.backgroundColor,
      borderColor: theme.tooltip.borderColor,
      borderWidth: theme.tooltip.borderWidth,
      borderRadius: theme.tooltip.borderRadius,
      padding: theme.tooltip.padding,
    };

    const visualMapConfig: any = showLegend
      ? visualMapMode === 'piecewise' && piecewisePieces?.length
        ? {
            type: 'piecewise',
            min: valueRange.min,
            max: valueRange.max,
            pieces: piecewisePieces.map((p) => ({
              min: p.min,
              max: p.max,
              label: p.label,
              color: p.color,
            })),
            textStyle: {
              color: theme.legend.textColor,
              fontSize: theme.legend.fontSize,
            },
            right: 10,
            bottom: 20,
            orient: 'vertical',
          }
        : {
            type: 'continuous',
            min: valueRange.min,
            max: valueRange.max,
            text: [String(valueRange.max), String(valueRange.min)],
            realtime: false,
            calculable: true,
            inRange: {
              color: [theme.series[1]?.color ?? '#93c5fd', seriesColor],
            },
            textStyle: {
              color: theme.legend.textColor,
              fontSize: theme.legend.fontSize,
            },
            right: 10,
            bottom: 20,
            orient: 'vertical',
          }
      : undefined;

    const seriesConfig: any = {
      type: 'map',
      map: mapName,
      roam: true,
      data: data,
      itemStyle: {
        ...(visualMapConfig ? {} : { areaColor: '#f0f0f0' }),
        borderColor: '#ccc',
        borderWidth: 1,
      },
      emphasis: showHighlighter
        ? {
            itemStyle: {
              areaColor: seriesColor,
              borderColor: '#333',
              borderWidth: 1,
            },
            label: {
              show: true,
              color: theme.legend.textColor,
            },
          }
        : { disabled: true },
    };

    const config: any = {
      tooltip: tooltipConfig,
      series: [seriesConfig],
    };
    if (visualMapConfig) config.visualMap = visualMapConfig;

    return config;
  }, [
    data,
    mapName,
    theme,
    valueRange,
    showLegend,
    showHighlighter,
    tooltipFormatter,
    visualMapMode,
    piecewisePieces,
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

        const handleMapClick = (params: {
          componentType?: string;
          seriesType?: string;
          name?: string;
          value?: number;
          data?: GeoDataItem | { name?: string; value?: number };
        }) => {
          const cb = onSelectRef.current;
          if (typeof cb !== 'function') return;
          if (params.componentType !== 'series') return;
          if (params.seriesType !== 'map') return;
          const rawName = params.name ?? params.data?.name;
          if (rawName == null || rawName === '') return;
          let value = 0;
          if (params.data && typeof params.data === 'object' && 'value' in params.data) {
            value = Number((params.data as GeoDataItem).value);
          } else if (typeof params.value === 'number') {
            value = params.value;
          }
          const event: GeoChartSelectEvent = {
            name: String(rawName),
            value,
          };
          cb(event);
        };

        chart.on('click', handleMapClick);
      } catch (error) {
        console.warn('GeoChart initialization error:', error);
      }
    }
    return () => {
      if (chart) {
        try {
          chart.dispose();
        } catch (error) {
          console.warn('GeoChart disposal error:', error);
        }
      }
    };
  }, [option, width, height]);

  return <SkiaChart ref={chartRef} useRNGH />;
};

const GeoChartComponent = withResponsiveContainer(withChartTheme(ChartComponent));
export const GeoChart = Object.assign(GeoChartComponent, {
  displayName: 'GeoChart',
});

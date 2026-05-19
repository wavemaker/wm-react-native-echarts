import React, { useCallback, useEffect, useState } from 'react';
import { ChartPointerTooltipOverlay } from '../../tooltip/chart-pointer-tooltip-overlay';
import type { HeatmapItemTooltipContext, HeatmapItemTooltipParams } from './heatmap-item-tooltip.types';
import { heatmapItemParamsFromShowTip } from './heatmap-item-tooltip.utils';

export interface UseHeatmapItemTooltipOptions {
  active: boolean;
  renderTooltip: (params: HeatmapItemTooltipParams) => React.ReactNode;
  contextRef: React.RefObject<HeatmapItemTooltipContext>;
  themeSeriesRef: React.RefObject<Array<{ color: string }>>;
  width: number;
  height: number;
}

export interface UseHeatmapItemTooltipResult {
  attachHeatmapItemTooltipListeners: (chart: {
    on: (ev: string, fn: (...args: any[]) => void) => void;
    off: (ev: string, fn: (...args: any[]) => void) => void;
  }) => () => void;
  renderHeatmapTooltipOverlay: () => React.ReactNode;
}

/** Heatmap cell tooltip as React Native UI (`trigger: 'item'`). */
export function useHeatmapItemTooltip(options: UseHeatmapItemTooltipOptions): UseHeatmapItemTooltipResult {
  const { active, renderTooltip, contextRef, themeSeriesRef, width, height } = options;
  const [params, setParams] = useState<HeatmapItemTooltipParams | null>(null);

  useEffect(() => {
    if (!active) setParams(null);
  }, [active]);

  const attachHeatmapItemTooltipListeners = useCallback(
    (chart: { on: (ev: string, fn: (...args: any[]) => void) => void; off: (ev: string, fn: (...args: any[]) => void) => void }) => {
      if (!active) return () => {};
      const onShowTip = (evt: any) => {
        const ctx = contextRef.current;
        if (!ctx?.data?.length) {
          setParams(null);
          return;
        }
        const next = heatmapItemParamsFromShowTip(chart, evt, ctx, themeSeriesRef.current ?? []);
        setParams(next);
      };
      const onHideTip = () => setParams(null);
      chart.on('showTip', onShowTip);
      chart.on('hideTip', onHideTip);
      return () => {
        chart.off('showTip', onShowTip);
        chart.off('hideTip', onHideTip);
      };
    },
    [active, contextRef, themeSeriesRef]
  );

  const renderHeatmapTooltipOverlay = useCallback((): React.ReactNode => {
    if (!active || params == null) return null;
    return (
      <ChartPointerTooltipOverlay
        width={width}
        height={height}
        pointerX={params.pointerX}
        pointerY={params.pointerY}
      >
        {renderTooltip(params)}
      </ChartPointerTooltipOverlay>
    );
  }, [active, renderTooltip, params, width, height]);

  return {
    attachHeatmapItemTooltipListeners,
    renderHeatmapTooltipOverlay,
  };
}

import React, { useCallback, useEffect, useState } from 'react';
import { ChartPointerTooltipOverlay } from '../../tooltip/chart-pointer-tooltip-overlay';
import type { ScatterItemTooltipContext, ScatterItemTooltipParams } from './scatter-item-tooltip.types';
import { scatterItemParamsFromShowTip } from './scatter-item-tooltip.utils';

export interface UseScatterItemTooltipOptions {
  active: boolean;
  renderTooltip: (params: ScatterItemTooltipParams) => React.ReactNode;
  contextRef: React.RefObject<ScatterItemTooltipContext>;
  themeSeriesRef: React.RefObject<Array<{ color: string }>>;
  width: number;
  height: number;
}

export interface UseScatterItemTooltipResult {
  attachScatterItemTooltipListeners: (chart: {
    on: (ev: string, fn: (...args: any[]) => void) => void;
    off: (ev: string, fn: (...args: any[]) => void) => void;
  }) => () => void;
  renderScatterTooltipOverlay: () => React.ReactNode;
}

/**
 * Scatter/bubble item tooltip as React Native UI (`trigger: 'item'`).
 * Listens to `showTip` / `hideTip` and maps with {@link scatterItemParamsFromShowTip}.
 */
export function useScatterItemTooltip(options: UseScatterItemTooltipOptions): UseScatterItemTooltipResult {
  const { active, renderTooltip, contextRef, themeSeriesRef, width, height } = options;
  const [params, setParams] = useState<ScatterItemTooltipParams | null>(null);

  useEffect(() => {
    if (!active) setParams(null);
  }, [active]);

  const attachScatterItemTooltipListeners = useCallback(
    (chart: { on: (ev: string, fn: (...args: any[]) => void) => void; off: (ev: string, fn: (...args: any[]) => void) => void }) => {
      if (!active) return () => {};
      const onShowTip = (evt: any) => {
        const ctx = contextRef.current;
        if (!ctx?.normalizedSeries?.length) {
          setParams(null);
          return;
        }
        const next = scatterItemParamsFromShowTip(chart, evt, ctx, themeSeriesRef.current ?? []);
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

  const renderScatterTooltipOverlay = useCallback((): React.ReactNode => {
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
    attachScatterItemTooltipListeners,
    renderScatterTooltipOverlay,
  };
}

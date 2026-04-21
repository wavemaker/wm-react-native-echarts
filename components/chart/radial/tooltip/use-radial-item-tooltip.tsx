import React, { useCallback, useEffect, useState } from 'react';
import { ChartPointerTooltipOverlay } from '../../tooltip/chart-pointer-tooltip-overlay';
import type { RadialItemTooltipContext, RadialItemTooltipParams } from './radial-item-tooltip.types';
import { radialItemParamsFromShowTip } from './radial-item-tooltip.utils';

export interface UseRadialItemTooltipOptions {
  active: boolean;
  renderTooltip: (params: RadialItemTooltipParams) => React.ReactNode;
  contextRef: React.RefObject<RadialItemTooltipContext>;
  themeSeriesRef: React.RefObject<Array<{ color: string }>>;
  width: number;
  height: number;
}

export interface UseRadialItemTooltipResult {
  attachRadialItemTooltipListeners: (chart: {
    on: (ev: string, fn: (...args: any[]) => void) => void;
    off: (ev: string, fn: (...args: any[]) => void) => void;
  }) => () => void;
  renderRadialTooltipOverlay: () => React.ReactNode;
}

/** Radial concentric ring tooltip as React Native UI (`trigger: 'item'`). */
export function useRadialItemTooltip(options: UseRadialItemTooltipOptions): UseRadialItemTooltipResult {
  const { active, renderTooltip, contextRef, themeSeriesRef, width, height } = options;
  const [params, setParams] = useState<RadialItemTooltipParams | null>(null);

  useEffect(() => {
    if (!active) setParams(null);
  }, [active]);

  const attachRadialItemTooltipListeners = useCallback(
    (chart: { on: (ev: string, fn: (...args: any[]) => void) => void; off: (ev: string, fn: (...args: any[]) => void) => void }) => {
      if (!active) return () => {};
      const onShowTip = (evt: any) => {
        const ctx = contextRef.current;
        if (!ctx?.normalizedSeries?.length) {
          setParams(null);
          return;
        }
        const next = radialItemParamsFromShowTip(chart, evt, ctx, themeSeriesRef.current ?? []);
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

  const renderRadialTooltipOverlay = useCallback((): React.ReactNode => {
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
    attachRadialItemTooltipListeners,
    renderRadialTooltipOverlay,
  };
}

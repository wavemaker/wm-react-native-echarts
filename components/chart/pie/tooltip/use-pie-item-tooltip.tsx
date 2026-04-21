import React, { useCallback, useEffect, useState } from 'react';
import { ChartPointerTooltipOverlay } from '../../tooltip/chart-pointer-tooltip-overlay';
import type { PieItemTooltipContext, PieItemTooltipParams } from './pie-item-tooltip.types';
import { pieItemParamsFromShowTip } from './pie-item-tooltip.utils';

export interface UsePieItemTooltipOptions {
  active: boolean;
  renderTooltip: (params: PieItemTooltipParams) => React.ReactNode;
  contextRef: React.RefObject<PieItemTooltipContext>;
  themeSeriesRef: React.RefObject<Array<{ color: string }>>;
  width: number;
  height: number;
}

export interface UsePieItemTooltipResult {
  attachPieItemTooltipListeners: (chart: {
    on: (ev: string, fn: (...args: any[]) => void) => void;
    off: (ev: string, fn: (...args: any[]) => void) => void;
  }) => () => void;
  renderPieTooltipOverlay: () => React.ReactNode;
}

/**
 * Pie / donut item tooltip as React Native UI (`trigger: 'item'`).
 */
export function usePieItemTooltip(options: UsePieItemTooltipOptions): UsePieItemTooltipResult {
  const { active, renderTooltip, contextRef, themeSeriesRef, width, height } = options;
  const [params, setParams] = useState<PieItemTooltipParams | null>(null);

  useEffect(() => {
    if (!active) setParams(null);
  }, [active]);

  const attachPieItemTooltipListeners = useCallback(
    (chart: { on: (ev: string, fn: (...args: any[]) => void) => void; off: (ev: string, fn: (...args: any[]) => void) => void }) => {
      if (!active) return () => {};
      const onShowTip = (evt: any) => {
        const ctx = contextRef.current;
        if (!ctx?.normalizedSeries?.length) {
          setParams(null);
          return;
        }
        const next = pieItemParamsFromShowTip(chart, evt, ctx, themeSeriesRef.current ?? []);
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

  const renderPieTooltipOverlay = useCallback((): React.ReactNode => {
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
    attachPieItemTooltipListeners,
    renderPieTooltipOverlay,
  };
}

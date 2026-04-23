import React, { useCallback, useEffect, useState } from 'react';
import { ChartPointerTooltipOverlay } from '../../tooltip/chart-pointer-tooltip-overlay';
import type { RadarItemTooltipContext, RadarItemTooltipParams } from './radar-item-tooltip.types';
import { radarItemParamsFromShowTip } from './radar-item-tooltip.utils';

export interface UseRadarItemTooltipOptions {
  active: boolean;
  renderTooltip: (params: RadarItemTooltipParams) => React.ReactNode;
  contextRef: React.RefObject<RadarItemTooltipContext>;
  themeSeriesRef: React.RefObject<Array<{ color: string }>>;
  width: number;
  height: number;
}

export interface UseRadarItemTooltipResult {
  attachRadarItemTooltipListeners: (chart: {
    on: (ev: string, fn: (...args: any[]) => void) => void;
    off: (ev: string, fn: (...args: any[]) => void) => void;
  }) => () => void;
  renderRadarTooltipOverlay: () => React.ReactNode;
}

/** Radar polygon item tooltip as React Native UI (`trigger: 'item'`). */
export function useRadarItemTooltip(options: UseRadarItemTooltipOptions): UseRadarItemTooltipResult {
  const { active, renderTooltip, contextRef, themeSeriesRef, width, height } = options;
  const [params, setParams] = useState<RadarItemTooltipParams | null>(null);

  useEffect(() => {
    if (!active) setParams(null);
  }, [active]);

  const attachRadarItemTooltipListeners = useCallback(
    (chart: { on: (ev: string, fn: (...args: any[]) => void) => void; off: (ev: string, fn: (...args: any[]) => void) => void }) => {
      if (!active) return () => {};
      const onShowTip = (evt: any) => {
        const ctx = contextRef.current;
        if (!ctx?.normalizedSeries?.length || !ctx.indicators?.length) {
          setParams(null);
          return;
        }
        const next = radarItemParamsFromShowTip(chart, evt, ctx, themeSeriesRef.current ?? []);
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

  const renderRadarTooltipOverlay = useCallback((): React.ReactNode => {
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
    attachRadarItemTooltipListeners,
    renderRadarTooltipOverlay,
  };
}

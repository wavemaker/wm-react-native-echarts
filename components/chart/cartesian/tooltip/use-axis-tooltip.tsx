import React, { useCallback, useEffect, useState } from 'react';
import { ChartPointerTooltipOverlay } from '../../tooltip/chart-pointer-tooltip-overlay';
import type { AxisTooltipContext, AxisTooltipParams } from './axis-tooltip.types';
import { axisTooltipParamsFromShowTipEvent } from './axis-tooltip.utils';

export interface AxisTooltipOverlayProps {
  width: number;
  height: number;
  params: AxisTooltipParams | null;
  children: (params: AxisTooltipParams) => React.ReactNode;
}

/** Presentational overlay; use with your own state if you do not use the hook. */
export function AxisTooltipOverlay({ width, height, params, children }: AxisTooltipOverlayProps) {
  if (params == null) return null;
  return (
    <ChartPointerTooltipOverlay
      width={width}
      height={height}
      pointerX={params.pointerX}
      pointerY={params.pointerY}
    >
      {children(params)}
    </ChartPointerTooltipOverlay>
  );
}

export interface UseAxisTooltipOptions {
  /**
   * When true, registers `showTip` / `hideTip` listeners and drives the overlay.
   * Typically matches whether the chart shows the RN tooltip overlay (see chart `tooltip` / `renderTooltip`).
   */
  active: boolean;
  /** Resolved renderer (include {@link createDefaultAxisTooltip} when the consumer does not pass one). */
  renderTooltip: (params: AxisTooltipParams) => React.ReactNode;
  contextRef: React.RefObject<AxisTooltipContext>;
  themeSeriesRef: React.RefObject<Array<{ color: string }>>;
  width: number;
  height: number;
}

export interface UseAxisTooltipResult {
  attachAxisTooltipListeners: (chart: {
    on: (ev: string, fn: (...args: any[]) => void) => void;
    off: (ev: string, fn: (...args: any[]) => void) => void;
  }) => () => void;
  renderAxisTooltipOverlay: () => React.ReactNode;
}

/**
 * Axis tooltip as React Native UI: listens to ECharts `showTip` / `hideTip`, maps payload with
 * {@link axisTooltipParamsFromShowTipEvent}, and positions an overlay near the pointer.
 */
export function useAxisTooltip(options: UseAxisTooltipOptions): UseAxisTooltipResult {
  const { active, renderTooltip, contextRef, themeSeriesRef, width, height } = options;
  const [tooltipParams, setTooltipParams] = useState<AxisTooltipParams | null>(null);

  useEffect(() => {
    if (!active) setTooltipParams(null);
  }, [active]);

  const attachAxisTooltipListeners = useCallback(
    (chart: { on: (ev: string, fn: (...args: any[]) => void) => void; off: (ev: string, fn: (...args: any[]) => void) => void }) => {
      if (!active) return () => {};
      const onShowTip = (evt: any) => {
        const ctx = contextRef.current;
        if (!ctx?.displaySeries?.length) {
          setTooltipParams(null);
          return;
        }
        const params = axisTooltipParamsFromShowTipEvent(evt, ctx, themeSeriesRef.current ?? []);
        setTooltipParams(params);
      };
      const onHideTip = () => setTooltipParams(null);
      chart.on('showTip', onShowTip);
      chart.on('hideTip', onHideTip);
      return () => {
        chart.off('showTip', onShowTip);
        chart.off('hideTip', onHideTip);
      };
    },
    [active, contextRef, themeSeriesRef]
  );

  const renderAxisTooltipOverlay = useCallback((): React.ReactNode => {
    if (!active || tooltipParams == null) return null;
    return (
      <AxisTooltipOverlay width={width} height={height} params={tooltipParams}>
        {renderTooltip}
      </AxisTooltipOverlay>
    );
  }, [active, renderTooltip, tooltipParams, width, height]);

  return {
    attachAxisTooltipListeners,
    renderAxisTooltipOverlay,
  };
}

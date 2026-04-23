import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChartPointerTooltipOverlay } from '../../tooltip/chart-pointer-tooltip-overlay';
import type { GeoItemTooltipContext, GeoItemTooltipParams } from './geo-item-tooltip.types';
import { geoItemParamsFromShowTip } from './geo-item-tooltip.utils';

export interface UseGeoItemTooltipOptions {
  active: boolean;
  renderTooltip: (params: GeoItemTooltipParams) => React.ReactNode;
  contextRef: React.RefObject<GeoItemTooltipContext>;
  themeSeriesRef: React.RefObject<Array<{ color: string }>>;
  width: number;
  height: number;
}

export interface UseGeoItemTooltipResult {
  attachGeoItemTooltipListeners: (chart: {
    on: (ev: string, fn: (...args: any[]) => void) => void;
    off: (ev: string, fn: (...args: any[]) => void) => void;
    getZr?: () => { on: (ev: string, fn: (...args: any[]) => void) => void; off: (ev: string, fn: (...args: any[]) => void) => void };
  }) => () => void;
  renderGeoTooltipOverlay: () => React.ReactNode;
}

/** Geo / map region tooltip as React Native UI (`trigger: 'item'`). */
export function useGeoItemTooltip(options: UseGeoItemTooltipOptions): UseGeoItemTooltipResult {
  const { active, renderTooltip, contextRef, themeSeriesRef, width, height } = options;
  const [params, setParams] = useState<GeoItemTooltipParams | null>(null);
  /** Chart pixel space; same basis as zrender hit-testing / map emphasis. */
  const lastZrPointerRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!active) setParams(null);
  }, [active]);

  const attachGeoItemTooltipListeners = useCallback(
    (chart: {
      on: (ev: string, fn: (...args: any[]) => void) => void;
      off: (ev: string, fn: (...args: any[]) => void) => void;
      getZr?: () => { on: (ev: string, fn: (...args: any[]) => void) => void; off: (ev: string, fn: (...args: any[]) => void) => void };
    }) => {
      if (!active) return () => {};
      const zr = typeof chart.getZr === 'function' ? chart.getZr() : null;
      const onZrMouseMove = (e: any) => {
        const x = e?.offsetX;
        const y = e?.offsetY;
        if (typeof x === 'number' && typeof y === 'number' && !Number.isNaN(x) && !Number.isNaN(y)) {
          lastZrPointerRef.current = { x, y };
        }
      };
      const onShowTip = (evt: any) => {
        const ctx = contextRef.current;
        if (!ctx?.regions?.length) {
          setParams(null);
          return;
        }
        const next = geoItemParamsFromShowTip(chart, evt, ctx, themeSeriesRef.current ?? [], lastZrPointerRef.current);
        setParams(next);
      };
      const onHideTip = () => setParams(null);
      chart.on('showTip', onShowTip);
      chart.on('hideTip', onHideTip);
      if (zr) {
        zr.on('mousemove', onZrMouseMove);
      }
      return () => {
        chart.off('showTip', onShowTip);
        chart.off('hideTip', onHideTip);
        if (zr) {
          zr.off('mousemove', onZrMouseMove);
        }
      };
    },
    [active, contextRef, themeSeriesRef]
  );

  const renderGeoTooltipOverlay = useCallback((): React.ReactNode => {
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
    attachGeoItemTooltipListeners,
    renderGeoTooltipOverlay,
  };
}

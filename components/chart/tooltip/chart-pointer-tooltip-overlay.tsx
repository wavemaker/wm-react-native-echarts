import React, { useLayoutEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';

const TOOLTIP_EDGE_PAD = 4;
const TOOLTIP_GAP_H = 12;
const TOOLTIP_GAP_V = 8;
const TOOLTIP_FLIP_HYSTERESIS = 28;

function tooltipPositionSticky(
  pointerX: number,
  pointerY: number,
  chartW: number,
  chartH: number,
  tooltipW: number,
  tooltipH: number,
  placeLeftRef: React.MutableRefObject<boolean>,
  placeAboveRef: React.MutableRefObject<boolean>
): { left: number; top: number } {
  let left = pointerX + TOOLTIP_GAP_H;
  let top = pointerY + TOOLTIP_GAP_V;

  if (tooltipW > 0) {
    let useLeft = placeLeftRef.current;
    if (!useLeft && pointerX + TOOLTIP_GAP_H + tooltipW > chartW - TOOLTIP_EDGE_PAD) {
      useLeft = true;
      placeLeftRef.current = true;
    }
    if (
      useLeft &&
      pointerX + TOOLTIP_GAP_H + tooltipW <= chartW - TOOLTIP_EDGE_PAD - TOOLTIP_FLIP_HYSTERESIS &&
      pointerX - TOOLTIP_GAP_H - tooltipW >= TOOLTIP_EDGE_PAD
    ) {
      useLeft = false;
      placeLeftRef.current = false;
    }
    if (useLeft && pointerX - TOOLTIP_GAP_H - tooltipW < TOOLTIP_EDGE_PAD) {
      useLeft = false;
      placeLeftRef.current = false;
    }
    left = useLeft ? pointerX - TOOLTIP_GAP_H - tooltipW : pointerX + TOOLTIP_GAP_H;
    const maxL = Math.max(TOOLTIP_EDGE_PAD, chartW - tooltipW - TOOLTIP_EDGE_PAD);
    left = Math.min(Math.max(TOOLTIP_EDGE_PAD, left), maxL);
  } else {
    left = Math.min(Math.max(TOOLTIP_EDGE_PAD, left), chartW - TOOLTIP_EDGE_PAD - 24);
  }

  if (tooltipH > 0) {
    let useAbove = placeAboveRef.current;
    if (!useAbove && pointerY + TOOLTIP_GAP_V + tooltipH > chartH - TOOLTIP_EDGE_PAD) {
      useAbove = true;
      placeAboveRef.current = true;
    }
    if (
      useAbove &&
      pointerY + TOOLTIP_GAP_V + tooltipH <= chartH - TOOLTIP_EDGE_PAD - TOOLTIP_FLIP_HYSTERESIS &&
      pointerY - TOOLTIP_GAP_V - tooltipH >= TOOLTIP_EDGE_PAD
    ) {
      useAbove = false;
      placeAboveRef.current = false;
    }
    if (useAbove && pointerY - TOOLTIP_GAP_V - tooltipH < TOOLTIP_EDGE_PAD) {
      useAbove = false;
      placeAboveRef.current = false;
    }
    top = useAbove ? pointerY - TOOLTIP_GAP_V - tooltipH : pointerY + TOOLTIP_GAP_V;
    const maxT = Math.max(TOOLTIP_EDGE_PAD, chartH - tooltipH - TOOLTIP_EDGE_PAD);
    top = Math.min(Math.max(TOOLTIP_EDGE_PAD, top), maxT);
  } else {
    top = Math.max(TOOLTIP_EDGE_PAD, top);
  }

  return { left, top };
}

export interface ChartPointerTooltipOverlayProps {
  width: number;
  height: number;
  pointerX: number;
  pointerY: number;
  children: React.ReactNode;
}

/** Positions tooltip UI near `(pointerX, pointerY)` in chart pixel space. */
export function ChartPointerTooltipOverlay({
  width,
  height,
  pointerX,
  pointerY,
  children,
}: ChartPointerTooltipOverlayProps) {
  const [measured, setMeasured] = useState<{ w: number; h: number } | null>(null);
  const placeLeftRef = useRef(false);
  const placeAboveRef = useRef(false);

  useLayoutEffect(() => {
    setMeasured(null);
    placeLeftRef.current = false;
    placeAboveRef.current = false;
  }, [width, height]);

  const tw = measured?.w ?? 0;
  const th = measured?.h ?? 0;

  const { left, top } = tooltipPositionSticky(
    pointerX,
    pointerY,
    width,
    height,
    tw,
    th,
    placeLeftRef,
    placeAboveRef
  );

  const maxBoxWidth = width - 2 * TOOLTIP_EDGE_PAD;

  return (
    <View pointerEvents="box-none" style={[StyleSheet.absoluteFillObject, { alignItems: 'flex-start' }]}>
      <View
        pointerEvents="none"
        onLayout={(e) => {
          const { width: w, height: h } = e.nativeEvent.layout;
          if (w <= 0 || h <= 0) return;
          setMeasured((prev) => (prev?.w === w && prev?.h === h ? prev : { w, h }));
        }}
        style={{
          position: 'absolute',
          left,
          top,
          maxWidth: maxBoxWidth,
          opacity: measured != null ? 1 : 0,
        }}
        collapsable={false}
      >
        {children}
      </View>
    </View>
  );
}

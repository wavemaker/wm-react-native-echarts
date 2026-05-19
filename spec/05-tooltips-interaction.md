# 05 — Tooltips and interaction

## Design decision

Tooltips are **React Native views** positioned over the Skia chart, not ECharts DOM/HTML tooltips. ECharts still runs tooltip component logic to emit pointer events; the visible UI is RN.

Shared primitive: `components/chart/tooltip/chart-pointer-tooltip-overlay.tsx` — positions children near `(pointerX, pointerY)` with flip logic when near edges.

## Tooltip types

| Kind | Charts | Hook / entry |
|------|--------|----------------|
| Axis | Area, Line, Column, Bar | `useAxisTooltip`, `createAxisTooltipPreset` |
| Item | Pie, Radar, Radial, Scatter, Geo | `usePieItemTooltip`, `useRadarItemTooltip`, etc. |

`ChartTooltipOption` = `'card' | 'compact' | 'kpi' | 'striped' | 'none'` (`components/chart/tooltip/index.ts`).

## Cartesian (axis) flow

1. Chart sets `tooltipOverlayActive = renderTooltip != null || tooltip !== 'none'`.
2. `renderTooltipFn` = custom `renderTooltip` OR preset from `createAxisTooltipPreset(tooltip)` OR `() => null` if `none`.
3. `useAxisTooltip({ active, renderTooltip, contextRef, themeSeriesRef, width, height })` returns:
   - `attachAxisTooltipListeners(chart)` — register on init.
   - `renderAxisTooltipOverlay()` — sibling to `SkiaChart` in JSX.
4. `axisTooltipContextRef` holds `displaySeries` + `categoryAxisData` updated when option is built — used to map `showTip` payload to rows.

`AxisTooltipParams` includes category value, `dataIndex`, per-series rows (name, value, color), and pointer coordinates in chart space.

Utils: `axisTooltipParamsFromShowTipEvent`, `axisTooltipShowContentFlag`.

## Item-based flow

Each chart family has:

- `*-item-tooltip.types.ts` — context + params
- `*-item-tooltip.utils.ts` — map ECharts event → params
- `*-item-tooltip-presets.tsx` — `create*TooltipPreset`
- `use-*-item-tooltip.tsx` — state + listeners
- `default-*-tooltip.tsx` — default formatter

Pattern matches axis tooltips but listens to item-level `showTip` for a single series/slice.

## Presets vs custom

| Approach | When |
|----------|------|
| `tooltip="card"` | Default product styling from theme |
| `tooltip="none"` | Hide overlay; ECharts emphasis may still run |
| `renderTooltip={(p) => <MyView />}` | Full control; replaces preset body |

If both `renderTooltip` and `tooltip` are set, **`renderTooltip` wins** for body content; `tooltip` still affects whether overlay is active unless only `renderTooltip` is provided (see per-chart `tooltipOverlayActive` logic).

## Pointer and gestures

`SkiaChart` is rendered with `useRNGH` prop so React Native Gesture Handler integrates with touch tooltips.

## onSelect (tap)

Registered in chart `useEffect` after `echarts.init`:

- Filter `params.componentType === 'series'`.
- Resolve `seriesIndex`, `dataIndex` against normalized series in a ref context.
- Build typed event and invoke `onSelectRef.current(event)`.

Use refs for callbacks to keep effect dependencies on `option` / size only.

## Legend interaction

Legend is pure ECharts `legend` config — toggling series visibility is handled by ECharts. Layout margins adjusted via `mergeCartesianGridForLegend`.

## Geo tooltips

Geo charts use item tooltip presets with region name/value from map series. May depend on `GeoMapJsonContext` for custom maps.

## Debugging tooltips

1. Confirm `tooltip !== 'none'` or `renderTooltip` is set.
2. Confirm `tooltipOverlayActive` true in chart source.
3. In Storybook, use interaction stories under `stories/<chart>/interaction/`.
4. On device, verify `useRNGH` and chart dimensions non-zero (container laid out).

## Files to modify for tooltip changes

| Change | Location |
|--------|----------|
| New preset layout | `*-tooltip-presets.tsx` or `axis-tooltip-presets.tsx` |
| Shared chrome | `chart-theme.context.tsx` → `tooltip` styles |
| Positioning | `chart-pointer-tooltip-overlay.tsx` |
| Event mapping | `*-tooltip.utils.ts` |

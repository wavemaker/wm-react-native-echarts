# 02 — Architecture

## Rendering pipeline

Every chart follows the same core loop:

1. **Register** only the ECharts modules the chart needs (`echarts.use([...])` at module top).
2. **Normalize** `data` prop into series-friendly structures (`useMemo`).
3. **Build** an ECharts `option` object from props + `useChartTheme()`.
4. **Init** on layout: `echarts.init(ref, 'light', { width, height })`, `setOption`, attach listeners.
5. **Render** `<SkiaChart ref={chartRef} useRNGH />` inside a sized `View`.
6. **Cleanup** on unmount: `chart.dispose()`, detach tooltip listeners.

Example reference: `components/chart/area/area-chart.tsx` (canonical Cartesian implementation).

## Layered wrappers (outside → in)

```
withResponsiveContainer( withChartTheme( ChartComponent ) )
```

| Layer | File | Role |
|-------|------|------|
| `withResponsiveContainer` | `chart-container.tsx` | Measures layout; passes `width`/`height`; shows “no data” when `data` is empty |
| `withChartTheme` | `chart-theme.context.tsx` | Wraps `ChartThemeProvider` so `theme` prop works per chart |
| `ChartComponent` | `*-chart.tsx` | ECharts option + Skia + overlays |

`ChartContainer` uses `onLayout` to resolve percentage vs numeric dimensions before rendering the inner chart.

## Props type hierarchy

Defined under `components/chart/props/`:

```
CommonChartProps          (width, height, theme, colors)
    └── CartesianChartProps   (axes, grid, legend, tooltip, onSelect, …)
            └── *ChartProps per chart (area, bar, pie, …)
```

Inheritance in **components** (not only types):

- `LineChart` → delegates to `AreaChart` with zero fill.
- `BubbleChart` → scatter-based.
- Cartesian charts share axis helpers in `axis.ts` (`valueAxisBoundsFromProps`, `xAxisBoundsFromProps`, `getAxis`).

## Theme integration in options

`useChartTheme(theme?, colors?)` merges:

1. Context theme from nearest `ChartThemeProvider` (if any).
2. Per-chart `theme` partial override.
3. Optional `colors[]` replacing `theme.series[n].color`.

Chart `useMemo` blocks read `theme.axis`, `theme.grid`, `theme.series`, `theme.legend`, `theme.tooltip` when building axis/series/legend styles.

## Legend and grid layout

`legend/echarts-legend-layout.ts` provides:

- `echartsLegendLayoutFragment(position)` — legend orient/position.
- `mergeCartesianGridForLegend(grid, position, showLegend, hasNamedSeries)` — shrinks `grid` margins so legend does not overlap plot.

## ECharts modular imports

Charts import from `echarts/core` and register only needed pieces, e.g. area/line:

```ts
import { LineChart } from 'echarts/charts';
import { GridComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import { SkiaChart, SkiaRenderer } from '@wuba/react-native-echarts';
echarts.use([TooltipComponent, GridComponent, LegendComponent, SkiaRenderer, LineChart]);
```

Adding a new chart type requires choosing the correct ECharts chart/component imports and registering them once per file.

## React Native tooltips (architectural split)

ECharts’ built-in HTML tooltip is **not** used for final UI. Instead:

- **Cartesian** (area, line, column, bar): `useAxisTooltip` listens to `showTip`/`hideTip`, renders RN overlay via `ChartPointerTooltipOverlay`.
- **Item-based** (pie, radar, radial, scatter, geo): per-chart `use*ItemTooltip` hooks with the same overlay primitive.

Preset bodies: `card`, `compact`, `kpi`, `striped`, or `none`. Custom: `renderTooltip` callback.

## Selection events

`chart.on('click', …)` maps ECharts params to typed events (`CartesianChartSelectEvent`, `PieChartSelectEvent`, etc.) and calls `onSelect` from a ref (`onSelectRef.current`) to avoid stale closures.

## WMX thin wrappers

`wmx/chart/<type>/index.tsx` typically:

```ts
import { LineChart } from '@wavemaker/react-native-echarts/line';
export default LineChart;
```

`wmx.json` beside it describes Studio properties/events. `npm run generate:wmx` zips each widget for distribution.

## Key files to read first

| Task | Start here |
|------|------------|
| New Cartesian chart | `area/area-chart.tsx`, `props/cartesian.ts` |
| New polar chart | `pie/pie-chart.tsx` or `radial/radial-chart.tsx` |
| Theme change | `chart-theme.context.tsx` |
| Tooltip behavior | `cartesian/tooltip/`, `tooltip/chart-pointer-tooltip-overlay.tsx` |
| Responsive sizing | `chart-container.tsx` |

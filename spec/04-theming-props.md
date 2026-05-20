# 04 — Theming and props

## CommonChartProps

File: `components/chart/props/common.ts`

| Prop | Type | Purpose |
|------|------|---------|
| `width` | `number` | Chart width in px (inner chart; container may also set) |
| `height` | `number` | Chart height in px |
| `theme` | `Partial<ChartTheme>` | Merged over context/default theme |
| `colors` | `string[]` | Overrides `theme.series[i].color` in order |

Defaults in docs often cite width `220`, height `350`; `ChartContainer` default height is `350`.

## CartesianChartProps

File: `components/chart/props/cartesian.ts` — extends `CommonChartProps`.

**Axes & scale**

- `boundaryGap` — gap at axis ends (default varies by chart).
- `minX`, `maxX`, `intervalX` — value/category X bounds when applicable.
- `minY`, `maxY`, `intervalY` — value axis bounds.
- `showXAxis`, `showYAxis`, `showXAxisTicks`, `showYAxisTicks`.
- `showXAxisSplitLines`, `showYAxisSplitLines` — grid lines.
- `xAxisLabel`, `yAxisLabel` — axis titles.
- `xAxisTickLabelFormatter`, `yAxisTickLabelFormatter`.

**Layout**

- `grid` — `{ left, right, top, bottom }` as `%` string or number.

**Legend**

- `showLegend` (default `true`).
- `legendPosition`: `'top' | 'bottom' | 'left' | 'right'`.

**Interaction**

- `showHighlighter` — ECharts emphasis while pointer near series.
- `tooltip` — `'card' | 'compact' | 'kpi' | 'striped' | 'none'` (axis charts).
- `renderTooltip` — `(params: AxisTooltipParams) => ReactNode`.
- `onSelect` — `(event: CartesianChartSelectEvent) => void`.

`CartesianChartSelectEvent` includes `seriesIndex`, `dataIndex`, `seriesName`, `x`, `y`, optional `z`, optional `ohlc` for candlestick.

## ChartTheme structure

File: `components/chart/chart-theme.context.tsx`

```ts
ChartTheme = {
  axis: { x, y, r: AxisStyle },
  grid: { x, y, r: GridLineStyle },
  legend: LegendStyle,
  tooltip: TooltipStyle,
  series: Series[],  // cycles for multi-series color
}
```

- **`axis`**: line/label/tick/splitLine colors and widths for x, y, and radial (radar) axes.
- **`grid`**: grid line color/width per orientation.
- **`legend`**: text color, font size, background.
- **`tooltip`**: RN overlay chrome (background, borders, padding) — used by preset renderers.
- **`series`**: per-series defaults (`color`, `lineWidth`, `borderRadius`, borders).

## Built-in themes

- `LIGHT_THEME` — default palette (purple/teal/gold/orange/red series).
- `DARK_THEME` — `extendChartTheme(LIGHT_THEME, { ... })` for dark backgrounds.

## API helpers

| Function | Use |
|----------|-----|
| `extendChartTheme(...partials)` | Merge partials without React context |
| `mergeThemes` (internal) | Deep merge nested objects; arrays replaced |
| `ChartThemeProvider` | Wrap subtrees; nested providers merge |
| `withChartTheme(Component)` | HOC injecting provider from `theme` prop |
| `useChartTheme(theme?, colors?)` | Hook inside chart implementations |

## How charts apply theme

Inside `useMemo` for `option`:

- Axis `axisLine`, `axisLabel`, `splitLine` styles from `theme.axis.x` / `.y`.
- Series `itemStyle`, `lineStyle`, `areaStyle` from `theme.series[index % length]`.
- Legend `textStyle` from `theme.legend`.

When `props.colors` is set, `useChartTheme` patches series colors before option build.

## Per-chart props files

Each `*-chart.props.ts` extends the appropriate base and adds chart-specific fields. **Source of truth for AI/API docs** — often mirrored in `wmx.json` `props` map.

Examples:

- **Area/Line**: `type`, `step`, `stack`, `stackNormalize`, `symbol`, `symbolSize`, `areaOpacity`, `areaFill`.
- **Pie**: radii, label layout, donut, concentric rings.
- **Gauge**: min/max, splits, pointer styles (per variant file).

When WMX and TS props diverge, prefer fixing `wmx.json` to match `*.props.ts` JSDoc.

## Responsive container props

Applied on the outer wrapped export (not always in `*ChartProps`):

- `width`, `height` — string `%` or number (container).
- `noDataText` — empty state message.
- `style` — container style.

`withResponsiveContainer` picks a data field from `dataName` args or `props.data` to decide if chart renders.

## Type exports for consumers

Charts re-export prop types and select-event types from their `index.ts` or chart file for convenience. Import paths after publish match compiled structure under `dist/npm-packages/charts/`.

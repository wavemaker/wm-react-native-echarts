# 03 — Chart components

Source root: `components/chart/`. Each chart folder usually contains:

- `*-chart.tsx` — implementation
- `*-chart.props.ts` — public TypeScript API
- `index.ts` — exports
- `tooltip/` — item tooltip hooks (non-Cartesian or scatter)

## Export map (`components/chart/index.ts`)

| Export | Path | Notes |
|--------|------|-------|
| `AreaChart` | `area/` | Base for filled line/area series |
| `LineChart` | `line/` | `AreaChart` with transparent fill |
| `ColumnChart` | `column/` | Vertical bars |
| `BarChart` | `bar/` | Horizontal bars |
| `ScatterChart` | `scatter/` | XY scatter, item tooltips |
| `BubbleChart` | `bubble/` | Size dimension (z) |
| `CandlestickChart` | `candlestick/` | OHLC + optional volume |
| `PieChart` | `pie/` | Donut, concentric rings |
| `RadialChart` | `radial/` | Polar bar / nightingale rose |
| `RadarChart` | `radar/` | Spider chart |
| `SimpleGauge`, `DigitalGauge`, `SpeedometerGauge`, `RadialGauge` | `gauge/` | Separate components |
| `GeoChart`, `USChart`, `WorldChart` | `geo/` | Maps + bundled GeoJSON |
| `ChartThemeProvider`, `useChartTheme`, `LIGHT_THEME`, `DARK_THEME` | `chart-theme.context.tsx` | |
| `withResponsiveContainer` | `chart-container.tsx` | |
| Cartesian tooltip helpers | `cartesian/tooltip/` | |
| `ChartTooltipOption` presets | `tooltip/` | |

## Cartesian charts — shared behavior

Implement `CartesianChartProps` unless noted. Common features:

- `boundaryGap`, axis visibility toggles, `minX`/`maxX`/`minY`/`maxY`/`interval*`
- `stack`, `stackNormalize` (area/line/column)
- `showLegend`, `legendPosition`
- `tooltip` preset or `renderTooltip`
- `onSelect` → `CartesianChartSelectEvent`

| Chart | Default highlighter | Special props |
|-------|---------------------|---------------|
| Area | on | `areaOpacity`, `areaFill` (`gradient` / color) |
| Line | on | `type`: `default` \| `smooth` \| `step`, `symbol` |
| Column | off | bar width, item style |
| Bar | off | horizontal category/value axes swapped |
| Scatter | — | item tooltip, symbol per point |
| Bubble | — | z/size from data |
| Candlestick | — | `ohlc` on select event |

## Pie and radial

**PieChart** (`pie-chart.props.ts`):

- Data: `PieDataItem[]` or `PieRingData[]` for concentric.
- `isConcentricPieData()` type guard.
- Props: radii, donut, labels, `tooltip`, `onSelect`, `renderTooltip`.

**RadialChart**: polar layout, similar legend/tooltip patterns to pie.

**RadarChart**: indicator axes, multiple series, symbol options.

## Gauges (`gauge/`)

Shared `BaseGaugeProps` in `gauge.types.ts`. Four separate components — not one enum-driven gauge:

- `SimpleGauge` — basic arc
- `DigitalGauge` — numeric readout style
- `SpeedometerGauge` — dial
- `RadialGauge` — circular scale

Each registers gauge-related ECharts modules independently.

## Geo (`geo/`)

- `GeoChart` — generic; may require `GeoMapJsonContext` for custom map JSON.
- `USChart` / `WorldChart` — presets using `us-states.json` / `world.json`.
- Tooltips: `useGeoItemTooltip`, geo-specific presets.
- Stories may use `d3-geo` in devDependencies for projections in docs only.

## WMX mirror (`wmx/chart/`)

One folder per Studio widget, e.g. `wmx/chart/line/`:

- `wmx.json` — Studio schema (props, events, marketplace metadata)
- `index.tsx` — re-exports built package symbol
- `icon.svg` — palette icon

Gauge variants live under `wmx/chart/gauge/<variant>/`. Run `npm run generate:wmx` after changing `wmx.json` or icons.

## Adding a new chart (checklist)

1. Add `components/chart/<name>/` with props, chart TSX, `index.ts`.
2. Extend `components/chart/index.ts` barrel.
3. Register ECharts modules minimally.
4. Apply `withResponsiveContainer(withChartTheme(...))`.
5. Add `stories/<name>/` with `meta.tsx`, `*.stories.tsx`, `*.args.ts`.
6. Add `wmx/chart/<name>/wmx.json` + thin `index.tsx` if Studio needs it.
7. Run `npm run lint`, `npm run storybook` (spot-check), `npm run build:lib` before release.

## File naming conventions

- React components: `PascalCase` (`AreaChart`).
- Props files: `*-chart.props.ts`.
- Hooks: `use-*-tooltip.tsx`.
- Display names set via `Object.assign(Component, { displayName: '...' })` for debugging.

# Main Concepts

## Stack

| Layer | Role |
| --- | --- |
| **ECharts** | Option model, layout, and series logic. |
| **@wuba/react-native-echarts** | Bridges ECharts to React Native. |
| **@shopify/react-native-skia** | GPU-friendly drawing (used by gauges and related visuals). |
| **react-native-svg** | Vector output for chart views. |

## Declarative props, not raw `option`

Unlike using a single giant ECharts `option` object in JSX, this package exposes **typed React components** (`LineChart`, `PieChart`, …). Each component maps props to an internal ECharts configuration. You still get ECharts semantics (series types, stacking, tooltips) without assembling options by hand for the common cases.

## Data shapes

- **Cartesian** (`AreaChart`, `LineChart`, `ColumnChart`, `BarChart`): `number[]`, `[x, y][]`, or multiple series as `{ name?, data }[]` — detailed under each chart doc (**Area**, **Line**, **Column**, **Bar**).
- **Scatter**: `number[][]` or `{ name, data: number[][] }[]`.
- **Bubble**: `[x, y, size][]` or multiple named series of the same shape.
- **Pie / donut**: `{ name, value }[]` or concentric rings `{ name?, radius, data }[]` (use `isConcentricPieData`).
- **Radar**: `indicators: { name, max? }[]` plus `data` as `number[]` or `{ name?, value: number[] }[]`.
- **Radial**: `{ label?, value }[]` where `value` is fill **0–100** per ring.
- **Candlestick**: `[open, close, low, high][]` per period.
- **Geo**: `{ name, value }[]` where `name` matches GeoJSON feature names.

## Tooltips (`tooltip` and `renderTooltip`)

Interactive charts expose a string prop **`tooltip`** that selects a **built-in React Native overlay** next to the pointer: `card` (default), `compact`, `kpi`, `striped`, or `none` to hide that overlay. This is separate from ECharts’ in-canvas tooltip styling under the chart **`theme`**.

Optional **`renderTooltip`** is a function **`(params) => ReactNode`** that **replaces** the body produced by the `tooltip` preset when provided. Params depend on the chart: **axis** charts (area, line, column, bar) pass the category value and one row per series plus pointer coordinates; **item** charts (scatter, bubble, pie, geo, radar, radial) pass slice/region/series-specific fields and the pointer. See each chart’s Storybook **Tooltip** stories and TypeScript prop types for the exact payload.

## Theming

Charts read from **`ChartThemeProvider`** / **`useChartTheme`**. Defaults are **`LIGHT_THEME`** and **`DARK_THEME`**. Per-chart overrides use the **`theme`** and **`colors`** props (partial theme + series palette). See **Theming → Overview** and **Theming → Examples** in this Storybook, and the **Theming** section in the project README.

## Maps and `GeoMapJsonContext`

**`GeoChart`** accepts `mapJson` + `mapName`. **`USChart`** and **`WorldChart`** bundle maps and set registration for you. You can also provide `mapJson` from **`GeoMapJsonContext`** so children do not repeat the GeoJSON prop.

# Theme reference

The **`ChartTheme`** type describes every visual token charts read when building ECharts options and React Native tooltip overlays. Use this page as a field-by-field reference; for how to apply themes in your app, see **Theming → Overview** and the live demos under **Theming → Examples**.

## Type overview

```ts
type ChartTheme = {
  axis: { x: AxisStyle; y: AxisStyle; r: AxisStyle };
  grid: { x: GridLineStyle; y: GridLineStyle; r: GridLineStyle };
  legend: LegendStyle;
  tooltip: TooltipStyle;
  series: Series[];
};
```

Pass a **partial** theme anywhere the API accepts `theme`; nested objects merge deeply and **arrays (such as `series`) replace entirely** when overridden.

---

## `axis` — axis lines, labels, ticks, and split lines

Cartesian charts (`AreaChart`, `LineChart`, `ColumnChart`, `BarChart`, `ScatterChart`, `BubbleChart`, `HeatmapChart`, `CandlestickChart`) use **`axis.x`** and **`axis.y`**. Radar, radial gauges, and digital gauges use **`axis.r`**.

Each of `x`, `y`, and `r` is an **`AxisStyle`**:

| Property | Type | Description | Used for |
| --- | --- | --- | --- |
| **`lineColor`** | `string` | Stroke color of the main axis line. | ECharts `axisLine.lineStyle.color` when the axis line is shown. |
| **`lineWidth`** | `number` | Width of the main axis line in pixels. | ECharts `axisLine.lineStyle.width`. |
| **`labelColor`** | `string` | Intended color for the axis **title** (the `xAxisLabel` / `yAxisLabel` prop). | Reserved on the type; cartesian charts currently style axis titles with **`tickLabelColor`**. Gauges read **`tickLabelColor`** from `axis.r` for scale labels. |
| **`tickColor`** | `string` | Color of tick marks along the axis. | ECharts `axisTick.lineStyle.color`. |
| **`tickWidth`** | `number` | Width of tick marks in pixels. | ECharts `axisTick.lineStyle.width`. |
| **`tickLabelColor`** | `string` | Color of tick labels and, in practice, axis title text. | ECharts `axisLabel.color` and `nameTextStyle.color` on cartesian axes; radar `axisName.color`; gauge scale labels. |
| **`splitLineColor`** | `string` | Color of grid lines drawn **parallel** to this axis (ECharts split lines). | ECharts `splitLine.lineStyle.color` on cartesian charts when split lines are enabled. |
| **`splitLineWidth`** | `number` | Width of those split lines in pixels. | ECharts `splitLine.lineStyle.width`. |

### Defaults (`LIGHT_THEME`)

| Key | `lineColor` | `lineWidth` | `labelColor` | `tickColor` | `tickWidth` | `tickLabelColor` | `splitLineColor` | `splitLineWidth` |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **`axis.x`** | `#AAAAAA` | `1` | `#666666` | `#DDDDDD` | `1` | `#666666` | `#DDDDDD` | `1` |
| **`axis.y`** | `#AAAAAA` | `1` | `#666666` | `#DDDDDD` | `1` | `#666666` | `#DDDDDD` | `1` |
| **`axis.r`** | `#DDDDDD` | `1` | `#666666` | `#DDDDDD` | `1` | `#666666` | `#DDDDDD` | `1` |

**`DARK_THEME`** overrides `axis.x`, `axis.y`, and `axis.r` with light strokes and labels (`#FFFFFF`) while keeping split-line colors at `#DDDDDD`.

---

## `grid` — standalone grid line styling

Each of `x`, `y`, and `r` is a **`GridLineStyle`**:

| Property | Type | Description | Used for |
| --- | --- | --- | --- |
| **`lineColor`** | `string` | Color of grid / split-area lines for this orientation. | **`grid.r`** → radar chart polygon split lines. Cartesian charts use **`axis.*.splitLineColor`** instead of `grid.x` / `grid.y`. |
| **`lineWidth`** | `number` | Width of those lines in pixels. | Same as above. |

### Defaults (`LIGHT_THEME`)

| Key | `lineColor` | `lineWidth` |
| --- | --- | --- |
| **`grid.x`** | `#AAAAAA` | `1` |
| **`grid.y`** | `#AAAAAA` | `1` |
| **`grid.r`** | `#EEEEEE` | `1` |

**`DARK_THEME`** sets `grid.x`, `grid.y`, and `grid.r` `lineColor` to `#FFFFFF`.

---

## `legend` — legend text and background

Applied when `showLegend` is true on charts that support a legend.

| Property | Type | Description | Used for |
| --- | --- | --- | --- |
| **`textColor`** | `string` | Color of legend item labels. | ECharts `legend.textStyle.color`. |
| **`fontSize`** | `number` | Font size of legend labels in pixels. | ECharts `legend.textStyle.fontSize`. |
| **`backgroundColor`** | `string` | Legend panel background. Use a transparent hex such as `#00000000` for no fill. | ECharts `legend.backgroundColor`. |

### Defaults

| Theme | `textColor` | `fontSize` | `backgroundColor` |
| --- | --- | --- | --- |
| **`LIGHT_THEME`** | `#666666` | `12` | `#00000000` |
| **`DARK_THEME`** | `#FFFFFF` | `12` | `#00000000` |

---

## `tooltip` — React Native overlay chrome

These tokens style the **built-in tooltip presets** (`tooltip="card"`, `"compact"`, `"kpi"`, `"striped"`) and custom **`renderTooltip`** shells that read from `useChartTheme()`. They do **not** configure ECharts’ in-canvas HTML tooltip.

| Property | Type | Description | Used for |
| --- | --- | --- | --- |
| **`backgroundColor`** | `string` | Tooltip panel fill. | Card / compact / KPI / striped shell backgrounds and alternating row fills. |
| **`labelColor`** | `string` | Secondary text: series names, axis category titles, field labels (`x:`, `value:`, etc.). | Label and caption text across all preset layouts. |
| **`valueColor`** | `string` | Primary emphasized values (numbers, metrics). | Value text and KPI metric display. |
| **`borderColor`** | `string` | Border and divider strokes on the tooltip surface. | Outer border, footer rules, striped row separators. |
| **`borderWidth`** | `number` | Border width in pixels. | Tooltip shell `borderWidth`. |
| **`borderRadius`** | `number` | Corner radius in pixels (presets enforce a minimum of ~8px). | Rounded corners on tooltip containers. |
| **`padding`** | `number` | Base padding unit in pixels; presets scale it (~`padding × 5`) for horizontal and vertical inset. | Internal spacing inside tooltip shells. |

### Defaults

| Theme | `backgroundColor` | `labelColor` | `valueColor` | `borderColor` | `borderWidth` | `borderRadius` | `padding` |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **`LIGHT_THEME`** | `#FFFFFF` | `#AAAAAA` | `#000000` | `#DDDDDD` | `1` | `5` | `2` |
| **`DARK_THEME`** | `#151718` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `1` | `5` | `2` |

---

## `series` — palette and per-series drawing defaults

`series` is an **ordered array**. Charts pick entry **`index % series.length`**, so the palette cycles when you have more series than entries. Override the whole array to redefine the palette; override individual entries partially when merging is not enough (arrays are replaced, not merged item-by-item).

Each entry is a **`Series`** object:

| Property | Type | Required | Description | Used for |
| --- | --- | --- | --- | --- |
| **`color`** | `string` | yes | Primary fill / stroke color for the series. | Line, area, column, bar, scatter, bubble, pie slice, radar, radial, geo, heatmap, and candlestick auxiliary lines. Overridable per chart with the **`colors`** prop. |
| **`lineWidth`** | `number` | no | Line thickness in pixels. | **`AreaChart`**, **`LineChart`**, **`RadarChart`** line strokes. Falls back to the first series entry, then `2`. |
| **`borderRadius`** | `number[]` | no | Corner radii `[top-left, top-right, bottom-right, bottom-left]` for bar-like shapes. | Defined on the default theme; bar/column charts use the **`cornerRadius`** prop instead today. |
| **`borderColor`** | `string` | no | Border color around series items. | Defined on the type for future / custom theming; not applied by built-in chart implementations. |
| **`borderWidth`** | `number` | no | Border width in pixels. | Same as **`borderColor`**. |
| **`borderType`** | `'solid' \| 'dashed' \| 'dotted'` | no | Border dash style. | Same as **`borderColor`**. |

### Default palette (`LIGHT_THEME`)

| Index | `color` | `lineWidth` | `borderRadius` |
| --- | --- | --- | --- |
| 0 | `#8c62f2` | `2` | `[4, 4, 4, 4]` |
| 1 | `#4ad0e0` | `2` | `[4, 4, 4, 4]` |
| 2 | `#ffc635` | `2` | `[4, 4, 4, 4]` |
| 3 | `#ff5722` | `2` | `[4, 4, 4, 4]` |
| 4 | `#f44336` | `2` | `[4, 4, 4, 4]` |

**`DARK_THEME`** keeps the same **`series`** palette as **`LIGHT_THEME`**.

### Chart-specific `series` usage

| Chart | What it reads from `series` |
| --- | --- |
| Area, Line | `color`, `lineWidth` |
| Column, Bar | `color` |
| Scatter, Bubble | `color` |
| Pie, Radial | all `color` values (full palette) |
| Radar | `color`, `lineWidth` |
| Geo, Heatmap | `[0].color` as high/end color, `[1].color` as low/start color |
| Candlestick | `[2]`, `[3]`, `[4]` colors for MA / auxiliary lines |

---

## Built-in themes

| Export | Description |
| --- | --- |
| **`LIGHT_THEME`** | Default when no provider is present. Light surfaces, gray axes, dark tick labels, light tooltip. |
| **`DARK_THEME`** | `extendChartTheme(LIGHT_THEME, { … })` — light axis and grid strokes, light legend text, dark tooltip surface. Same series palette as light. |

## Helpers and merge rules

| API | Purpose |
| --- | --- |
| **`ChartThemeProvider`** | Wrap a subtree; merges `theme` prop over parent theme or **`LIGHT_THEME`**. |
| **`useChartTheme(theme?, colors?)`** | Read merged theme inside components; optional partial `theme` and `colors` override. |
| **`extendChartTheme(...partials)`** | Build a reusable full theme object without React context. |
| **`withChartTheme(Component)`** | HOC that wraps a component in **`ChartThemeProvider`**. |

**Merge behavior:** nested objects (`axis.x`, `tooltip`, `legend`, …) deep-merge. **Arrays such as `series` are replaced** when the override includes them — to change one series color without losing others, spread the parent array or pass a complete new palette.

## Per-chart overrides

Every chart accepts:

- **`theme`** — `Partial<ChartTheme>` merged over context (or **`LIGHT_THEME`**).
- **`colors`** — `string[]` that overrides **`series[i].color`** in order for that chart only.

Use **`theme`** for structured changes (axes, tooltip, full series entries). Use **`colors`** for a quick one-off palette swap.

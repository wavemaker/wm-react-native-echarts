# Theming

Charts read a **chart theme** object that controls axes, grid lines, tooltips, legends, and the default **series palette** (colors, line widths, bar radii, and so on). You can rely on defaults, set a theme for a whole subtree with **`ChartThemeProvider`**, read or tweak the active theme with **`useChartTheme`**, or override a single chart with **`theme`** and **`colors`** props.

## What the theme covers

| Area | Role |
| --- | --- |
| **`axis`** (`x`, `y`, `r`) | Axis lines, labels, ticks, split lines |
| **`grid`** | Grid line color and width |
| **`tooltip`** | Background, text, border, radius, padding |
| **`legend`** | Text color, font size, background |
| **`series`** | Ordered styles used for each data series (color, `lineWidth`, bar `borderRadius`, etc.) |

## Built-in themes

- **`LIGHT_THEME`** — light axes and grid, dark tick labels, light tooltip, default purple / teal / yellow / orange / red series palette.
- **`DARK_THEME`** — built with **`extendChartTheme(LIGHT_THEME, { … })`**: lighter axis and grid strokes, light legend text, dark tooltip surface.

If nothing wraps your chart, components fall back to **`LIGHT_THEME`** via **`useChartTheme`**.

## Ways to apply a theme

### 1. Do nothing (defaults)

Use charts without a provider; they use **`LIGHT_THEME`**. Good for quick demos and Storybook.

### 2. `ChartThemeProvider` (app or subtree)

Wrap any React subtree and pass **`theme={…}`** (full **`DARK_THEME`** or a **partial** merge on top of the parent theme or **`LIGHT_THEME`**):

```tsx
import { ChartThemeProvider, DARK_THEME } from '@wavemaker/react-native-echarts';

<ChartThemeProvider theme={DARK_THEME}>
  <YourScreens />
</ChartThemeProvider>
```

Nested providers **merge** shallowly for objects and **replace** arrays such as **`series`**. Child values override parent values for the same keys.

```tsx
<ChartThemeProvider
  theme={{
    tooltip: { backgroundColor: '#1a1a1a', borderColor: '#333' },
    series: [{ color: '#3b82f6' }, { color: '#10b981' }],
  }}
>
  <AreaChart data={data} />
</ChartThemeProvider>
```

### 3. `useChartTheme` (inside components)

Read the merged theme from context, or pass a partial to merge locally (does not replace provider for children unless you use the returned values to build props yourself):

```tsx
import { useChartTheme } from '@wavemaker/react-native-echarts';

const { theme } = useChartTheme();
// or merge for local styling decisions:
const { theme } = useChartTheme({ tooltip: { backgroundColor: '#000' } });
```

### 4. Per-chart `theme` and `colors`

Every chart accepts:

- **`theme`** — **`Partial<ChartTheme>`** merged over context (or **`LIGHT_THEME`** if no provider).
- **`colors`** — **`string[]`** that overrides the **series color** list for that chart only (cycles if there are more series than colors).

```tsx
<AreaChart
  data={data}
  theme={{ tooltip: { borderRadius: 12 } }}
  colors={['#3b82f6', '#10b981']}
/>
```

Use **`theme`** when you need structured overrides (axes, tooltip, full **`series`** entries). Use **`colors`** for a quick palette swap.

### 5. `extendChartTheme` (compose without JSX)

To build a reusable **`ChartTheme`** object (e.g. in a design-tokens module), stack partials:

```tsx
import { extendChartTheme, LIGHT_THEME } from '@wavemaker/react-native-echarts';

export const brandTheme = extendChartTheme(LIGHT_THEME, {
  series: [{ color: '#0ea5e9' }, { color: '#a855f7' }],
  tooltip: { borderRadius: 8 },
});
```

Then pass **`theme={brandTheme}`** on a provider or on individual charts.

## Examples in this Storybook

Open **Theming → Examples** in the sidebar for live **`AreaChart`** demos: default light, dark provider, partial tooltip provider, per-chart **`colors`**, per-chart **`theme`**, nested providers, and **`extendChartTheme`** on the **`theme`** prop.

For more **`colors`** / **`theme`** combinations on the same chart type, see **Charts → Area → Colors**.

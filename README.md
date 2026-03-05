# @wavemaker/react-native-echarts

React Native chart components built with ECharts (via `@wuba/react-native-echarts`) and Skia. Works with Expo and bare React Native.

---

## Table of contents

- [Installation](#installation)
- [Quick start](#quick-start)
- [Theming](#theming)
- [Charts (Cartesian)](#charts-cartesian)
- [Charts (Pie, Radar, Radial, Candlestick)](#charts-pie-radar-radial-candlestick)
- [Gauges](#gauges)
- [Geo / maps](#geo--maps)
- [Building the library (maintainers)](#building-the-library-maintainers)
- [Development](#development)
- [License](#license)

---

## Installation

```bash
npm install @wavemaker/react-native-echarts
```

---

## Quick start

```tsx
import {
  AreaChart,
  LineChart,
  PieChart,
  SimpleGauge,
  USChart,
} from '@wavemaker/react-native-echarts';

// Area chart
<AreaChart data={[100, 200, 150]} width={220} height={350} />

// Line chart
<LineChart data={[[0, 10], [1, 20], [2, 15]]} />

// Pie chart
<PieChart data={[{ value: 40, name: 'A' }, { value: 60, name: 'B' }]} />

// Gauge
<SimpleGauge value={75} max={100} width={120} height={120} />

// US map (region names must match map data, e.g. "California", "Texas")
<USChart data={[{ name: 'California', value: 100 }]} />
```

All chart components support **responsive sizing**: omit `width`/`height` or pass `width="100%"` / `height={350}` and the chart fills the container and measures via `onLayout`. You can also pass `theme`, `colors`, and optional `noDataText` and `style` where needed.

---

## Theming

Charts use a **chart theme** for axes, grid, tooltips, legends, and series colors. You can rely on defaults, wrap your app with a provider, or override per component.

### Default themes

- **LIGHT_THEME** — light axes, dark text, purple/teal/yellow/orange/red series palette.
- **DARK_THEME** — light text and axes on dark tooltip background; same series colors.

### ChartThemeProvider

Wrap your app or chart subtree to apply a theme to all charts below:

```tsx
import { ChartThemeProvider, DARK_THEME } from '@wavemaker/react-native-echarts';

<ChartThemeProvider theme={DARK_THEME}>
  <YourCharts />
</ChartThemeProvider>
```

Nested providers merge: child theme overrides parent. Pass a **partial** theme; only the keys you provide override the base.

```tsx
<ChartThemeProvider theme={{
  tooltip: { backgroundColor: '#1a1a1a', borderColor: '#333' },
  series: [{ color: '#3b82f6' }, { color: '#10b981' }],
}}>
  <AreaChart data={data} />
</ChartThemeProvider>
```

### useChartTheme (hook)

Use inside a component to read (and optionally extend) the current theme:

```tsx
import { useChartTheme } from '@wavemaker/react-native-echarts';

const { theme } = useChartTheme();
// or merge with overrides:
const { theme } = useChartTheme({ tooltip: { backgroundColor: '#000' } });
```

### Per-component theme and colors

Every chart accepts optional **theme** (partial) and **colors** (string array). These override the context theme and series palette for that instance only:

```tsx
<AreaChart
  data={data}
  theme={{ tooltip: { borderRadius: 12 } }}
  colors={['#3b82f6', '#10b981']}
/>
```

---

## Charts (Cartesian)

Cartesian charts share axes, grid, legend, highlighter, and axis/label options. Data can be a simple array of numbers, `[x, y]` (or `[label, value]`) pairs, or multiple named series.

### AreaChart

Area under a line. Supports smooth/step curves, stacking, symbols, and area fill (gradient/transparent/solid).

### LineChart

Same as AreaChart but line only (no filled area). Same data shapes.

### BarChart / ColumnChart

Vertical bars (ColumnChart) or horizontal bars (BarChart). Same data as Area/Line. Support stacking, corner radius, active bar highlight, and inside/outside label formatters.

### ScatterChart

Points on a cartesian grid. Data: array of `[x, y]` pairs per series, or multiple named series. Optional regression line.

### BubbleChart

Like ScatterChart; each point is `[x, y, size]` so the third value drives bubble radius. Supports a size range for scaling.

---

## Charts (Pie, Radar, Radial, Candlestick)

### PieChart

Data: array of `{ name, value }` for a single pie, or concentric rings with `{ name?, radius, data }`. Supports donut (inner/outer radius), labels, legend, and tooltip formatter. Use `isConcentricPieData(data)` to detect ring format.

### RadarChart

Provide `indicators` (axis names and optional max) and `data`: either a single `number[]` or multiple `{ name?, value: number[] }` series. Value length must match indicators.

### RadialChart

Concentric rings; each ring is one item `{ label?, value }` with value as fill percentage (0–100). Supports center text, start angle, clockwise/counter-clockwise, and ring gap.

### CandlestickChart

Financial OHLC. Data: array of `[open, close, low, high]` per period. Optional x-axis labels, volume bars, and moving averages (ma5, ma10, ma20). Use `positiveColor` and `negativeColor` for candle colors.

---

## Gauges

All gauges take `value`, `min`, `max`, and support `width`, `height`, `theme`, `colors`, and axis/tick styling.

### SimpleGauge

Circular progress (Skia/ECharts). Single value between min and max.

### DigitalGauge

SVG circular gauge with numeric display and optional animation (duration configurable).

### SpeedometerGauge

Semi-circular gauge with color-coded segments (custom colors and segment endpoints).

### RadialGauge

Composite: radial progress ring plus central gauge display.

---

## Geo / maps

Region-based maps with color encoding. Region **names** in data must match the map’s GeoJSON feature names. Data: `Array<{ name: string; value: number }>`.

### GeoChart

Generic geo chart; you supply the map via `mapJson` (GeoJSON FeatureCollection) and `mapName`. Supports continuous or piecewise color scale, min/max, and tooltip formatter. Use **GeoMapJsonContext** to provide `mapJson` from a parent.

### USChart

GeoChart with US states map pre-loaded. Use state names that match the bundled map (e.g. `"California"`, `"Texas"`).

```tsx
<USChart data={[{ name: 'California', value: 100 }, { name: 'Texas', value: 80 }]} />
```

### WorldChart

GeoChart with world map pre-loaded.

```tsx
<WorldChart data={[{ name: 'United States', value: 100 }]} />
```

---

## Building the library (maintainers)

Compile components and prepare the npm package:

```bash
npm run build:lib      # TypeScript compile → dist/npm-packages/charts
npm run prepare:npm    # Write package.json, copy README, .npmignore
cd dist/npm-packages/charts && npm publish
```

---

## Development

This repo is an Expo app. To run the app and Storybook:

```bash
npm install
npx expo start
npm run storybook
```

---

## License

MIT

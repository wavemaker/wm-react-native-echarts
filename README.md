# rn-widgets

React Native chart and gauge components built with ECharts (via `@wuba/react-native-echarts`) and Skia. Works with Expo and bare React Native.

## Installation

```bash
npm install rn-widgets
```

Peer dependencies (install if not already present):

```bash
npm install react react-native @wuba/react-native-echarts @shopify/react-native-skia react-native-svg echarts zrender
```

## Usage

```tsx
import {
  AreaChart,
  LineChart,
  PieChart,
  SimpleGauge,
  GeoChart,
} from 'rn-widgets';

// Area chart
<AreaChart data={[100, 200, 150]} width={220} height={350} />

// Line chart
<LineChart data={[[0, 10], [1, 20], [2, 15]]} />

// Pie chart
<PieChart data={[{ value: 40, name: 'A' }, { value: 60, name: 'B' }]} />

// Gauge
<SimpleGauge value={75} max={100} width={120} height={120} />

// Geo map
<GeoChart data={[{ name: 'California', value: 100 }]} map="usa" />
```

Wrap your app or chart tree with a theme context if you want consistent styling:

```tsx
import { ChartThemeProvider } from 'rn-widgets'; // or use your own theme provider
```

## Exported components

- **Charts (cartesian):** `AreaChart`, `LineChart`, `BarChart`, `ColumnChart`, `ScatterChart`, `BubbleChart`
- **Charts (other):** `PieChart`, `RadarChart`, `RadialChart`, `CandlestickChart`
- **Gauges:** `SimpleGauge`, `DigitalGauge`, `SpeedometerGauge`, `RadialGauge`
- **Geo:** `GeoChart`, `USChart`, `WorldChart`, `GeoMapJsonContext`

All chart components support width, height, theme overrides, and ECharts-style options where applicable.

## Building the library (maintainers)

Compile components to `dist/npm-packages/charts` and prepare the npm package:

```bash
npm run build:lib      # TypeScript compile components → dist/npm-packages/charts
npm run prepare:npm    # Write package.json, copy README, .npmignore to npm-packages/charts
cd dist/npm-packages/charts && npm publish
```

## Development

This repo is an Expo app. To run the app and Storybook:

```bash
npm install
npx expo start
npm run storybook
```

## License

MIT

# @wavemaker/react-native-echarts

[![npm package](https://img.shields.io/npm/v/%40wavemaker%2Freact-native-echarts)](https://www.npmjs.com/package/@wavemaker/react-native-echarts)
[![MIT License](https://img.shields.io/github/license/wavemaker/wm-react-native-echarts)](https://github.com/wavemaker/wm-react-native-echarts/blob/main/LICENSE)

[![npm downloads](https://img.shields.io/npm/dm/%40wavemaker%2Freact-native-echarts)](https://www.npmjs.com/package/@wavemaker/react-native-echarts)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://github.com/wavemaker/wm-react-native-echarts)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white)](https://wavemaker.github.io/wm-react-native-echarts)

React Native chart components built with ECharts (via `@wuba/react-native-echarts`) and Skia. Works with Expo and bare React Native. Visit storybook at https://wavemaker.github.io/wm-react-native-echarts for more details on how to use and examples.

## Installation

Install the package from npm:

```bash
npm install @wavemaker/react-native-echarts
```

The library declares peer dependencies. Add any your app does not already include (align versions with your React Native or Expo SDK):

```bash
npm install @shopify/react-native-skia @wuba/react-native-echarts echarts zrender react-native-svg
```

`react` and `react-native` are also peers; they should already be present in your app.

## Chart gallery

Preview thumbnails for the chart examples in `assets/images/charts`. Each image uses the same width and height (200×200) so the layout stays even; `object-fit: contain` keeps aspect ratios readable.

### Area

<table>
  <tbody>
    <tr>
      <td align="center"><img src="assets/images/charts/area/chart1.png" width="200" height="200" alt="Area chart 1" style="object-fit: contain;" /><br /><sub>chart1</sub></td>
      <td align="center"><img src="assets/images/charts/area/chart2.png" width="200" height="200" alt="Area chart 2" style="object-fit: contain;" /><br /><sub>chart2</sub></td>
      <td align="center"><img src="assets/images/charts/area/chart3.png" width="200" height="200" alt="Area chart 3" style="object-fit: contain;" /><br /><sub>chart3</sub></td>
    </tr>
  </tbody>
</table>

### Bar

<table>
  <tbody>
    <tr>
      <td align="center"><img src="assets/images/charts/bar/horizontal-bar.png" width="200" height="200" alt="Horizontal bar chart" style="object-fit: contain;" /><br /><sub>horizontal-bar</sub></td>
      <td align="center"><img src="assets/images/charts/bar/labeled-bar.png" width="200" height="200" alt="Labeled bar chart" style="object-fit: contain;" /><br /><sub>labeled-bar</sub></td>
      <td align="center"><img src="assets/images/charts/bar/mixed-bar.png" width="200" height="200" alt="Mixed bar chart" style="object-fit: contain;" /><br /><sub>mixed-bar</sub></td>
    </tr>
  </tbody>
</table>

### Bubble

<table>
  <tbody>
    <tr>
      <td align="center"><img src="assets/images/charts/bubble/default.png" width="200" height="200" alt="Bubble chart default" style="object-fit: contain;" /><br /><sub>default</sub></td>
      <td align="center"><img src="assets/images/charts/bubble/multi-bubble.png" width="200" height="200" alt="Multi bubble chart" style="object-fit: contain;" /><br /><sub>multi-bubble</sub></td>
      <td align="center"><img src="assets/images/charts/bubble/pin-bublbe.png" width="200" height="200" alt="Bubble chart with pin" style="object-fit: contain;" /><br /><sub>pin-bublbe</sub></td>
    </tr>
  </tbody>
</table>

### Candlestick

<table>
  <tbody>
    <tr>
      <td align="center"><img src="assets/images/charts/candle-stick/default.png" width="200" height="200" alt="Candlestick default" style="object-fit: contain;" /><br /><sub>default</sub></td>
      <td align="center"><img src="assets/images/charts/candle-stick/with-ma.png" width="200" height="200" alt="Candlestick with moving average" style="object-fit: contain;" /><br /><sub>with-ma</sub></td>
      <td align="center"><img src="assets/images/charts/candle-stick/with-volume.png" width="200" height="200" alt="Candlestick with volume" style="object-fit: contain;" /><br /><sub>with-volume</sub></td>
    </tr>
  </tbody>
</table>

### Column

<table>
  <tbody>
    <tr>
      <td align="center"><img src="assets/images/charts/column/active-column.png" width="200" height="200" alt="Active column chart" style="object-fit: contain;" /><br /><sub>active-column</sub></td>
      <td align="center"><img src="assets/images/charts/column/multi-series.png" width="200" height="200" alt="Multi-series column chart" style="object-fit: contain;" /><br /><sub>multi-series</sub></td>
      <td align="center"><img src="assets/images/charts/column/standard.png" width="200" height="200" alt="Standard column chart" style="object-fit: contain;" /><br /><sub>standard</sub></td>
    </tr>
  </tbody>
</table>

### Geo

<table>
  <tbody>
    <tr>
      <td align="center"><img src="assets/images/charts/geo/colors.png" width="200" height="200" alt="Geo chart colors" style="object-fit: contain;" /><br /><sub>colors</sub></td>
      <td align="center"><img src="assets/images/charts/geo/default.png" width="200" height="200" alt="Geo chart default" style="object-fit: contain;" /><br /><sub>default</sub></td>
      <td align="center"><img src="assets/images/charts/geo/us-map.png" width="200" height="200" alt="US map geo chart" style="object-fit: contain;" /><br /><sub>us-map</sub></td>
    </tr>
  </tbody>
</table>

### Gauge

<table>
  <tbody>
    <tr>
      <td align="center"><img src="assets/images/charts/guage/digital.png" width="200" height="200" alt="Digital gauge" style="object-fit: contain;" /><br /><sub>digital</sub></td>
      <td align="center"><img src="assets/images/charts/guage/radial.png" width="200" height="200" alt="Radial gauge" style="object-fit: contain;" /><br /><sub>radial</sub></td>
      <td align="center"><img src="assets/images/charts/guage/simple.png" width="200" height="200" alt="Simple gauge" style="object-fit: contain;" /><br /><sub>simple</sub></td>
    </tr>
  </tbody>
</table>

### Line

<table>
  <tbody>
    <tr>
      <td align="center"><img src="assets/images/charts/line/multi-line.png" width="200" height="200" alt="Multi-line chart" style="object-fit: contain;" /><br /><sub>multi-line</sub></td>
      <td align="center"><img src="assets/images/charts/line/standard-line.png" width="200" height="200" alt="Standard line chart" style="object-fit: contain;" /><br /><sub>standard-line</sub></td>
      <td align="center"><img src="assets/images/charts/line/trend-line.png" width="200" height="200" alt="Trend line chart" style="object-fit: contain;" /><br /><sub>trend-line</sub></td>
    </tr>
  </tbody>
</table>

### Pie

<table>
  <tbody>
    <tr>
      <td align="center"><img src="assets/images/charts/pie/concentric.png" width="200" height="200" alt="Concentric pie chart" style="object-fit: contain;" /><br /><sub>concentric</sub></td>
      <td align="center"><img src="assets/images/charts/pie/donut.png" width="200" height="200" alt="Donut chart" style="object-fit: contain;" /><br /><sub>donut</sub></td>
      <td align="center"><img src="assets/images/charts/pie/pie.png" width="200" height="200" alt="Pie chart" style="object-fit: contain;" /><br /><sub>pie</sub></td>
    </tr>
  </tbody>
</table>

### Radar

<table>
  <tbody>
    <tr>
      <td align="center"><img src="assets/images/charts/radar/default.png" width="200" height="200" alt="Radar chart default" style="object-fit: contain;" /><br /><sub>default</sub></td>
      <td align="center"><img src="assets/images/charts/radar/multiple.png" width="200" height="200" alt="Multiple radar chart" style="object-fit: contain;" /><br /><sub>multiple</sub></td>
      <td align="center"><img src="assets/images/charts/radar/with-symbol.png" width="200" height="200" alt="Radar chart with symbol" style="object-fit: contain;" /><br /><sub>with-symbol</sub></td>
    </tr>
  </tbody>
</table>

### Radial

<table>
  <tbody>
    <tr>
      <td align="center"><img src="assets/images/charts/radial/custom-colors.png" width="200" height="200" alt="Radial chart custom colors" style="object-fit: contain;" /><br /><sub>custom-colors</sub></td>
      <td align="center"><img src="assets/images/charts/radial/default.png" width="200" height="200" alt="Radial chart default" style="object-fit: contain;" /><br /><sub>default</sub></td>
      <td align="center"><img src="assets/images/charts/radial/with-bg.png" width="200" height="200" alt="Radial chart with background" style="object-fit: contain;" /><br /><sub>with-bg</sub></td>
    </tr>
  </tbody>
</table>

### Scatter

<table>
  <tbody>
    <tr>
      <td align="center"><img src="assets/images/charts/scatter/default.png" width="200" height="200" alt="Scatter chart default" style="object-fit: contain;" /><br /><sub>default</sub></td>
      <td align="center"><img src="assets/images/charts/scatter/multi.png" width="200" height="200" alt="Multi scatter chart" style="object-fit: contain;" /><br /><sub>multi</sub></td>
      <td align="center"><img src="assets/images/charts/scatter/with-symbol.png" width="200" height="200" alt="Scatter chart with symbol" style="object-fit: contain;" /><br /><sub>with-symbol</sub></td>
    </tr>
  </tbody>
</table>

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
npx expo start # for mobile preview
npm run storybook # to checout the component stories 
```

---

## Maintainers

This package is maintained by [WaveMaker](https://www.wavemaker.com/). The source repository is [wavemaker/wm-react-native-echarts](https://github.com/wavemaker/wm-react-native-echarts). Use [GitHub Issues](https://github.com/wavemaker/wm-react-native-echarts/issues) for bug reports and feature requests.

---

## License

MIT

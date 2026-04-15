# @wavemaker/react-native-echarts

React Native chart components built with ECharts (via `@wuba/react-native-echarts`) and Skia. Works with Expo and bare React Native. Visit storybook at https://wavemaker.github.io/wm-react-native-echarts for more details on how to use and examples.

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

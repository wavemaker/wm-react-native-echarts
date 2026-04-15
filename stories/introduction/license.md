# License

## @wavemaker/react-native-echarts

**@wavemaker/react-native-echarts** is released under the **MIT License**. The canonical text is in the [`LICENSE`](https://github.com/wavemaker/wm-react-native-echarts/blob/main/LICENSE) file in the source repository.

## Third-party dependencies

The library builds on several open-source projects. Their SPDX identifiers (from published npm metadata) are summarized below; always refer to each package’s own `LICENSE` or documentation for the full terms.

| Project | Typical license | Notes |
| --- | --- | --- |
| [Apache ECharts](https://echarts.apache.org/) (`echarts`) | Apache-2.0 | Chart engine and option model. |
| [ZRender](https://github.com/ecomfe/zrender) (`zrender`) | BSD-3-Clause | Low-level rendering layer used with ECharts. |
| [@wuba/react-native-echarts](https://github.com/wuba/react-native-echarts) | MIT | Bridge between ECharts and React Native. |
| [@shopify/react-native-skia](https://shopify.github.io/react-native-skia/) | MIT | Skia-backed drawing (e.g. some chart visuals). |
| [react-native-svg](https://github.com/software-mansion/react-native-svg) | MIT | SVG output for chart views. |

When you ship an app that uses this library, you are responsible for complying with the licenses of **all** dependencies in your dependency tree (including transitive packages). Use your package manager’s license-reporting tools (for example `npm ls` and license audit features) for a complete list for your exact versions.

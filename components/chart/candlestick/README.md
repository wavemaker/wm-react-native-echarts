# Candlestick Chart Components

A collection of independent, self-contained candlestick chart components for React Native applications using ECharts.

## Overview

This directory contains 3 distinct candlestick chart components, each fully independent with its own data, configuration, and styling. These components are built using `@wuba/react-native-echarts` with Skia rendering for high-performance financial data visualization.

## Architecture

### Design Principles

1. **Complete Independence**: Each component is self-contained with no shared dependencies beyond core libraries
2. **Optimized Imports**: Components only import the specific ECharts modules they need
3. **Theme Awareness**: All components use ChartThemeContext for centralized theme management
4. **Clean API**: No title/subtitle components - charts display data only
5. **HOC Composition**: Components are wrapped with `withResponsiveContainer` and `withChartTheme` for enhanced capabilities
6. **Financial Data Focus**: Specialized for stock price and financial data visualization

### Component Structure

Each component follows this structure:
```typescript
- Import only required ECharts components and HOCs
- Register components with echarts.use()
- Define props interface with width, height, and theme
- Create inner ChartComponent with useChartTheme hook
- Create chart ref with useRef
- Use useMemo for option configuration
- useEffect for chart initialization and cleanup
- Return SkiaChart directly (no wrapper View)
- Export with HOC composition: withResponsiveContainer(withChartTheme(ChartComponent))
```

## Components

### 1. BasicCandlestickChart
**Purpose**: Basic candlestick chart for stock price visualization with data zoom

**Features**:
- Single candlestick series
- Data zoom (inside + slider)
- Split area background
- 7 data points (Mon-Sun)
- Height: 400px

**Data Format**: `[open, close, low, high]`
```typescript
[20, 34, 10, 38], // open:20, close:34, low:10, high:38
```

**Dependencies**:
- CandlestickChart
- TooltipComponent
- GridComponent
- DataZoomComponent

---

### 2. VolumeCandlestickChart
**Purpose**: Candlestick chart with volume bar chart in separate grid

**Features**:
- Candlestick price series
- Volume bar series
- Two grid layouts
- Cross axis pointer
- Legend support
- 7 data points (Mon-Sun)
- Height: 450px

**Data**:
- Price data: `[open, close, low, high]`
- Volume data: Simple number array

**Dependencies**:
- CandlestickChart
- BarChart
- TooltipComponent
- LegendComponent
- GridComponent
- DataZoomComponent

---

### 3. CandlestickMAChart
**Purpose**: K-Line chart with moving average overlay lines

**Features**:
- Candlestick price series
- Three MA lines (MA5, MA10, MA20)
- Legend support
- Cross axis pointer
- Data zoom (inside + slider)
- 7 data points (Mon-Sun)
- Height: 400px

**Data**:
- Price data: `[open, close, low, high]`
- MA data: Simple number arrays (one per MA line)

**Dependencies**:
- CandlestickChart
- LineChart
- TooltipComponent
- LegendComponent
- GridComponent
- DataZoomComponent

---

## Usage

### Basic Usage

```typescript
import { BasicCandlestickChart } from '@/components/chart/candlestick';

export default function MyScreen() {
  return (
    <View>
      <BasicCandlestickChart />
    </View>
  );
}
```

### Custom Data

```typescript
import { BasicCandlestickChart } from '@/components/chart/candlestick';

export default function MyScreen() {
  const priceData = [
    [100, 120, 95, 130],  // Day 1: open, close, low, high
    [120, 115, 110, 125],
    [115, 130, 112, 135],
    [130, 125, 120, 140],
    [125, 135, 122, 145],
  ];

  return (
    <BasicCandlestickChart
      xAxisData={['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5']}
      data={priceData}
    />
  );
}
```

### Volume Chart

```typescript
import { VolumeCandlestickChart } from '@/components/chart/candlestick';

export default function MyScreen() {
  const priceData = [
    [100, 120, 95, 130],
    [120, 115, 110, 125],
    [115, 130, 112, 135],
  ];
  const volumeData = [15000, 18000, 22000];

  return (
    <VolumeCandlestickChart
      xAxisData={['Mon', 'Tue', 'Wed']}
      priceData={priceData}
      volumeData={volumeData}
    />
  );
}
```

### Moving Average Chart

```typescript
import { CandlestickMAChart } from '@/components/chart/candlestick';

export default function MyScreen() {
  const priceData = [
    [100, 120, 95, 130],
    [120, 115, 110, 125],
    [115, 130, 112, 135],
  ];
  const ma5Data = [110, 118, 122];
  const ma10Data = [108, 115, 120];
  const ma20Data = [105, 112, 118];

  return (
    <CandlestickMAChart
      xAxisData={['Mon', 'Tue', 'Wed']}
      priceData={priceData}
      ma5Data={ma5Data}
      ma10Data={ma10Data}
      ma20Data={ma20Data}
    />
  );
}
```

## Theme Support

All components use the `useChartTheme` hook from `@/contexts/ChartThemeContext` for centralized theme management. Components are wrapped with the `withChartTheme` HOC to provide theme customization capabilities.

### Theme-Aware Properties

- **Series Colors**: `theme.series.colors[]` - Dynamic color palette (used for volume bars and MA lines)
- **Axis Labels**: `theme.axis.x.tickLabelColor`, `theme.axis.y.tickLabelColor` - Axis text colors
- **Axis Lines**: `theme.axis.x.lineColor`, `theme.axis.x.lineWidth` - Axis line styling
- **Grid Lines**: `theme.grid.y.lineColor`, `theme.grid.y.lineWidth` - Grid line styling
- **Tooltip**: `theme.tooltip.*` - Tooltip styling (background, border, text colors)

### HOC Composition

Components are enhanced with two Higher-Order Components:

1. **withChartTheme**: Provides theme context and customization
2. **withResponsiveContainer**: Handles responsive sizing and container logic

```typescript
export const BasicCandlestickChart = withResponsiveContainer(withChartTheme(ChartComponent));
```

## Styling

Components are designed for minimal styling overhead:

### Chart Dimensions
- **Width**: Passed as prop (default: 220px), managed by `withResponsiveContainer` HOC
- **Height**: Passed as prop (400px for Basic/MA charts, 450px for Volume chart)
- **Responsive**: Container HOC handles responsive sizing based on context

### Candlestick Colors
By default, candlesticks use traditional financial chart colors:
- **Bullish (Close > Open)**: Red body (#ec0000) with dark red border (#8A0000)
- **Bearish (Close < Open)**: Green body (#00da3c) with dark green border (#008F28)

These colors follow the Asian market convention (red = up, green = down). Western markets typically reverse these colors.

### Container Styling
Container styling is handled by the `withResponsiveContainer` HOC, which provides:
- Responsive width calculations
- Proper spacing and margins
- Theme-aware background colors
- Platform-specific shadow effects

## Technical Details

### Dependencies

```json
{
  "@wuba/react-native-echarts": "^1.x.x",
  "echarts": "^5.x.x",
  "react": "^18.x.x",
  "react-native": "^0.x.x"
}
```

### Internal Dependencies

- `@/contexts/chart-container` - Provides `withResponsiveContainer` HOC
- `@/contexts/ChartThemeContext` - Provides `useChartTheme` hook and `withChartTheme` HOC

### ECharts Configuration

- **Renderer**: SVG (via SkiaRenderer)
- **Width**: Prop-based (default: 220px), managed by responsive container
- **Height**: Prop-based (400px or 450px depending on chart type)
- **Theme**: 'light' (visual theme managed via ChartThemeContext colors)

### Common Chart Options

All charts include:
- `tooltip`: Axis trigger for hover interactions
- `xAxis`: Category type with theme-aware labels
- `yAxis`: Value type with scale enabled
- `dataZoom`: Inside zoom + slider for navigation
- `series`: Candlestick type with red/green coloring
- Chart options built with `useMemo` for optimal performance

## Data Format

### Candlestick Data Format
Each candlestick data point is an array of 4 values:
```typescript
[open, close, low, high]
```

**Example**:
```typescript
[20, 34, 10, 38]
// open: 20 (opening price)
// close: 34 (closing price)
// low: 10 (lowest price)
// high: 38 (highest price)
```

**Important**: The format is `[open, close, low, high]`, NOT `[open, close, high, low]`.

## Color Palette

### Candlestick Colors
- **Bullish Red**: `#ec0000` (body), `#8A0000` (border)
- **Bearish Green**: `#00da3c` (body), `#008F28` (border)

### MA Line Colors (CandlestickMAChart)
- **MA5**: `theme.series.colors[0]` (default: `#3b82f6` blue)
- **MA10**: `#91cc75` (green)
- **MA20**: `#fac858` (yellow)

### Volume Bar Colors (VolumeCandlestickChart)
- **Volume**: `theme.series.colors[0]` with 0.7 opacity

## Performance Considerations

1. **Efficient Rendering**: Uses Skia for hardware-accelerated rendering
2. **Optimized Re-renders**: 
   - `useMemo` for chart options to prevent unnecessary recalculations
   - `useEffect` dependencies minimize chart reinitialization
3. **Memory Management**: Proper cleanup with chart.dispose()
4. **Module Loading**: Only required ECharts components are loaded
5. **HOC Optimization**: Responsive container and theme HOCs minimize prop drilling
6. **Data Zoom**: Inside + slider zoom for handling large datasets efficiently

## Error Handling

All components include error handling:
- Try-catch blocks around chart initialization
- Console warnings for debugging
- Graceful cleanup on component unmount

## Best Practices

### Do's ✅
- Use within ScrollView for multiple charts
- Ensure ChartThemeContext is provided at app level
- Keep data arrays consistent with xAxis data length
- Test on both iOS and Android platforms
- Pass theme customization through the theme prop when needed
- Provide data in correct format: `[open, close, low, high]`

### Don'ts ❌
- Don't modify the chart ref directly
- Don't remove useEffect or useMemo dependencies
- Don't nest charts deeply (performance impact)
- Don't use without proper error boundaries
- Don't bypass the HOC wrappers (use the exported component)
- Don't mix up candlestick data format

## Customization

To customize a chart, copy the component and modify:

1. **Data**: Update the `data` arrays
2. **Colors**: Change `itemStyle.color`, `itemStyle.color0`, etc.
3. **Dimensions**: Adjust `height` in echarts.init()
4. **Options**: Add/remove ECharts configuration properties

### Example: Western Market Colors

```typescript
series: [
  {
    name: 'Stock Price',
    type: 'candlestick',
    data: priceData,
    itemStyle: {
      color: '#00da3c',      // Green for up (Western convention)
      color0: '#ec0000',     // Red for down (Western convention)
      borderColor: '#008F28',
      borderColor0: '#8A0000',
    },
  },
],
```

## Troubleshooting

### Chart Not Rendering
- Verify ECharts dependencies are installed
- Check that SkiaRenderer is properly registered
- Ensure `withResponsiveContainer` HOC has proper context
- Verify parent component provides necessary space

### Theme Not Updating
- Verify ChartThemeContext is provided at app level
- Check `useChartTheme` hook is available in component tree
- Ensure theme colors are properly formatted (rgba)
- Verify HOC composition order: `withResponsiveContainer(withChartTheme(...))`

### Data Not Displaying Correctly
- Verify candlestick data format: `[open, close, low, high]`
- Check that xAxisData length matches data array length
- Ensure numeric values are valid (not NaN or undefined)

### Performance Issues
- Reduce number of data points
- Use dataZoom to limit visible range
- Consider pagination for very large datasets

## File Structure

```
components/chart/candlestick/
├── README.md                          # This file
├── PROPS_API.md                       # Props documentation
├── BasicCandlestickChart.tsx          # ~150 lines - Basic candlestick
├── VolumeCandlestickChart.tsx         # ~180 lines - With volume bars
├── CandlestickMAChart.tsx             # ~180 lines - With MA lines
└── index.ts                           # Export all components
```

## Version History

### Current Version (v1.0)
- **ChartThemeContext Integration**: All components use centralized theme management
- **HOC Architecture**: Components wrapped with `withResponsiveContainer` and `withChartTheme`
- **Performance Optimization**: Chart options built with `useMemo`
- **Customizable Props**: X-axis data, price data, volume data, MA data exposed as properties
- **Simplified Structure**: No StyleSheet or View wrapper, cleaner component code
- **Theme-based Colors**: Grid, axis, and tooltip colors sourced from theme context
- **Independent component architecture**: No shared dependencies beyond HOCs and contexts

## License

Follow your project's license terms.

## Contributing

When adding new candlestick chart components:
1. Follow the established component structure with HOC composition
2. Import only required ECharts modules
3. Use `useChartTheme` hook and theme-based colors
4. Build chart options with `useMemo` for performance
5. Include proper error handling and cleanup
6. Export with HOC wrappers: `withResponsiveContainer(withChartTheme(ChartComponent))`
7. Update this README with component details
8. Test on both iOS and Android platforms

## Support

For issues or questions:
- Check ECharts documentation: https://echarts.apache.org/
- Review react-native-echarts: https://github.com/wuba/react-native-echarts
- Refer to component source code for implementation details
- ECharts Candlestick Examples: https://echarts.apache.org/examples/en/index.html#chart-type-candlestick


# Line Chart Components

A collection of independent, self-contained line chart components for React Native applications using ECharts.

## Overview

This directory contains 10 distinct line chart components, each fully independent with its own data, configuration, and styling. These components are built using `@wuba/react-native-echarts` with Skia rendering for high-performance visualization.

## Architecture

### Design Principles

1. **Complete Independence**: Each component is self-contained with no shared dependencies beyond core libraries
2. **Optimized Imports**: Components only import the specific ECharts modules they need
3. **Theme Awareness**: All components use ChartThemeContext for centralized theme management
4. **Clean API**: No title/subtitle components - charts display data only
5. **Flexible Axis Data**: All components support both string arrays and object arrays with label/value pairs for axis data
6. **HOC Composition**: Components are wrapped with `withResponsiveContainer` and `withChartTheme` for enhanced capabilities

### Component Structure

Each component follows this structure:
```typescript
- Import only required ECharts components and HOCs
- Register components with echarts.use()
- Define AxisData type (string[] | Array<{ label: string; value: number }>)
- Define props interface with width, height, and theme
- Create inner ChartComponent with useChartTheme hook
- Create chart ref with useRef
- Use useMemo for option configuration with helper functions for flexible axis data
- useEffect for chart initialization and cleanup
- Return SkiaChart directly (no wrapper View)
- Export with HOC composition: withResponsiveContainer(withChartTheme(ChartComponent))
```

### Flexible Axis Data

All line chart components now support flexible axis data formats:

**Type Definition:**
```typescript
type AxisData = string[] | Array<{ label: string; value: number }>;
```

**Format 1: String Array (Simple)**
```typescript
xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
```
- Uses array indices as values (0, 1, 2, 3...)
- Simple and straightforward for sequential data

**Format 2: Object Array (Explicit Values)**
```typescript
xAxisData={[
  { label: 'Q1', value: 0 },
  { label: 'Q2', value: 3 },
  { label: 'Q3', value: 6 },
  { label: 'Q4', value: 9 },
]}
```
- Explicit control over axis values
- Perfect for non-sequential data, custom formatting, or skipping values
- Supports custom labels like "$5k", "Q1", etc.

## Components

### 1. InteractiveLineChart
**Purpose**: Main interactive chart showing Desktop and Mobile visitor data over 3 months

**Features**:
- Two data series (Desktop, Mobile)
- Smooth curves
- Legend support
- 17 data points (Apr-Jun)
- No symbols on data points
- Height: 450px

**Data**:
- Desktop: 7,000 - 27,800 visitors
- Mobile: 5,000 - 26,500 visitors

**Dependencies**:
- LineChart
- TooltipComponent
- GridComponent
- LegendComponent

**Props**:
```typescript
interface InteractiveLineChartProps {
  xAxisData?: AxisData;
  series?: Array<{
    name: string;
    data: number[];
  }>;
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

---

### 2. DefaultLineChart
**Purpose**: Basic line chart demonstrating simple smooth line visualization

**Features**:
- Single data series
- Smooth curves
- 6 data points (Jan-Jun)
- No symbols on data points
- Height: 350px

**Data**:
- Visitors: 95 - 267

**Dependencies**:
- LineChart
- TooltipComponent
- GridComponent

**Props**:
```typescript
interface DefaultLineChartProps {
  xAxisData?: AxisData;
  data?: number[];
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

---

### 3. LinearLineChart
**Purpose**: Line chart with straight line segments (non-smooth)

**Features**:
- Single data series
- Linear interpolation (straight lines)
- 6 data points (Jan-Jun)
- No symbols on data points
- Height: 350px

**Data**:
- Visitors: 160 - 270

**Dependencies**:
- LineChart
- TooltipComponent
- GridComponent

---

### 4. StepLineChart
**Purpose**: Line chart with step pattern visualization

**Features**:
- Single data series
- Step interpolation (middle)
- 6 data points (Jan-Jun)
- No symbols on data points
- Height: 350px

**Data**:
- Visitors: 170 - 230

**Dependencies**:
- LineChart
- TooltipComponent
- GridComponent

---

### 5. MultipleLineChart
**Purpose**: Two-series line chart with legend

**Features**:
- Two data series (Series A, Series B)
- Smooth curves
- Legend support
- 6 data points (Jan-Jun)
- No symbols on data points
- Height: 350px

**Data**:
- Series A: 89 - 287
- Series B: 85 - 185

**Dependencies**:
- LineChart
- TooltipComponent
- GridComponent
- LegendComponent

**Props**:
```typescript
interface MultipleLineChartProps {
  xAxisData?: AxisData;
  series?: Array<{
    name: string;
    data: number[];
  }>;
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

---

### 6. DotsLineChart
**Purpose**: Line chart with visible circular markers on data points

**Features**:
- Single data series
- Smooth curves
- Circle markers (size: 6)
- 6 data points (Jan-Jun)
- Height: 350px

**Data**:
- Visitors: 87 - 291

**Dependencies**:
- LineChart
- TooltipComponent
- GridComponent

---

### 7. CustomDotsLineChart
**Purpose**: Line chart with custom styled markers (bordered dots)

**Features**:
- Single data series
- Smooth curves
- Circle markers (size: 8) with white border (2px)
- 6 data points (Jan-Jun)
- Height: 350px

**Data**:
- Visitors: 73 - 305

**Dependencies**:
- LineChart
- TooltipComponent
- GridComponent

---

### 8. DotsColorsLineChart
**Purpose**: Line chart with varying dot colors for each data point

**Features**:
- Single data series
- Linear (non-smooth) lines
- Circle markers (size: 6) with individual colors
- 6 data points (Jan-Jun)
- Height: 350px

**Data**:
- Visitors: 73 - 305 with custom colors per point

**Dependencies**:
- LineChart
- TooltipComponent
- GridComponent

**Props**:
```typescript
interface DotsColorsLineChartProps {
  xAxisData?: AxisData;
  data?: Array<{ value: number; itemStyle?: { color: string } }>;
  lineColor?: string;
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

---

### 9. LabelLineChart
**Purpose**: Line chart with numerical labels above each data point

**Features**:
- Single data series
- Smooth curves
- Circle markers (size: 6)
- Labels on top of data points
- 6 data points (Jan-Jun)
- Height: 350px

**Data**:
- Visitors: 73 - 305

**Dependencies**:
- LineChart
- TooltipComponent
- GridComponent

---

### 10. CustomLabelLineChart
**Purpose**: Line chart with custom categorical labels (browser names)

**Features**:
- Single data series
- Linear (non-smooth) lines
- Circle markers (size: 6)
- Custom labels to the right of data points
- 6 data points (Jan-Jun)
- Height: 350px

**Data**:
- Visitors: 73 - 305 with browser name labels

**Dependencies**:
- LineChart
- TooltipComponent
- GridComponent

**Props**:
```typescript
interface CustomLabelLineChartProps {
  xAxisData?: AxisData;
  data?: Array<{ value: number; label?: { formatter: string } }>;
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

## Usage

### Basic Usage

```typescript
import { DefaultLineChart } from '@/components/chart/line/default-line.chart';

export default function MyScreen() {
  return (
    <View>
      <DefaultLineChart />
    </View>
  );
}
```

### Using Custom Axis Labels (String Array)

```typescript
import { DefaultLineChart } from '@/components/chart/line/default-line.chart';

export default function MyScreen() {
  return (
    <DefaultLineChart
      xAxisData={['Week 1', 'Week 2', 'Week 3', 'Week 4']}
      data={[450, 520, 380, 610]}
    />
  );
}
```

### Using Custom Axis Labels (Object Array)

```typescript
import { DefaultLineChart } from '@/components/chart/line/default-line.chart';

export default function MyScreen() {
  return (
    <DefaultLineChart
      xAxisData={[
        { label: 'Q1', value: 0 },
        { label: 'Q2', value: 3 },
        { label: 'Q3', value: 6 },
        { label: 'Q4', value: 9 },
      ]}
      data={[450, 520, 380, 610]}
    />
  );
}
```

### Using Multiple Series

```typescript
import { MultipleLineChart } from '@/components/chart/line/multiple-line.chart';

export default function MyScreen() {
  return (
    <MultipleLineChart
      xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
      series={[
        { name: 'Product A', data: [120, 200, 150, 180, 220, 250] },
        { name: 'Product B', data: [80, 130, 110, 150, 170, 190] },
      ]}
    />
  );
}
```

### Using Custom Dot Colors

```typescript
import { DotsColorsLineChart } from '@/components/chart/line/dots-colors-line.chart';

export default function MyScreen() {
  return (
    <DotsColorsLineChart
      xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
      data={[
        { value: 186, itemStyle: { color: '#ef4444' } },
        { value: 305, itemStyle: { color: '#3b82f6' } },
        { value: 237, itemStyle: { color: '#10b981' } },
        { value: 73, itemStyle: { color: '#f59e0b' } },
        { value: 209, itemStyle: { color: '#8b5cf6' } },
        { value: 214, itemStyle: { color: '#ec4899' } },
      ]}
      lineColor="#3b82f6"
    />
  );
}
```

### Using Multiple Charts

```typescript
import { InteractiveLineChart } from '@/components/chart/line/interactive-line.chart';
import { LinearLineChart } from '@/components/chart/line/linear-line.chart';
import { StepLineChart } from '@/components/chart/line/step-line.chart';
import { ScrollView } from 'react-native';

export default function LineChartGallery() {
  return (
    <ScrollView>
      <InteractiveLineChart />
      <LinearLineChart />
      <StepLineChart />
    </ScrollView>
  );
}
```

## Theme Support

All components use the `useChartTheme` hook from `@/contexts/ChartThemeContext` for centralized theme management. Components are wrapped with the `withChartTheme` HOC to provide theme customization capabilities.

### Theme-Aware Properties

- **Series Colors**: `theme.series.colors[]` - Dynamic color palette for chart data
- **Axis Labels**: `theme.axis.x.tickLabelColor`, `theme.axis.y.tickLabelColor` - Axis text colors
- **Axis Lines**: `theme.axis.y.lineColor`, `theme.axis.y.lineWidth` - Axis line styling
- **Grid Lines**: `theme.axis.y.tickColor`, `theme.axis.y.tickWidth` - Grid line styling

### HOC Composition

Components are enhanced with two Higher-Order Components:

1. **withChartTheme**: Provides theme context and customization
2. **withResponsiveContainer**: Handles responsive sizing and container logic

```typescript
export const DefaultLineChart = withResponsiveContainer(withChartTheme(ChartComponent));
```

## Styling

Components are designed for minimal styling overhead:

### Chart Dimensions
- **Width**: Passed as prop (default: 220px), managed by `withResponsiveContainer` HOC
- **Height**: Passed as prop (varies by chart type: 350px or 450px)
- **Responsive**: Container HOC handles responsive sizing based on context

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
- **Height**: Prop-based (350px for most charts, 450px for InteractiveLineChart)
- **Theme**: 'light' (visual theme managed via ChartThemeContext colors)

### Common Chart Options

All charts include:
- `tooltip`: Axis trigger for hover interactions
- `xAxis`: Category or value type with theme-aware labels and flexible data format
- `yAxis`: Value type (labels hidden on most charts)
- `series`: Line type with configurable smoothing, colors from theme
- Chart options built with `useMemo` for optimal performance

## Chart Patterns

### Smooth vs Linear vs Step
- **Smooth**: `smooth: true` - Creates curved lines
- **Linear**: `smooth: false` - Creates straight segments
- **Step**: `step: 'middle'` - Creates step pattern

### Symbol Styles

#### No Symbols
```typescript
series: [{
  symbol: 'none',
}]
```

#### Circular Markers
```typescript
series: [{
  symbol: 'circle',
  symbolSize: 6,
  itemStyle: {
    color: '#3b82f6',
  },
}]
```

#### Custom Bordered Markers
```typescript
series: [{
  symbol: 'circle',
  symbolSize: 8,
  itemStyle: {
    color: '#3b82f6',
    borderColor: '#ffffff',
    borderWidth: 2,
  },
}]
```

#### Individual Marker Colors
```typescript
series: [{
  data: [
    { value: 186, itemStyle: { color: '#1e40af' } },
    { value: 305, itemStyle: { color: '#3b82f6' } },
    { value: 237, itemStyle: { color: '#60a5fa' } },
  ],
}]
```

### Label Styles

#### Numerical Labels
```typescript
series: [{
  label: {
    show: true,
    position: 'top',
    color: '#333333',
    fontSize: 10,
  },
}]
```

#### Custom Labels
```typescript
series: [{
  data: [
    { value: 186, label: { formatter: 'Chrome' } },
    { value: 305, label: { formatter: 'Safari' } },
  ],
  label: {
    show: true,
    position: 'right',
    color: '#333333',
    fontSize: 10,
  },
}]
```

## Color Palette

### Primary Blue
- Main: `#3b82f6` (rgb(59, 130, 246))
- Dark: `#1e40af` (rgb(30, 64, 175))
- Light: `#60a5fa` (rgb(96, 165, 250))

### Secondary Colors
- Cyan: `#06b6d4` (rgb(6, 182, 212))
- Sky: `#93c5fd` (rgb(147, 197, 253))

## Performance Considerations

1. **Efficient Rendering**: Uses Skia for hardware-accelerated rendering
2. **Optimized Re-renders**: 
   - `useMemo` for chart options to prevent unnecessary recalculations
   - `useEffect` dependencies minimize chart reinitialization
3. **Memory Management**: Proper cleanup with chart.dispose()
4. **Module Loading**: Only required ECharts components are loaded
5. **HOC Optimization**: Responsive container and theme HOCs minimize prop drilling

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

### Don'ts ❌
- Don't modify the chart ref directly
- Don't remove useEffect or useMemo dependencies
- Don't nest charts deeply (performance impact)
- Don't use without proper error boundaries
- Don't bypass the HOC wrappers (use the exported component)

## Customization

To customize a chart, copy the component and modify:

1. **Data**: Update the `data` arrays in series
2. **Colors**: Change `itemStyle.color` and `lineStyle.color`
3. **Dimensions**: Adjust `height` in echarts.init()
4. **Styling**: Modify the chart options
5. **Options**: Add/remove ECharts configuration properties

### Example: Custom Colors

```typescript
series: [
  {
    data: [150, 230, 180, 120, 200, 250],
    type: 'line',
    smooth: true,
    symbol: 'circle',
    symbolSize: 6,
    itemStyle: {
      color: '#10b981', // Custom green
    },
    lineStyle: {
      color: '#10b981',
      width: 2,
    },
  }
]
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

### Performance Issues
- Reduce number of data points
- Simplify marker configurations
- Consider pagination for many charts

## File Structure

```
components/chart/line/
├── README.md                          # This file
├── InteractiveLineChart.tsx          # ~150 lines - Multi-series with legend
├── DefaultLineChart.tsx              # ~135 lines - Basic smooth single series
├── LinearLineChart.tsx               # ~135 lines - Linear interpolation
├── StepLineChart.tsx                 # ~135 lines - Step interpolation
├── MultipleLineChart.tsx             # ~145 lines - Multi-series with legend
├── DotsLineChart.tsx                 # ~135 lines - With circular markers
├── CustomDotsLineChart.tsx           # ~135 lines - With bordered markers
├── DotsColorsLineChart.tsx           # ~140 lines - With colored markers
├── LabelLineChart.tsx                # ~135 lines - With numerical labels
├── CustomLabelLineChart.tsx          # ~140 lines - With custom labels
└── index.ts                          # Barrel exports
```

## Version History

### Current Version (v1.0)
- **ChartThemeContext Integration**: All components use centralized theme management
- **HOC Architecture**: Components wrapped with `withResponsiveContainer` and `withChartTheme`
- **Performance Optimization**: Chart options built with `useMemo`
- **Flexible Axis Data**: Support for both string arrays and object arrays with label/value pairs
- **Customizable Props**: X-axis data, series data, width, height, and theme exposed as properties
- **Simplified Structure**: No StyleSheet or View wrapper, cleaner component code
- **Theme-based Colors**: All colors sourced from theme context instead of hardcoded values
- Independent component architecture
- No shared dependencies beyond HOCs and contexts

## License

Follow your project's license terms.

## Contributing

When adding new line chart components:
1. Follow the established component structure with HOC composition
2. Import only required ECharts modules
3. Use `useChartTheme` hook and theme-based colors
4. Build chart options with `useMemo` for performance
5. Include proper error handling and cleanup
6. Support flexible axis data (AxisData type)
7. Export with HOC wrappers: `withResponsiveContainer(withChartTheme(ChartComponent))`
8. Update this README with component details
9. Test on both iOS and Android platforms

## Support

For issues or questions:
- Check ECharts documentation: https://echarts.apache.org/
- Review react-native-echarts: https://github.com/wuba/react-native-echarts
- Refer to component source code for implementation details


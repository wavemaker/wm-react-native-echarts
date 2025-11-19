# Area Chart Components

A collection of independent, self-contained area chart components for React Native applications using ECharts.

## Overview

This directory contains 10 distinct area chart components, each fully independent with its own data, configuration, and styling. These components are built using `@wuba/react-native-echarts` with Skia rendering for high-performance visualization.

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

All area chart components now support flexible axis data formats:

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

### 1. InteractiveAreaChart
**Purpose**: Main interactive chart showing Desktop and Mobile visitor data over 3 months

**Features**:
- Two data series (Mobile, Desktop)
- Smooth curves
- Legend support
- 16 data points (Apr-Jun)
- Gradient area fills
- Height: 450px

**Data**:
- Mobile: 5,000 - 27,600 visitors
- Desktop: 4,000 - 26,300 visitors

**Dependencies**:
- LineChart
- TooltipComponent
- GridComponent
- LegendComponent

---

### 2. DefaultAreaChart
**Purpose**: Basic area chart demonstrating simple smooth area visualization

**Features**:
- Single data series
- Smooth curves
- 6 data points (Jan-Jun)
- Gradient area fill
- Height: 350px

**Data**:
- Visitors: 150 - 250

**Dependencies**:
- LineChart
- TooltipComponent
- GridComponent

---

### 3. LinearAreaChart
**Purpose**: Area chart with straight line segments (non-smooth)

**Features**:
- Single data series
- Linear interpolation
- 6 data points (Jan-Jun)
- Gradient area fill
- Height: 350px

**Data**:
- Visitors: 160 - 270

**Dependencies**:
- LineChart
- TooltipComponent
- GridComponent

---

### 4. StepAreaChart
**Purpose**: Area chart with step pattern visualization

**Features**:
- Single data series
- Step interpolation (middle)
- 6 data points (Jan-Jun)
- Gradient area fill
- Height: 350px

**Data**:
- Visitors: 160 - 240

**Dependencies**:
- LineChart
- TooltipComponent
- GridComponent

---

### 5. LegendAreaChart
**Purpose**: Two-series area chart with legend

**Features**:
- Two data series (Mobile, Desktop)
- Smooth curves
- Legend support
- 6 data points (Jan-Jun)
- Gradient area fills
- Height: 350px

**Data**:
- Mobile: 140 - 210
- Desktop: 80 - 150

**Dependencies**:
- LineChart
- TooltipComponent
- GridComponent
- LegendComponent

---

### 6. StackedAreaChart
**Purpose**: Stacked area chart showing cumulative data

**Features**:
- Two stacked data series
- Smooth curves
- Stack: 'total'
- 6 data points (Jan-Jun)
- Solid colored fills
- Height: 350px

**Data**:
- Series 1: 90 - 230
- Series 2: 70 - 140

**Dependencies**:
- LineChart
- TooltipComponent
- GridComponent

---

### 7. StackedExpandedAreaChart
**Purpose**: 100% stacked area chart showing proportional data

**Features**:
- Two stacked data series
- Smooth curves
- Stack: 'total'
- 6 data points (Jan-Jun)
- Solid colored fills
- Height: 350px

**Data**:
- Series 1: 55 - 70
- Series 2: 30 - 45

**Dependencies**:
- LineChart
- TooltipComponent
- GridComponent

---

### 8. IconsAreaChart
**Purpose**: Area chart with visible marker icons on data points

**Features**:
- Two data series (Mobile, Desktop)
- Smooth curves
- Circle markers (size: 6)
- Legend support
- 6 data points (Jan-Jun)
- Gradient area fills
- Height: 350px

**Data**:
- Mobile: 140 - 210
- Desktop: 80 - 150

**Dependencies**:
- LineChart
- TooltipComponent
- GridComponent
- LegendComponent

---

### 9. GradientAreaChart
**Purpose**: Area chart with multi-stop gradient fills

**Features**:
- Two data series
- Smooth curves
- Three-stop gradients (0, 0.5, 1)
- 6 data points (Jan-Jun)
- Rich gradient effects
- Height: 350px

**Data**:
- Series 1: 140 - 210
- Series 2: 80 - 150

**Dependencies**:
- LineChart
- TooltipComponent
- GridComponent

---

### 10. AxesAreaChart
**Purpose**: Area chart with visible axes and grid lines, supporting flexible axis data formats

**Features**:
- Single data series
- Smooth curve
- Visible Y-axis labels
- Grid lines
- Flexible x-axis and y-axis data (string[] or {label, value}[])
- 6 data points (Jan-Jun)
- Gradient area fill
- Height: 350px

**Data**:
- Visitors: 200 - 600

**Dependencies**:
- LineChart
- TooltipComponent
- GridComponent

**Props**:
```typescript
interface AxesAreaChartProps {
  xAxisData?: AxisData;              // string[] or {label, value}[]
  yAxisData?: AxisData;              // string[] or {label, value}[]
  data?: number[];
  color?: string;
  areaColor?: string;
  height?: number;
  showGrid?: boolean;
}
```

## Usage

### Basic Usage

```typescript
import { DefaultAreaChart } from '@/components/chart/area/default-area.chart';

export default function MyScreen() {
  return (
    <View>
      <DefaultAreaChart />
    </View>
  );
}
```

### Using Custom Axis Labels (String Array)

```typescript
import { DefaultAreaChart } from '@/components/chart/area/default-area.chart';

export default function MyScreen() {
  return (
    <DefaultAreaChart
      xAxisData={['Week 1', 'Week 2', 'Week 3', 'Week 4']}
      data={[450, 520, 380, 610]}
      color="#10b981"
      areaColor="rgba(16, 185, 129, 0.5)"
    />
  );
}
```

### Using Custom Axis Labels (Object Array)

```typescript
import { DefaultAreaChart } from '@/components/chart/area/default-area.chart';

export default function MyScreen() {
  return (
    <DefaultAreaChart
      xAxisData={[
        { label: 'Q1', value: 0 },
        { label: 'Q2', value: 3 },
        { label: 'Q3', value: 6 },
        { label: 'Q4', value: 9 },
      ]}
      data={[450, 520, 380, 610]}
      color="#10b981"
      areaColor="rgba(16, 185, 129, 0.5)"
    />
  );
}
```

### Using Multiple Charts

```typescript
import { InteractiveAreaChart } from '@/components/chart/area/interactive-area.chart';
import { LinearAreaChart } from '@/components/chart/area/linear-area.chart';
import { StepAreaChart } from '@/components/chart/area/step-area.chart';
import { ScrollView } from 'react-native';

export default function AreaChartGallery() {
  return (
    <ScrollView>
      <InteractiveAreaChart />
      <LinearAreaChart />
      <StepAreaChart />
    </ScrollView>
  );
}
```

## Theme Support

All components use the `useChartTheme` hook from `@/contexts/ChartThemeContext` for centralized theme management. Components are wrapped with the `withChartTheme` HOC to provide theme customization capabilities.

### Theme-Aware Properties

- **Series Colors**: `theme.series.colors[]` - Dynamic color palette for chart data
- **Axis Labels**: `theme.axis.x.labelColor`, `theme.axis.y.labelColor` - Axis text colors
- **Axis Lines**: `theme.axis.y.lineColor`, `theme.axis.y.lineWidth` - Axis line styling
- **Grid Lines**: `theme.axis.y.tickColor`, `theme.axis.y.tickWidth` - Grid line styling

### HOC Composition

Components are enhanced with two Higher-Order Components:

1. **withChartTheme**: Provides theme context and customization
2. **withResponsiveContainer**: Handles responsive sizing and container logic

```typescript
export const AxesAreaChart = withResponsiveContainer(withChartTheme(ChartComponent));
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
- **Height**: Prop-based (350px for most charts, 450px for InteractiveAreaChart)
- **Theme**: 'light' (visual theme managed via ChartThemeContext colors)

### Common Chart Options

All charts include:
- `tooltip`: Axis trigger for hover interactions
- `xAxis`: Category or value type with theme-aware labels and flexible data format
- `yAxis`: Value or category type (labels configurable, hidden on most charts)
- `series`: Line type with areaStyle, colors from theme
- Chart options built with `useMemo` for optimal performance

## Chart Patterns

### Smooth vs Linear
- **Smooth**: `smooth: true` - Creates curved lines
- **Linear**: `smooth: false` - Creates straight segments
- **Step**: `step: 'middle'` - Creates step pattern

### Area Styles

#### Gradient (Two-Stop)
```typescript
areaStyle: {
  opacity: 0.6,
  color: {
    type: 'linear',
    x: 0, y: 0, x2: 0, y2: 1,
    colorStops: [
      { offset: 0, color: 'rgba(59, 130, 246, 0.5)' },
      { offset: 1, color: 'rgba(59, 130, 246, 0.05)' }
    ]
  }
}
```

#### Gradient (Three-Stop)
```typescript
areaStyle: {
  color: {
    type: 'linear',
    x: 0, y: 0, x2: 0, y2: 1,
    colorStops: [
      { offset: 0, color: 'rgba(59, 130, 246, 0.8)' },
      { offset: 0.5, color: 'rgba(96, 165, 250, 0.5)' },
      { offset: 1, color: 'rgba(147, 197, 253, 0.1)' }
    ]
  }
}
```

#### Solid
```typescript
areaStyle: {
  opacity: 0.6,
  color: 'rgba(59, 130, 246, 0.6)'
}
```

## Color Palette

### Primary Blue
- Light: `#3b82f6` (rgb(59, 130, 246))
- Area: `rgba(59, 130, 246, 0.5-0.8)`

### Secondary Blue
- Light: `#93c5fd` (rgb(147, 197, 253))
- Area: `rgba(147, 197, 253, 0.5-0.8)`

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
2. **Colors**: Change `itemStyle.color` and `areaStyle.color`
3. **Dimensions**: Adjust `height` in echarts.init()
4. **Styling**: Modify the StyleSheet styles
5. **Options**: Add/remove ECharts configuration properties

### Example: Custom Colors

```typescript
series: [
  {
    data: [150, 230, 180, 120, 200, 250],
    type: 'line',
    smooth: true,
    itemStyle: {
      color: '#10b981', // Custom green
    },
    lineStyle: {
      color: '#10b981',
      width: 2,
    },
    areaStyle: {
      color: {
        type: 'linear',
        x: 0, y: 0, x2: 0, y2: 1,
        colorStops: [
          { offset: 0, color: 'rgba(16, 185, 129, 0.5)' },
          { offset: 1, color: 'rgba(16, 185, 129, 0.05)' }
        ]
      }
    }
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
- Simplify gradient configurations
- Consider pagination for many charts

## File Structure

```
components/chart/area/
├── README.md                          # This file
├── InteractiveAreaChart.tsx          # ~145 lines - Multi-series with legend
├── DefaultAreaChart.tsx              # ~135 lines - Basic single series
├── LinearAreaChart.tsx               # ~135 lines - Linear interpolation
├── StepAreaChart.tsx                 # ~135 lines - Step interpolation
├── LegendAreaChart.tsx               # ~145 lines - Multi-series with legend
├── StackedAreaChart.tsx              # ~135 lines - Stacked series
├── StackedExpandedAreaChart.tsx      # ~135 lines - 100% stacked series
├── IconsAreaChart.tsx                # ~145 lines - With visible markers
├── GradientAreaChart.tsx             # ~145 lines - Multi-stop gradients
└── AxesAreaChart.tsx                 # ~174 lines - With visible axes and y-axis data support
```

## Version History

### Current Version (v2.0)
- **ChartThemeContext Integration**: All components now use centralized theme management
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

When adding new area chart components:
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


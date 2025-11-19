# Bar Chart Components

A collection of independent, self-contained bar chart components for React Native applications using ECharts.

## Overview

This directory contains 10 distinct bar chart components, each fully independent with its own data, configuration, and styling. These components are built using `@wuba/react-native-echarts` with Skia rendering for high-performance visualization.

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

All bar chart components now support flexible axis data formats:

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

### 1. InteractiveBarChart
**Purpose**: Main interactive chart with extended data range

**Features**:
- Single data series
- 13 data points (Apr-Jun weekly)
- Shadow tooltip pointer
- Customizable bar width
- Height: 450px

**Data**:
- Visitors: 800 - 1,800

**Dependencies**:
- BarChart
- TooltipComponent
- GridComponent

**Props**:
```typescript
interface InteractiveBarChartProps {
  xAxisData?: AxisData;              // Default: 13 weekly dates
  data?: number[];
  color?: string;
  barWidth?: string;                 // Default: '70%'
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

---

### 2. DefaultBarChart
**Purpose**: Basic bar chart with rounded corners

**Features**:
- Single data series
- 6 data points (Jan-Jun)
- Rounded corners
- No axis lines
- Height: 350px

**Data**:
- Visitors: 73 - 305

**Dependencies**:
- BarChart
- TooltipComponent
- GridComponent

**Props**:
```typescript
interface DefaultBarChartProps {
  xAxisData?: AxisData;
  data?: number[];
  color?: string;
  borderRadius?: number[];           // Default: [4, 4, 4, 4]
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

---

### 3. HorizontalBarChart
**Purpose**: Horizontal bar chart orientation

**Features**:
- Single data series
- Horizontal layout
- 6 data points (Jan-Jun)
- Customizable bar width
- Height: 350px

**Data**:
- Visitors: 73 - 305

**Dependencies**:
- BarChart
- TooltipComponent
- GridComponent

**Props**:
```typescript
interface HorizontalBarChartProps {
  yAxisData?: AxisData;              // Vertical axis labels
  data?: number[];
  color?: string;
  barWidth?: string;                 // Default: '80%'
  borderRadius?: number[];
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

---

### 4. MultipleBarChart
**Purpose**: Multiple series bar chart with legend

**Features**:
- Two data series (Series A, Series B)
- Legend support
- 6 data points (Jan-Jun)
- Grid lines
- Height: 350px

**Data**:
- Series A: 73 - 305
- Series B: 90 - 280

**Dependencies**:
- BarChart
- TooltipComponent
- GridComponent
- LegendComponent

**Props**:
```typescript
interface MultipleBarChartProps {
  xAxisData?: AxisData;
  series?: Array<{
    name: string;
    data: number[];
  }>;
  barWidth?: string;                 // Default: '40%'
  borderRadius?: number[];
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

---

### 5. StackedBarChart
**Purpose**: Stacked bar chart with legend

**Features**:
- Two stacked data series (Desktop, Mobile)
- Legend support
- Stack: 'total'
- 6 data points (Jan-Jun)
- Custom border radius per series
- Height: 350px

**Data**:
- Desktop: 40 - 150
- Mobile: 33 - 155

**Dependencies**:
- BarChart
- TooltipComponent
- GridComponent
- LegendComponent

**Props**:
```typescript
interface StackedBarChartProps {
  xAxisData?: AxisData;
  series?: Array<{
    name: string;
    data: number[];
    borderRadius?: number[];         // Per-series border radius
  }>;
  stack?: string;                    // Default: 'total'
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

---

### 6. LabelBarChart
**Purpose**: Bar chart with value labels

**Features**:
- Single data series
- Value labels on top
- 6 data points (Jan-Jun)
- Grid lines
- Height: 350px

**Data**:
- Visitors: 73 - 305

**Dependencies**:
- BarChart
- TooltipComponent
- GridComponent

**Props**:
```typescript
interface LabelBarChartProps {
  xAxisData?: AxisData;
  data?: number[];
  color?: string;
  borderRadius?: number[];
  labelPosition?: 'top' | 'inside' | 'insideTop';  // Default: 'top'
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

---

### 7. CustomLabelBarChart
**Purpose**: Horizontal bar chart with custom label formatting

**Features**:
- Horizontal layout
- Custom labels (month names inside, values outside)
- Stacked series for label positioning
- 6 data points
- Height: 350px

**Data**:
- Values: 40 - 150

**Dependencies**:
- BarChart
- TooltipComponent
- GridComponent

**Props**:
```typescript
interface CustomLabelBarChartProps {
  yAxisData?: AxisData;
  data?: number[];
  primaryColor?: string;             // Bar color
  secondaryColor?: string;           // Helper series color
  barWidth?: string;                 // Default: '80%'
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

---

### 8. MixedBarChart
**Purpose**: Bar chart with different colors per bar

**Features**:
- Horizontal layout
- Different color per bar
- 5 data points (Browser data)
- No tooltip
- Height: 350px

**Data**:
- Chrome: 65, Firefox: 40, Safari: 35, Edge: 12, Other: 8

**Dependencies**:
- BarChart
- TooltipComponent
- GridComponent

**Props**:
```typescript
interface MixedBarChartProps {
  yAxisData?: AxisData;
  data?: Array<{
    value: number;
    itemStyle: {
      color: string;
      borderRadius: number[];
    };
  }>;
  barWidth?: string;                 // Default: '60%'
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

---

### 9. ActiveBarChart
**Purpose**: Bar chart with one highlighted bar

**Features**:
- Single data series
- One bar highlighted with dashed border
- 5 data points (Browser data)
- Grid lines
- Height: 350px

**Data**:
- Random values with one prominent bar

**Dependencies**:
- BarChart
- TooltipComponent
- GridComponent

**Props**:
```typescript
interface ActiveBarChartProps {
  xAxisData?: AxisData;
  data?: Array<{
    value: number;
    itemStyle: {
      color: string;
      borderRadius: number[];
      borderColor?: string;
      borderWidth?: number;
      borderType?: 'solid' | 'dashed';
    };
  }>;
  activeIndex?: number;              // Index of highlighted bar (default: 2)
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

---

### 10. NegativeBarChart
**Purpose**: Bar chart supporting negative values

**Features**:
- Single data series
- Supports negative values
- Conditional colors (positive/negative)
- Month labels outside bars
- Grid lines
- Height: 350px

**Data**:
- Values: -180 to 160 (mixed positive/negative)

**Dependencies**:
- BarChart
- TooltipComponent
- GridComponent

**Props**:
```typescript
interface NegativeBarChartProps {
  xAxisData?: AxisData;
  data?: number[];
  positiveColor?: string;            // Color for positive values
  negativeColor?: string;            // Color for negative values
  barWidth?: string;                 // Default: '60%'
  borderRadius?: number[];
  showLabels?: boolean;              // Default: true
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

## Usage

### Basic Usage

```typescript
import { DefaultBarChart } from '@/components/chart/bar/default-bar.chart';

export default function MyScreen() {
  return (
    <View>
      <DefaultBarChart />
    </View>
  );
}
```

### Using Custom Axis Labels (String Array)

```typescript
import { DefaultBarChart } from '@/components/chart/bar/default-bar.chart';

export default function MyScreen() {
  return (
    <DefaultBarChart
      xAxisData={['Week 1', 'Week 2', 'Week 3', 'Week 4']}
      data={[450, 520, 380, 610]}
      color="#10b981"
    />
  );
}
```

### Using Custom Axis Labels (Object Array)

```typescript
import { DefaultBarChart } from '@/components/chart/bar/default-bar.chart';

export default function MyScreen() {
  return (
    <DefaultBarChart
      xAxisData={[
        { label: 'Q1', value: 0 },
        { label: 'Q2', value: 3 },
        { label: 'Q3', value: 6 },
        { label: 'Q4', value: 9 },
      ]}
      data={[450, 520, 380, 610]}
      color="#10b981"
    />
  );
}
```

### Using Multiple Series

```typescript
import { MultipleBarChart } from '@/components/chart/bar/multiple-bar.chart';

export default function MyScreen() {
  return (
    <MultipleBarChart
      xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
      series={[
        {
          name: 'Product A',
          data: [150, 230, 180, 120, 200, 250],
        },
        {
          name: 'Product B',
          data: [100, 180, 150, 90, 160, 200],
        },
      ]}
    />
  );
}
```

### Using Horizontal Bar Chart

```typescript
import { HorizontalBarChart } from '@/components/chart/bar/horizontal-bar.chart';

export default function MyScreen() {
  return (
    <HorizontalBarChart
      yAxisData={['Category A', 'Category B', 'Category C', 'Category D']}
      data={[450, 520, 380, 610]}
      color="#8b5cf6"
    />
  );
}
```

### Using Negative Values

```typescript
import { NegativeBarChart } from '@/components/chart/bar/negative-bar.chart';

export default function MyScreen() {
  return (
    <NegativeBarChart
      xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
      data={[120, 150, -180, 110, -80, 160]}
      positiveColor="#10b981"
      negativeColor="#ef4444"
    />
  );
}
```

### Using Multiple Charts

```typescript
import { InteractiveBarChart } from '@/components/chart/bar/interactive-bar.chart';
import { MultipleBarChart } from '@/components/chart/bar/multiple-bar.chart';
import { StackedBarChart } from '@/components/chart/bar/stacked-bar.chart';
import { ScrollView } from 'react-native';

export default function BarChartGallery() {
  return (
    <ScrollView>
      <InteractiveBarChart />
      <MultipleBarChart />
      <StackedBarChart />
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
export const DefaultBarChart = withResponsiveContainer(withChartTheme(ChartComponent));
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
- **Height**: Prop-based (350px for most charts, 450px for InteractiveBarChart)
- **Theme**: 'light' (visual theme managed via ChartThemeContext colors)

### Common Chart Options

All charts include:
- `tooltip`: Axis trigger for hover interactions (or disabled)
- `xAxis`: Category or value type with theme-aware labels and flexible data format
- `yAxis`: Value or category type (labels configurable)
- `series`: Bar type with colors from theme
- Chart options built with `useMemo` for optimal performance

## Chart Patterns

### Vertical vs Horizontal

- **Vertical**: `xAxis.type = 'category'`, `yAxis.type = 'value'`
- **Horizontal**: `xAxis.type = 'value'`, `yAxis.type = 'category'`

### Bar Styling

#### Rounded Corners
```typescript
itemStyle: {
  color: '#3b82f6',
  borderRadius: [4, 4, 4, 4],  // [topLeft, topRight, bottomRight, bottomLeft]
}
```

#### Border (Dashed)
```typescript
itemStyle: {
  color: '#3b82f6',
  borderColor: '#1d4ed8',
  borderWidth: 2,
  borderType: 'dashed',
  borderRadius: [4, 4, 4, 4],
}
```

#### Conditional Colors
```typescript
itemStyle: {
  color: function(params: any) {
    return params.value >= 0 ? '#10b981' : '#ef4444';
  },
  borderRadius: [4, 4, 4, 4],
}
```

### Stacking

```typescript
series: [
  {
    name: 'Desktop',
    type: 'bar',
    stack: 'total',
    data: [100, 150, 120, 40, 110, 120],
    itemStyle: {
      borderRadius: [0, 0, 4, 4],  // Bottom rounded
    },
  },
  {
    name: 'Mobile',
    type: 'bar',
    stack: 'total',
    data: [86, 155, 117, 33, 99, 94],
    itemStyle: {
      borderRadius: [4, 4, 0, 0],  // Top rounded
    },
  },
]
```

## Color Palette

### Primary Blue
- Light: `#3b82f6` (rgb(59, 130, 246))
- Dark: `#1d4ed8` (rgb(29, 78, 216))

### Secondary Blue
- Light: `#93c5fd` (rgb(147, 197, 253))

### Special Use Cases
- **Browser Gradients**: `#000080`, `#0000cd`, `#4169e1`, `#1e90ff`, `#87ceeb`
- **Positive/Negative**: `#10b981` (green) / `#ef4444` (red)

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
- Use appropriate chart type for your data orientation (vertical/horizontal)

### Don'ts ❌
- Don't modify the chart ref directly
- Don't remove useEffect or useMemo dependencies
- Don't nest charts deeply (performance impact)
- Don't use without proper error boundaries
- Don't bypass the HOC wrappers (use the exported component)

## Customization

To customize a chart, copy the component and modify:

1. **Data**: Update the `data` arrays in series
2. **Colors**: Change `itemStyle.color`
3. **Dimensions**: Adjust `height` in echarts.init()
4. **Styling**: Modify bar widths, border radius, etc.
5. **Options**: Add/remove ECharts configuration properties

### Example: Custom Colors

```typescript
series: [
  {
    data: [150, 230, 180, 120, 200, 250],
    type: 'bar',
    itemStyle: {
      color: '#10b981', // Custom green
      borderRadius: [8, 8, 8, 8], // More rounded
    },
  }
]
```

### Example: Custom Bar Width

```typescript
series: [
  {
    data: [150, 230, 180, 120, 200, 250],
    type: 'bar',
    barWidth: '90%', // Wider bars
    itemStyle: {
      color: '#3b82f6',
      borderRadius: [4, 4, 4, 4],
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
- Ensure theme colors are properly formatted (hex)
- Verify HOC composition order: `withResponsiveContainer(withChartTheme(...))`

### Bars Not Showing Properly
- Check data values are numeric
- Verify xAxis/yAxis data length matches series data
- Ensure barWidth is a valid percentage string
- Check for negative values if using standard styling

### Performance Issues
- Reduce number of data points
- Simplify styling (reduce borders, shadows)
- Consider pagination for many charts
- Use simpler chart types when possible

## File Structure

```
components/chart/bar/
├── README.md                          # This file
├── InteractiveBarChart.tsx           # ~140 lines - Extended data range
├── DefaultBarChart.tsx               # ~135 lines - Basic bar with rounded corners
├── HorizontalBarChart.tsx            # ~145 lines - Horizontal orientation
├── MultipleBarChart.tsx              # ~160 lines - Multiple series with legend
├── StackedBarChart.tsx               # ~145 lines - Stacked series with legend
├── LabelBarChart.tsx                 # ~145 lines - With value labels
├── CustomLabelBarChart.tsx           # ~155 lines - Custom label formatting
├── MixedBarChart.tsx                 # ~135 lines - Different colors per bar
├── ActiveBarChart.tsx                # ~155 lines - Highlighted bar with border
└── NegativeBarChart.tsx              # ~145 lines - Supports negative values
```

## Version History

### Current Version (v2.0)
- **ChartThemeContext Integration**: All components now use centralized theme management
- **HOC Architecture**: Components wrapped with `withResponsiveContainer` and `withChartTheme`
- **Performance Optimization**: Chart options built with `useMemo`
- **Flexible Axis Data**: Support for both string arrays and object arrays with label/value pairs
- **Customizable Props**: Axis data, series data, width, height, and theme exposed as properties
- **Simplified Structure**: No StyleSheet or View wrapper, cleaner component code
- **Theme-based Colors**: All colors sourced from theme context instead of hardcoded values
- Independent component architecture
- No shared dependencies beyond HOCs and contexts

## License

Follow your project's license terms.

## Contributing

When adding new bar chart components:
1. Follow the established component structure with HOC composition
2. Import only required ECharts modules (BarChart instead of LineChart)
3. Use `useChartTheme` hook and theme-based colors
4. Build chart options with `useMemo` for performance
5. Include proper error handling and cleanup
6. Support flexible axis data (AxisData type)
7. Export with HOC wrappers: `withResponsiveContainer(withChartTheme(ChartComponent))`
8. Update this README with component details
9. Test on both iOS and Android platforms
10. Consider both vertical and horizontal orientations

## Support

For issues or questions:
- Check ECharts documentation: https://echarts.apache.org/
- Review react-native-echarts: https://github.com/wuba/react-native-echarts
- Refer to component source code for implementation details


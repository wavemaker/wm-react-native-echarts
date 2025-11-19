# Line Chart Components - Props API

All line chart components expose customizable properties for x-axis labels and chart data. This makes them flexible and reusable with your own data.

## Common Props

### Single Series Charts
(DefaultLineChart, LinearLineChart, StepLineChart, DotsLineChart, CustomDotsLineChart, LabelLineChart)

```typescript
type AxisData = string[] | Array<{ label: string; value: number }>;

interface Props {
  xAxisData?: AxisData;              // X-axis labels: string[] or {label, value}[]
  data?: number[];                   // Chart data
  width?: number;                    // Chart width in pixels
  height?: number;                   // Chart height in pixels
  theme?: Partial<ChartTheme>;       // Theme customization
}
```

### Multi-Series Charts
(InteractiveLineChart, MultipleLineChart)

```typescript
type AxisData = string[] | Array<{ label: string; value: number }>;

interface Props {
  xAxisData?: AxisData;              // X-axis labels: string[] or {label, value}[]
  series?: Array<{                   // Multiple data series
    name: string;                    // Series name (for legend)
    data: number[];                  // Series data
  }>;
  width?: number;                    // Chart width in pixels
  height?: number;                   // Chart height in pixels
  theme?: Partial<ChartTheme>;       // Theme customization
}
```

### Dots Colors Chart
(DotsColorsLineChart)

```typescript
type AxisData = string[] | Array<{ label: string; value: number }>;

interface Props {
  xAxisData?: AxisData;                                    // X-axis labels
  data?: Array<{                                           // Chart data with colors
    value: number;
    itemStyle?: { color: string };
  }>;
  lineColor?: string;                                      // Line color override
  width?: number;                                          // Chart width in pixels
  height?: number;                                         // Chart height in pixels
  theme?: Partial<ChartTheme>;                             // Theme customization
}
```

### Custom Label Chart
(CustomLabelLineChart)

```typescript
type AxisData = string[] | Array<{ label: string; value: number }>;

interface Props {
  xAxisData?: AxisData;                                    // X-axis labels
  data?: Array<{                                           // Chart data with labels
    value: number;
    label?: { formatter: string };
  }>;
  width?: number;                                          // Chart width in pixels
  height?: number;                                         // Chart height in pixels
  theme?: Partial<ChartTheme>;                             // Theme customization
}
```

## Usage Examples

### 1. Default Usage (with default data)

```typescript
import { DefaultLineChart } from '@/components/chart/line/default-line.chart';

export default function MyScreen() {
  return <DefaultLineChart />;
}
```

### 2. Custom Data (Single Series)

```typescript
import { DefaultLineChart } from '@/components/chart/line/default-line.chart';

export default function MyScreen() {
  return (
    <DefaultLineChart
      xAxisData={['Week 1', 'Week 2', 'Week 3', 'Week 4']}
      data={[450, 520, 380, 610]}
      height={400}
    />
  );
}
```

### 3. Linear Line Chart (Straight Segments)

```typescript
import { LinearLineChart } from '@/components/chart/line/linear-line.chart';

export default function MyScreen() {
  return (
    <LinearLineChart
      xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
      data={[180, 220, 240, 160, 190, 270]}
      height={400}
    />
  );
}
```

### 4. Step Line Chart

```typescript
import { StepLineChart } from '@/components/chart/line/step-line.chart';

export default function MyScreen() {
  return (
    <StepLineChart
      xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
      data={[170, 170, 230, 230, 180, 180]}
      height={400}
    />
  );
}
```

### 5. Multiple Series with Legend

```typescript
import { MultipleLineChart } from '@/components/chart/line/multiple-line.chart';

export default function MyScreen() {
  return (
    <MultipleLineChart
      xAxisData={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
      series={[
        {
          name: 'Product A',
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: 'Product B',
          data: [80, 95, 110, 105, 125, 140, 150],
        },
        {
          name: 'Product C',
          data: [60, 70, 85, 90, 95, 110, 120],
        },
      ]}
      height={450}
    />
  );
}
```

### 6. Line Chart with Dots

```typescript
import { DotsLineChart } from '@/components/chart/line/dots-line.chart';

export default function MyScreen() {
  return (
    <DotsLineChart
      xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
      data={[174, 291, 249, 87, 197, 226]}
      height={400}
    />
  );
}
```

### 7. Custom Dots with Borders

```typescript
import { CustomDotsLineChart } from '@/components/chart/line/custom-dots-line.chart';

export default function MyScreen() {
  return (
    <CustomDotsLineChart
      xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
      data={[186, 305, 237, 73, 209, 214]}
      height={400}
    />
  );
}
```

### 8. Dots with Individual Colors

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
      height={400}
    />
  );
}
```

### 9. Line Chart with Labels

```typescript
import { LabelLineChart } from '@/components/chart/line/label-line.chart';

export default function MyScreen() {
  return (
    <LabelLineChart
      xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
      data={[186, 305, 237, 73, 209, 214]}
      height={400}
    />
  );
}
```

### 10. Custom Labels (Browser Names)

```typescript
import { CustomLabelLineChart } from '@/components/chart/line/custom-label-line.chart';

export default function MyScreen() {
  return (
    <CustomLabelLineChart
      xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
      data={[
        { value: 186, label: { formatter: 'Chrome' } },
        { value: 305, label: { formatter: 'Safari' } },
        { value: 237, label: { formatter: 'Firefox' } },
        { value: 73, label: { formatter: 'Edge' } },
        { value: 209, label: { formatter: 'Other' } },
        { value: 214 },
      ]}
      height={400}
    />
  );
}
```

### 11. Interactive Chart (Desktop & Mobile)

```typescript
import { InteractiveLineChart } from '@/components/chart/line/interactive-line.chart';

export default function MyScreen() {
  return (
    <InteractiveLineChart
      xAxisData={['Apr 2', 'Apr 7', 'Apr 12', 'Apr 17', 'Apr 22', 'Apr 28', 'May 4', 'May 9', 'May 15', 'May 21', 'May 27', 'Jun 2', 'Jun 7', 'Jun 12', 'Jun 18', 'Jun 24', 'Jun 30']}
      series={[
        {
          name: 'Desktop',
          data: [7000, 8900, 15200, 18900, 22300, 19800, 25600, 24100, 27800, 26200, 23800, 25300, 24100, 23700, 23900, 24100, 23828],
        },
        {
          name: 'Mobile',
          data: [5000, 6200, 12500, 17700, 21400, 24800, 23100, 26500, 25200, 21800, 24100, 22900, 22100, 22300, 22500, 24010],
        },
      ]}
      height={450}
    />
  );
}
```

### 12. Dynamic Data from API

```typescript
import { DefaultLineChart } from '@/components/chart/line/default-line.chart';
import { useEffect, useState } from 'react';

export default function MyScreen() {
  const [chartData, setChartData] = useState({
    xAxisData: [],
    data: [],
  });

  useEffect(() => {
    // Fetch data from API
    fetch('https://api.example.com/analytics')
      .then(res => res.json())
      .then(data => {
        setChartData({
          xAxisData: data.labels,
          data: data.values,
        });
      });
  }, []);

  return (
    <DefaultLineChart
      xAxisData={chartData.xAxisData}
      data={chartData.data}
    />
  );
}
```

### 13. Interactive Chart with Time Range Selector

```typescript
import { MultipleLineChart } from '@/components/chart/line/multiple-line.chart';
import { useState } from 'react';
import { View, Button } from 'react-native';

export default function MyScreen() {
  const [timeRange, setTimeRange] = useState('week');
  
  const weekData = {
    xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    series: [
      {
        name: 'Views',
        data: [1200, 1900, 1500, 1700, 2100, 2300, 1800],
      },
    ],
  };
  
  const monthData = {
    xAxisData: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    series: [
      {
        name: 'Views',
        data: [8500, 9200, 8800, 9500],
      },
    ],
  };
  
  const data = timeRange === 'week' ? weekData : monthData;
  
  return (
    <View>
      <View style={{ flexDirection: 'row', gap: 10, padding: 10 }}>
        <Button title="Week" onPress={() => setTimeRange('week')} />
        <Button title="Month" onPress={() => setTimeRange('month')} />
      </View>
      <MultipleLineChart
        xAxisData={data.xAxisData}
        series={data.series}
      />
    </View>
  );
}
```

### 14. Using Object Array for Axis Data (Explicit Values)

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
      height={400}
    />
  );
}
```

### 15. Combining Multiple Charts

```typescript
import { ScrollView, Text, View } from 'react-native';
import { DefaultLineChart } from '@/components/chart/line/default-line.chart';
import { MultipleLineChart } from '@/components/chart/line/multiple-line.chart';
import { DotsLineChart } from '@/components/chart/line/dots-line.chart';

export default function DashboardScreen() {
  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
          Sales Trend
        </Text>
        <DefaultLineChart
          xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
          data={[12000, 15000, 13500, 17000, 19000, 21000]}
        />
      </View>
      
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
          Traffic Sources
        </Text>
        <MultipleLineChart
          xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
          series={[
            {
              name: 'Organic',
              data: [4200, 5300, 4800, 6100, 6800, 7200],
            },
            {
              name: 'Paid',
              data: [2100, 2800, 3200, 3600, 4100, 4500],
            },
          ]}
        />
      </View>
      
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
          Key Metrics
        </Text>
        <DotsLineChart
          xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
          data={[174, 291, 249, 87, 197, 226]}
        />
      </View>
    </ScrollView>
  );
}
```

## Color Palette Suggestions

### Primary Colors
- Blue: `#3b82f6`
- Dark Blue: `#1e40af`
- Light Blue: `#60a5fa`
- Sky Blue: `#93c5fd`
- Cyan: `#06b6d4`

### Additional Colors
- Green: `#10b981`
- Purple: `#8b5cf6`
- Orange: `#f59e0b`
- Pink: `#ec4899`
- Red: `#ef4444`

## AxisData Format Options

All line chart components support flexible axis data formats:

### Format 1: String Array (Simple)
```typescript
xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
```
- Uses array indices as values (0, 1, 2, 3...)
- Simple and straightforward for sequential data

### Format 2: Object Array (Explicit Values)
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

## Tips

1. **Data Consistency**: Ensure `xAxisData` length matches your `data` array length
2. **Chart Types**: 
   - Use `DefaultLineChart` for smooth curves
   - Use `LinearLineChart` for straight segments
   - Use `StepLineChart` for step patterns
3. **Performance**: For charts with many data points, consider `LinearLineChart` for better performance
4. **Markers**: 
   - Use `DotsLineChart` for simple circular markers
   - Use `CustomDotsLineChart` for bordered markers
   - Use `DotsColorsLineChart` for individual marker colors
5. **Labels**: 
   - Use `LabelLineChart` for numerical labels above data points
   - Use `CustomLabelLineChart` for custom text labels
6. **Theme**: All charts automatically adapt to the theme provided via ChartThemeContext
7. **Height**: Default is 350px for most charts, 450px for InteractiveLineChart
8. **HOC Features**: Charts are wrapped with `withResponsiveContainer` for responsive sizing

## TypeScript Support

All components are fully typed with TypeScript interfaces. Your IDE will provide autocomplete and type checking for all props.

## Theme Customization

You can customize the theme by passing a theme prop:

```typescript
import { DefaultLineChart } from '@/components/chart/line/default-line.chart';

export default function MyScreen() {
  return (
    <DefaultLineChart
      xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
      data={[142, 267, 189, 95, 178, 231]}
      theme={{
        series: {
          colors: ['#10b981', '#3b82f6', '#f59e0b', '#ec4899'],
        },
        axis: {
          x: { labelColor: '#666666' },
          y: { labelColor: '#666666' },
        },
      }}
    />
  );
}
```


# Area Chart Components - Props API

All area chart components now expose customizable properties for x-axis labels, y-axis configuration, and chart data. This makes them flexible and reusable with your own data.

## Common Props

### Single Series Charts
(DefaultAreaChart, LinearAreaChart, StepAreaChart)

```typescript
interface Props {
  xAxisData?: string[];              // X-axis labels
  data?: number[];                   // Chart data
  yAxisLabel?: {                     // Y-axis configuration
    show?: boolean;                  // Show/hide y-axis labels
    formatter?: string;              // Label format (e.g., '{value} k')
  };
  color?: string;                    // Line color
  areaColor?: string;                // Area fill color (rgba)
  height?: number;                   // Chart height in pixels
}
```

### Multi-Series Charts
(InteractiveAreaChart, LegendAreaChart, IconsAreaChart)

```typescript
interface Props {
  xAxisData?: string[];              // X-axis labels
  series?: Array<{                   // Multiple data series
    name: string;                    // Series name (for legend)
    data: number[];                  // Series data
    color?: string;                  // Line color
    areaColor?: string;              // Area fill color (rgba)
  }>;
  yAxisLabel?: {                     // Y-axis configuration
    show?: boolean;                  // Show/hide y-axis labels
    formatter?: string;              // Label format
  };
  height?: number;                   // Chart height in pixels
}
```

### Stacked Charts
(StackedAreaChart, StackedExpandedAreaChart)

```typescript
interface Props {
  xAxisData?: string[];              // X-axis labels
  series?: Array<{                   // Stacked data series
    data: number[];                  // Series data
    color?: string;                  // Line color
    areaColor?: string;              // Area fill color (rgba)
  }>;
  yAxisLabel?: {                     // Y-axis configuration
    show?: boolean;                  // Show/hide y-axis labels
    formatter?: string;              // Label format
  };
  height?: number;                   // Chart height in pixels
}
```

### Gradient Chart
(GradientAreaChart)

```typescript
interface Props {
  xAxisData?: string[];              // X-axis labels
  series?: Array<{                   // Multiple data series
    data: number[];                  // Series data
    color?: string;                  // Line color
    gradientColors?: string[];       // Array of 3 colors for gradient
  }>;
  yAxisLabel?: {                     // Y-axis configuration
    show?: boolean;                  // Show/hide y-axis labels
    formatter?: string;              // Label format
  };
  height?: number;                   // Chart height in pixels
}
```

### Axes Chart
(AxesAreaChart)

```typescript
type AxisData = string[] | Array<{ label: string; value: number }>;

interface Props {
  xAxisData?: AxisData;              // X-axis labels: string[] or {label, value}[]
  yAxisData?: AxisData;              // Y-axis labels: string[] or {label, value}[]
  data?: number[];                   // Chart data
  color?: string;                    // Line color
  areaColor?: string;                // Area fill color (rgba)
  height?: number;                   // Chart height in pixels
  showGrid?: boolean;                // Show/hide grid lines
}

// AxisData format options:
// 1. String array: ['Jan', 'Feb', 'Mar'] - uses indices as values
// 2. Object array: [{label: 'Jan', value: 0}, {label: 'Feb', value: 31}] - explicit values
```

## Usage Examples

### 1. Default Usage (with default data)

```typescript
import { DefaultAreaChart } from '@/components/chart/area/DefaultAreaChart';

export default function MyScreen() {
  return <DefaultAreaChart />;
}
```

### 2. Custom Data (Single Series)

```typescript
import { DefaultAreaChart } from '@/components/chart/area/DefaultAreaChart';

export default function MyScreen() {
  return (
    <DefaultAreaChart
      xAxisData={['Week 1', 'Week 2', 'Week 3', 'Week 4']}
      data={[450, 520, 380, 610]}
      color="#10b981"
      areaColor="rgba(16, 185, 129, 0.5)"
      height={400}
    />
  );
}
```

### 3. Custom Data with Y-Axis Labels

```typescript
import { DefaultAreaChart } from '@/components/chart/area/DefaultAreaChart';

export default function MyScreen() {
  return (
    <DefaultAreaChart
      xAxisData={['Q1', 'Q2', 'Q3', 'Q4']}
      data={[12500, 15300, 14200, 18700]}
      yAxisLabel={{
        show: true,
        formatter: '${value}k'
      }}
      height={400}
    />
  );
}
```

### 4. Multiple Series with Legend

```typescript
import { LegendAreaChart } from '@/components/chart/area/LegendAreaChart';

export default function MyScreen() {
  return (
    <LegendAreaChart
      xAxisData={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
      series={[
        {
          name: 'Product A',
          data: [120, 132, 101, 134, 90, 230, 210],
          color: '#3b82f6',
          areaColor: 'rgba(59, 130, 246, 0.5)',
        },
        {
          name: 'Product B',
          data: [80, 95, 110, 105, 125, 140, 150],
          color: '#10b981',
          areaColor: 'rgba(16, 185, 129, 0.5)',
        },
        {
          name: 'Product C',
          data: [60, 70, 85, 90, 95, 110, 120],
          color: '#f59e0b',
          areaColor: 'rgba(245, 158, 11, 0.5)',
        },
      ]}
      height={450}
    />
  );
}
```

### 5. Stacked Chart

```typescript
import { StackedAreaChart } from '@/components/chart/area/StackedAreaChart';

export default function MyScreen() {
  return (
    <StackedAreaChart
      xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
      series={[
        {
          data: [120, 132, 101, 134, 90, 230],
          color: '#8b5cf6',
          areaColor: 'rgba(139, 92, 246, 0.6)',
        },
        {
          data: [80, 82, 91, 104, 70, 140],
          color: '#ec4899',
          areaColor: 'rgba(236, 72, 153, 0.6)',
        },
      ]}
      yAxisLabel={{ show: true }}
      height={400}
    />
  );
}
```

### 6. Chart with Custom Gradient

```typescript
import { GradientAreaChart } from '@/components/chart/area/GradientAreaChart';

export default function MyScreen() {
  return (
    <GradientAreaChart
      xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
      series={[
        {
          data: [140, 180, 200, 150, 160, 210],
          color: '#8b5cf6',
          gradientColors: [
            'rgba(139, 92, 246, 0.9)',
            'rgba(167, 139, 250, 0.6)',
            'rgba(196, 181, 253, 0.1)',
          ],
        },
      ]}
      height={400}
    />
  );
}
```

### 7. Axes Chart with Grid (String Array)

```typescript
import { AxesAreaChart } from '@/components/chart/area/AxesAreaChart';

export default function MyScreen() {
  return (
    <AxesAreaChart
      xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
      yAxisData={['0', '250', '500', '750', '1000']}
      data={[200, 350, 500, 300, 400, 600]}
      showGrid={true}
      color="#06b6d4"
      areaColor="rgba(6, 182, 212, 0.5)"
      height={400}
    />
  );
}
```

### 7b. Axes Chart with Object Array (Explicit Values)

```typescript
import { AxesAreaChart } from '@/components/chart/area/AxesAreaChart';

export default function MyScreen() {
  return (
    <AxesAreaChart
      xAxisData={[
        { label: 'Q1', value: 0 },
        { label: 'Q2', value: 3 },
        { label: 'Q3', value: 6 },
        { label: 'Q4', value: 9 },
      ]}
      yAxisData={[
        { label: '$0', value: 0 },
        { label: '$5k', value: 5000 },
        { label: '$10k', value: 10000 },
        { label: '$15k', value: 15000 },
        { label: '$20k', value: 20000 },
      ]}
      data={[5000, 12000, 18000, 8000]}
      showGrid={true}
      height={400}
    />
  );
}
```

### 8. Dynamic Data from API

```typescript
import { DefaultAreaChart } from '@/components/chart/area/DefaultAreaChart';
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
    <DefaultAreaChart
      xAxisData={chartData.xAxisData}
      data={chartData.data}
      yAxisLabel={{ show: true }}
    />
  );
}
```

### 9. Interactive Chart with State

```typescript
import { InteractiveAreaChart } from '@/components/chart/area/InteractiveAreaChart';
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
        color: '#3b82f6',
      },
    ],
  };
  
  const monthData = {
    xAxisData: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    series: [
      {
        name: 'Views',
        data: [8500, 9200, 8800, 9500],
        color: '#3b82f6',
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
      <InteractiveAreaChart
        xAxisData={data.xAxisData}
        series={data.series}
      />
    </View>
  );
}
```

### 10. Combining Multiple Charts

```typescript
import { ScrollView, Text, View } from 'react-native';
import { DefaultAreaChart } from '@/components/chart/area/DefaultAreaChart';
import { LegendAreaChart } from '@/components/chart/area/LegendAreaChart';
import { StackedAreaChart } from '@/components/chart/area/StackedAreaChart';

export default function DashboardScreen() {
  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
          Sales Overview
        </Text>
        <DefaultAreaChart
          xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
          data={[12000, 15000, 13500, 17000, 19000, 21000]}
          yAxisLabel={{ show: true, formatter: '${value}k' }}
          color="#10b981"
          areaColor="rgba(16, 185, 129, 0.5)"
        />
      </View>
      
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
          Traffic Sources
        </Text>
        <LegendAreaChart
          xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
          series={[
            {
              name: 'Organic',
              data: [4200, 5300, 4800, 6100, 6800, 7200],
              color: '#3b82f6',
            },
            {
              name: 'Paid',
              data: [2100, 2800, 3200, 3600, 4100, 4500],
              color: '#f59e0b',
            },
          ]}
        />
      </View>
      
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
          Revenue by Category
        </Text>
        <StackedAreaChart
          xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
          series={[
            {
              data: [5000, 6000, 5500, 7000, 8000, 8500],
              color: '#8b5cf6',
            },
            {
              data: [3000, 4000, 3800, 4500, 5200, 6000],
              color: '#ec4899',
            },
            {
              data: [2000, 2500, 2200, 2800, 3100, 3500],
              color: '#06b6d4',
            },
          ]}
        />
      </View>
    </ScrollView>
  );
}
```

## Color Palette Suggestions

### Primary Colors
- Blue: `#3b82f6` / `rgba(59, 130, 246, 0.5)`
- Green: `#10b981` / `rgba(16, 185, 129, 0.5)`
- Purple: `#8b5cf6` / `rgba(139, 92, 246, 0.5)`
- Orange: `#f59e0b` / `rgba(245, 158, 11, 0.5)`
- Pink: `#ec4899` / `rgba(236, 72, 153, 0.5)`
- Cyan: `#06b6d4` / `rgba(6, 182, 212, 0.5)`

### Gradient Color Sets

**Blue Gradient**
```typescript
['rgba(59, 130, 246, 0.8)', 'rgba(96, 165, 250, 0.5)', 'rgba(147, 197, 253, 0.1)']
```

**Green Gradient**
```typescript
['rgba(16, 185, 129, 0.8)', 'rgba(52, 211, 153, 0.5)', 'rgba(110, 231, 183, 0.1)']
```

**Purple Gradient**
```typescript
['rgba(139, 92, 246, 0.8)', 'rgba(167, 139, 250, 0.5)', 'rgba(196, 181, 253, 0.1)']
```

## Tips

1. **Data Consistency**: Ensure `xAxisData` length matches your `data` array length
2. **Color Format**: Use hex for lines (`#3b82f6`) and rgba for areas (`rgba(59, 130, 246, 0.5)`)
3. **Y-Axis Labels**: Use formatter like `'{value}k'` for thousands, `'${value}'` for currency
4. **Performance**: For charts with many data points, consider using `LinearAreaChart` instead of smooth curves
5. **Theme**: All charts automatically adapt to light/dark mode
6. **Height**: Default is 350px for most charts, 450px for InteractiveAreaChart

## TypeScript Support

All components are fully typed with TypeScript interfaces. Your IDE will provide autocomplete and type checking for all props.


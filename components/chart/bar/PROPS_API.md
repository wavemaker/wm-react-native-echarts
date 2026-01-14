# Bar Chart Components - Props API Reference

Complete reference for all bar chart component props.

## Common Types

### AxisData
```typescript
type AxisData = string[] | Array<{ label: string; value: number }>;
```

**String Array Example:**
```typescript
['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
```

**Object Array Example:**
```typescript
[
  { label: 'Q1', value: 0 },
  { label: 'Q2', value: 3 },
  { label: 'Q3', value: 6 },
  { label: 'Q4', value: 9 }
]
```

### ChartTheme (Partial)
```typescript
interface ChartTheme {
  series: {
    colors: string[];
  };
  axis: {
    x: {
      labelColor: string;
    };
    y: {
      labelColor: string;
      lineColor: string;
      lineWidth: number;
      tickColor: string;
      tickWidth: number;
    };
  };
}
```

---

## 1. InteractiveBarChart

### Props
```typescript
interface InteractiveBarChartProps {
  xAxisData?: AxisData;
  data?: number[];
  color?: string;
  barWidth?: string;
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

### Default Values
```typescript
{
  xAxisData: ['Apr 1', 'Apr 8', 'Apr 15', 'Apr 22', 'Apr 29', 'May 6', 'May 13', 'May 20', 'May 27', 'Jun 3', 'Jun 10', 'Jun 17', 'Jun 24'],
  data: [800, 1200, 950, 1800, 1100, 1500, 1300, 950, 1700, 1250, 1600, 1050, 1400],
  barWidth: '70%',
  width: 220,
  height: 450
}
```

### Usage
```typescript
<InteractiveBarChart
  xAxisData={['Week 1', 'Week 2', 'Week 3', 'Week 4']}
  data={[1200, 1500, 1300, 1800]}
  color="#10b981"
  barWidth="80%"
/>
```

---

## 2. DefaultBarChart

### Props
```typescript
interface DefaultBarChartProps {
  xAxisData?: AxisData;
  data?: number[];
  color?: string;
  borderRadius?: number[];
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

### Default Values
```typescript
{
  xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  data: [186, 305, 237, 73, 209, 214],
  borderRadius: [4, 4, 4, 4],
  width: 220,
  height: 350
}
```

### Usage
```typescript
<DefaultBarChart
  xAxisData={['Q1', 'Q2', 'Q3', 'Q4']}
  data={[450, 520, 380, 610]}
  color="#8b5cf6"
  borderRadius={[8, 8, 8, 8]}
/>
```

---

## 3. HorizontalBarChart

### Props
```typescript
interface HorizontalBarChartProps {
  yAxisData?: AxisData;
  data?: number[];
  color?: string;
  barWidth?: string;
  borderRadius?: number[];
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

### Default Values
```typescript
{
  yAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  data: [186, 305, 237, 73, 209, 214],
  barWidth: '80%',
  borderRadius: [4, 4, 4, 4],
  width: 220,
  height: 350
}
```

### Usage
```typescript
<HorizontalBarChart
  yAxisData={['Category A', 'Category B', 'Category C']}
  data={[350, 480, 290]}
  color="#f59e0b"
  barWidth="70%"
/>
```

---

## 4. MultipleBarChart

### Props
```typescript
interface MultipleBarChartProps {
  xAxisData?: AxisData;
  series?: Array<{
    name: string;
    data: number[];
  }>;
  barWidth?: string;
  borderRadius?: number[];
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

### Default Values
```typescript
{
  xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series: [
    { name: 'Series A', data: [186, 305, 237, 73, 209, 214] },
    { name: 'Series B', data: [150, 280, 200, 90, 180, 190] }
  ],
  barWidth: '40%',
  borderRadius: [4, 4, 4, 4],
  width: 220,
  height: 350
}
```

### Usage
```typescript
<MultipleBarChart
  xAxisData={['Q1', 'Q2', 'Q3', 'Q4']}
  series={[
    { name: 'Product A', data: [450, 520, 380, 610] },
    { name: 'Product B', data: [320, 410, 290, 480] },
    { name: 'Product C', data: [180, 250, 200, 310] }
  ]}
  barWidth="30%"
/>
```

---

## 5. StackedBarChart

### Props
```typescript
interface StackedBarChartProps {
  xAxisData?: AxisData;
  series?: Array<{
    name: string;
    data: number[];
    borderRadius?: number[];
  }>;
  stack?: string;
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

### Default Values
```typescript
{
  xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  series: [
    { name: 'Desktop', data: [100, 150, 120, 40, 110, 120], borderRadius: [0, 0, 4, 4] },
    { name: 'Mobile', data: [86, 155, 117, 33, 99, 94], borderRadius: [4, 4, 0, 0] }
  ],
  stack: 'total',
  width: 220,
  height: 350
}
```

### Usage
```typescript
<StackedBarChart
  xAxisData={['Q1', 'Q2', 'Q3', 'Q4']}
  series={[
    { name: 'Desktop', data: [450, 520, 380, 610], borderRadius: [0, 0, 4, 4] },
    { name: 'Mobile', data: [320, 410, 290, 480], borderRadius: [0, 0, 0, 0] },
    { name: 'Tablet', data: [180, 250, 200, 310], borderRadius: [4, 4, 0, 0] }
  ]}
  stack="devices"
/>
```

---

## 6. LabelBarChart

### Props
```typescript
interface LabelBarChartProps {
  xAxisData?: AxisData;
  data?: number[];
  color?: string;
  borderRadius?: number[];
  labelPosition?: 'top' | 'inside' | 'insideTop';
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

### Default Values
```typescript
{
  xAxisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  data: [186, 305, 237, 73, 209, 214],
  borderRadius: [4, 4, 4, 4],
  labelPosition: 'top',
  width: 220,
  height: 350
}
```

### Usage
```typescript
<LabelBarChart
  xAxisData={['Q1', 'Q2', 'Q3', 'Q4']}
  data={[450, 520, 380, 610]}
  color="#06b6d4"
  labelPosition="inside"
/>
```

---

## 7. CustomLabelBarChart

### Props
```typescript
interface CustomLabelBarChartProps {
  yAxisData?: AxisData;
  data?: number[];
  primaryColor?: string;
  secondaryColor?: string;
  barWidth?: string;
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

### Default Values
```typescript
{
  yAxisData: ['January', 'February', 'March', 'April', 'May', 'June'],
  data: [100, 150, 120, 40, 110, 120],
  barWidth: '80%',
  width: 220,
  height: 350
}
```

### Usage
```typescript
<CustomLabelBarChart
  yAxisData={['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024']}
  data={[450, 520, 380, 610]}
  primaryColor="#ec4899"
  secondaryColor="#fbbf24"
  barWidth="75%"
/>
```

---

## 8. MixedBarChart

### Props
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
  barWidth?: string;
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

### Default Values
```typescript
{
  yAxisData: ['Other', 'Edge', 'Safari', 'Firefox', 'Chrome'],
  data: [
    { value: 8, itemStyle: { color: '#000080', borderRadius: [4, 4, 4, 4] } },
    { value: 12, itemStyle: { color: '#0000cd', borderRadius: [4, 4, 4, 4] } },
    { value: 35, itemStyle: { color: '#4169e1', borderRadius: [4, 4, 4, 4] } },
    { value: 40, itemStyle: { color: '#1e90ff', borderRadius: [4, 4, 4, 4] } },
    { value: 65, itemStyle: { color: '#87ceeb', borderRadius: [4, 4, 4, 4] } }
  ],
  barWidth: '60%',
  width: 220,
  height: 350
}
```

### Usage
```typescript
<MixedBarChart
  yAxisData={['Product A', 'Product B', 'Product C']}
  data={[
    { value: 450, itemStyle: { color: '#10b981', borderRadius: [4, 4, 4, 4] } },
    { value: 520, itemStyle: { color: '#3b82f6', borderRadius: [4, 4, 4, 4] } },
    { value: 380, itemStyle: { color: '#8b5cf6', borderRadius: [4, 4, 4, 4] } }
  ]}
  barWidth="70%"
/>
```

---

## 9. ActiveBarChart

### Props
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
  activeIndex?: number;
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

### Default Values
```typescript
{
  xAxisData: ['Chrome', 'Safari', 'Firefox', 'Edge', 'Other'],
  activeIndex: 2,
  width: 220,
  height: 350
}
```

### Usage
```typescript
<ActiveBarChart
  xAxisData={['Product A', 'Product B', 'Product C', 'Product D']}
  activeIndex={1}
  data={[
    { value: 320, itemStyle: { color: '#93c5fd', borderRadius: [4, 4, 4, 4] } },
    { value: 580, itemStyle: { color: '#3b82f6', borderColor: '#1d4ed8', borderWidth: 2, borderType: 'dashed', borderRadius: [4, 4, 4, 4] } },
    { value: 410, itemStyle: { color: '#93c5fd', borderRadius: [4, 4, 4, 4] } },
    { value: 290, itemStyle: { color: '#93c5fd', borderRadius: [4, 4, 4, 4] } }
  ]}
/>
```

---

## 10. NegativeBarChart

### Props
```typescript
interface NegativeBarChartProps {
  xAxisData?: AxisData;
  data?: number[];
  positiveColor?: string;
  negativeColor?: string;
  barWidth?: string;
  borderRadius?: number[];
  showLabels?: boolean;
  width?: number;
  height?: number;
  theme?: Partial<ChartTheme>;
}
```

### Default Values
```typescript
{
  xAxisData: ['January', 'February', 'March', 'April', 'May', 'June'],
  data: [120, 150, -180, 110, -80, 160],
  barWidth: '60%',
  borderRadius: [4, 4, 4, 4],
  showLabels: true,
  width: 220,
  height: 350
}
```

### Usage
```typescript
<NegativeBarChart
  xAxisData={['Q1', 'Q2', 'Q3', 'Q4']}
  data={[450, -320, 610, -180]}
  positiveColor="#10b981"
  negativeColor="#ef4444"
  barWidth="70%"
  showLabels={true}
/>
```

---

## Common Patterns

### Customizing All Charts with Theme

```typescript
import { ChartTheme } from '@/contexts/chart-theme.context';

const customTheme: Partial<ChartTheme> = {
  series: {
    colors: ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b']
  },
  axis: {
    x: { tickLabelColor: '#6b7280' },
    y: { 
      tickLabelColor: '#6b7280',
      tickColor: '#e5e7eb',
      lineColor: '#d1d5db'
    }
  }
};

<DefaultBarChart theme={customTheme} />
```

### Dynamic Data

```typescript
const [chartData, setChartData] = useState([100, 150, 120, 180]);

<DefaultBarChart
  xAxisData={['Q1', 'Q2', 'Q3', 'Q4']}
  data={chartData}
/>
```

### Responsive Width

The `width` prop is managed by the `withResponsiveContainer` HOC and will automatically adjust to fit the container when not explicitly set.

```typescript
// Will fill container width
<DefaultBarChart />

// Fixed width
<DefaultBarChart width={300} />
```

### Custom Axis Labels with Object Array

```typescript
<DefaultBarChart
  xAxisData={[
    { label: '$0-10k', value: 0 },
    { label: '$10-20k', value: 1 },
    { label: '$20-30k', value: 2 },
    { label: '$30k+', value: 3 }
  ]}
  data={[120, 180, 240, 310]}
/>
```

---

## Prop Types Reference

### Common Props (Available on Most Components)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `number` | `220` | Chart width in pixels |
| `height` | `number` | `350` or `450` | Chart height in pixels |
| `theme` | `Partial<ChartTheme>` | `undefined` | Custom theme overrides |
| `data` | `number[]` | Component-specific | Chart data values |
| `xAxisData` | `AxisData` | Component-specific | X-axis labels (vertical charts) |
| `yAxisData` | `AxisData` | Component-specific | Y-axis labels (horizontal charts) |
| `color` | `string` | Theme color | Bar color (hex or rgba) |
| `borderRadius` | `number[]` | `[4, 4, 4, 4]` | Border radius [TL, TR, BR, BL] |
| `barWidth` | `string` | Component-specific | Bar width as percentage |

### Series Props (Multi-series Components)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `series` | `Array<{ name: string; data: number[] }>` | Component-specific | Multiple data series |

### Specialized Props

| Prop | Type | Components | Description |
|------|------|------------|-------------|
| `labelPosition` | `'top' \| 'inside' \| 'insideTop'` | LabelBarChart | Label placement |
| `positiveColor` | `string` | NegativeBarChart | Color for positive values |
| `negativeColor` | `string` | NegativeBarChart | Color for negative values |
| `showLabels` | `boolean` | NegativeBarChart | Show/hide labels |
| `activeIndex` | `number` | ActiveBarChart | Index of highlighted bar |
| `stack` | `string` | StackedBarChart | Stack group identifier |
| `primaryColor` | `string` | CustomLabelBarChart | Main bar color |
| `secondaryColor` | `string` | CustomLabelBarChart | Helper series color |

---

## Type Definitions

### Complete Type Reference

```typescript
// Axis Data
type AxisData = string[] | Array<{ label: string; value: number }>;

// Item Style (for MixedBarChart, ActiveBarChart)
interface ItemStyle {
  color: string;
  borderRadius: number[];
  borderColor?: string;
  borderWidth?: number;
  borderType?: 'solid' | 'dashed';
}

// Series Item (for MultipleBarChart, StackedBarChart)
interface SeriesItem {
  name: string;
  data: number[];
  borderRadius?: number[];
}

// Chart Theme
interface ChartTheme {
  series: {
    colors: string[];
  };
  axis: {
    x: {
      labelColor: string;
    };
    y: {
      labelColor: string;
      lineColor: string;
      lineWidth: number;
      tickColor: string;
      tickWidth: number;
    };
  };
}
```

---

## Notes

- All components are wrapped with `withResponsiveContainer` and `withChartTheme` HOCs
- Theme colors are automatically applied from `ChartThemeContext`
- Border radius format: `[topLeft, topRight, bottomRight, bottomLeft]`
- Bar width should be specified as a percentage string (e.g., `'70%'`)
- Use `xAxisData` for vertical bar charts, `yAxisData` for horizontal bar charts
- All components include proper TypeScript typing for IDE autocomplete


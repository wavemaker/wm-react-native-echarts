# Radar Chart Components - Props API

All radar chart components expose customizable properties for indicators, data, and chart styling. This makes them flexible and reusable with your own data.

## Common Types

### RadarIndicator

```typescript
interface RadarIndicator {
  name: string;  // Axis label (e.g., 'Speed', 'January', 'Sales')
  max: number;   // Maximum value for this axis
}
```

### RadarSeriesData

```typescript
interface RadarSeriesData {
  value: number[];   // Data values for each indicator
  name?: string;     // Optional series name (for legend)
}
```

## Common Props

### Single Series Charts
(BasicRadarChart, DotsRadarChart, LinesOnlyRadarChart, CustomLabelRadarChart, GridNoneRadarChart, GridCircleRadarChart, GridCircleNoLinesRadarChart)

```typescript
interface Props {
  indicators?: RadarIndicator[];       // Axis configuration
  data?: number[];                     // Chart data (must match indicators length)
  width?: number;                      // Chart width in pixels
  height?: number;                     // Chart height in pixels
  theme?: Partial<ChartTheme>;         // Theme customization
}
```

### Filled Grid Charts
(GridCircleFilledRadarChart, GridFilledRadarChart)

```typescript
interface Props {
  indicators?: RadarIndicator[];       // Axis configuration
  data?: number[];                     // Chart data (must match indicators length)
  areaColor?: string;                  // Custom area fill color
  width?: number;                      // Chart width in pixels
  height?: number;                     // Chart height in pixels
  theme?: Partial<ChartTheme>;         // Theme customization
}
```

### Multi-Series Charts
(MultipleRadarChart, LegendRadarChart)

```typescript
interface Props {
  indicators?: RadarIndicator[];       // Axis configuration
  series?: RadarSeriesData[];          // Multiple data series
  width?: number;                      // Chart width in pixels
  height?: number;                     // Chart height in pixels
  theme?: Partial<ChartTheme>;         // Theme customization
}
```

## Usage Examples

### 1. Default Usage (with default data)

```typescript
import { BasicRadarChart } from '@/components/chart/radar/BasicRadarChart';

export default function MyScreen() {
  return <BasicRadarChart />;
}
```

### 2. Custom Data (Single Series)

```typescript
import { BasicRadarChart } from '@/components/chart/radar/BasicRadarChart';

export default function MyScreen() {
  return (
    <BasicRadarChart
      indicators={[
        { name: 'Sales', max: 100 },
        { name: 'Marketing', max: 100 },
        { name: 'Development', max: 100 },
        { name: 'Support', max: 100 },
        { name: 'HR', max: 100 },
      ]}
      data={[80, 75, 90, 85, 70]}
      height={350}
    />
  );
}
```

### 3. Radar Chart with Dots/Markers

```typescript
import { DotsRadarChart } from '@/components/chart/radar/DotsRadarChart';

export default function MyScreen() {
  return (
    <DotsRadarChart
      indicators={[
        { name: 'Speed', max: 100 },
        { name: 'Strength', max: 100 },
        { name: 'Intelligence', max: 100 },
        { name: 'Agility', max: 100 },
        { name: 'Endurance', max: 100 },
      ]}
      data={[85, 70, 90, 75, 80]}
      height={350}
    />
  );
}
```

### 4. Lines Only (No Fill)

```typescript
import { LinesOnlyRadarChart } from '@/components/chart/radar/LinesOnlyRadarChart';

export default function MyScreen() {
  return (
    <LinesOnlyRadarChart
      indicators={[
        { name: 'Q1', max: 400 },
        { name: 'Q2', max: 400 },
        { name: 'Q3', max: 400 },
        { name: 'Q4', max: 400 },
      ]}
      data={[320, 280, 350, 310]}
      height={350}
    />
  );
}
```

### 5. Custom Labels (Value Display)

```typescript
import { CustomLabelRadarChart } from '@/components/chart/radar/CustomLabelRadarChart';

export default function MyScreen() {
  return (
    <CustomLabelRadarChart
      indicators={[
        { name: 'Product A', max: 100 },
        { name: 'Product B', max: 100 },
        { name: 'Product C', max: 100 },
        { name: 'Product D', max: 100 },
        { name: 'Product E', max: 100 },
      ]}
      data={[90, 85, 78, 92, 88]}
      height={350}
    />
  );
}
```

### 6. No Grid Lines

```typescript
import { GridNoneRadarChart } from '@/components/chart/radar/GridNoneRadarChart';

export default function MyScreen() {
  return (
    <GridNoneRadarChart
      indicators={[
        { name: 'Category 1', max: 100 },
        { name: 'Category 2', max: 100 },
        { name: 'Category 3', max: 100 },
        { name: 'Category 4', max: 100 },
        { name: 'Category 5', max: 100 },
        { name: 'Category 6', max: 100 },
      ]}
      data={[70, 85, 90, 75, 80, 88]}
      height={350}
    />
  );
}
```

### 7. Circular Grid

```typescript
import { GridCircleRadarChart } from '@/components/chart/radar/GridCircleRadarChart';

export default function MyScreen() {
  return (
    <GridCircleRadarChart
      indicators={[
        { name: 'Feature 1', max: 10 },
        { name: 'Feature 2', max: 10 },
        { name: 'Feature 3', max: 10 },
        { name: 'Feature 4', max: 10 },
        { name: 'Feature 5', max: 10 },
      ]}
      data={[8, 7, 9, 6, 8]}
      height={350}
    />
  );
}
```

### 8. Circular Grid Without Axis Lines

```typescript
import { GridCircleNoLinesRadarChart } from '@/components/chart/radar/GridCircleNoLinesRadarChart';

export default function MyScreen() {
  return (
    <GridCircleNoLinesRadarChart
      indicators={[
        { name: 'North', max: 100 },
        { name: 'East', max: 100 },
        { name: 'South', max: 100 },
        { name: 'West', max: 100 },
      ]}
      data={[75, 85, 70, 80]}
      height={350}
    />
  );
}
```

### 9. Circular Grid with Filled Background

```typescript
import { GridCircleFilledRadarChart } from '@/components/chart/radar/GridCircleFilledRadarChart';

export default function MyScreen() {
  return (
    <GridCircleFilledRadarChart
      indicators={[
        { name: 'Speed', max: 100 },
        { name: 'Power', max: 100 },
        { name: 'Defense', max: 100 },
        { name: 'Accuracy', max: 100 },
        { name: 'Stamina', max: 100 },
      ]}
      data={[85, 70, 90, 75, 80]}
      areaColor="rgb(29, 78, 216)"
      height={350}
    />
  );
}
```

### 10. Polygon Grid with Filled Background

```typescript
import { GridFilledRadarChart } from '@/components/chart/radar/GridFilledRadarChart';

export default function MyScreen() {
  return (
    <GridFilledRadarChart
      indicators={[
        { name: 'Attack', max: 100 },
        { name: 'Defense', max: 100 },
        { name: 'Speed', max: 100 },
        { name: 'Magic', max: 100 },
        { name: 'HP', max: 100 },
        { name: 'MP', max: 100 },
      ]}
      data={[80, 75, 90, 85, 70, 65]}
      areaColor="rgb(220, 38, 38)"
      height={350}
    />
  );
}
```

### 11. Multiple Series

```typescript
import { MultipleRadarChart } from '@/components/chart/radar/MultipleRadarChart';

export default function MyScreen() {
  return (
    <MultipleRadarChart
      indicators={[
        { name: 'Q1', max: 400 },
        { name: 'Q2', max: 400 },
        { name: 'Q3', max: 400 },
        { name: 'Q4', max: 400 },
      ]}
      series={[
        { name: '2023', value: [320, 280, 350, 310] },
        { name: '2024', value: [280, 310, 330, 340] },
      ]}
      height={350}
    />
  );
}
```

### 12. Multiple Series with Legend

```typescript
import { LegendRadarChart } from '@/components/chart/radar/LegendRadarChart';

export default function MyScreen() {
  return (
    <LegendRadarChart
      indicators={[
        { name: 'Speed', max: 100 },
        { name: 'Strength', max: 100 },
        { name: 'Intelligence', max: 100 },
        { name: 'Agility', max: 100 },
        { name: 'Endurance', max: 100 },
      ]}
      series={[
        { name: 'Character A', value: [85, 70, 90, 75, 80] },
        { name: 'Character B', value: [70, 90, 75, 85, 70] },
        { name: 'Character C', value: [75, 80, 85, 80, 75] },
      ]}
      height={350}
    />
  );
}
```

### 13. Dynamic Data from API

```typescript
import { BasicRadarChart } from '@/components/chart/radar/BasicRadarChart';
import { useEffect, useState } from 'react';

export default function MyScreen() {
  const [chartData, setChartData] = useState({
    indicators: [],
    data: [],
  });

  useEffect(() => {
    // Fetch data from API
    fetch('https://api.example.com/performance')
      .then(res => res.json())
      .then(data => {
        setChartData({
          indicators: data.categories.map((cat: any) => ({
            name: cat.name,
            max: cat.max,
          })),
          data: data.values,
        });
      });
  }, []);

  return (
    <BasicRadarChart
      indicators={chartData.indicators}
      data={chartData.data}
    />
  );
}
```

### 14. Character Stats Comparison

```typescript
import { LegendRadarChart } from '@/components/chart/radar/LegendRadarChart';
import { useState } from 'react';
import { View, Button } from 'react-native';

export default function CharacterComparison() {
  const [selectedCharacters, setSelectedCharacters] = useState(['warrior', 'mage']);

  const characterData = {
    warrior: { name: 'Warrior', value: [90, 85, 60, 70, 95] },
    mage: { name: 'Mage', value: [50, 60, 95, 85, 55] },
    rogue: { name: 'Rogue', value: [75, 70, 70, 95, 75] },
  };

  const indicators = [
    { name: 'Strength', max: 100 },
    { name: 'Defense', max: 100 },
    { name: 'Magic', max: 100 },
    { name: 'Speed', max: 100 },
    { name: 'HP', max: 100 },
  ];

  return (
    <View>
      <View style={{ flexDirection: 'row', gap: 10, padding: 10 }}>
        <Button title="Warrior" onPress={() => setSelectedCharacters(['warrior'])} />
        <Button title="Mage" onPress={() => setSelectedCharacters(['mage'])} />
        <Button title="Compare All" onPress={() => setSelectedCharacters(['warrior', 'mage', 'rogue'])} />
      </View>
      <LegendRadarChart
        indicators={indicators}
        series={selectedCharacters.map(char => characterData[char as keyof typeof characterData])}
      />
    </View>
  );
}
```

### 15. Skills Assessment Dashboard

```typescript
import { ScrollView, Text, View } from 'react-native';
import { BasicRadarChart } from '@/components/chart/radar/BasicRadarChart';
import { GridCircleFilledRadarChart } from '@/components/chart/radar/GridCircleFilledRadarChart';
import { LegendRadarChart } from '@/components/chart/radar/LegendRadarChart';

export default function SkillsDashboard() {
  const technicalSkills = [
    { name: 'Frontend', max: 100 },
    { name: 'Backend', max: 100 },
    { name: 'Database', max: 100 },
    { name: 'DevOps', max: 100 },
    { name: 'Mobile', max: 100 },
  ];

  const softSkills = [
    { name: 'Communication', max: 100 },
    { name: 'Teamwork', max: 100 },
    { name: 'Leadership', max: 100 },
    { name: 'Problem Solving', max: 100 },
  ];

  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
          Technical Skills
        </Text>
        <BasicRadarChart
          indicators={technicalSkills}
          data={[85, 90, 75, 80, 70]}
        />
      </View>

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
          Soft Skills
        </Text>
        <GridCircleFilledRadarChart
          indicators={softSkills}
          data={[90, 85, 80, 95]}
          areaColor="rgb(34, 197, 94)"
        />
      </View>

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
          Team Comparison
        </Text>
        <LegendRadarChart
          indicators={technicalSkills}
          series={[
            { name: 'John', value: [85, 90, 75, 80, 70] },
            { name: 'Sarah', value: [75, 85, 90, 70, 85] },
            { name: 'Mike', value: [80, 75, 80, 90, 75] },
          ]}
        />
      </View>
    </ScrollView>
  );
}
```

## Color Palette Suggestions

### Primary Colors
- Blue: `#60a5fa` / `rgb(96, 165, 250)`
- Dark Blue: `#3b82f6` / `rgb(59, 130, 246)`
- Darker Blue: `#1e40af` / `rgb(30, 64, 175)`

### Custom Area Colors
- Blue: `rgb(29, 78, 216)`
- Green: `rgb(34, 197, 94)`
- Red: `rgb(220, 38, 38)`
- Purple: `rgb(139, 92, 246)`
- Orange: `rgb(249, 115, 22)`

### Grid Background Gradient
- Level 1: `rgba(96, 165, 250, 0.1)`
- Level 2: `rgba(96, 165, 250, 0.2)`
- Level 3: `rgba(96, 165, 250, 0.3)`
- Level 4: `rgba(96, 165, 250, 0.4)`
- Level 5: `rgba(96, 165, 250, 0.5)`
- Level 6: `rgba(96, 165, 250, 0.6)`

## Tips

1. **Data Consistency**: Ensure `data` array length matches `indicators` array length
2. **Max Values**: Set appropriate `max` values for each indicator based on your data scale
3. **Indicator Names**: Keep names concise for better readability on the chart
4. **Multiple Series**: Use different opacity levels or colors to distinguish overlapping series
5. **Theme**: All charts automatically adapt to the theme provided via ChartThemeContext
6. **Height**: Default is 300px for all radar charts, adjust based on your layout needs
7. **Shape**: Use 'polygon' for angular shapes, 'circle' for rounded shapes

## Best Practices

### Choosing the Right Chart

- **BasicRadarChart**: General-purpose comparison across multiple dimensions
- **DotsRadarChart**: Emphasize specific data points with markers
- **LinesOnlyRadarChart**: Focus on the pattern without area fill distraction
- **CustomLabelRadarChart**: Show exact values on the chart
- **GridNoneRadarChart**: Minimalist design without grid clutter
- **GridCircleRadarChart**: Circular/radial data visualization
- **GridCircleFilledRadarChart**: Highlight grid levels with background
- **MultipleRadarChart**: Compare 2-3 different datasets
- **LegendRadarChart**: Compare multiple datasets with clear identification

### Data Preparation

```typescript
// Good: Consistent scale across all indicators
const indicators = [
  { name: 'Speed', max: 100 },
  { name: 'Power', max: 100 },
  { name: 'Defense', max: 100 },
];
const data = [85, 70, 90];

// Bad: Inconsistent scales make comparison difficult
const indicators = [
  { name: 'Speed', max: 100 },
  { name: 'Power', max: 50 },
  { name: 'Defense', max: 200 },
];
```

### Indicator Count

- **Recommended**: 3-8 indicators for optimal readability
- **Minimum**: 3 indicators (forms a triangle)
- **Maximum**: 12 indicators (chart becomes crowded beyond this)

## TypeScript Support

All components are fully typed with TypeScript interfaces. Your IDE will provide autocomplete and type checking for all props.

## Theme Customization

You can customize the theme by passing a theme prop:

```typescript
import { BasicRadarChart } from '@/components/chart/radar/BasicRadarChart';

export default function MyScreen() {
  return (
    <BasicRadarChart
      indicators={[
        { name: 'Sales', max: 100 },
        { name: 'Marketing', max: 100 },
        { name: 'Development', max: 100 },
        { name: 'Support', max: 100 },
        { name: 'HR', max: 100 },
      ]}
      data={[80, 75, 90, 85, 70]}
      theme={{
        series: {
          colors: ['#10b981', '#3b82f6', '#f59e0b', '#ec4899'],
        },
        axis: {
          x: { labelColor: '#666666' },
          y: {
            tickColor: 'rgba(0, 0, 0, 0.1)',
            lineColor: 'rgba(0, 0, 0, 0.2)',
          },
        },
      }}
    />
  );
}
```

## Common Use Cases

### 1. Skills Assessment
Track individual or team skills across multiple dimensions

### 2. Product Comparison
Compare features and specifications of different products

### 3. Performance Metrics
Visualize KPIs and performance metrics across categories

### 4. Character Stats (Gaming)
Display game character attributes and abilities

### 5. Survey Results
Show survey responses across multiple questions or categories

### 6. Financial Metrics
Compare financial performance across different areas

### 7. Athlete Performance
Track athletic performance across various physical attributes

### 8. Quality Metrics
Display product or service quality across different criteria


import { useTheme } from '@/contexts/ThemeContext';
import { AxesAreaChart } from '@/components/chart/area/axes-area.chart';
import { DefaultAreaChart } from '@/components/chart/area/default-area.chart';
import { GradientAreaChart } from '@/components/chart/area/gradient-area.chart';
import { IconsAreaChart } from '@/components/chart/area/icons-area.chart';
import { InteractiveAreaChart } from '@/components/chart/area/interactive-area.chart';
import { LegendAreaChart } from '@/components/chart/area/legend-area.chart';
import { LinearAreaChart } from '@/components/chart/area/linear-area.chart';
import { StackedAreaChart } from '@/components/chart/area/stacked-area.chart';
import { StackedExpandedAreaChart } from '@/components/chart/area/stacked-expanded-area.chart';
import { StepAreaChart } from '@/components/chart/area/step-area.chart';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AreaChartScreen() {
  const { colorScheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#f5f5f5',
    },
  });

  return (
    <ScrollView style={styles.container}>
      {/* Main Interactive Chart */}
      <InteractiveAreaChart 
        data={[
          {
            name: 'Mobile',
            data: [5000, 7200, 15500, 18700, 22100, 19500, 25400, 23900, 27600, 26000, 23600, 25100, 23900, 23500, 23700, 23900],
          },
          {
            name: 'Desktop',
            data: [4000, 6400, 13500, 17500, 21200, 24600, 22900, 26300, 25000, 21600, 23900, 22700, 21900, 22100, 22300, 23800],
          },
        ]}
      />

      {/* Grid of smaller charts */}
      <DefaultAreaChart 
        data={[150, 230, 180, 120, 200, 250]}
      />
      <LinearAreaChart 
        data={[180, 220, 240, 160, 190, 270]}
      />
      <StepAreaChart 
        data={[160, 220, 220, 180, 180, 240]}
      />
      <LegendAreaChart 
        data={[
          {
            name: 'Mobile',
            data: [140, 180, 200, 150, 160, 210],
          },
          {
            name: 'Desktop',
            data: [80, 120, 140, 90, 100, 150],
          },
        ]}
      />
      <StackedAreaChart 
        data={[
          {
            data: [120, 132, 101, 134, 90, 230],
          },
          {
            data: [80, 82, 91, 104, 70, 140],
          },
        ]}
      />
      <StackedExpandedAreaChart 
        xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        data={[
          {
            data: [60, 70, 55, 65, 60, 70],
          },
          {
            data: [40, 30, 45, 35, 40, 30],
          },
        ]}
      />
      <IconsAreaChart 
        data={[
          {
            name: 'Mobile',
            data: [140, 180, 200, 150, 160, 210],
          },
          {
            name: 'Desktop',
            data: [80, 120, 140, 90, 100, 150],
          },
        ]}
      />
      <GradientAreaChart 
        data={[
          {
            data: [140, 180, 200, 150, 160, 210],
          },
          {
            data: [80, 120, 140, 90, 100, 150],
          },
        ]}
      />
      <AxesAreaChart 
        data={[200, 350, 500, 300, 400, 600]}
      />
    </ScrollView>
  );
}

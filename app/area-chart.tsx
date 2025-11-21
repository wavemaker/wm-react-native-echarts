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
    header: {
      padding: 20,
      alignItems: 'center',
      backgroundColor: colorScheme === 'dark' ? '#2a2a2a' : '#fff',
      marginBottom: 10,
    },
    headerTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 5,
      color: colorScheme === 'dark' ? '#ffffff' : '#333333',
    },
    headerSubtitle: {
      fontSize: 16,
      opacity: 0.7,
      textAlign: 'center',
      color: colorScheme === 'dark' ? '#cccccc' : '#666666',
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Area Charts Gallery
        </Text>
        <Text style={styles.headerSubtitle}>
          Various area chart types with smooth gradients
        </Text>
      </View>

      {/* Main Interactive Chart */}
      <InteractiveAreaChart 
        xAxisData={['Apr 6', 'Apr 11', 'Apr 16', 'Apr 22', 'Apr 28', 'May 4', 'May 9', 'May 15', 'May 21', 'May 27', 'Jun 1', 'Jun 6', 'Jun 11', 'Jun 17', 'Jun 23', 'Jun 30']}
        series={[
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
        xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        data={[150, 230, 180, 120, 200, 250]}
      />
      <LinearAreaChart 
        xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        data={[180, 220, 240, 160, 190, 270]}
      />
      <StepAreaChart 
        xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        data={[160, 220, 220, 180, 180, 240]}
      />
      <LegendAreaChart 
        xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        series={[
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
        xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        series={[
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
        series={[
          {
            data: [60, 70, 55, 65, 60, 70],
          },
          {
            data: [40, 30, 45, 35, 40, 30],
          },
        ]}
      />
      <IconsAreaChart 
        xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        series={[
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
        xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        series={[
          {
            data: [140, 180, 200, 150, 160, 210],
          },
          {
            data: [80, 120, 140, 90, 100, 150],
          },
        ]}
      />
      <AxesAreaChart 
        xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        yAxisData={[
          { label: '0', value: 0 },
          { label: '200', value: 200 },
          { label: '400', value: 400 },
          { label: '600', value: 600 },
          { label: '800', value: 800 },
        ]}
        data={[200, 350, 500, 300, 400, 600]}
      />
    </ScrollView>
  );
}

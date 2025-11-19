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
      <InteractiveAreaChart />

      {/* Grid of smaller charts */}
      <DefaultAreaChart />
      <LinearAreaChart />
      <StepAreaChart />
      <LegendAreaChart />
      <StackedAreaChart />
      <StackedExpandedAreaChart />
      <IconsAreaChart />
      <GradientAreaChart />
      <AxesAreaChart />
    </ScrollView>
  );
}

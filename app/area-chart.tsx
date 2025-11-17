import { useTheme } from '@/contexts/ThemeContext';
import { AxesAreaChart } from '@/components/chart/area/AxesAreaChart';
import { DefaultAreaChart } from '@/components/chart/area/DefaultAreaChart';
import { GradientAreaChart } from '@/components/chart/area/GradientAreaChart';
import { IconsAreaChart } from '@/components/chart/area/IconsAreaChart';
import { InteractiveAreaChart } from '@/components/chart/area/InteractiveAreaChart';
import { LegendAreaChart } from '@/components/chart/area/LegendAreaChart';
import { LinearAreaChart } from '@/components/chart/area/LinearAreaChart';
import { StackedAreaChart } from '@/components/chart/area/StackedAreaChart';
import { StackedExpandedAreaChart } from '@/components/chart/area/StackedExpandedAreaChart';
import { StepAreaChart } from '@/components/chart/area/StepAreaChart';
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

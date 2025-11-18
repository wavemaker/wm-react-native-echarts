import {
  CustomDotsLineChart,
  CustomLabelLineChart,
  DefaultLineChart,
  DotsColorsLineChart,
  DotsLineChart,
  InteractiveLineChart,
  LabelLineChart,
  LinearLineChart,
  MultipleLineChart,
  StepLineChart,
} from '@/components/chart/line';
import { useTheme } from '@/contexts/ThemeContext';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function LineChartScreen() {
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
        <Text style={styles.headerTitle}>Line Charts Gallery</Text>
        <Text style={styles.headerSubtitle}>
          Various line chart types based on documentation examples
        </Text>
      </View>

      <InteractiveLineChart />
      <DefaultLineChart />
      <LinearLineChart />
      <StepLineChart />
      <MultipleLineChart />
      <DotsLineChart />
      <CustomDotsLineChart />
      <DotsColorsLineChart />
      <LabelLineChart />
      <CustomLabelLineChart />
    </ScrollView>
  );
}
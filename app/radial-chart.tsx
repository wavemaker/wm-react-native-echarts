import {
  GridRadialChart,
  LabelRadialChart,
  ShapeRadialChart,
  StackedRadialChart,
  TextRadialChart,
} from '@/components/chart/radial';
import { useTheme } from '@/contexts/ThemeContext';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function RadialChartScreen() {
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
        <Text style={styles.headerTitle}>Radial Charts Gallery</Text>
        <Text style={styles.headerSubtitle}>
          Various radial chart types with modern styling
        </Text>
      </View>

      <LabelRadialChart 
        data={[
          { label: 'Chrome', value: 85 },
          { label: 'Safari', value: 70 },
          { label: 'Firefox', value: 60 },
          { label: 'Edge', value: 45 },
          { label: 'Other', value: 30 },
        ]}
      />
      <GridRadialChart 
        data={[
          { label: 'A', value: 85, color: '#60a5fa' },
          { label: 'B', value: 70, color: '#3b82f6' },
          { label: 'C', value: 60, color: '#2563eb' },
          { label: 'D', value: 45, color: '#1e40af' },
          { label: 'E', value: 30, color: '#1e3a8a' },
        ]}
      />
      <TextRadialChart 
        value={200}
        maxValue={300}
        label="Visitors"
      />
      <ShapeRadialChart 
        value={1260}
        maxValue={1500}
        label="Visitors"
      />
      <StackedRadialChart 
        series={[
          { name: 'Inner', value: 30, color: '#93c5fd' },
          { name: 'Outer', value: 20, color: '#3b82f6' },
        ]}
      />
    </ScrollView>
  );
}

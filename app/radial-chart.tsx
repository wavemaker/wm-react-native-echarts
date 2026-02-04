import { RadialChart } from '@/components/chart/radial';
import { useTheme } from '@/contexts/ThemeContext';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function RadialChartScreen() {
  const { colorScheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#f5f5f5',
    },
  });

  return (
    <ScrollView style={styles.container}>
      <RadialChart
        data={[
          { value: 92 },
          { value: 82 },
          { value: 52 },
          { value: 42 },
          { value: 28 },
        ]}
        width={400}
        height={400}
        innerRadius="20%"
      />
      <RadialChart
        data={[
          { label: 'A', value: 85 },
          { label: 'B', value: 70 },
          { label: 'C', value: 60 },
          { label: 'D', value: 45 },
          { label: 'E', value: 30 },
        ]}
        width={400}
        height={400}
        colors={['#60a5fa', '#3b82f6', '#2563eb', '#1e40af', '#1e3a8a']}
      />
      <RadialChart
        data={[{ value: 67 }]}
        width={400}
        height={400}
        centerText="200 / 300"
      />
      <RadialChart
        data={[{ value: 84 }]}
        width={400}
        height={400}
        centerText="1260 / 1500"
      />
      <RadialChart
        data={[
          { label: 'Inner', value: 30 },
          { label: 'Outer', value: 20 },
        ]}
        width={400}
        height={400}
        innerRadius="40%"
        colors={['#93c5fd', '#3b82f6']}
      />
    </ScrollView>
  );
}

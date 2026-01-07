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

      <InteractiveLineChart 
        xAxisData={['Apr 2', 'Apr 7', 'Apr 12', 'Apr 17', 'Apr 22', 'Apr 28', 'May 4', 'May 9', 'May 15', 'May 21', 'May 27', 'Jun 2', 'Jun 7', 'Jun 12', 'Jun 18', 'Jun 24', 'Jun 30']}
        data={[
          {
            name: 'Desktop',
            data: [7000, 8900, 15200, 18900, 22300, 19800, 25600, 24100, 27800, 26200, 23800, 25300, 24100, 23700, 23900, 24100, 23828],
          },
          {
            name: 'Mobile',
            data: [5000, 6200, 12500, 17700, 21400, 24800, 23100, 26500, 25200, 21800, 24100, 22900, 22100, 22300, 22500, 24010],
          },
        ]}
      />
      <DefaultLineChart 
        xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        data={[142, 267, 189, 95, 178, 231]}
      />
      <LinearLineChart 
        xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        data={[180, 220, 240, 160, 190, 270]}
      />
      <StepLineChart 
        xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        data={[170, 170, 230, 230, 180, 180]}
      />
      <MultipleLineChart 
        xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        data={[
          { name: 'Series A', data: [198, 287, 251, 89, 223, 202] },
          { name: 'Series B', data: [135, 185, 165, 95, 85, 125] }
        ]}
      />
      <DotsLineChart 
        xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        data={[174, 291, 249, 87, 197, 226]}
      />
      <CustomDotsLineChart 
        xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        data={[186, 305, 237, 73, 209, 214]}
      />
      <DotsColorsLineChart 
        xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        data={[
          { value: 186, itemStyle: { color: '#1e40af' } },
          { value: 305, itemStyle: { color: '#3b82f6' } },
          { value: 237, itemStyle: { color: '#60a5fa' } },
          { value: 73, itemStyle: { color: '#93c5fd' } },
          { value: 209, itemStyle: { color: '#1e40af' } },
          { value: 214, itemStyle: { color: '#3b82f6' } },
        ]}
      />
      <LabelLineChart 
        xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        data={[186, 305, 237, 73, 209, 214]}
      />
      <CustomLabelLineChart 
        xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        data={[
          { value: 186, label: { formatter: 'Chrome' } },
          { value: 305, label: { formatter: 'Safari' } },
          { value: 237, label: { formatter: 'Firefox' } },
          { value: 73, label: { formatter: 'Edge' } },
          { value: 209, label: { formatter: 'Other' } },
          { value: 214 },
        ]}
      />
    </ScrollView>
  );
}
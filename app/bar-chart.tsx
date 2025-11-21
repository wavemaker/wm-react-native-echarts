import {
  ActiveBarChart,
  CustomLabelBarChart,
  DefaultBarChart,
  HorizontalBarChart,
  InteractiveBarChart,
  LabelBarChart,
  MixedBarChart,
  MultipleBarChart,
  NegativeBarChart,
  StackedBarChart,
} from '@/components/chart/bar';
import { useTheme } from '@/contexts/ThemeContext';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function BarChartScreen() {
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
          Bar Charts Gallery
        </Text>
        <Text style={styles.headerSubtitle}>
          Various bar chart types with modern styling
        </Text>
      </View>

      {/* Main Interactive Chart */}
      <InteractiveBarChart 
        xAxisData={['Apr 1', 'Apr 8', 'Apr 15', 'Apr 22', 'Apr 29', 'May 6', 'May 13', 'May 20', 'May 27', 'Jun 3', 'Jun 10', 'Jun 17', 'Jun 24']}
        data={[800, 1200, 950, 1800, 1100, 1500, 1300, 950, 1700, 1250, 1600, 1050, 1400]}
      />

      {/* Grid of smaller charts */}
      <DefaultBarChart 
        xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        data={[186, 305, 237, 73, 209, 214]}
      />
      <HorizontalBarChart 
        yAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        data={[186, 305, 237, 73, 209, 214]}
      />
      <MultipleBarChart 
        xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        series={[
          { name: 'Series A', data: [186, 305, 237, 73, 209, 214] },
          { name: 'Series B', data: [150, 280, 200, 90, 180, 190] }
        ]}
      />
      <StackedBarChart 
        xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        series={[
          {
            name: 'Desktop',
            data: [100, 150, 120, 40, 110, 120],
            borderRadius: [0, 0, 4, 4],
          },
          {
            name: 'Mobile',
            data: [86, 155, 117, 33, 99, 94],
            borderRadius: [4, 4, 0, 0],
          },
        ]}
      />
      <LabelBarChart 
        xAxisData={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']}
        data={[186, 305, 237, 73, 209, 214]}
      />
      <CustomLabelBarChart 
        yAxisData={['January', 'February', 'March', 'April', 'May', 'June']}
        data={[100, 150, 120, 40, 110, 120]}
      />
      <MixedBarChart 
        yAxisData={['Other', 'Edge', 'Safari', 'Firefox', 'Chrome']}
        data={[8, 12, 35, 40, 65]}
      />
      <ActiveBarChart 
        xAxisData={['Chrome', 'Safari', 'Firefox', 'Edge', 'Other']}
        data={[275, 200, 187, 90, 60]}
      />
      <NegativeBarChart 
        xAxisData={['January', 'February', 'March', 'April', 'May', 'June']}
        data={[120, 150, -180, 110, -80, 160]}
      />
    </ScrollView>
  );
}
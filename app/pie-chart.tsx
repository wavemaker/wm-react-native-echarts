import {
  BasicPieChart,
  DonutActiveChart,
  DonutChart,
  DonutTextChart,
  LabelPieChart,
  LegendPieChart,
  StackedPieChart,
} from '@/components/chart/pie';
import { useTheme } from '@/contexts/ThemeContext';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function PieChartScreen() {
  const { colorScheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#f5f5f5',
    },
    chartContainer: {
      backgroundColor: colorScheme === 'dark' ? '#2a2a2a' : '#fff',
      marginHorizontal: 10,
      marginBottom: 15,
      borderRadius: 10,
      padding: 15,
      shadowColor: colorScheme === 'dark' ? '#000' : '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: colorScheme === 'dark' ? 0.3 : 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    chart: {
      marginVertical: 8,
      borderRadius: 16,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.chartContainer}>
        <BasicPieChart 
          height={400}
          data={[
            { value: 275, name: 'Desktop' },
            { value: 200, name: 'Mobile' },
            { value: 187, name: 'Tablet' },
            { value: 90, name: 'Other' },
          ]}
        />
      </View>

      <View style={styles.chartContainer}>
        <LabelPieChart 
          height={400}
          data={[
            { value: 275, name: 'Desktop' },
            { value: 200, name: 'Mobile' },
            { value: 187, name: 'Tablet' },
            { value: 173, name: 'Other' },
            { value: 90, name: 'Unknown' },
          ]}
        />
      </View>

      <View style={styles.chartContainer}>
        <LegendPieChart 
          height={400}
          data={[
            { value: 275, name: 'Chrome' },
            { value: 200, name: 'Safari' },
            { value: 187, name: 'Firefox' },
            { value: 173, name: 'Edge' },
            { value: 90, name: 'Other' },
          ]}
        />
      </View>

      <View style={styles.chartContainer}>
        <DonutChart 
          height={400}
          data={[
            { value: 275, name: 'Desktop' },
            { value: 200, name: 'Mobile' },
            { value: 187, name: 'Tablet' },
            { value: 90, name: 'Other' },
          ]}
        />
      </View>

      <View style={styles.chartContainer}>
        <DonutActiveChart 
          height={400}
          data={[
            { value: 275, name: 'Desktop', selected: true },
            { value: 200, name: 'Mobile' },
            { value: 187, name: 'Tablet' },
            { value: 90, name: 'Other' },
          ]}
        />
      </View>

      <View style={styles.chartContainer}>
        <DonutTextChart 
          height={400}
          data={[
            { value: 275, name: 'Desktop' },
            { value: 200, name: 'Mobile' },
            { value: 187, name: 'Tablet' },
            { value: 90, name: 'Other' },
          ]}
        />
      </View>

      <View style={styles.chartContainer}>
        <StackedPieChart height={400} data={[
          {
            name: 'Q1-Q2',
            radius: ['0%', '35%'],
            data: [
              { value: 275, name: 'Desktop' },
              { value: 200, name: 'Mobile' },
              { value: 187, name: 'Tablet' },
              { value: 90, name: 'Other' },
            ],
          },
          {
            name: 'Q3-Q4',
            radius: ['45%', '60%'],
            data: [
              { value: 320, name: 'Desktop' },
              { value: 250, name: 'Mobile' },
              { value: 200, name: 'Tablet' },
              { value: 130, name: 'Other' },
            ],
          },
        ]}/>
      </View>
    </ScrollView>
  );
}

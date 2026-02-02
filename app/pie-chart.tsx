import { PieChart } from '@/components/chart/pie';
import { useTheme } from '@/contexts/ThemeContext';
import { ScrollView, StyleSheet, View } from 'react-native';

const basicData = [
  { name: 'Desktop', value: 275 },
  { name: 'Mobile', value: 200 },
  { name: 'Tablet', value: 187 },
  { name: 'Other', value: 90 },
];

const labelData = [
  ...basicData.slice(0, 3),
  { name: 'Other', value: 173 },
  { name: 'Unknown', value: 90 },
];

const legendData = [
  { name: 'Chrome', value: 275 },
  { name: 'Safari', value: 200 },
  { name: 'Firefox', value: 187 },
  { name: 'Edge', value: 173 },
  { name: 'Other', value: 90 },
];

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
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.chartContainer}>
        <PieChart height={400} data={basicData} />
      </View>

      <View style={styles.chartContainer}>
        <PieChart
          height={400}
          data={labelData}
          showLabel={true}
          labelPosition="outside"
          showLabelLine={true}
        />
      </View>

      <View style={styles.chartContainer}>
        <PieChart height={400} data={legendData} showLegend={true} />
      </View>

      <View style={styles.chartContainer}>
        <PieChart height={400} data={basicData} radius={['50%', '75%']} />
      </View>

      <View style={styles.chartContainer}>
        <PieChart
          height={400}
          data={basicData}
          radius={['50%', '75%']}
          showHighlighter={true}
        />
      </View>

      <View style={styles.chartContainer}>
        <PieChart
          height={400}
          data={basicData}
          radius={['50%', '75%']}
          labelPosition="center"
          showLabelLine={false}
        />
      </View>
    </ScrollView>
  );
}

import { RadarChart } from '@/components/chart/radar';
import { useTheme } from '@/contexts/ThemeContext';
import { ScrollView, StyleSheet, View } from 'react-native';

const defaultIndicators = [
  { name: 'January', max: 400 },
  { name: 'February', max: 400 },
  { name: 'March', max: 400 },
  { name: 'April', max: 400 },
  { name: 'May', max: 400 },
  { name: 'June', max: 400 },
];
const defaultData = [240, 305, 237, 280, 209, 364];
const multipleData = [
  { name: 'Desktop', value: [240, 305, 237, 280, 209, 364] },
  { name: 'Mobile', value: [186, 245, 189, 195, 178, 274] },
];

export default function RadarChartScreen() {
  const { colorScheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#f5f5f5',
    },
    chartWrap: {
      marginVertical: 12,
      alignItems: 'center',
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.chartWrap}>
        <RadarChart
          indicators={defaultIndicators}
          data={defaultData}
          width={320}
          height={320}
        />
      </View>
      <View style={styles.chartWrap}>
        <RadarChart
          indicators={defaultIndicators}
          data={defaultData}
          showSplitLine={false}
          width={320}
          height={320}
        />
      </View>
      <View style={styles.chartWrap}>
        <RadarChart
          indicators={defaultIndicators}
          data={multipleData}
          width={320}
          height={320}
        />
      </View>
      <View style={styles.chartWrap}>
        <RadarChart
          indicators={defaultIndicators}
          data={multipleData}
          showLegend
          width={320}
          height={320}
        />
      </View>
    </ScrollView>
  );
}

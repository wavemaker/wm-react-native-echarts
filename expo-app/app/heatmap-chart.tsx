import { HeatmapChart } from '@wavemaker/react-native-echarts/heatmap';
import { useTheme } from '@/contexts/ThemeContext';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a'];
const days = ['Sat', 'Fri', 'Thu', 'Wed', 'Tue', 'Mon', 'Sun'];

const data: Array<[number, number, number]> = [];
for (let x = 0; x < hours.length; x++) {
  for (let y = 0; y < days.length; y++) {
    data.push([x, y, (x * 7 + y * 3 + (x ^ y)) % 10]);
  }
}

export default function HeatmapChartScreen() {
  const { colorScheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#f5f5f5',
    },
  });

  return (
    <ScrollView style={styles.container}>
      <HeatmapChart
        width={360}
        height={260}
        xAxisData={hours}
        yAxisData={days}
        data={data}
        tooltip="card"
      />
      <HeatmapChart
        width={360}
        height={260}
        xAxisData={hours.slice(0, 8)}
        yAxisData={days}
        data={data.filter(([x]) => x < 8)}
        showLabel
      />
    </ScrollView>
  );
}

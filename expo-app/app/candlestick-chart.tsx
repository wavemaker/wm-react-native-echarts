import { CandlestickChart } from '@wavemaker/react-native-echarts/candlestick';
import { useTheme } from '@/contexts/ThemeContext';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const xAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const priceData: [number, number, number, number][] = [
  [20, 34, 10, 38],
  [40, 35, 30, 50],
  [31, 38, 33, 44],
  [38, 15, 5, 42],
  [25, 32, 28, 35],
  [30, 25, 20, 40],
  [35, 45, 30, 50],
];
const volumeData = [20, 40, 31, 38, 25, 30, 35];
const ma5Data = [25, 35, 32, 28, 30, 32, 38];
const ma10Data = [28, 32, 30, 26, 28, 30, 35];
const ma20Data = [30, 30, 28, 25, 27, 29, 32];

export default function CandlestickChartScreen() {
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
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: colorScheme === 'dark' ? 0.3 : 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    chartTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
      color: colorScheme === 'dark' ? '#ffffff' : '#333333',
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Basic Candlestick Chart</Text>
        <CandlestickChart
          xAxisData={xAxisData}
          data={priceData}
          width={360}
          height={320}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Volume Candlestick Chart</Text>
        <CandlestickChart
          xAxisData={xAxisData}
          data={priceData}
          volumeData={volumeData}
          width={360}
          height={380}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>K-Line Chart with Moving Average</Text>
        <CandlestickChart
          xAxisData={xAxisData}
          data={priceData}
          ma5={ma5Data}
          ma10={ma10Data}
          ma20={ma20Data}
          showLegend
          width={360}
          height={320}
        />
      </View>
    </ScrollView>
  );
}

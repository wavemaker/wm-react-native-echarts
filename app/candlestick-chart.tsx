import { 
  BasicCandlestickChart,
  CandlestickMAChart,
  VolumeCandlestickChart
} from '@/components/chart/candlestick';
import { useTheme } from '@/contexts/ThemeContext';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function CandlestickChartScreen() {
  const { colorScheme } = useTheme();

  // Sample data for the charts
  const xAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const priceData = [
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
      shadowOffset: {
        width: 0,
        height: 2,
      },
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
        <BasicCandlestickChart
          xAxisData={xAxisData}
          data={priceData}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Volume Candlestick Chart</Text>
        <VolumeCandlestickChart
          xAxisData={xAxisData}
          priceData={priceData}
          volumeData={volumeData}
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>K-Line Chart with Moving Average</Text>
        <CandlestickMAChart
          xAxisData={xAxisData}
          priceData={priceData}
          ma5Data={ma5Data}
          ma10Data={ma10Data}
          ma20Data={ma20Data}
        />
      </View>
    </ScrollView>
  );
}

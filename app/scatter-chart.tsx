import { ChartComponent } from '@/components/chart-component';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ScatterChartScreen() {
  // Basic Scatter Chart
  const basicScatterOption = {
    title: {
      text: 'Basic Scatter Chart',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
    },
    xAxis: {
      type: 'value',
      name: 'Height (cm)',
    },
    yAxis: {
      type: 'value',
      name: 'Weight (kg)',
    },
    series: [
      {
        type: 'scatter',
        data: [
          [161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
          [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
          [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
          [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
        ],
        itemStyle: {
          color: '#5470c6',
        },
      },
    ],
  };

  // Multi-series Scatter Chart
  const multiScatterOption = {
    title: {
      text: 'Multi-series Scatter Chart',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      data: ['Male', 'Female'],
    },
    xAxis: {
      type: 'value',
      name: 'Height (cm)',
    },
    yAxis: {
      type: 'value',
      name: 'Weight (kg)',
    },
    series: [
      {
        name: 'Male',
        type: 'scatter',
        data: [
          [174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
          [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
        ],
        itemStyle: {
          color: '#5470c6',
        },
      },
      {
        name: 'Female',
        type: 'scatter',
        data: [
          [161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
          [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
        ],
        itemStyle: {
          color: '#91cc75',
        },
      },
    ],
  };

  // Bubble Chart (Scatter with size)
  const bubbleOption = {
    title: {
      text: 'Bubble Chart',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params: any) {
        return `${params.seriesName}<br/>Sales: ${params.data[0]}<br/>Profit: ${params.data[1]}<br/>Size: ${params.data[2]}`;
      },
    },
    xAxis: {
      type: 'value',
      name: 'Sales (M)',
    },
    yAxis: {
      type: 'value',
      name: 'Profit (M)',
    },
    series: [
      {
        name: 'Companies',
        type: 'scatter',
        data: [
          [10, 20, 30], [20, 30, 40], [30, 40, 50], [40, 50, 60], [50, 60, 70],
          [15, 25, 35], [25, 35, 45], [35, 45, 55], [45, 55, 65], [55, 65, 75],
        ],
        symbolSize: function (data: any) {
          return Math.sqrt(data[2]) * 2;
        },
        itemStyle: {
          color: '#fac858',
          opacity: 0.7,
        },
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Scatter Charts Gallery
        </Text>
        <Text style={styles.headerSubtitle}>
          Data correlation and distribution visualization
        </Text>
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={basicScatterOption}
          height={350}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={multiScatterOption}
          height={350}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={bubbleOption}
          height={350}
          style={styles.chart}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    opacity: 0.7,
    textAlign: 'center',
  },
  chartContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginBottom: 15,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

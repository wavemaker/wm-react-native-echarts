import { ChartComponent } from '@/components/chart-component';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HeatmapChartScreen() {
  // Basic Heatmap Chart
  const basicHeatmapOption = {
    title: {
      text: 'Basic Heatmap Chart',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      position: 'top',
    },
    grid: {
      height: '50%',
      top: '10%',
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      splitArea: {
        show: true,
      },
    },
    yAxis: {
      type: 'category',
      data: ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a', '12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p'],
      splitArea: {
        show: true,
      },
    },
    visualMap: {
      min: 0,
      max: 10,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '15%',
    },
    series: [
      {
        name: 'Activity',
        type: 'heatmap',
        data: [
          [0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 0], [0, 13, 0], [0, 14, 0], [0, 15, 0], [0, 16, 0], [0, 17, 0], [0, 18, 0], [0, 19, 0], [0, 20, 0], [0, 21, 0], [0, 22, 0], [0, 23, 0],
          [1, 0, 1], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 0], [1, 13, 0], [1, 14, 0], [1, 15, 0], [1, 16, 0], [1, 17, 0], [1, 18, 0], [1, 19, 0], [1, 20, 0], [1, 21, 0], [1, 22, 0], [1, 23, 0],
          [2, 0, 0], [2, 1, 0], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 0], [2, 11, 2], [2, 12, 0], [2, 13, 0], [2, 14, 0], [2, 15, 0], [2, 16, 0], [2, 17, 0], [2, 18, 0], [2, 19, 0], [2, 20, 0], [2, 21, 0], [2, 22, 0], [2, 23, 0],
          [3, 0, 0], [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 0], [3, 10, 0], [3, 11, 2], [3, 12, 0], [3, 13, 0], [3, 14, 0], [3, 15, 0], [3, 16, 0], [3, 17, 0], [3, 18, 0], [3, 19, 0], [3, 20, 0], [3, 21, 0], [3, 22, 0], [3, 23, 0],
          [4, 0, 0], [4, 1, 0], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 0], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 0], [4, 10, 0], [4, 11, 2], [4, 12, 0], [4, 13, 0], [4, 14, 0], [4, 15, 0], [4, 16, 0], [4, 17, 0], [4, 18, 0], [4, 19, 0], [4, 20, 0], [4, 21, 0], [4, 22, 0], [4, 23, 0],
          [5, 0, 0], [5, 1, 0], [5, 2, 0], [5, 3, 0], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 0], [5, 9, 0], [5, 10, 0], [5, 11, 2], [5, 12, 0], [5, 13, 0], [5, 14, 0], [5, 15, 0], [5, 16, 0], [5, 17, 0], [5, 18, 0], [5, 19, 0], [5, 20, 0], [5, 21, 0], [5, 22, 0], [5, 23, 0],
          [6, 0, 0], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 0], [6, 11, 2], [6, 12, 0], [6, 13, 0], [6, 14, 0], [6, 15, 0], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 0], [6, 21, 0], [6, 22, 0], [6, 23, 0],
        ],
        label: {
          show: true,
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  // Calendar Heatmap
  const calendarHeatmapOption = {
    title: {
      text: 'Calendar Heatmap',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      position: 'top',
    },
    visualMap: {
      min: 0,
      max: 1000,
      type: 'piecewise',
      orient: 'horizontal',
      left: 'center',
      top: 65,
    },
    calendar: {
      top: 120,
      left: 30,
      right: 30,
      cellSize: ['auto', 13],
      range: '2023',
      itemStyle: {
        borderWidth: 0.5,
      },
      yearLabel: { show: false },
    },
    series: [
      {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: [
          ['2023-01-01', 900], ['2023-01-02', 800], ['2023-01-03', 700], ['2023-01-04', 600], ['2023-01-05', 500],
          ['2023-01-06', 400], ['2023-01-07', 300], ['2023-01-08', 200], ['2023-01-09', 100], ['2023-01-10', 50],
          ['2023-01-11', 150], ['2023-01-12', 250], ['2023-01-13', 350], ['2023-01-14', 450], ['2023-01-15', 550],
          ['2023-01-16', 650], ['2023-01-17', 750], ['2023-01-18', 850], ['2023-01-19', 950], ['2023-01-20', 1000],
          ['2023-01-21', 900], ['2023-01-22', 800], ['2023-01-23', 700], ['2023-01-24', 600], ['2023-01-25', 500],
          ['2023-01-26', 400], ['2023-01-27', 300], ['2023-01-28', 200], ['2023-01-29', 100], ['2023-01-30', 50],
          ['2023-01-31', 150],
        ],
      },
    ],
  };

  // Correlation Heatmap
  const correlationHeatmapOption = {
    title: {
      text: 'Correlation Heatmap',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      position: 'top',
    },
    grid: {
      height: '50%',
      top: '10%',
    },
    xAxis: {
      type: 'category',
      data: ['Sales', 'Marketing', 'Support', 'Development', 'Design'],
      splitArea: {
        show: true,
      },
    },
    yAxis: {
      type: 'category',
      data: ['Sales', 'Marketing', 'Support', 'Development', 'Design'],
      splitArea: {
        show: true,
      },
    },
    visualMap: {
      min: -1,
      max: 1,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '15%',
    },
    series: [
      {
        name: 'Correlation',
        type: 'heatmap',
        data: [
          [0, 0, 1], [0, 1, 0.8], [0, 2, 0.6], [0, 3, 0.4], [0, 4, 0.2],
          [1, 0, 0.8], [1, 1, 1], [1, 2, 0.7], [1, 3, 0.5], [1, 4, 0.3],
          [2, 0, 0.6], [2, 1, 0.7], [2, 2, 1], [2, 3, 0.8], [2, 4, 0.4],
          [3, 0, 0.4], [3, 1, 0.5], [3, 2, 0.8], [3, 3, 1], [3, 4, 0.6],
          [4, 0, 0.2], [4, 1, 0.3], [4, 2, 0.4], [4, 3, 0.6], [4, 4, 1],
        ],
        label: {
          show: true,
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Heatmap Charts Gallery
        </Text>
        <Text style={styles.headerSubtitle}>
          Data density and correlation visualization
        </Text>
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={basicHeatmapOption}
          height={400}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={calendarHeatmapOption}
          height={400}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={correlationHeatmapOption}
          height={400}
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

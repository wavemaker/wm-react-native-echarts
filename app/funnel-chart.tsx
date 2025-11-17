import { ChartComponent } from '@/components/chart-component';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function FunnelChartScreen() {
  // Basic Funnel Chart
  const basicFunnelOption = {
    title: {
      text: 'Basic Funnel Chart',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%',
    },
    series: [
      {
        name: 'Sales Funnel',
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 60,
        width: '80%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside',
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid',
          },
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1,
        },
        emphasis: {
          label: {
            fontSize: 20,
          },
        },
        data: [
          { value: 100, name: 'Visitors' },
          { value: 80, name: 'Leads' },
          { value: 60, name: 'Opportunities' },
          { value: 40, name: 'Prospects' },
          { value: 20, name: 'Customers' },
        ],
      },
    ],
  };

  // Multi-series Funnel Chart
  const multiFunnelOption = {
    title: {
      text: 'Multi-series Funnel Chart',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%',
    },
    legend: {
      data: ['Q1', 'Q2'],
      bottom: 0,
    },
    series: [
      {
        name: 'Q1',
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 60,
        width: '35%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside',
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1,
        },
        data: [
          { value: 100, name: 'Visitors' },
          { value: 80, name: 'Leads' },
          { value: 60, name: 'Opportunities' },
          { value: 40, name: 'Prospects' },
          { value: 20, name: 'Customers' },
        ],
      },
      {
        name: 'Q2',
        type: 'funnel',
        left: '55%',
        top: 60,
        bottom: 60,
        width: '35%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside',
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1,
        },
        data: [
          { value: 100, name: 'Visitors' },
          { value: 85, name: 'Leads' },
          { value: 70, name: 'Opportunities' },
          { value: 50, name: 'Prospects' },
          { value: 25, name: 'Customers' },
        ],
      },
    ],
  };

  // Pyramid Chart (Funnel variant)
  const pyramidOption = {
    title: {
      text: 'Pyramid Chart',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%',
    },
    series: [
      {
        name: 'Sales Pyramid',
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 60,
        width: '80%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'ascending',
        gap: 2,
        label: {
          show: true,
          position: 'inside',
          formatter: '{b}: {c}%',
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid',
          },
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1,
        },
        emphasis: {
          label: {
            fontSize: 20,
          },
        },
        data: [
          { value: 20, name: 'VIP Customers' },
          { value: 40, name: 'Premium Customers' },
          { value: 60, name: 'Regular Customers' },
          { value: 80, name: 'Potential Customers' },
          { value: 100, name: 'All Prospects' },
        ],
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Funnel Charts Gallery
        </Text>
        <Text style={styles.headerSubtitle}>
          Conversion process and data flow visualization
        </Text>
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={basicFunnelOption}
          height={400}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={multiFunnelOption}
          height={400}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={pyramidOption}
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

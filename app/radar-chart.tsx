import { ChartComponent } from '@/components/chart-component';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function RadarChartScreen() {
  const visitorData = [240, 305, 237, 280, 209, 364];
  const indicators = [
    { name: 'January', max: 400 },
    { name: 'February', max: 400 },
    { name: 'March', max: 400 },
    { name: 'April', max: 400 },
    { name: 'May', max: 400 },
    { name: 'June', max: 400 },
  ];

  // Radar Chart - Basic
  const radarBasicOption = {
    title: {
      text: 'Radar Chart',
      left: 'left',
      textStyle: { fontSize: 14, fontWeight: 'normal' },
    },
    tooltip: {},
    radar: {
      indicator: indicators,
      shape: 'polygon',
      splitArea: {
        show: false,
      },
      splitLine: {
        show: true,
      },
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: visitorData,
            areaStyle: { opacity: 0.5 },
            itemStyle: { color: '#60a5fa' },
            symbol: 'none',
            lineStyle: { width: 0 },
          },
        ],
      },
    ],
  };

  // Radar Chart - Dots
  const radarDotsOption = {
    title: {
      text: 'Radar Chart - Dots',
      left: 'left',
      textStyle: { fontSize: 14, fontWeight: 'normal' },
    },
    tooltip: {},
    radar: {
      indicator: indicators,
      shape: 'polygon',
      splitArea: {
        show: false,
      },
      splitLine: {
        show: true,
      },
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: visitorData,
            symbol: 'circle',
            symbolSize: 8,
            areaStyle: { opacity: 0.5 },
            lineStyle: { width: 0 },
            itemStyle: { color: '#60a5fa' },
          },
        ],
      },
    ],
  };

  // Radar Chart - Lines Only
  const radarLinesOnlyOption = {
    title: {
      text: 'Radar Chart - Lines Only',
      left: 'left',
      textStyle: { fontSize: 14, fontWeight: 'normal' },
    },
    tooltip: {},
    radar: {
      indicator: indicators,
      shape: 'polygon',
      splitArea: {
        show: false,
      },
      splitLine: {
        show: true,
      },
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: visitorData,
            lineStyle: { width: 1 },
            itemStyle: { color: '#60a5fa', width: 0 },
          },
        ],
      },
    ],
  };

  // Radar Chart - Custom Label
  const radarCustomLabelOption = {
    title: {
      text: 'Radar Chart - Custom Label',
      left: 'left',
      textStyle: { fontSize: 14, fontWeight: 'normal' },
    },
    tooltip: {},
    radar: {
      indicator: indicators,
      shape: 'polygon',
      splitArea: {
        show: false,
      },
      splitLine: {
        show: true,
      },
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: visitorData,
            areaStyle: { opacity: 0.3 },
            itemStyle: { color: '#3b82f6', width: 1 },
            label: {
              show: true,
              formatter: (params: any) => params.value,
              color: '#000',
            },
          },
        ],
      },
    ],
  };

  // Radar Chart - Grid None
  const radarGridNoneOption = {
    title: {
      text: 'Radar Chart - Grid None',
      left: 'left',
      textStyle: { fontSize: 14, fontWeight: 'normal' },
    },
    tooltip: {},
    radar: {
      indicator: indicators,
      shape: 'polygon',
      splitArea: { show: false },
      axisLine: { show: false },
      splitLine: { show: false },
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: visitorData,
            areaStyle: { opacity: 0.5 },
            itemStyle: { color: '#60a5fa', width: 1},
          },
        ],
      },
    ],
  };

  // Radar Chart - Grid Circle
  const radarGridCircleOption = {
    title: {
      text: 'Radar Chart - Grid Circle',
      left: 'left',
      textStyle: { fontSize: 14, fontWeight: 'normal' },
    },
    tooltip: {},
    radar: {
      indicator: indicators,
      shape: 'circle',
      splitArea: {
        show: false,
      } 
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: visitorData,
            areaStyle: { opacity: 0.5 },
            itemStyle: { color: '#60a5fa' },
          },
        ],
      },
    ],
  };

  // Radar Chart - Grid Circle - No lines
  const radarGridCircleNoLinesOption = {
    title: {
      text: 'Radar Chart - Grid Circle - No lines',
      left: 'left',
      textStyle: { fontSize: 14, fontWeight: 'normal' },
    },
    tooltip: {},
    radar: {
      indicator: indicators,
      shape: 'circle',
      axisLine: { show: false },
      splitArea: {
        show: false,
      }
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: visitorData,
            areaStyle: { opacity: 0.5 },
            itemStyle: { color: '#60a5fa' },
          },
        ],
      },
    ],
  };

  // Radar Chart - Grid Circle Filled
  const radarGridCircleFilledOption = {
    title: {
      text: 'Radar Chart - Grid Circle Filled',
      left: 'left',
      textStyle: { fontSize: 14, fontWeight: 'normal' },
    },
    tooltip: {},
    radar: {
      indicator: indicators,
      shape: 'circle',
      splitArea: {
        areaStyle: {
          color: ['rgba(96, 165, 250, 0.1)', 'rgba(96, 165, 250, 0.2)', 'rgba(96, 165, 250, 0.3)', 'rgba(96, 165, 250, 0.4)', 'rgba(96, 165, 250, 0.5)', 'rgba(96, 165, 250, 0.6)'],
        },
      },
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: visitorData,
            areaStyle: { opacity: 0.3, color: 'rgb(29, 10, 239)' },
            itemStyle: { color: '#60a5fa', opacity: 0},
            lineStyle: { width: 0 },
          },
        ],
      },
    ],
  };

  // Radar Chart - Grid Filled
  const radarGridFilledOption = {
    title: {
      text: 'Radar Chart - Grid Circle Filled',
      left: 'left',
      textStyle: { fontSize: 14, fontWeight: 'normal' },
    },
    tooltip: {},
    radar: {
      indicator: indicators,
      shape: 'polygon',
      splitArea: {
        areaStyle: {
          color: ['rgba(96, 165, 250, 0.1)', 'rgba(96, 165, 250, 0.2)', 'rgba(96, 165, 250, 0.3)', 'rgba(96, 165, 250, 0.4)', 'rgba(96, 165, 250, 0.5)', 'rgba(96, 165, 250, 0.6)'],
        },
      },
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: visitorData,
            areaStyle: { opacity: 0.3, color: 'rgb(29, 10, 239)' },
            itemStyle: { color: '#60a5fa', opacity: 0},
            lineStyle: { width: 0 },
          },
        ],
      },
    ],
  };

  // Radar Chart - Multiple
  const radarMultipleOption = {
    title: {
      text: 'Radar Chart - Multiple',
      left: 'left',
      textStyle: { fontSize: 14, fontWeight: 'normal' },
    },
    tooltip: {},
    radar: {
      indicator: indicators,
      shape: 'polygon',
      splitArea: {
        show: false,
      },
      splitLine: {
        show: true,
      },
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: visitorData,
            name: 'Series 1',
            areaStyle: { opacity: 0.3 },
            itemStyle: { color: '#60a5fa', opacity: 0},
            lineStyle: { width: 0 },
          },
          {
            value: [150, 230, 200, 150, 180, 170],
            name: 'Series 2',
            areaStyle: { opacity: 0.8 },
            itemStyle: { color: '#3b82f6', opacity: 0},
            lineStyle: { width: 0 },
          },
        ],
      },
    ],
  };

  // Radar Chart - Legend
  const radarLegendOption = {
    title: {
      text: 'Radar Chart - Legend',
      left: 'left',
      textStyle: { fontSize: 14, fontWeight: 'normal' },
    },
    tooltip: {},
    legend: {
      data: [{
        name: 'Desktop',
        itemStyle: { color: '#60a5fa', opacity: 0.3, width: 1},
      }, {
        name: 'Mobile',
        itemStyle: { color: '#3b82f6', opacity: 0.8, width: 1},
      }],

      bottom: 5,
    },
    radar: {
      indicator: indicators,
      shape: 'polygon',splitArea: {
        show: false,
      },
      splitLine: {
        show: true,
      },
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: visitorData,
            name: 'Desktop',
            areaStyle: { opacity: 0.3 },
            itemStyle: { color: '#60a5fa', opacity: 0},
            lineStyle: { width: 0 },
          },
          {
            value: [150, 230, 200, 150, 180, 170],
            name: 'Mobile',
            areaStyle: { opacity: 0.8 },
            itemStyle: { color: '#3b82f6', opacity: 0},
            lineStyle: { width: 0 },
          },
        ],
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Radar Charts Gallery
        </Text>
        <Text style={styles.headerSubtitle}>
          Showing total visitors for the last 6 months
        </Text>
      </View>

      <View style={styles.chartContainerNoBorder}>
        <ChartComponent
          option={radarBasicOption}
          height={300}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={radarDotsOption}
          height={300}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={radarLinesOnlyOption}
          height={300}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={radarCustomLabelOption}
          height={300}
          style={styles.chart}
        />
      </View>


      <View style={styles.chartContainer}>
        <ChartComponent
          option={radarGridNoneOption}
          height={300}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={radarGridCircleOption}
          height={300}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={radarGridCircleNoLinesOption}
          height={300}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={radarGridCircleFilledOption}
          height={300}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={radarGridFilledOption}
          height={300}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={radarMultipleOption}
          height={300}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={radarLegendOption}
          height={300}
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
  chartContainerNoBorder: {
    marginHorizontal: 10,
    marginBottom: 15,
    padding: 15,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

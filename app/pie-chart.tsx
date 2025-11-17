import { ChartComponent } from '@/components/chart-component';
import { useTheme } from '@/contexts/ThemeContext';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function PieChartScreen() {
  const { colorScheme } = useTheme();

  // 1. Basic Pie Chart - 4 slices, no labels
  const basicPieOption = {
    title: {
      text: 'Pie Chart',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: 'Visitors',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 275, name: 'Desktop', itemStyle: { color: '#3b82f6' } },
          { value: 200, name: 'Mobile', itemStyle: { color: '#60a5fa' } },
          { value: 187, name: 'Tablet', itemStyle: { color: '#93c5fd' } },
          { value: 90, name: 'Other', itemStyle: { color: '#dbeafe' } },
        ],
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
      },
    ],
  };

  // 2. Pie Chart - Separator None (same as basic but with no separators)
  const separatorNoneOption = {
    title: {
      text: 'Pie Chart - Separator None',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: 'Visitors',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 275, name: 'Desktop', itemStyle: { color: '#3b82f6' } },
          { value: 200, name: 'Mobile', itemStyle: { color: '#60a5fa' } },
          { value: 187, name: 'Tablet', itemStyle: { color: '#93c5fd' } },
          { value: 90, name: 'Other', itemStyle: { color: '#dbeafe' } },
        ],
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        itemStyle: {
          borderWidth: 0,
        },
      },
    ],
  };

  // 3. Pie Chart - Label (external labels with values)
  const labelOption = {
    title: {
      text: 'Pie Chart - Label',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: 'Visitors',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 275, name: 'Desktop', itemStyle: { color: '#3b82f6' } },
          { value: 200, name: 'Mobile', itemStyle: { color: '#60a5fa' } },
          { value: 187, name: 'Tablet', itemStyle: { color: '#93c5fd' } },
          { value: 173, name: 'Other', itemStyle: { color: '#dbeafe' } },
          { value: 90, name: 'Unknown', itemStyle: { color: '#f3f4f6' } },
        ],
        label: {
          show: true,
          formatter: '{c}',
          fontSize: 12,
        },
        labelLine: {
          show: true,
        },
      },
    ],
  };

  // 4. Pie Chart - Custom Label (similar to label but with custom formatting)
  const customLabelOption = {
    title: {
      text: 'Pie Chart - Custom Label',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: 'Visitors',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 275, name: 'Desktop', itemStyle: { color: '#3b82f6' } },
          { value: 200, name: 'Mobile', itemStyle: { color: '#60a5fa' } },
          { value: 187, name: 'Tablet', itemStyle: { color: '#93c5fd' } },
          { value: 173, name: 'Other', itemStyle: { color: '#dbeafe' } },
          { value: 90, name: 'Unknown', itemStyle: { color: '#f3f4f6' } },
        ],
        label: {
          show: true,
          formatter: '{c}',
          fontSize: 12,
          fontWeight: 'bold',
        },
        labelLine: {
          show: true,
          length: 10,
          length2: 5,
        },
      },
    ],
  };

  // 5. Pie Chart - Label List (labels inside slices)
  const labelListOption = {
    title: {
      text: 'Pie Chart - Label List',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: 'Browser',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 275, name: 'Chrome', itemStyle: { color: '#3b82f6' } },
          { value: 200, name: 'Safari', itemStyle: { color: '#60a5fa' } },
          { value: 187, name: 'Firefox', itemStyle: { color: '#93c5fd' } },
          { value: 173, name: 'Edge', itemStyle: { color: '#dbeafe' } },
          { value: 90, name: 'Other', itemStyle: { color: '#f3f4f6' } },
        ],
        label: {
          show: true,
          formatter: '{b}',
          fontSize: 11,
          fontWeight: 'bold',
          color: '#ffffff',
        },
        labelLine: {
          show: false,
        },
      },
    ],
  };

  // 6. Pie Chart - Legend (with legend below chart)
  const legendOption = {
    title: {
      text: 'Pie Chart - Legend',
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
      orient: 'horizontal',
      bottom: '10%',
      left: 'center',
    },
    series: [
      {
        name: 'Browser',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 275, name: 'Chrome', itemStyle: { color: '#3b82f6' } },
          { value: 200, name: 'Safari', itemStyle: { color: '#60a5fa' } },
          { value: 187, name: 'Firefox', itemStyle: { color: '#93c5fd' } },
          { value: 173, name: 'Edge', itemStyle: { color: '#dbeafe' } },
          { value: 90, name: 'Other', itemStyle: { color: '#f3f4f6' } },
        ],
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
      },
    ],
  };

  // 7. Pie Chart - Donut (basic donut chart)
  const donutOption = {
    title: {
      text: 'Pie Chart - Donut',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: 'Visitors',
        type: 'pie',
        radius: ['40%', '70%'],
        data: [
          { value: 275, name: 'Desktop', itemStyle: { color: '#3b82f6' } },
          { value: 200, name: 'Mobile', itemStyle: { color: '#60a5fa' } },
          { value: 187, name: 'Tablet', itemStyle: { color: '#93c5fd' } },
          { value: 90, name: 'Other', itemStyle: { color: '#dbeafe' } },
        ],
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
      },
    ],
  };

  // 8. Pie Chart - Donut Active (with active slice)
  const donutActiveOption = {
    title: {
      text: 'Pie Chart - Donut Active',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: 'Visitors',
        type: 'pie',
        radius: ['40%', '70%'],
        data: [
          { value: 275, name: 'Desktop', itemStyle: { color: '#3b82f6' }, selected: true },
          { value: 200, name: 'Mobile', itemStyle: { color: '#60a5fa' } },
          { value: 187, name: 'Tablet', itemStyle: { color: '#93c5fd' } },
          { value: 90, name: 'Other', itemStyle: { color: '#dbeafe' } },
        ],
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
        selectedMode: 'single',
        selectedOffset: 10,
      },
    ],
  };

  // 9. Pie Chart - Donut with Text (center text)
  const donutTextOption = {
    title: {
      text: 'Pie Chart - Donut with Text',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: 'Visitors',
        type: 'pie',
        radius: ['40%', '70%'],
        data: [
          { value: 275, name: 'Desktop', itemStyle: { color: '#3b82f6' } },
          { value: 200, name: 'Mobile', itemStyle: { color: '#60a5fa' } },
          { value: 187, name: 'Tablet', itemStyle: { color: '#93c5fd' } },
          { value: 90, name: 'Other', itemStyle: { color: '#dbeafe' } },
        ],
        center: ['50%', '50%'],
        label: {
          show: true,
          position: 'center',
          formatter: '{total|1,125}\n{active|Visitors}',
          rich: {
            total: {
              fontSize: 24,
              fontWeight: 'bold',
              color: '#333',
            },
            active: {
              fontSize: 14,
              color: '#666',
            },
          },
        },
        labelLine: {
          show: false,
        },
      },
    ],
  };

  // 10. Pie Chart - Stacked (concentric rings)
  const stackedOption = {
    title: {
      text: 'Pie Chart - Stacked',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: 'Q1-Q2',
        type: 'pie',
        radius: ['0%', '35%'],
        data: [
          { value: 200, name: 'Desktop', itemStyle: { color: '#3b82f6' } },
          { value: 120, name: 'Mobile', itemStyle: { color: '#60a5fa' } },
          { value: 180, name: 'Tablet', itemStyle: { color: '#93c5fd' } },
          { value: 240, name: 'Other', itemStyle: { color: '#dbeafe' } },
        ],
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
      },
      {
        name: 'Q3-Q4',
        type: 'pie',
        radius: ['45%', '60%'],
        data: [
          { value: 320, name: 'Desktop', itemStyle: { color: '#3b82f6' } },
          { value: 250, name: 'Mobile', itemStyle: { color: '#60a5fa' } },
          { value: 200, name: 'Tablet', itemStyle: { color: '#93c5fd' } },
          { value: 130, name: 'Other', itemStyle: { color: '#dbeafe' } },
        ],
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
      },
    ],
  };

  // 11. Pie Chart - Interactive (with dropdown and center text)
  const interactiveOption = {
    title: {
      text: 'Pie Chart - Interactive',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: 'Visitors',
        type: 'pie',
        radius: ['40%', '70%'],
        data: [
          { value: 275, name: 'Desktop', itemStyle: { color: '#3b82f6' } },
          { value: 200, name: 'Mobile', itemStyle: { color: '#60a5fa' } },
          { value: 187, name: 'Tablet', itemStyle: { color: '#93c5fd' } },
          { value: 90, name: 'Other', itemStyle: { color: '#dbeafe' } },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
        selectedMode: 'single',
        selectedOffset: 10,
        label: {
          show: true,
          position: 'center',
          formatter: '{total|186}\n{active|Visitors}',
          rich: {
            total: {
              fontSize: 24,
              fontWeight: 'bold',
              color: '#333',
            },
            active: {
              fontSize: 14,
              color: '#666',
            },
          },
        },
        labelLine: {
          show: false,
        },
      },
    ],
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#f5f5f5',
    },
    header: {
      padding: 20,
      alignItems: 'center',
      backgroundColor: colorScheme === 'dark' ? '#2a2a2a' : '#fff',
      marginBottom: 10,
    },
    headerTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 5,
      color: colorScheme === 'dark' ? '#ffffff' : '#333333',
    },
    headerSubtitle: {
      fontSize: 16,
      opacity: 0.7,
      textAlign: 'center',
      color: colorScheme === 'dark' ? '#cccccc' : '#666666',
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
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Pie Charts Gallery
        </Text>
        <Text style={styles.headerSubtitle}>
          Various pie chart types with modern styling
        </Text>
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={basicPieOption}
          height={400}
          style={styles.chart}
        />
      </View>
{/* 
      <View style={styles.chartContainer}>
        <ChartComponent
          option={separatorNoneOption}
          height={400}
          style={styles.chart}
        />
      </View> */}

      <View style={styles.chartContainer}>
        <ChartComponent
          option={labelOption}
          height={400}
          style={styles.chart}
        />
      </View>
{/* 
      <View style={styles.chartContainer}>
        <ChartComponent
          option={customLabelOption}
          height={400}
          style={styles.chart}
        />
      </View> */}

      {/* <View style={styles.chartContainer}>
        <ChartComponent
          option={labelListOption}
          height={400}
          style={styles.chart}
        />
      </View> */}

      <View style={styles.chartContainer}>
        <ChartComponent
          option={legendOption}
          height={400}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={donutOption}
          height={400}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={donutActiveOption}
          height={400}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={donutTextOption}
          height={400}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={stackedOption}
          height={400}
          style={styles.chart}
        />
      </View>

      {/* <View style={styles.chartContainer}>
        <ChartComponent
          option={interactiveOption}
          height={400}
          style={styles.chart}
        />
      </View> */}
    </ScrollView>
  );
}

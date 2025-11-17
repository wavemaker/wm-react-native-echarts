import { ChartComponent } from '@/components/chart-component';
import { useTheme } from '@/contexts/ThemeContext';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function LineChartScreen() {
  const { colorScheme } = useTheme();

  // Interactive Line Chart - Main chart with Desktop/Mobile data
  const interactiveLineOption = {
    title: {
      text: 'Line Chart - Interactive',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colorScheme === 'dark' ? '#ffffff' : '#333333',
      },
    },
    subtitle: {
      text: 'Showing total visitors for the last 3 months',
      left: 'center',
      textStyle: {
        fontSize: 12,
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Desktop', 'Mobile'],
      top: 60,
    },
    xAxis: {
      type: 'category',
      data: ['Apr 2', 'Apr 7', 'Apr 12', 'Apr 17', 'Apr 22', 'Apr 28', 'May 4', 'May 9', 'May 15', 'May 21', 'May 27', 'Jun 2', 'Jun 7', 'Jun 12', 'Jun 18', 'Jun 24', 'Jun 30'],
      axisLabel: {
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: false,
      },
    },
    series: [
      {
        name: 'Desktop',
        type: 'line',
        smooth: true,
        symbol: 'none',
        data: [7000, 8900, 15200, 18900, 22300, 19800, 25600, 24100, 27800, 26200, 23800, 25300, 24100, 23700, 23900, 24100, 23828],
        itemStyle: {
          color: '#3b82f6',
        },
        lineStyle: {
          color: '#3b82f6',
          width: 1,
        },
      },
      {
        name: 'Mobile',
        type: 'line',
        smooth: true,
        symbol: 'none',
        data: [5000, 6200, 12500, 17700, 21400, 24800, 23100, 26500, 25200, 21800, 24100, 22900, 22100, 22300, 22500, 24010],
        itemStyle: {
          color: '#06b6d4',
        },
        lineStyle: {
          color: '#06b6d4',
          width: 1,
        },
      },
    ],
  };

  // Default Line Chart - Smooth curved line
  const defaultLineOption = {
    title: {
      text: 'Line Chart',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colorScheme === 'dark' ? '#ffffff' : '#333333',
      },
    },
    subtitle: {
      text: 'January - June 2024',
      left: 'center',
      textStyle: {
        fontSize: 12,
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      axisLabel: {
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: false,
      },
    },
    series: [
      {
        data: [142, 267, 189, 95, 178, 231],
        type: 'line',
        smooth: true,
        symbol: 'none',
        itemStyle: {
          color: '#3b82f6',
        },
        lineStyle: {
          color: '#3b82f6',
          width: 1,
        },
      },
    ],
  };

  // Linear Line Chart - Straight segments
  const linearLineOption = {
    title: {
      text: 'Line Chart - Linear',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colorScheme === 'dark' ? '#ffffff' : '#333333',
      },
    },
    subtitle: {
      text: 'January - June 2024',
      left: 'center',
      textStyle: {
        fontSize: 12,
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      axisLabel: {
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: false,
      },
    },
    series: [
      {
        data: [180, 220, 240, 160, 190, 270],
        type: 'line',
        smooth: false,
        symbol: 'none',
        itemStyle: {
          color: '#3b82f6',
        },
        lineStyle: {
          color: '#3b82f6',
          width: 1,
        },
      },
    ],
  };

  // Step Line Chart - Step pattern
  const stepLineOption = {
    title: {
      text: 'Line Chart - Step',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colorScheme === 'dark' ? '#ffffff' : '#333333',
      },
    },
    subtitle: {
      text: 'January - June 2024',
      left: 'center',
      textStyle: {
        fontSize: 12,
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      axisLabel: {
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: false,
      },
    },
    series: [
      {
        data: [170, 170, 230, 230, 180, 180],
        type: 'line',
        step: 'middle',
        symbol: 'none',
        itemStyle: {
          color: '#3b82f6',
        },
        lineStyle: {
          color: '#3b82f6',
          width: 1,
        },
      },
    ],
  };

  // Multiple Line Chart - Two lines
  const multipleLineOption = {
    title: {
      text: 'Line Chart - Multiple',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colorScheme === 'dark' ? '#ffffff' : '#333333',
      },
    },
    subtitle: {
      text: 'January - June 2024',
      left: 'center',
      textStyle: {
        fontSize: 12,
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Series A', 'Series B'],
      top: 60,
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      axisLabel: {
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: false,
      },
    },
    series: [
      {
        name: 'Series A',
        data: [198, 287, 251, 89, 223, 202],
        type: 'line',
        smooth: true,
        symbol: 'none',
        itemStyle: {
          color: '#1e40af',
        },
        lineStyle: {
          color: '#1e40af',
          width: 1,
        },
      },
      {
        name: 'Series B',
        data: [135, 185, 165, 95, 85, 125],
        type: 'line',
        smooth: true,
        symbol: 'none',
        itemStyle: {
          color: '#3b82f6',
        },
        lineStyle: {
          color: '#3b82f6',
          width: 1,
        },
      },
    ],
  };

  // Dots Line Chart - With circular markers
  const dotsLineOption = {
    title: {
      text: 'Line Chart - Dots',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colorScheme === 'dark' ? '#ffffff' : '#333333',
      },
    },
    subtitle: {
      text: 'January - June 2024',
      left: 'center',
      textStyle: {
        fontSize: 12,
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      axisLabel: {
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: false,
      },
    },
    series: [
      {
        data: [174, 291, 249, 87, 197, 226],
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: {
          color: '#3b82f6',
        },
        lineStyle: {
          color: '#3b82f6',
          width: 1,
        },
      },
    ],
  };

  // Custom Dots Line Chart
  const customDotsLineOption = {
    title: {
      text: 'Line Chart - Custom Dots',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colorScheme === 'dark' ? '#ffffff' : '#333333',
      },
    },
    subtitle: {
      text: 'January - June 2024',
      left: 'center',
      textStyle: {
        fontSize: 12,
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      axisLabel: {
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: false,
      },
    },
    series: [
      {
        data: [186, 305, 237, 73, 209, 214],
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: '#3b82f6',
          borderColor: '#ffffff',
          borderWidth: 2,
        },
        lineStyle: {
          color: '#3b82f6',
          width: 1,
        },
      },
    ],
  };

  // Dots Colors Line Chart - Varying dot colors
  const dotsColorsLineOption = {
    title: {
      text: 'Line Chart - Dots Colors',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colorScheme === 'dark' ? '#ffffff' : '#333333',
      },
    },
    subtitle: {
      text: 'January - June 2024',
      left: 'center',
      textStyle: {
        fontSize: 12,
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      axisLabel: {
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: false,
      },
    },
    series: [
      {
        data: [
          { value: 186, itemStyle: { color: '#1e40af' } },
          { value: 305, itemStyle: { color: '#3b82f6' } },
          { value: 237, itemStyle: { color: '#60a5fa' } },
          { value: 73, itemStyle: { color: '#93c5fd' } },
          { value: 209, itemStyle: { color: '#1e40af' } },
          { value: 214, itemStyle: { color: '#3b82f6' } },
        ],
        type: 'line',
        smooth: false,
        symbol: 'circle',
        symbolSize: 6,
        lineStyle: {
          color: '#3b82f6',
          width: 1,
        },
      },
    ],
  };

  // Label Line Chart - With numerical labels
  const labelLineOption = {
    title: {
      text: 'Line Chart - Label',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colorScheme === 'dark' ? '#ffffff' : '#333333',
      },
    },
    subtitle: {
      text: 'January - June 2024',
      left: 'center',
      textStyle: {
        fontSize: 12,
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      axisLabel: {
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: false,
      },
    },
    series: [
      {
        data: [186, 305, 237, 73, 209, 214],
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: {
          color: '#3b82f6',
        },
        lineStyle: {
          color: '#3b82f6',
          width: 1,
        },
        label: {
          show: true,
          position: 'top',
          color: colorScheme === 'dark' ? '#ffffff' : '#333333',
          fontSize: 10,
        },
      },
    ],
  };

  // Custom Label Line Chart - With categorical labels
  const customLabelLineOption = {
    title: {
      text: 'Line Chart - Custom Label',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colorScheme === 'dark' ? '#ffffff' : '#333333',
      },
    },
    subtitle: {
      text: 'January - June 2024',
      left: 'center',
      textStyle: {
        fontSize: 12,
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      axisLabel: {
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: false,
      },
    },
    series: [
      {
        data: [
          { value: 186, label: { formatter: 'Chrome' } },
          { value: 305, label: { formatter: 'Safari' } },
          { value: 237, label: { formatter: 'Firefox' } },
          { value: 73, label: { formatter: 'Edge' } },
          { value: 209, label: { formatter: 'Other' } },
          { value: 214 },
        ],
        type: 'line',
        smooth: false,
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: {
          color: '#3b82f6',
        },
        lineStyle: {
          color: '#3b82f6',
          width: 1,
        },
        label: {
          show: true,
          position: 'right',
          color: colorScheme === 'dark' ? '#ffffff' : '#333333',
          fontSize: 10,
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
      marginHorizontal: 2,
      marginBottom: 15,
      borderRadius: 10,
      padding: 0,
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
      margin: 0,
      width: '100%',
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Line Charts Gallery
        </Text>
        <Text style={styles.headerSubtitle}>
          Various line chart types based on documentation examples
        </Text>
      </View>

      {/* Main Interactive Chart */}
      <View style={styles.chartContainer}>
        <ChartComponent
          option={interactiveLineOption}
          height={450}
          style={styles.chart}
        />
      </View>

      {/* Grid of 9 smaller charts */}
      <View style={styles.chartContainer}>
        <ChartComponent
          option={defaultLineOption}
          height={350}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={linearLineOption}
          height={350}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={stepLineOption}
          height={350}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={multipleLineOption}
          height={350}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={dotsLineOption}
          height={350}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={customDotsLineOption}
          height={350}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={dotsColorsLineOption}
          height={350}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={labelLineOption}
          height={350}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={customLabelLineOption}
          height={350}
          style={styles.chart}
        />
      </View>
    </ScrollView>
  );
}
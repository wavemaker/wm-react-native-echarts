import { ChartComponent } from '@/components/chart-component';
import { useTheme } from '@/contexts/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export default function BarChartScreen() {
  const { colorScheme } = useTheme();

  // Generate random visitor data
  const generateRandomData = () => {
    const data = [];
    for (let i = 0; i < 13; i++) {
      data.push(Math.floor(Math.random() * 2000) + 200); // Random values between 200-2200
    }
    return data;
  };

  const randomVisitorData = generateRandomData();

  // Main Interactive Bar Chart
  const interactiveBarOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: ['Apr 1', 'Apr 8', 'Apr 15', 'Apr 22', 'Apr 29', 'May 6', 'May 13', 'May 20', 'May 27', 'Jun 3', 'Jun 10', 'Jun 17', 'Jun 24'],
      axisLabel: {
        fontSize: 10,
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
        data: randomVisitorData,
        type: 'bar',
        barWidth: '70%',
        barGap: '10%',
        itemStyle: {
          color: '#3b82f6',
        },
        emphasis: {
          disabled: true,
        },
      },
    ],
  };

  // Basic Bar Chart
  const basicBarOption = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: true,
      borderColor: 'transparent',
      backgroundColor: 'transparent',
      splitLine: {
        show: false,
      },
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      axisLine: {
        show: false,
      },
      axisLabel: {
        fontSize: 10,
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
        type: 'bar',
        itemStyle: {
          color: '#93c5fd',
          borderRadius: [4, 4, 4, 4],
        },
        emphasis: {
          disabled: true,
        },
      },
    ],
  };

  // Horizontal Bar Chart
  const horizontalBarOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: false,
      splitLine: {
        show: false,
      },
    },
    xAxis: {
      type: 'value',
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      axisLine: {
        show: false,
      },
      axisLabel: {
        fontSize: 10,
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        data: [186, 305, 237, 73, 209, 214],
        type: 'bar',
        barWidth: '80%',
        itemStyle: {
          color: '#93c5fd',
          borderRadius: [4, 4, 4, 4],
        },
        emphasis: {
          disabled: true,
        },
      },
    ],
  };

  // Multiple Bar Chart
  const multipleBarOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      data: ['Series A', 'Series B'],
      bottom: '5%',
      textStyle: {
        fontSize: 10,
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      containLabel: true,
      show: false,
      splitLine: {
        show: false,
      },
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      axisLabel: {
        show: true,
        fontSize: 10,
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: colorScheme === 'dark' ? '#333333' : '#e5e7eb',
          opacity: 0.5,
        },
      },
    },
    series: [
      {
        name: 'Series A',
        type: 'bar',
        data: [186, 305, 237, 73, 209, 214],
        barWidth: '40%',
        itemStyle: {
          color: '#93c5fd',
          borderRadius: [4, 4, 4, 4],
        },
        emphasis: {
          disabled: true,
        },
      },
      {
        name: 'Series B',
        type: 'bar',
        data: [150, 280, 200, 90, 180, 190],
        barWidth: '40%',
        itemStyle: {
          color: '#3b82f6',
          borderRadius: [4, 4, 4, 4],
        },
        emphasis: {
          disabled: true,
        },
      },
    ],
  };

  // Stacked Bar Chart
  const stackedBarOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      data: ['Desktop', 'Mobile'],
      bottom: '5%',
      textStyle: {
        fontSize: 10,
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      axisLabel: {
        show: true,
        fontSize: 10,
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },
    series: [
      {
        name: 'Desktop',
        type: 'bar',
        stack: 'total',
        data: [100, 150, 120, 40, 110, 120],
        itemStyle: {
          color: '#93c5fd',
          borderRadius: [0, 0, 4, 4],
        },
        emphasis: {
          disabled: true,
        },
      },
      {
        name: 'Mobile',
        type: 'bar',
        stack: 'total',
        data: [86, 155, 117, 33, 99, 94],
        itemStyle: {
          color: '#3b82f6',
          borderRadius: [4, 4, 0, 0],
        },
        emphasis: {
          disabled: true,
        },
      },
    ],
  };

  // Bar Chart with Labels
  const labelBarOption = {
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '3%',
      top: '5%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      axisLabel: {
        show: true,
        fontSize: 10,
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: true,
        interval: 2,
        lineStyle: {
          color: colorScheme === 'dark' ? '#333333' : '#e5e7eb',
          opacity: 0.5,
        },
      },
    },
    series: [
      {
        data: [186, 305, 237, 73, 209, 214],
        type: 'bar',
        itemStyle: {
          color: '#93c5fd',
          borderRadius: [4, 4, 4, 4],
        },
        label: {
          show: true,
          position: 'top',
          fontSize: 10,
          color: colorScheme === 'dark' ? '#cccccc' : '#666666',
        },
        emphasis: {
          disabled: true,
        },
      },
    ],
  };

  // Custom Label Bar Chart
  const customLabelBarData = [100, 150, 120, 40, 110, 120];
  const customLabelBarOption = {
    tooltip: {
      trigger: 'axis',
      formatter: function(params: any) {
        const param = params[0];
        const months = ['January', 'February', 'March', 'April', 'May', 'June'];
        return months[param.dataIndex] + ' ' + param.value;
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      type: 'category',
      data: ['January', 'February', 'March', 'April', 'May', 'June'],
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },
    series: [
      {
        name: 'Series A',
        data: customLabelBarData,
        type: 'bar',
        stack: 'total',
        barWidth: '80%',
        itemStyle: {
          color: '#437fff',
          borderRadius: [4, 4, 4, 4],
        },
        label: {
          show: true,
          position: 'insideLeft',
          formatter: function(params: any) {
            const months = ['January', 'February', 'March', 'April', 'May', 'June'];
            return months[params.dataIndex];
          },
          fontSize: 10,
          color: '#ffffff',
          fontWeight: 'bold',
        },
        emphasis: {
          disabled: true,
        },
      },
      {
        name: 'Series B',
        data: [0, 0, 0, 0, 0, 0],
        type: 'bar',
        stack: 'total',
        barWidth: '80%',
        tooltip: {
          show: false,
        },
        itemStyle: {
          color: '#93c5fd',
          borderRadius: [4, 4, 4, 4],
        },
        label: {
          show: true,
          position: 'right',
          formatter: function(params: any) {
            return customLabelBarData[params.dataIndex];
          },
          fontSize: 10,
          color: colorScheme === 'dark' ? '#cccccc' : '#666666',
        },
        emphasis: {
          disabled: true,
        },
      },
    ],
  };

  // Mixed Bar Chart (Browser data)
  const mixedBarOption = {
    tooltip: {
      show: false,
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '3%',
      top: '5%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: 'category',
      data: ['Other', 'Edge', 'Safari', 'Firefox', 'Chrome'],
      axisLabel: {
        show: true,
        fontSize: 10,
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },
    series: [
      {
        data: [
          { value: 8, itemStyle: { color: '#000080', borderRadius: [4, 4, 4, 4] } },
          { value: 12, itemStyle: { color: '#0000cd', borderRadius: [4, 4, 4, 4] } },
          { value: 35, itemStyle: { color: '#4169e1', borderRadius: [4, 4, 4, 4] } },
          { value: 40, itemStyle: { color: '#1e90ff', borderRadius: [4, 4, 4, 4] } },
          { value: 65, itemStyle: { color: '#87ceeb', borderRadius: [4, 4, 4, 4] } },
        ],
        type: 'bar',
        barWidth: '60%',
        emphasis: {
          disabled: true,
        },
      },
    ],
  };

  // Active Bar Chart
  const activeBarOption = {
    tooltip: {
      show: false,
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '3%',
      top: '5%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: ['Chrome', 'Safari', 'Firefox', 'Edge', 'Other'],
      axisLabel: {
        show: true,
        fontSize: 10,
        color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: colorScheme === 'dark' ? '#333333' : '#e5e7eb',
          opacity: 0.5,
        },
      },
    },
    series: [
      {
        data: [
          { value: Math.floor(Math.random() * 50) + 15, itemStyle: { color: '#93c5fd', borderRadius: [4, 4, 4, 4] } },
          { value: Math.floor(Math.random() * 50) + 15, itemStyle: { color: '#93c5fd', borderRadius: [4, 4, 4, 4] } },
          { value: Math.floor(Math.random() * 30) + 85, itemStyle: { color: '#3b82f6', borderColor: '#1d4ed8', borderWidth: 2, borderType: 'dashed', borderRadius: [4, 4, 4, 4] } },
          { value: Math.floor(Math.random() * 50) + 15, itemStyle: { color: '#93c5fd', borderRadius: [4, 4, 4, 4] } },
          { value: Math.floor(Math.random() * 50) + 15, itemStyle: { color: '#93c5fd', borderRadius: [4, 4, 4, 4] } },
        ],
        type: 'bar',
        emphasis: {
          disabled: true,
        },
      },
    ],
  };

  // Negative Bar Chart
  const negativeBarOption = {
    tooltip: {
      show: false,
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '3%',
      top: '5%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: ['January', 'February', 'March', 'April', 'May', 'June'],
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#aaa',
        },
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: colorScheme === 'dark' ? '#333333' : '#e5e7eb',
          opacity: 0.5,
        },
      },
    },
    series: [
      {
        data: [120, 150, -180, 110, -80, 160],
        type: 'bar',
        barWidth: '60%',
        itemStyle: {
          color: function(params: any) {
            return params.value >= 0 ? '#93c5fd' : '#3b82f6';
          },
          borderRadius: [4, 4, 4, 4],
        },
        label: {
          show: true,
          position: "outside",
          formatter: function(params: any) {
            const months = ['January', 'February', 'March', 'April', 'May', 'June'];
            return months[params.dataIndex];
          },
          fontSize: 10,
          color: colorScheme === 'dark' ? '#cccccc' : '#666666',
        },
        emphasis: {
          disabled: true,
        },
      },
    ],
  };

  const chartCards = [
    {
      title: 'Bar Chart',
      timeframe: 'January - June 2024',
      option: basicBarOption,
      icon: 'bar-chart',
    },
    {
      title: 'Bar Chart - Horizontal',
      timeframe: 'January - June 2024',
      option: horizontalBarOption,
      icon: 'bar-chart',
    },
    {
      title: 'Bar Chart - Multiple',
      timeframe: 'January - June 2024',
      option: multipleBarOption,
      icon: 'bar-chart',
    },
    {
      title: 'Bar Chart - Stacked + Legend',
      timeframe: 'January - June 2024',
      option: stackedBarOption,
      icon: 'bar-chart',
    },
    {
      title: 'Bar Chart - Label',
      timeframe: 'January - June 2024',
      option: labelBarOption,
      icon: 'bar-chart',
    },
    {
      title: 'Bar Chart - Custom Label',
      timeframe: 'January - June 2024',
      option: customLabelBarOption,
      icon: 'bar-chart',
    },
    {
      title: 'Bar Chart - Mixed',
      timeframe: 'January - June 2024',
      option: mixedBarOption,
      icon: 'bar-chart',
    },
    {
      title: 'Bar Chart - Active',
      timeframe: 'January - June 2024',
      option: activeBarOption,
      icon: 'bar-chart',
    },
    {
      title: 'Bar Chart - Negative',
      timeframe: 'January - June 2024',
      option: negativeBarOption,
      icon: 'bar-chart',
    },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#f5f5f5',
    },
    header: {
      padding: 20,
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
    interactiveSection: {
      backgroundColor: colorScheme === 'dark' ? '#2a2a2a' : '#fff',
      marginHorizontal: 10,
      marginBottom: 20,
      borderRadius: 8,
      padding: 16,
      shadowColor: colorScheme === 'dark' ? '#000' : '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: colorScheme === 'dark' ? 0.2 : 0.05,
      shadowRadius: 2,
      elevation: 2,
    },
    interactiveHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 15,
    },
    interactiveTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colorScheme === 'dark' ? '#ffffff' : '#333333',
    },
    viewCodeButton: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      backgroundColor: colorScheme === 'dark' ? '#374151' : '#f3f4f6',
      borderRadius: 6,
    },
    viewCodeText: {
      fontSize: 12,
      color: colorScheme === 'dark' ? '#d1d5db' : '#6b7280',
    },
    visitorStats: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15,
    },
    visitorNumber: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colorScheme === 'dark' ? '#ffffff' : '#333333',
    },
    interactiveChart: {
      height: 220,
      borderRadius: 6,
    },
    chartsGrid: {
      paddingHorizontal: 10,
      paddingBottom: 20,
    },
    chartCard: {
      backgroundColor: colorScheme === 'dark' ? '#2a2a2a' : '#fff',
      marginBottom: 12,
      borderRadius: 8,
      padding: 12,
      shadowColor: colorScheme === 'dark' ? '#000' : '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: colorScheme === 'dark' ? 0.2 : 0.05,
      shadowRadius: 2,
      elevation: 2,
    },
    chartCardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    chartCardTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colorScheme === 'dark' ? '#ffffff' : '#333333',
    },
    chartCardTimeframe: {
      fontSize: 12,
      color: colorScheme === 'dark' ? '#cccccc' : '#666666',
    },
    chartCardIcon: {
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    chartCardChart: {
      height: 260,
      borderRadius: 6,
    },
    chartCardFooter: {
      marginTop: 10,
      paddingTop: 10,
      borderTopWidth: 1,
      borderTopColor: colorScheme === 'dark' ? '#374151' : '#e5e7eb',
    },
    chartCardFooterText: {
      fontSize: 12,
      color: colorScheme === 'dark' ? '#cccccc' : '#666666',
      textAlign: 'center',
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Bar Charts
        </Text>
        <Text style={styles.headerSubtitle}>
          Various bar chart types with modern styling
        </Text>
      </View>

      {/* Interactive Bar Chart Section */}
      <View style={styles.interactiveSection}>
        <View style={styles.interactiveHeader}>
          <Text style={styles.interactiveTitle}>
            Bar Chart - Interactive
          </Text>
          <TouchableOpacity style={styles.viewCodeButton}>
            <Text style={styles.viewCodeText}>View Code</Text>
          </TouchableOpacity>
        </View>
        
        <Text style={{ fontSize: 14, color: colorScheme === 'dark' ? '#cccccc' : '#666666', marginBottom: 15 }}>
          Showing total visitors for the last 3 months
        </Text>

        <View style={styles.visitorStats}>
          <Text style={styles.visitorNumber}>Desktop 24,828</Text>
          <Text style={styles.visitorNumber}>Mobile 25,010</Text>
        </View>

        <ChartComponent
          option={interactiveBarOption}
          height={220}
          style={styles.interactiveChart}
        />
      </View>

      {/* Grid of Bar Charts */}
      <View style={styles.chartsGrid}>
        {chartCards.map((chart, index) => (
          <View key={index} style={styles.chartCard}>
            <View style={styles.chartCardHeader}>
              <View style={styles.chartCardIcon}>
                <Ionicons name="bar-chart" size={20} color="#3b82f6" />
              </View>
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={styles.chartCardTitle}>
                  {chart.title}
                </Text>
                <Text style={styles.chartCardTimeframe}>
                  {chart.timeframe}
                </Text>
              </View>
              <TouchableOpacity style={styles.viewCodeButton}>
                <Text style={styles.viewCodeText}>View Code</Text>
              </TouchableOpacity>
            </View>

            <ChartComponent
              option={chart.option}
              height={260}
              style={styles.chartCardChart}
            />

            <View style={styles.chartCardFooter}>
              <Text style={styles.chartCardFooterText}>
                Trending up by 5.2% this month
              </Text>
              <Text style={styles.chartCardFooterText}>
                Showing total visitors for the last 6 months
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
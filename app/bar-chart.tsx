import {
  ActiveBarChart,
  CustomLabelBarChart,
  DefaultBarChart,
  HorizontalBarChart,
  InteractiveBarChart,
  LabelBarChart,
  MixedBarChart,
  MultipleBarChart,
  NegativeBarChart,
  StackedBarChart,
} from '@/components/chart/bar';
import { useTheme } from '@/contexts/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BarChartScreen() {
  const { colorScheme } = useTheme();

  const chartCards = [
    {
      title: 'Bar Chart',
      timeframe: 'January - June 2024',
      component: DefaultBarChart,
    },
    {
      title: 'Bar Chart - Horizontal',
      timeframe: 'January - June 2024',
      component: HorizontalBarChart,
    },
    {
      title: 'Bar Chart - Multiple',
      timeframe: 'January - June 2024',
      component: MultipleBarChart,
    },
    {
      title: 'Bar Chart - Stacked + Legend',
      timeframe: 'January - June 2024',
      component: StackedBarChart,
    },
    {
      title: 'Bar Chart - Label',
      timeframe: 'January - June 2024',
      component: LabelBarChart,
    },
    {
      title: 'Bar Chart - Custom Label',
      timeframe: 'January - June 2024',
      component: CustomLabelBarChart,
    },
    {
      title: 'Bar Chart - Mixed',
      timeframe: 'January - June 2024',
      component: MixedBarChart,
    },
    {
      title: 'Bar Chart - Active',
      timeframe: 'January - June 2024',
      component: ActiveBarChart,
    },
    {
      title: 'Bar Chart - Negative',
      timeframe: 'January - June 2024',
      component: NegativeBarChart,
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

        <View style={styles.interactiveChart}>
          <InteractiveBarChart height={220} />
        </View>
      </View>

      {/* Grid of Bar Charts */}
      <View style={styles.chartsGrid}>
        {chartCards.map((chart, index) => {
          const ChartComponent = chart.component;
          return (
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

              <View style={styles.chartCardChart}>
                <ChartComponent height={260} />
              </View>

              <View style={styles.chartCardFooter}>
                <Text style={styles.chartCardFooterText}>
                  Trending up by 5.2% this month
                </Text>
                <Text style={styles.chartCardFooterText}>
                  Showing total visitors for the last 6 months
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
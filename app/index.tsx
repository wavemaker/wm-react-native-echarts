import { ThemeToggle } from '@/components/theme-toggle';
import { useTheme } from '@/contexts/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const chartTypes = [
  {
    id: 'area-chart',
    title: 'Area Chart',
    description: 'Filled area visualization with smooth gradients',
    icon: 'analytics' as const,
    color: '#3b82f6',
  },
  {
    id: 'line-chart',
    title: 'Line Chart',
    description: 'Sales trend visualization with smooth curves',
    icon: 'trending-up' as const,
    color: '#5470c6',
  },
  {
    id: 'bar-chart',
    title: 'Bar Chart',
    description: 'Monthly revenue comparison across products',
    icon: 'bar-chart' as const,
    color: '#91cc75',
  },
  {
    id: 'pie-chart',
    title: 'Pie Chart',
    description: 'Market share distribution across companies',
    icon: 'pie-chart' as const,
    color: '#fac858',
  },
  {
    id: 'gauge-chart',
    title: 'Gauge Chart',
    description: 'Progress tracking with multiple metrics',
    icon: 'speedometer' as const,
    color: '#ee6666',
  },
  // {
  //   id: 'scatter-chart',
  //   title: 'Scatter Chart',
  //   description: 'Data correlation and distribution analysis',
  //   icon: 'radio-button-off' as const,
  //   color: '#73c0de',
  // },
  {
    id: 'radar-chart',
    title: 'Radar Chart',
    description: 'Multi-dimensional data comparison',
    icon: 'radio-button-on' as const,
    color: '#3fb1e3',
  },
  // {
  //   id: 'funnel-chart',
  //   title: 'Funnel Chart',
  //   description: 'Conversion process visualization',
  //   icon: 'funnel' as const,
  //   color: '#6be6c1',
  // },
  // {
  //   id: 'heatmap-chart',
  //   title: 'Heatmap Chart',
  //   description: 'Data density and correlation patterns',
  //   icon: 'grid' as const,
  //   color: '#626c91',
  // },
      {
        id: 'candlestick-chart',
        title: 'Candlestick Chart',
        description: 'Financial data and stock price analysis',
        icon: 'trending-up' as const,
        color: '#a0a7e6',
      },
      {
        id: 'radial-chart',
        title: 'Radial Chart',
        description: 'Circular data visualization with polar coordinates',
        icon: 'radio-button-on' as const,
        color: '#ff9a9e',
      },
      {
        id: 'geo-chart',
        title: 'Geo Chart',
        description: 'Interactive world maps with geographic data',
        icon: 'map' as const,
        color: '#74b9ff',
      },
];

export default function HomeScreen() {
  const { colorScheme } = useTheme();
  
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
    headerTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
    },
    headerContent: {
      flex: 1,
      alignItems: 'center',
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
    chartsGrid: {
      paddingHorizontal: 10,
      paddingBottom: 20,
    },
    chartCard: {
      backgroundColor: colorScheme === 'dark' ? '#2a2a2a' : '#fff',
      marginBottom: 15,
      borderRadius: 12,
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
      shadowColor: colorScheme === 'dark' ? '#000' : '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: colorScheme === 'dark' ? 0.3 : 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    iconContainer: {
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 15,
    },
    chartInfo: {
      flex: 1,
    },
    chartTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 4,
      color: colorScheme === 'dark' ? '#ffffff' : '#333333',
    },
    chartDescription: {
      fontSize: 14,
      opacity: 0.7,
      lineHeight: 20,
      color: colorScheme === 'dark' ? '#cccccc' : '#666666',
    },
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>
              Charts Dashboard
            </Text>
            <Text style={styles.headerSubtitle}>
              Comprehensive data visualization with ECharts & Dark Mode Support
            </Text>
          </View>
          <ThemeToggle />
        </View>
      </View>

      <View style={styles.chartsGrid}>
        {chartTypes.map((chart) => (
          <Link key={chart.id} href={chart.id as any} asChild>
            <TouchableOpacity style={styles.chartCard}>
              <View style={[styles.iconContainer, { backgroundColor: chart.color }]}>
                <Ionicons name={chart.icon} size={32} color="white" />
              </View>
              <View style={styles.chartInfo}>
                <Text style={styles.chartTitle}>
                  {chart.title}
                </Text>
                <Text style={styles.chartDescription}>
                  {chart.description}
                </Text>
              </View>
              <Ionicons 
                name="chevron-forward" 
                size={20} 
                color={colorScheme === 'dark' ? '#cccccc' : '#999'} 
              />
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
}

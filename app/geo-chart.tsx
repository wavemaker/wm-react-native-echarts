import { ChartComponent } from '@/components/chart-component';
import { useTheme } from '@/contexts/ThemeContext';
import worldData from '@/data/world.json';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function GeoChartScreen() {
  const { colorScheme } = useTheme();

  // World Population Map
  const worldPopulationMapOption = {
    title: {
      text: 'World Population Map',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colorScheme === 'dark' ? '#ffffff' : '#333333',
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}<br/>Population: {c}M',
    },
    visualMap: {
      min: 0,
      max: 1500,
      left: 'left',
      top: 'bottom',
      text: ['High', 'Low'],
      calculable: true,
      inRange: {
        color: ['#4ecdc4', '#45b7d1', '#667eea', '#ff6b6b'],
      },
      textStyle: {
        color: colorScheme === 'dark' ? '#ffffff' : '#333333',
      },
    },
    series: [
      {
        name: 'Population',
        type: 'map',
        map: 'world',
        roam: true,
        emphasis: {
          label: {
            show: true,
            color: colorScheme === 'dark' ? '#ffffff' : '#333333',
          },
          itemStyle: {
            areaColor: '#ff6b6b',
          },
        },
        itemStyle: {
          borderColor: colorScheme === 'dark' ? '#444444' : '#cccccc',
          borderWidth: 0.5,
        },
        label: {
          show: false,
        },
        data: [
          { name: 'China', value: 1439 },
          { name: 'India', value: 1380 },
          { name: 'United States', value: 331 },
          { name: 'Indonesia', value: 273 },
          { name: 'Pakistan', value: 220 },
          { name: 'Brazil', value: 212 },
          { name: 'Nigeria', value: 206 },
          { name: 'Bangladesh', value: 164 },
          { name: 'Russia', value: 145 },
          { name: 'Mexico', value: 128 },
          { name: 'Japan', value: 125 },
          { name: 'Philippines', value: 109 },
          { name: 'Ethiopia', value: 115 },
          { name: 'Vietnam', value: 97 },
          { name: 'Egypt', value: 102 },
          { name: 'Turkey', value: 84 },
          { name: 'Iran', value: 83 },
          { name: 'Germany', value: 83 },
          { name: 'Thailand', value: 69 },
          { name: 'United Kingdom', value: 67 },
        ],
      },
    ],
  };

  // GDP World Map
  const gdpWorldMapOption = {
    title: {
      text: 'GDP World Map',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colorScheme === 'dark' ? '#ffffff' : '#333333',
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}<br/>GDP: ${c}B',
    },
    visualMap: {
      min: 0,
      max: 20000,
      left: 'left',
      top: 'bottom',
      text: ['High GDP', 'Low GDP'],
      calculable: true,
      inRange: {
        color: ['#a8e6cf', '#4ecdc4', '#45b7d1', '#667eea', '#ff6b6b'],
      },
      textStyle: {
        color: colorScheme === 'dark' ? '#ffffff' : '#333333',
      },
    },
    series: [
      {
        name: 'GDP',
        type: 'map',
        map: 'world',
        roam: true,
        emphasis: {
          label: {
            show: true,
            color: colorScheme === 'dark' ? '#ffffff' : '#333333',
          },
          itemStyle: {
            areaColor: '#ff6b6b',
          },
        },
        itemStyle: {
          borderColor: colorScheme === 'dark' ? '#444444' : '#cccccc',
          borderWidth: 0.5,
        },
        label: {
          show: false,
        },
        data: [
          { name: 'United States', value: 21427 },
          { name: 'China', value: 14342 },
          { name: 'Japan', value: 5081 },
          { name: 'Germany', value: 3845 },
          { name: 'India', value: 3176 },
          { name: 'United Kingdom', value: 2831 },
          { name: 'France', value: 2603 },
          { name: 'Italy', value: 2000 },
          { name: 'Brazil', value: 1608 },
          { name: 'Canada', value: 1736 },
          { name: 'Russia', value: 1483 },
          { name: 'South Korea', value: 1810 },
          { name: 'Australia', value: 1542 },
          { name: 'Spain', value: 1394 },
          { name: 'Mexico', value: 1293 },
          { name: 'Indonesia', value: 1119 },
          { name: 'Netherlands', value: 912 },
          { name: 'Saudi Arabia', value: 793 },
          { name: 'Turkey', value: 761 },
          { name: 'Switzerland', value: 812 },
        ],
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
          Geo Charts Gallery
        </Text>
        <Text style={styles.headerSubtitle}>
          Interactive world maps with geographic data visualization
        </Text>
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={worldPopulationMapOption}
          height={400}
          style={styles.chart}
          geoJson={worldData}
          mapName="world"
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={gdpWorldMapOption}
          height={400}
          style={styles.chart}
          geoJson={worldData}
          mapName="world"
        />
      </View>

    </ScrollView>
  );
}

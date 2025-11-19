import { useTheme } from '@/contexts/ThemeContext';
import { DefaultGeoChart } from '@/components/chart/geo/DefaultGeoChart';
import { GDPGeoChart } from '@/components/chart/geo/GDPGeoChart';
import { InteractiveGeoChart } from '@/components/chart/geo/InteractiveGeoChart';
import { PopulationGeoChart } from '@/components/chart/geo/PopulationGeoChart';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function GeoChartScreen() {
  const { colorScheme } = useTheme();

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

      {/* Main Interactive Chart */}
      <InteractiveGeoChart />

      {/* Grid of smaller charts */}
      <PopulationGeoChart />
      <GDPGeoChart />
      <DefaultGeoChart />

    </ScrollView>
  );
}

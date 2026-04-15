import { useTheme } from '@/contexts/ThemeContext';
import { DefaultGeoChart } from '@/components/chart/geo/default-geo.chart';
import { GDPGeoChart } from '@/components/chart/geo/gdp-geo.chart';
import { InteractiveGeoChart } from '@/components/chart/geo/interactive-geo.chart';
import { PopulationGeoChart } from '@/components/chart/geo/population-geo.chart';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function GeoChartScreen() {
  const { colorScheme } = useTheme();

  // Sample data for different chart types
  const defaultGeoData = [
    { name: 'United States', value: 500 },
    { name: 'China', value: 600 },
    { name: 'Japan', value: 300 },
    { name: 'Germany', value: 250 },
    { name: 'India', value: 400 },
    { name: 'United Kingdom', value: 200 },
    { name: 'France', value: 180 },
    { name: 'Brazil', value: 220 },
    { name: 'Canada', value: 150 },
    { name: 'Russia', value: 280 },
  ];

  const gdpData = [
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
  ];

  const populationData = [
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
  ];

  const interactiveGeoData = [
    { name: 'United States', value: 800 },
    { name: 'China', value: 950 },
    { name: 'Japan', value: 450 },
    { name: 'Germany', value: 420 },
    { name: 'India', value: 650 },
    { name: 'United Kingdom', value: 380 },
    { name: 'France', value: 360 },
    { name: 'Italy', value: 290 },
    { name: 'Brazil', value: 340 },
    { name: 'Canada', value: 320 },
    { name: 'Russia', value: 490 },
    { name: 'South Korea', value: 410 },
    { name: 'Australia', value: 350 },
    { name: 'Spain', value: 310 },
    { name: 'Mexico', value: 280 },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#f5f5f5',
    },
  });

  return (
    <ScrollView style={styles.container}>
      {/* Main Interactive Chart */}
      <InteractiveGeoChart data={interactiveGeoData} />

      {/* Grid of smaller charts */}
      <PopulationGeoChart data={populationData} />
      <GDPGeoChart data={gdpData} />
      <DefaultGeoChart data={defaultGeoData} />

    </ScrollView>
  );
}

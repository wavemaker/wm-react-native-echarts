import { DigitalGauge, RadialGauge, SimpleGauge, SpeedometerGauge } from '@wavemaker/react-native-echarts/gauge';
import { useTheme } from '@/contexts/ThemeContext';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function GaugeChartScreen() {
  const { colorScheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#f5f5f5',
      paddingTop: 8,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <SpeedometerGauge value={85} />
      <SpeedometerGauge
        value={85}
        min={0}
        max={120}
        axisBgColor="#f0efdc"
        axisColors={['#72f897', '#f39c4b', '#ea477a']}
        axisColorLengths={[40, 80, 120]}
        axisWidth={20}
        tickColor="#aaaaaa"
      />
      <RadialGauge value={64} />
      <DigitalGauge value={48} />
      <SimpleGauge value={45} title="Metric A" detailText="45%" />
    </ScrollView>
  );
}

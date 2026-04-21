import { AreaChart } from '@wavemaker/react-native-echarts/area';
import { useTheme } from '@/contexts/ThemeContext';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] as const;
const scrollChartWidth = Math.max(1, Math.floor(Dimensions.get('window').width) - 24);

export default function AreaChartScreen() {
  const { colorScheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#f5f5f5',
    },
  });

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ alignSelf: 'stretch' }}>
      <AreaChart
        width={scrollChartWidth}
        data={[
          {
            name: 'Mobile',
            data: [5000, 7200, 15500, 18700, 22100, 19500, 25400, 23900, 27600, 26000, 23600, 25100, 23900, 23500, 23700, 23900],
          },
          {
            name: 'Desktop',
            data: [4000, 6400, 13500, 17500, 21200, 24600, 22900, 26300, 25000, 21600, 23900, 22700, 21900, 22100, 22300, 23800],
          },
        ]}
      />
      <AreaChart width={scrollChartWidth} data={[150, 230, 180, 120, 200, 250]} />
      <AreaChart width={scrollChartWidth} type="default" data={[180, 220, 240, 160, 190, 270]} />
      <AreaChart width={scrollChartWidth} type="step" data={[160, 220, 220, 180, 180, 240]} />
      <AreaChart
        width={scrollChartWidth}
        showLegend
        data={[
          { name: 'Mobile', data: [140, 180, 200, 150, 160, 210] },
          { name: 'Desktop', data: [80, 120, 140, 90, 100, 150] },
        ]}
      />
      <AreaChart
        width={scrollChartWidth}
        stack="total"
        data={[
          { name: 'S1', data: [120, 132, 101, 134, 90, 230] },
          { name: 'S2', data: [80, 82, 91, 104, 70, 140] },
        ]}
      />
      <AreaChart
        width={scrollChartWidth}
        stackNormalize
        data={[
          { name: 'S1', data: months.map((m, i) => [m, [60, 70, 55, 65, 60, 70][i]!] as [string, number]) },
          { name: 'S2', data: months.map((m, i) => [m, [40, 30, 45, 35, 40, 30][i]!] as [string, number]) },
        ]}
      />
      <AreaChart
        width={scrollChartWidth}
        symbol="circle"
        symbolSize={8}
        data={[
          { name: 'Mobile', data: [140, 180, 200, 150, 160, 210] },
          { name: 'Desktop', data: [80, 120, 140, 90, 100, 150] },
        ]}
      />
      <AreaChart
        width={scrollChartWidth}
        areaFill="gradient"
        data={[
          { name: 'S1', data: [140, 180, 200, 150, 160, 210] },
          { name: 'S2', data: [80, 120, 140, 90, 100, 150] },
        ]}
      />
      <AreaChart
        width={scrollChartWidth}
        xAxisLabel="Category"
        yAxisLabel="Value"
        grid={{ left: 48, right: 16, top: 24, bottom: 40 }}
        data={[200, 350, 500, 300, 400, 600]}
      />
    </ScrollView>
  );
}

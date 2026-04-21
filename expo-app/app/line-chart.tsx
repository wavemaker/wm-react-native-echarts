import { LineChart } from '@wavemaker/react-native-echarts/line';
import { useTheme } from '@/contexts/ThemeContext';
import { ScrollView, StyleSheet } from 'react-native';

const monthCats = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] as const;

export default function LineChartScreen() {
  const { colorScheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#f5f5f5',
    },
  });

  return (
    <ScrollView style={styles.container}>
      <LineChart
        tooltip="card"
        type="smooth"
        data={[
          {
            name: 'Desktop',
            data: [7000, 8900, 15200, 18900, 22300, 19800, 25600, 24100, 27800, 26200, 23800, 25300, 24100, 23700, 23900, 24100, 23828],
          },
          {
            name: 'Mobile',
            data: [5000, 6200, 12500, 17700, 21400, 24800, 23100, 26500, 25200, 21800, 24100, 22900, 22100, 22300, 22500, 24010],
          },
        ]}
      />
      <LineChart data={[142, 267, 189, 95, 178, 231]} />
      <LineChart type="default" data={[180, 220, 240, 160, 190, 270]} />
      <LineChart type="step" data={[170, 170, 230, 230, 180, 180]} />
      <LineChart
        data={[
          { name: 'Series A', data: monthCats.map((m, i) => [m, [198, 287, 251, 89, 223, 202][i]!] as [string, number]) },
          { name: 'Series B', data: monthCats.map((m, i) => [m, [135, 185, 165, 95, 85, 125][i]!] as [string, number]) },
        ]}
      />
      <LineChart symbol="circle" symbolSize={10} data={[174, 291, 249, 87, 197, 226]} />
      <LineChart symbol="diamond" symbolSize={12} data={[186, 305, 237, 73, 209, 214]} />
      <LineChart
        colors={['#1e40af', '#3b82f6', '#60a5fa', '#93c5fd', '#1e40af', '#3b82f6']}
        data={[186, 305, 237, 73, 209, 214]}
      />
      <LineChart xAxisTickLabelFormatter={(v) => String(v)} data={[186, 305, 237, 73, 209, 214]} />
      <LineChart
        data={[
          ['Chrome', 186],
          ['Safari', 305],
          ['Firefox', 237],
          ['Edge', 73],
          ['Other', 209],
          ['Other+', 214],
        ]}
      />
    </ScrollView>
  );
}

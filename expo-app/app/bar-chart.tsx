import { BarChart } from '@wavemaker/react-native-echarts/bar';
import { useTheme } from '@/contexts/ThemeContext';
import { ScrollView, StyleSheet } from 'react-native';

const monthCats = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] as const;
const monthValues = [186, 305, 237, 73, 209, 214] as const;

export default function BarChartScreen() {
  const { colorScheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#f5f5f5',
    },
  });

  const defaultCats = monthCats.map((m, i) => [m, monthValues[i]!] as [string, number]);

  return (
    <ScrollView style={styles.container}>
      <BarChart
        data={[
          'Apr 1',
          'Apr 8',
          'Apr 15',
          'Apr 22',
          'Apr 29',
          'May 6',
          'May 13',
          'May 20',
          'May 27',
          'Jun 3',
          'Jun 10',
          'Jun 17',
          'Jun 24',
        ].map((label, i) => [label, [800, 1200, 950, 1800, 1100, 1500, 1300, 950, 1700, 1250, 1600, 1050, 1400][i]!] as [string, number])}
      />
      <BarChart data={defaultCats} />
      <BarChart
        data={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((m, i) => [m, monthValues[i]!] as [string, number])}
      />
      <BarChart
        data={[
          { name: 'Series A', data: defaultCats },
          { name: 'Series B', data: monthCats.map((m, i) => [m, [150, 280, 200, 90, 180, 190][i]!] as [string, number]) },
        ]}
      />
      <BarChart
        stack="total"
        cornerRadius={[0, 0, 4, 4]}
        data={[
          {
            name: 'Desktop',
            data: monthCats.map((m, i) => [m, [100, 150, 120, 40, 110, 120][i]!] as [string, number]),
          },
          {
            name: 'Mobile',
            data: monthCats.map((m, i) => [m, [86, 155, 117, 33, 99, 94][i]!] as [string, number]),
          },
        ]}
      />
      <BarChart barInsideLabelFormatter={(v) => String(v)} data={defaultCats} />
      <BarChart
        data={['January', 'February', 'March', 'April', 'May', 'June'].map((m, i) => [m, [100, 150, 120, 40, 110, 120][i]!] as [string, number])}
      />
      <BarChart
        data={['Other', 'Edge', 'Safari', 'Firefox', 'Chrome'].map((m, i) => [m, [8, 12, 35, 40, 65][i]!] as [string, number])}
      />
      <BarChart
        activeIndex={0}
        data={['Chrome', 'Safari', 'Firefox', 'Edge', 'Other'].map((m, i) => [m, [275, 200, 187, 90, 60][i]!] as [string, number])}
      />
      <BarChart
        data={['January', 'February', 'March', 'April', 'May', 'June'].map((m, i) => [m, [120, 150, -180, 110, -80, 160][i]!] as [string, number])}
      />
    </ScrollView>
  );
}

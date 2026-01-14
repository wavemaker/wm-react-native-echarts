import {
  BasicRadarChart,
  CustomLabelRadarChart,
  DotsRadarChart,
  GridCircleFilledRadarChart,
  GridCircleNoLinesRadarChart,
  GridCircleRadarChart,
  GridFilledRadarChart,
  GridNoneRadarChart,
  LegendRadarChart,
  LinesOnlyRadarChart,
  MultipleRadarChart,
} from '@/components/chart/radar';
import { useTheme } from '@/contexts/ThemeContext';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function RadarChartScreen() {
  const { colorScheme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#f5f5f5',
    },
  });

  return (
    <ScrollView style={styles.container}>
      <BasicRadarChart 
        indicators={[
          { name: 'January', max: 400 },
          { name: 'February', max: 400 },
          { name: 'March', max: 400 },
          { name: 'April', max: 400 },
          { name: 'May', max: 400 },
          { name: 'June', max: 400 },
        ]}
        data={[240, 305, 237, 280, 209, 364]}
      />
      <DotsRadarChart 
        indicators={[
          { name: 'January', max: 400 },
          { name: 'February', max: 400 },
          { name: 'March', max: 400 },
          { name: 'April', max: 400 },
          { name: 'May', max: 400 },
          { name: 'June', max: 400 },
        ]}
        data={[240, 305, 237, 280, 209, 364]}
      />
      <LinesOnlyRadarChart 
        indicators={[
          { name: 'January', max: 400 },
          { name: 'February', max: 400 },
          { name: 'March', max: 400 },
          { name: 'April', max: 400 },
          { name: 'May', max: 400 },
          { name: 'June', max: 400 },
        ]}
        data={[240, 305, 237, 280, 209, 364]}
      />
      <CustomLabelRadarChart 
        indicators={[
          { name: 'January', max: 400 },
          { name: 'February', max: 400 },
          { name: 'March', max: 400 },
          { name: 'April', max: 400 },
          { name: 'May', max: 400 },
          { name: 'June', max: 400 },
        ]}
        data={[240, 305, 237, 280, 209, 364]}
      />
      <GridNoneRadarChart 
        indicators={[
          { name: 'January', max: 400 },
          { name: 'February', max: 400 },
          { name: 'March', max: 400 },
          { name: 'April', max: 400 },
          { name: 'May', max: 400 },
          { name: 'June', max: 400 },
        ]}
        data={[240, 305, 237, 280, 209, 364]}
      />
      <GridCircleRadarChart 
        indicators={[
          { name: 'January', max: 400 },
          { name: 'February', max: 400 },
          { name: 'March', max: 400 },
          { name: 'April', max: 400 },
          { name: 'May', max: 400 },
          { name: 'June', max: 400 },
        ]}
        data={[240, 305, 237, 280, 209, 364]}
      />
      <GridCircleNoLinesRadarChart 
        indicators={[
          { name: 'January', max: 400 },
          { name: 'February', max: 400 },
          { name: 'March', max: 400 },
          { name: 'April', max: 400 },
          { name: 'May', max: 400 },
          { name: 'June', max: 400 },
        ]}
        data={[240, 305, 237, 280, 209, 364]}
      />
      <GridCircleFilledRadarChart 
        indicators={[
          { name: 'January', max: 400 },
          { name: 'February', max: 400 },
          { name: 'March', max: 400 },
          { name: 'April', max: 400 },
          { name: 'May', max: 400 },
          { name: 'June', max: 400 },
        ]}
        data={[240, 305, 237, 280, 209, 364]}
      />
      <GridFilledRadarChart 
        indicators={[
          { name: 'January', max: 400 },
          { name: 'February', max: 400 },
          { name: 'March', max: 400 },
          { name: 'April', max: 400 },
          { name: 'May', max: 400 },
          { name: 'June', max: 400 },
        ]}
        data={[240, 305, 237, 280, 209, 364]}
      />
      <MultipleRadarChart 
        indicators={[
          { name: 'January', max: 400 },
          { name: 'February', max: 400 },
          { name: 'March', max: 400 },
          { name: 'April', max: 400 },
          { name: 'May', max: 400 },
          { name: 'June', max: 400 },
        ]}
        data={[
          {
            name: 'Desktop',
            value: [240, 305, 237, 280, 209, 364],
          },
          {
            name: 'Mobile',
            value: [186, 245, 189, 195, 178, 274],
          },
        ]}
      />
      <LegendRadarChart 
        indicators={[
          { name: 'January', max: 400 },
          { name: 'February', max: 400 },
          { name: 'March', max: 400 },
          { name: 'April', max: 400 },
          { name: 'May', max: 400 },
          { name: 'June', max: 400 },
        ]}
        data={[
          {
            name: 'Desktop',
            value: [240, 305, 237, 280, 209, 364],
          },
          {
            name: 'Mobile',
            value: [186, 245, 189, 195, 178, 274],
          },
        ]}
      />
    </ScrollView>
  );
}

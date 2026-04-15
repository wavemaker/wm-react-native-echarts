import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { ThemeProvider as CustomThemeProvider, useTheme } from '@/contexts/ThemeContext';
import { ChartTheme, ChartThemeProvider, DARK_THEME, extendChartTheme, LIGHT_THEME, useChartTheme } from '@/components/chart/chart-theme.context';
import { useMemo } from 'react';

export const unstable_settings = {
  anchor: 'index',
};

export default function RootLayout() {
  return (
    <CustomThemeProvider>
      <ThemeProviderWrapper />
    </CustomThemeProvider>
  );
}

const lightChartTheme: ChartTheme = extendChartTheme(LIGHT_THEME);

const darkChartTheme: ChartTheme = extendChartTheme(DARK_THEME);

function ThemeProviderWrapper() {
  const { colorScheme } = useTheme();

  const chartTheme = useMemo(() => {
    return colorScheme === 'dark' ? darkChartTheme : lightChartTheme; 
  }, [colorScheme]);
  
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ChartThemeProvider theme={chartTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="line.chart" options={{ title: 'Line Chart' }} />
          <Stack.Screen name="bar.chart" options={{ title: 'Bar Chart' }} />
          <Stack.Screen name="pie.chart" options={{ title: 'Pie Chart' }} />
          <Stack.Screen name="gauge.chart" options={{ title: 'Gauge Chart' }} />
          <Stack.Screen name="scatter.chart" options={{ title: 'Scatter Chart' }} />
          <Stack.Screen name="radar.chart" options={{ title: 'Radar Chart' }} />
          <Stack.Screen name="funnel.chart" options={{ title: 'Funnel Chart' }} />
          <Stack.Screen name="heatmap.chart" options={{ title: 'Heatmap Chart' }} />
              <Stack.Screen name="candlestick.chart" options={{ title: 'Candlestick Chart' }} />
              <Stack.Screen name="radial.chart" options={{ title: 'Radial Chart' }} />
              <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        </Stack>
      </ChartThemeProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

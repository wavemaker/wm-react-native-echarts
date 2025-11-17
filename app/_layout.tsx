import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { ThemeProvider as CustomThemeProvider, useTheme } from '@/contexts/ThemeContext';

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

function ThemeProviderWrapper() {
  const { colorScheme } = useTheme();
  
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="line-chart" options={{ title: 'Line Chart' }} />
        <Stack.Screen name="bar-chart" options={{ title: 'Bar Chart' }} />
        <Stack.Screen name="pie-chart" options={{ title: 'Pie Chart' }} />
        <Stack.Screen name="gauge-chart" options={{ title: 'Gauge Chart' }} />
        <Stack.Screen name="scatter-chart" options={{ title: 'Scatter Chart' }} />
        <Stack.Screen name="radar-chart" options={{ title: 'Radar Chart' }} />
        <Stack.Screen name="funnel-chart" options={{ title: 'Funnel Chart' }} />
        <Stack.Screen name="heatmap-chart" options={{ title: 'Heatmap Chart' }} />
            <Stack.Screen name="candlestick-chart" options={{ title: 'Candlestick Chart' }} />
            <Stack.Screen name="radial-chart" options={{ title: 'Radial Chart' }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

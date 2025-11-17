import { ChartComponent } from '@/components/chart-component';
import { useTheme } from '@/contexts/ThemeContext';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function RadialChartScreen() {
  const { colorScheme } = useTheme();



  // Radial Chart with Labels
  const labelRadialOption = {
    title: {
      text: 'Radial Chart - Label',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
      renderMode: 'richText',
      confine: true,
      formatter: `{b|{b}}: {c}%`,
      rich: {
        b: {
          color: '#3b82f6',
          fontWeight: 'bold',
        },
        c: {
          color: '#6b7280',
          fontWeight: 'normal',
        }
      }
    },
    polar: {
      radius: [30, 140],
    },
    angleAxis: {
      max: 100,
      startAngle: 0,
      clockwise: false,
      show: false,
    },
    radiusAxis: {
      type: 'category',
      data: ['Chrome', 'Safari', 'Firefox', 'Edge', 'Other'],
      show: false,
      axisLine: {
        show: false,
      },
    },
    series: [
      {
        type: 'bar',
        data: [100, 100, 100, 100, 100],
        coordinateSystem: 'polar',
        name: 'Background',
        tooltip: {
          show: false,
        },
        itemStyle: {
          color: '#f4f4f4',
        },
        animation: false,
        stack: 'total',
        barCategoryGap: '20%',
        emphasis: {
          disabled: true,
        },
      },
      {
        type: 'bar',
        data: [
          { value: 85, itemStyle: { color: '#60a5fa' } }, // Chrome - lightest blue (innermost)
          { value: 70, itemStyle: { color: '#3b82f6' } }, // Safari - light blue
          { value: 60, itemStyle: { color: '#2563eb' } }, // Firefox - medium blue
          { value: 45, itemStyle: { color: '#1e40af' } }, // Edge - dark blue
          { value: 30, itemStyle: { color: '#1e3a8a' } }, // Other - darkest blue (outermost)
        ],
        coordinateSystem: 'polar',
        name: 'Browser Usage',
        stack: 'total',
        barCategoryGap: '20%',
        emphasis: {
          disabled: true,
        },
      },
    ],
  };

  // Radial Chart with Grid
  const gridRadialOption = {
    title: {
      text: 'Radial Chart - Grid',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
      renderMode: 'richText',
      confine: true,
      formatter: `{b|{b}}: {c}%`,
      rich: {
        b: {
          color: '#3b82f6',
          fontWeight: 'bold',
        },
        c: {
          color: '#6b7280',
          fontWeight: 'normal',
        }
      }
    },
    polar: {
      radius: [30, 140],
    },
    angleAxis: {
      max: 100,
      startAngle: 0,
      clockwise: false,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#e5e7eb00',
        },
      },
      axisTick: {
        show: true,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#e5e7eb',
          type: 'solid',
        },
      },
    },
    radiusAxis: {
      type: 'category',
      data: ['A', 'B', 'C', 'D', 'E'],
      axisLine: {
        show: false,
      },
      axisTick: {
        show: true,
        alignWithLabel: true,
      },
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#e5e7eb',
          type: 'solid',
        },
        alignWithLabel: true,
        interval: function(index: number, value: string) {
          return index !== 0 && index !== 4;
        },
      },
      boundaryGap: ['50%', '50%'],
    },
    series: [
      {
        type: 'bar',
        data: [
          { value: 85, itemStyle: { color: '#60a5fa' } }, // A - lightest blue (innermost)
          { value: 70, itemStyle: { color: '#3b82f6' } }, // B - light blue
          { value: 60, itemStyle: { color: '#2563eb' } }, // C - medium blue
          { value: 45, itemStyle: { color: '#1e40af' } }, // D - dark blue
          { value: 30, itemStyle: { color: '#1e3a8a' } }, // E - darkest blue (outermost)
        ],
        coordinateSystem: 'polar',
        name: 'Data',
        barCategoryGap: '10%',
        emphasis: {
          disabled: true,
        },
      },
    ],
  };

  // Radial Chart with Text (200 Visitors)
  const textRadialOption = {
    title: {
      text: 'Radial Chart - Text',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
      renderMode: 'richText',
      confine: true,
      formatter: `{b|{b}}: {c}%`,
      rich: {
        b: {
          color: '#3b82f6',
          fontWeight: 'bold',
        },
        c: {
          color: '#6b7280',
          fontWeight: 'normal',
        }
      }
    },
    polar: {
      radius: [60, 120],
    },
    angleAxis: {
      max: 100,
      startAngle: 0,
      clockwise: false,
      show: false,
    },
    radiusAxis: {
      type: 'category',
      data: ['Visitors'],
      show: false,
    },
    series: [
      {
        type: 'bar',
        data: [100],
        coordinateSystem: 'polar',
        name: 'Background',
        tooltip: {
          show: false,
        },
        itemStyle: {
          color: '#f4f4f4',
        },
        animation: false,
        stack: 'total',
        barWidth: '50%',
        emphasis: {
          disabled: true,
        },
      },
      {
        type: 'bar',
        data: [66.7], // 200/300 * 100 = 66.7%
        coordinateSystem: 'polar',
        name: 'Visitors',
        itemStyle: {
          color: '#3b82f6',
          borderRadius: [50, 50],
        },
        stack: 'total',
        barWidth: '50%',
        emphasis: {
          disabled: true,
        },
      },
    ],
    graphic: {
      elements: [
        {
          type: 'text',
          left: 'center',
          top: 'middle',
          z: 100,
          style: {
            text: '200\nVisitors',
            fontSize: 32,
            fontWeight: 'bold',
            fill: '#1f2937',
            textAlign: 'center',
            textVerticalAlign: 'middle',
          },
        },
      ],
    },
  };

  // Radial Chart with Shape (1,260 Visitors)
  const shapeRadialOption = {
    title: {
      text: 'Radial Chart - Shape',
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
      renderMode: 'richText',
      confine: true,
      formatter: `{b|{b}}: {c}%`,
      rich: {
        b: {
          color: '#3b82f6',
          fontWeight: 'bold',
        },
        c: {
          color: '#6b7280',
          fontWeight: 'normal',
        }
      }
    },
    polar: {
      radius: [40, 80],
    },
    angleAxis: {
      max: 100,
      startAngle: 0,
      clockwise: false,
      show: false,
    },
    radiusAxis: {
      type: 'category',
      data: ['Visitors'],
      show: false,
    },
    series: [
      {
        type: 'bar',
        data: [100],
        coordinateSystem: 'polar',
        barWidth: '50%',
        name: 'Background',
        tooltip: {
          show: false,
        },
        itemStyle: {
          color: '#f4f4f4',
        },
        animation: false,
        stack: 'total',
        emphasis: {
          disabled: true,
        },
      },
      {
        type: 'bar',
        data: [84],
        barWidth: '70%', // 1,260/1,500 * 100 = 84%
        coordinateSystem: 'polar',
        name: 'Visitors',
        itemStyle: {
          color: '#3b82f6',
        },
        stack: 'total',
        emphasis: {
          disabled: true,
        },
      },
    ],
    graphic: {
      elements: [
        {
          type: 'text',
          left: 'center',
          top: 'center',
          style: {
            text: '1,260',
            fontSize: 32,
            fontWeight: 'bold',
            fill: '#1f2937',
          },
        },
        {
          type: 'text',
          left: 'center',
          top: 'center',
          style: {
            text: 'Visitors',
            fontSize: 14,
            fill: '#6b7280',
            textAlign: 'center',
            textVerticalAlign: 'bottom',
            y: 20,
          },
        },
      ],
    },
  };

  // Stacked Radial Chart (1,830 Visitors)
  const stackedRadialOption = {
    title: {
      text: 'Radial Chart - Stacked',
      left: 'center',
      textStyle: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
      },
    },
    tooltip: {
      trigger: 'item',
      renderMode: 'richText',
      confine: true,
      formatter: `{b|{b}}: {c}%`,
      rich: {
        b: {
          color: '#3b82f6',
          fontWeight: 'bold',
        },
        c: {
          color: '#6b7280',
          fontWeight: 'normal',
        }
      }
    },
    polar: {
      radius: [120, 200],
    },
    angleAxis: {
      max: 100,
      startAngle: 0,
      clockwise: false,
      show: false,
    },
    radiusAxis: {
      type: 'category',
      data: ['Inner', 'Outer'],
      show: false,
    },
    series: [
      {
        type: 'bar',
        data: [30], // Inner ring
        coordinateSystem: 'polar',
        name: 'Inner',
        itemStyle: {
          color: '#93c5fd',
          borderRadius: [10, 10],
        },
        emphasis: {
          disabled: true,
        },
        stack: 'total',
      },
      {
        type: 'bar',
        data: [20], // Outer ring
        coordinateSystem: 'polar',
        name: 'Outer',
        itemStyle: {
          color: '#3b82f6',
          borderRadius: [10, 10],
        },
        emphasis: {
          disabled: true,
        },
        stack: 'total',
      },
    ],
    graphic: {
      elements: [
        {
          type: 'text',
          left: 'center',
          top: 'center',
          style: {
            text: '1,830',
            fontSize: 32,
            fontWeight: 'bold',
            fill: '#1f2937',
          },
        },
        {
          type: 'text',
          left: 'center',
          top: 'center',
          style: {
            text: 'Visitors',
            fontSize: 14,
            fill: '#6b7280',
            textAlign: 'center',
            textVerticalAlign: 'bottom',
            y: 20,
          },
        },
      ],
    },
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
      marginTop: 60,
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
          Radial Charts Gallery
        </Text>
        <Text style={styles.headerSubtitle}>
          Various radial chart types with modern styling
        </Text>
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={labelRadialOption}
          height={450}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={gridRadialOption}
          height={350}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={textRadialOption}
          height={350}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={shapeRadialOption}
          height={350}
          style={styles.chart}
        />
      </View>

      <View style={styles.chartContainer}>
        <ChartComponent
          option={stackedRadialOption}
          height={350}
          style={styles.chart}
        />
      </View>
    </ScrollView>
  );
}

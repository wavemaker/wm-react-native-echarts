import { ChartComponent } from '@/components/chart-component';
import { useTheme } from '@/contexts/ThemeContext';
import { useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Svg, { Defs, G, LinearGradient, Path, Stop, Text as SvgText } from 'react-native-svg';

export default function GaugeChartScreen() {
  const { colorScheme } = useTheme();
  const [gaugeValue, setGaugeValue] = useState(30);

  // Gauge 1: Progress with arc (23/100)
  const progressArcOption = {
    series: [
      {
        type: 'gauge',
        center: ['50%', '70%'],
        radius: '75%',
        startAngle: 225,
        endAngle: -45,
        min: 0,
        max: 100,
        splitNumber: 5,
        axisLine: {
          show: false,
          distance: 1,
          length: 8,
          lineStyle: {
            width: 1,
            color: [[1, colorScheme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(220,220,220,0.4)']],
          },
        },
        pointer: {
          length: '80%',
          width: 8,
          icon: 'path://M-4,0 L-2,-50 A1, 1 0 0 1 2, -50 L4,0 A1, 1 0 0 1 -4, 0 Z',
          itemStyle: {
            color: '#2D3748',
          },
        },
        axisTick: {
          distance: 1,
          length: 4,
          splitNumber: 16,
          lineStyle: {
            color: colorScheme === 'dark' ? 'rgba(255,255,255)' : 'rgba(180,180,180)',
            width: 0.5,
          },
        },
        splitLine: {
          distance: 1,
          length: 8,
          lineStyle: {
            color: colorScheme === 'dark' ? 'rgba(255,255,255)' : 'rgba(160,160,160)',
            width: 1,
          },
        },
        axisLabel: {
          show: true,
          distance: 16,
          fontSize: 12,
          color: colorScheme === 'dark' ? '#999999' : '#7A7A7A',
          formatter: function(value: number) {
            if (value === 20 || value === 80) {
              return value.toString();
            }
            return '';
          },
        },
        anchor: {
          show: true,
          showAbove: true,
          size: 8,
          itemStyle: {
            color: '#2D3748',
            borderColor: colorScheme === 'dark' ? '#1a1a1a' : '#AAA',
            borderWidth: 3,
            shadowBlur: 3,
            shadowColor: 'rgba(0,0,0,0.15)',
          },
        },
        detail: {
          valueAnimation: true,
          formatter: function(value: number) {
            return '{value|' + Math.round(value) + '}{unit|/100}';
          },
          offsetCenter: [0, '70%'],
          rich: {
            value: {
              fontSize: 40,
              fontWeight: 'bold',
              color: colorScheme === 'dark' ? '#ffffff' : '#000000',
            },
            unit: {
              verticalAlign: 'bottom',
              fontSize: 16,
              color: colorScheme === 'dark' ? '#888888' : '#A0A0A0',
              fontWeight: 'normal',
            },
          }
        },
        data: [{ value: 23 }],
      }
    ],
    style: {
      backgroundColor: 'transparent',
    },
  };

  // Gauge 2: Temperature with radiating ticks (46°)
  const temperatureGaugeOption = {
    series: [
      {
        type: 'gauge',
        center: ['50%', '70%'],
        radius: '75%',
        startAngle: 225,
        endAngle: -45,
        min: 0,
        max: 90,
        axisLine: {
          show: false,
        },
        pointer: {
          show: false,
        },
        axisTick: {
          distance: 0,
          length: 8,
          splitNumber: 4,
          lineStyle: {
            width: 1,
            color: colorScheme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(200,200,200,0.3)',
          },
        },
        splitLine: {
          show: false,
          distance: 0,
          length: 8,
          lineStyle: {
            width: 4,
            color: '#FFB84D',
          },
        },
        axisLabel: {
          show: false,
          distance: 45,
          fontSize: 12,
          color: colorScheme === 'dark' ? '#888888' : '#999999',
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}°',
          fontSize: 42,
          fontWeight: 'bold',
          color: colorScheme === 'dark' ? '#ffffff' : '#1a1a1a',
          offsetCenter: [0, '50%'],
        },
        data: [{ value: 46 }],
      },
    ],
  };


  // Gauge 10: GPU Usage 86% (small)
  const gpuUsage1Option = {
    series: [
      {
        type: 'gauge',
        center: ['50%', '65%'],
        radius: '90%',
        startAngle: 170,
        endAngle: 10,
        min: 0,
        max: 100,
        axisLine: {
          lineStyle: {
            width: 50,
            color: [
              [0.3, '#3b82f6'],
              [1, colorScheme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(200,200,200,0.2)'],
            ],
          },
        },
        pointer: {
          length: '70%',
          width: 8,
          icon: 'path://M-2,0 L0,-51 L 2,0 A1, 1 0 0 1 -2, 0 Z',
          itemStyle: {
            color: '#2D3748',
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        title: {
          offsetCenter: [0, '85%'],
          fontSize: 13,
          fontWeight: '600',
          color: colorScheme === 'dark' ? '#ffffff' : '#1a1a1a',
        },
        detail: {
          offsetCenter: [0, '115%'],
          fontSize: 11,
          color: colorScheme === 'dark' ? '#888888' : '#999999',
        },
        data: [{ value: 30, name: 'GPU Usage', detail: { formatter: '86% (100°C)' } }],
      },
    ],
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#f5f5f5',
      paddingTop: 8,
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
      justifyContent: 'center',
      alignItems: 'center',
    },
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 10,
      marginBottom: 15,
    },
    halfWidthContainer: {
      backgroundColor: colorScheme === 'dark' ? '#2a2a2a' : '#fff',
      borderRadius: 10,
      padding: 15,
      width: '48.5%',
      shadowColor: colorScheme === 'dark' ? '#000' : '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: colorScheme === 'dark' ? 0.3 : 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    thirdWidthContainer: {
      backgroundColor: colorScheme === 'dark' ? '#2a2a2a' : '#fff',
      borderRadius: 10,
      padding: 10,
      width: '32%',
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
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 8,
      minWidth: 70,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 5,
    },
    buttonText: {
      fontSize: 14,
      fontWeight: '600',
    },
  });

  const textRadialOption = {
    polar: {
      radius: [70, 110]
    },
    angleAxis: {
      max: 100,
      startAngle: 225,
      endAngle: -45,
      clockwise: true,
      show: false
    },
    radiusAxis: {
      type: 'category',
      data: ['Visitors'],
      show: false
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
          borderRadius: [50, 50],
        },
        animation: false,
        barWidth: '50%',
        emphasis: {
          disabled: true,
        },
      },
      {
        type: 'bar',
        data: [23], // 200/300 * 100 = 66.7%
        coordinateSystem: 'polar',
        name: 'Visitors',
        itemStyle: {
          color: '#3b82f6',
          borderRadius: [50, 50],
        },
        barWidth: '50%',
        barGap: '-100%',
        emphasis: {
          disabled: true,
        },
      },
    ]
  };

  // SVG Gauge Component
  const SVGGaugeChart = ({ 
    value = 77, 
    max = 100,
    gradientColors = ['#FF6B6B', '#FF8E8E'],
    showInnerArc = true,
    width,
    height,
    animationDuration = 1000,
  }: { 
    value?: number; 
    max?: number;
    gradientColors?: string[];
    showInnerArc?: boolean;
    width?: number;
    height?: number;
    animationDuration?: number;
  }) => {
    const dimensions = useWindowDimensions();
    const [animatedValue, setAnimatedValue] = useState(value);
    const currentValueRef = useRef(value); // Stores the current animated value synchronously
    const animationFrameRef = useRef<number | undefined>(undefined);
    const startTimeRef = useRef<number | undefined>(undefined);
    
    // Animation effect when value changes
    useEffect(() => {
      // Start from the current animated position (stored in ref)
      const startValue = currentValueRef.current;
      const endValue = value;
      const startTime = new Date().getTime();
      
      startTimeRef.current = startTime;
      
      const animate = () => {
        const currentTime = new Date().getTime();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / animationDuration, 1);
        
        // Easing function (easeOutCubic for smooth deceleration)
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
        const easedProgress = easeOutCubic(progress);
        
        const currentValue = startValue + (endValue - startValue) * easedProgress;
        
        // Update both state and ref synchronously
        currentValueRef.current = currentValue;
        setAnimatedValue(currentValue);
        
        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      };
      
      // Cancel any ongoing animation
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
      
      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [value, animationDuration]);
    
    // If height not provided, use 90% of available height
    // If width not provided, use the same as height to keep it square
    const calculatedHeight = height ?? dimensions.height * 0.9;
    const calculatedWidth = width ?? calculatedHeight;
    const size = Math.min(calculatedWidth, calculatedHeight);
    
    const strokeWidth = 12;
    const center = size / 2;
    const radius = (size - strokeWidth) / 2 - 20;
    const startAngle = -135;
    const endAngle = 135;
    const totalAngle = endAngle - startAngle;
    const percentage = (animatedValue / max) * 100;
    const valueAngle = (percentage / 100) * totalAngle;

    const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
      const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians),
      };
    };

    const describeArc = (centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number) => {
      const start = polarToCartesian(centerX, centerY, radius, endAngle);
      const end = polarToCartesian(centerX, centerY, radius, startAngle);
      const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
      return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
    };

    // Helper function to interpolate between two colors
    const interpolateColor = (color1: string, color2: string, factor: number) => {
      const hex = (color: string) => {
        const hex = color.replace('#', '');
        return {
          r: parseInt(hex.substring(0, 2), 16),
          g: parseInt(hex.substring(2, 4), 16),
          b: parseInt(hex.substring(4, 6), 16),
        };
      };

      const c1 = hex(color1);
      const c2 = hex(color2);

      const r = Math.round(c1.r + factor * (c2.r - c1.r));
      const g = Math.round(c1.g + factor * (c2.g - c1.g));
      const b = Math.round(c1.b + factor * (c2.b - c1.b));

      return `rgb(${r}, ${g}, ${b})`;
    };

    // Helper function to get color from gradient array based on position
    const getGradientColor = (factor: number) => {
      if (gradientColors.length === 0) return '#FF6B6B';
      if (gradientColors.length === 1) return gradientColors[0];
      
      // Determine which two colors to interpolate between
      const scaledPosition = factor * (gradientColors.length - 1);
      const lowerIndex = Math.floor(scaledPosition);
      const upperIndex = Math.min(lowerIndex + 1, gradientColors.length - 1);
      const localFactor = scaledPosition - lowerIndex;
      
      return interpolateColor(gradientColors[lowerIndex], gradientColors[upperIndex], localFactor);
    };

    // Generate tick marks
    const numTicks = 50;
    const ticks = [];
    const activeTickCount = Math.round((valueAngle / totalAngle) * numTicks);
    const outerTickLength = 20;
    
    for (let i = 0; i <= numTicks; i++) {
      const angle = startAngle + (i / numTicks) * totalAngle;
      const isActive = i <= activeTickCount;
      const isMajor = i % 5 === 0;
      //const tickLength = isMajor ? 16 : 10;
      const tickLength = outerTickLength;
      //const tickWidth = isMajor ? 3 : 2;
      const tickWidth = 3;
      
      const outerPoint = polarToCartesian(center, center, radius + 10, angle);
      const innerPoint = polarToCartesian(center, center, radius + 10 - tickLength, angle);
      
      // Calculate gradient factor for active ticks
      let tickColor;
      if (isActive) {
        const gradientFactor = numTicks > 0 ? i / numTicks : 0;
        tickColor = getGradientColor(gradientFactor);
      } else {
        tickColor = colorScheme === 'dark' ? '#3a3a3a' : '#ddd';
      }
      
      ticks.push(
        <Path
          key={i}
          d={`M ${outerPoint.x} ${outerPoint.y} L ${innerPoint.x} ${innerPoint.y}`}
          stroke={tickColor}
          strokeWidth={tickWidth}
          strokeLinecap="round"
        />
      );
    }

    // Generate scale labels and inner ticks
    const scaleLabels = [];
    const innerTicks = [];
    const majorTickPositions = [0, 20, 40, 60, 80, 100];
    const labelRadius = radius - 40;
    const innerTickLength = 4;
    const minorTickLength = 2;
    const gapFromOuterTicks = 4; // Gap between outer and inner elements
    const innerTickOuterRadius = radius - outerTickLength - gapFromOuterTicks;
    
    // Add major ticks and labels
    for (const labelValue of majorTickPositions) {
      const labelAngle = startAngle + (labelValue / max) * totalAngle;
      const labelPosition = polarToCartesian(center, center, labelRadius, labelAngle);
      
      // Add scale label
      scaleLabels.push(
        <SvgText
          key={`label-${labelValue}`}
          x={labelPosition.x}
          y={labelPosition.y}
          textAnchor="middle"
          fontSize="12"
          fill={colorScheme === 'dark' ? '#888888' : '#999999'}
        >
          {labelValue}
        </SvgText>
      );

      // Add major inner tick mark
      const tickOuterPoint = polarToCartesian(center, center, innerTickOuterRadius, labelAngle);
      const tickInnerPoint = polarToCartesian(center, center, innerTickOuterRadius - innerTickLength, labelAngle);
      
      innerTicks.push(
        <Path
          key={`inner-tick-${labelValue}`}
          d={`M ${tickOuterPoint.x} ${tickOuterPoint.y} L ${tickInnerPoint.x} ${tickInnerPoint.y}`}
          stroke={colorScheme === 'dark' ? '#666666' : '#999999'}
          strokeWidth={2}
          strokeLinecap="round"
        />
      );
    }

    // Add minor ticks (9 ticks between each major tick)
    // Major ticks are at 0, 20, 40, 60, 80, 100
    // So we need ticks at every 2 units, excluding the major positions
    for (let value = 0; value <= max; value += 2) {
      // Skip if this is a major tick position
      if (majorTickPositions.includes(value)) continue;
      
      const tickAngle = startAngle + (value / max) * totalAngle;
      const tickOuterPoint = polarToCartesian(center, center, innerTickOuterRadius, tickAngle);
      const tickInnerPoint = polarToCartesian(center, center, innerTickOuterRadius - minorTickLength, tickAngle);
      
      innerTicks.push(
        <Path
          key={`inner-minor-tick-${value}`}
          d={`M ${tickOuterPoint.x} ${tickOuterPoint.y} L ${tickInnerPoint.x} ${tickInnerPoint.y}`}
          stroke={colorScheme === 'dark' ? '#555555' : '#cccccc'}
          strokeWidth={1}
          strokeLinecap="round"
        />
      );
    }

    return (
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <Defs>
          <LinearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="#FF6B6B" stopOpacity="1" />
            <Stop offset="100%" stopColor="#FF8E8E" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        
        {/* Background circle */}
        {/* <Circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={colorScheme === 'dark' ? '#2a2a2a' : '#f5f5f5'}
          strokeWidth={strokeWidth * 2}
        /> */}

        {/* Tick marks */}
        <G>{ticks}</G>

        {/* Inner arc connecting the inner ticks (from 0 to 100) */}
        {showInnerArc && (
          <Path
            d={describeArc(center, center, innerTickOuterRadius, startAngle, endAngle)}
            fill="none"
            stroke={colorScheme === 'dark' ? '#444444' : '#cccccc'}
            strokeWidth={1}
            opacity={0.5}
          />
        )}

        {/* Inner scale ticks */}
        <G>{innerTicks}</G>

        {/* Scale labels */}
        <G>{scaleLabels}</G>

        {/* Value display */}
        <SvgText
          x={center}
          y={center + 10}
          textAnchor="middle"
          fontSize="56"
          fontWeight="bold"
          fill={colorScheme === 'dark' ? '#ffffff' : '#1a1a1a'}
        >
          {Math.round(animatedValue)}
        </SvgText>
        
        {/* Label */}
        <SvgText
          x={center}
          y={center + 30}
          textAnchor="middle"
          fontSize="14"
          fill={colorScheme === 'dark' ? '#888888' : '#999999'}
        >
          Temperature
        </SvgText>
      </Svg>
    );
  };

  return (
    <ScrollView style={styles.container}>

      {/* Progress Arc */}
      <View style={styles.chartContainer}>
        <View style={{... styles.chart,
          position: 'absolute',
          marginTop: 100,
        } as any}>
          <ChartComponent
            option={textRadialOption}
            width={240}
            height={240}
            style={{... styles.chart, backgroundColor: 'transparent'} as any}
          />
        </View>
        <ChartComponent
          option={progressArcOption}
          width={200}
          height={240}
          style={{... styles.chart, backgroundColor: 'transparent' } as any}
        />
      </View>

      {/* SVG-based Gauge Chart */}
      <View style={styles.chartContainer}>
        <Text style={{ 
          fontSize: 16, 
          fontWeight: '600', 
          marginBottom: 10,
          color: colorScheme === 'dark' ? '#ffffff' : '#1a1a1a'
        }}>
          Custom SVG Gauge with Animation
        </Text>
        <SVGGaugeChart 
          value={gaugeValue} 
          max={100} 
          gradientColors={['#3b82f6']}
          showInnerArc={false}
          height={300}
        />
      </View>

      {/* GPU Usage 1 */}
      <View style={styles.chartContainer}>
        <ChartComponent
          option={gpuUsage1Option}
          height={240}
          style={styles.chart}
        />
      </View>
    </ScrollView>
  );
}

import { withResponsiveContainer } from '../../chart-container';
import { useChartTheme, withChartTheme } from '../../chart-theme.context';
import { useTheme } from '@/contexts/ThemeContext';
import React, { useEffect, useRef, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import Svg, { Circle, Defs, G, LinearGradient, Path, Stop, Text as SvgText } from 'react-native-svg';
import type { BaseGaugeProps } from '../gauge.types';

/**
 * Props for the DigitalGauge component.
 * A gauge chart with smooth animations built using SVG.
 */
interface DigitalGaugeProps extends BaseGaugeProps {
  /**
   * Whether to show the inner arc.
   * @default false
   */
  showInnerArc?: boolean;

  /**
   * Animation duration in milliseconds.
   * @default 1000
   */
  animationDuration?: number;
}

// SVG Gauge Component
const SVGGaugeChart = ({ 
  value, 
  max = 100,
  showInnerArc = false,
  width,
  height,
  animationDuration = 1000,
  colors,
  axisBgColor: axisBgColorProp,
  axisWidth: axisWidthProp,
  tickColor: tickColorProp,
}: DigitalGaugeProps) => {
  const { colorScheme } = useTheme();
  const { theme: chartTheme } = useChartTheme(undefined, colors);
  
  // Use theme colors; allow overrides from props
  const gradientColors = chartTheme.series.map(item => item.color);
  const inactiveTickColor = tickColorProp ?? axisBgColorProp ?? chartTheme.axis.r.tickColor;
  const labelColor = chartTheme.axis.r.tickLabelColor;
  const innerTickColor = chartTheme.axis.r.lineColor;
  const arcColor = axisBgColorProp ?? chartTheme.grid.r.lineColor;
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
  const tickStrokeWidth = axisWidthProp ?? 3;
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
    const tickLength = outerTickLength;
    
    const outerPoint = polarToCartesian(center, center, radius + 10, angle);
    const innerPoint = polarToCartesian(center, center, radius + 10 - tickLength, angle);
    
    // Calculate gradient factor for active ticks
    let tickColor;
    if (isActive) {
      const gradientFactor = numTicks > 0 ? i / numTicks : 0;
      tickColor = getGradientColor(gradientFactor);
    } else {
      tickColor = inactiveTickColor;
    }
    
    ticks.push(
      <Path
        key={i}
        d={`M ${outerPoint.x} ${outerPoint.y} L ${innerPoint.x} ${innerPoint.y}`}
        stroke={tickColor}
        strokeWidth={tickStrokeWidth}
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
        fill={labelColor}
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
        stroke={innerTickColor}
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
        stroke={inactiveTickColor}
        strokeWidth={1}
        strokeLinecap="round"
      />
    );
  }

  // Calculate the animated end angle for the outer arc
  const animatedEndAngle = startAngle + valueAngle;
  const outerArcRadius = radius + 10;

  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <Defs>
        <LinearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor={gradientColors[0]} stopOpacity="1" />
          <Stop offset="100%" stopColor={gradientColors[gradientColors.length - 1]} stopOpacity="1" />
        </LinearGradient>
        
        {/* Radial gradient for a more dynamic look */}
        <LinearGradient id="outerArcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor={gradientColors[0]} stopOpacity="0.8" />
          <Stop offset="100%" stopColor={gradientColors[gradientColors.length - 1]} stopOpacity="0.8" />
        </LinearGradient>
      </Defs>
      

      {/* Tick marks */}
      <G>{ticks}</G>

      {/* Inner arc connecting the inner ticks (from 0 to 100) */}
      {showInnerArc && (
        <Path
          d={describeArc(center, center, innerTickOuterRadius, startAngle, endAngle)}
          fill="none"
          stroke={arcColor}
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
        fill={chartTheme.axis.r.tickLabelColor}
      >
        {Math.round(animatedValue)}
      </SvgText>
      
      {/* Label */}
      <SvgText
        x={center}
        y={center + 30}
        textAnchor="middle"
        fontSize="14"
        fill={labelColor}
      >
        Value
      </SvgText>
    </Svg>
  );
};


const ChartComponent = ({
  value = 46,
  min = 0,
  max = 90,
  width,
  height,
  axisBgColor,
  axisWidth,
  tickColor,
  showInnerArc,
  animationDuration,
  ...props
}: DigitalGaugeProps) => {
  return (
    <SVGGaugeChart
      value={value}
      max={max}
      width={width}
      height={height}
      colors={props.colors}
      axisBgColor={axisBgColor}
      axisWidth={axisWidth}
      tickColor={tickColor}
      showInnerArc={showInnerArc}
      animationDuration={animationDuration}
    />
  );
};

export const DigitalGauge = Object.assign(withResponsiveContainer(withChartTheme(ChartComponent), 'value'), {
  displayName: 'DigitalGauge',
});


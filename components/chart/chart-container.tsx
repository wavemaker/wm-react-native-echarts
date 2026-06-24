import React, { useState, useCallback, useMemo } from 'react';
import { View, LayoutChangeEvent, StyleSheet, Text } from 'react-native';

interface ChartChildProps {
  width?: number;
  height?: number;
  data: any;
  [key: string]: any;
}

interface ChartContainerProps {
  width?: number | string;
  height?: number | string;
  data?: any;
  noDataText?: string;
  noDataIcon?: React.ReactNode;
  noDataTextStyle?: any;
  noDataContainerStyle?: any;
  render: (width: number, height: number) => React.ReactElement<ChartChildProps>;
  style?: any;
}

const ChartContainer: React.FC<ChartContainerProps> = ({
  width = '100%',
  height = 350,
  data,
  noDataText = 'No data to render chart.',
  noDataIcon,
  noDataTextStyle = {},
  noDataContainerStyle = {},
  render,
  style,
}) => {
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    const { width: layoutWidth, height: layoutHeight } = event.nativeEvent.layout;
    
    // Calculate actual dimensions based on props
    let actualWidth = layoutWidth;
    let actualHeight = layoutHeight;

    // If width/height are numbers, use them directly
    // If they're percentages, they're already resolved by React Native's layout system
    if (typeof width === 'number') {
      actualWidth = width;
    }
    
    if (typeof height === 'number') {
      actualHeight = height;
    }

    setDimensions({
      width: actualWidth,
      height: actualHeight,
    });
  }, [width, height]);

  // Parse width and height for container style
  const containerStyle = {
    width: typeof width === 'number' ? width : width,
    height: typeof height === 'number' ? height : height,
  };

  return (
    <View
      style={[styles.container, containerStyle, style]}
      onLayout={handleLayout}
    >
      {data !== undefined && data !== null ? (
          dimensions ? render(dimensions.width, dimensions.height) : null
        ): (
        <View style={[styles.noDataContainer, noDataContainerStyle, style]}>
          <Text style={[styles.noDataText, noDataTextStyle]}>{noDataText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataContainer: {
    minHeight: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
});

export const withResponsiveContainer = <T extends React.ComponentType<any>>(Component: T, ...dataName: string[]) => {
  return (props: React.ComponentProps<T> & { width?: number | string; height?: number | string }) => {
    const width = useMemo(() => {
      if (typeof props.width === 'string' && !props.width.endsWith('%')) {
        return parseFloat(props.width.match(/\d+/)?.[0] || '0');
      }
      return props.width;
    }, [props.width]);
    const height = useMemo(() => {
      if (typeof props.height === 'string' && !props.height.endsWith('%')) {
        return parseFloat(props.height.match(/\d+/)?.[0] || '0');
      }
      return props.height;
    }, [props.height]);
    const render = useCallback((width: number, height: number) => {
      return React.createElement(Component, {
        ...(props as React.ComponentProps<T>),
        width: width,
        height: height,
      });
    }, [props]);
    const data = dataName.length > 0 ? dataName.find((name) => props[name] !== undefined) || props.data : props.data
    return (
      <ChartContainer 
        width={width} 
        height={height}
        style={props.style}
        data={data}
        render={render}
        noDataText={props.noDataText} />
    );
  };
};


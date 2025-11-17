import React, { useState, useCallback } from 'react';
import { View, LayoutChangeEvent, StyleSheet } from 'react-native';

interface ChartChildProps {
  width?: number;
  height?: number;
  [key: string]: any;
}

interface ChartContainerProps {
  width?: number | string;
  height?: number | string;
  render: (width: number, height: number) => React.ReactElement<ChartChildProps>;
  style?: any;
}

const ChartContainer: React.FC<ChartContainerProps> = ({
  width = '100%',
  height = 350,
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
      {dimensions && render(dimensions.width, dimensions.height)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});

export const withResponsiveContainer = <T extends React.ComponentType<any>>(Component: T) => {
  return (props: React.ComponentProps<T> & { width?: number | string; height?: number | string }) => {
    const render = useCallback((width: number, height: number) => {
      return React.createElement(Component, {
        ...(props as React.ComponentProps<T>),
        width: width,
        height: height,
      });
    }, [props]);
    return (
      <ChartContainer 
        width={props.width} 
        height={props.height}
        style={props.style}
        render={render} />
    );
  };
};


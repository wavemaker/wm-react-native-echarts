import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

/**
 * Style configuration for chart axes (x, y, or radial).
 * Defines the visual appearance of axis lines, labels, ticks, and split lines.
 */
type AxisStyle = {
  /** Color of the main axis line */
  lineColor: string;
  /** Width of the main axis line in pixels */
  lineWidth: number;
  /** Color of the axis label text */
  labelColor: string;
  /** Color of the tick marks */
  tickColor: string;
  /** Width of the tick marks in pixels */
  tickWidth: number;
  /** Color of the tick mark labels */
  tickLabelColor: string;
  /** Color of the split lines (grid lines parallel to axis) */
  splitLineColor: string;
  /** Width of the split lines in pixels */
  splitLineWidth: number;
};

/**
 * Style configuration for grid lines.
 * Defines the visual appearance of grid lines that help with data reading.
 */
type GridLineStyle = {
  /** Color of the grid lines */
  lineColor: string;
  /** Width of the grid lines in pixels */
  lineWidth: number;
};

/**
 * Style configuration for tooltips.
 * Defines the visual appearance of tooltips that appear when hovering over chart elements.
 */
type TooltipStyle = {
  /** Background color of the tooltip */
  backgroundColor: string;
  /** Color of the label text in the tooltip */
  labelColor: string;
  /** Color of the value text in the tooltip */
  valueColor: string;
  /** Color of the tooltip border */
  borderColor: string;
  /** Width of the tooltip border in pixels */
  borderWidth: number;
  /** Border radius of the tooltip corners in pixels */
  borderRadius: number;
  /** Internal padding of the tooltip in pixels */
  padding: number;
};

/**
 * Style configuration for chart items (bars, lines, pie slices, etc.).
 * Defines the visual appearance of individual data elements in the chart.
 */
type Series = {
  /** Primary color for the data series */
  color: string;
  /** Width of lines for line/area charts in pixels */
  lineWidth?: number;
  /** Border radius for each corner [top-left, top-right, bottom-right, bottom-left] */
  borderRadius?: number[];
  /** Color of the border around chart items */
  borderColor?: string;
  /** Width of the border around chart items in pixels */
  borderWidth?: number;
  /** Style of the border: 'solid', 'dashed', or 'dotted' */
  borderType?: 'solid' | 'dashed' | 'dotted';
};

/**
 * Style configuration for chart legends.
 * Defines the visual appearance of legends that identify data series in charts.
 */
type LegendStyle = {
  /** Color of the legend text */
  textColor: string;
  /** Font size of the legend text in pixels */
  fontSize: number;
  /** Color of the legend background */
  backgroundColor: string;
};

/**
 * Complete chart theme configuration.
 * Contains styling for all chart components: axes (x, y, radial), grid lines, tooltips, and item styles.
 * The series array provides a color palette that cycles through for multiple data series.
 */
export type ChartTheme = {
  /** Configuration for chart axes (x, y, and radial) */
  axis: {
    /** X-axis styling configuration */
    x: AxisStyle;
    /** Y-axis styling configuration */
    y: AxisStyle;
    /** Radial axis styling configuration (for radar/polar charts) */
    r: AxisStyle;
  };
  /** Configuration for grid lines */
  grid: {
    /** X-axis grid line styling */
    x: GridLineStyle;
    /** Y-axis grid line styling */
    y: GridLineStyle;
    /** Radial grid line styling (for radar/polar charts) */
    r: GridLineStyle;
  };
  legend: LegendStyle;
  /** Configuration for tooltip appearance */
  tooltip: TooltipStyle;
  /** Array of series styles that cycle through for multiple data series */
  series: Series[];
};


/**
 * Merges two chart themes together, with theme2 taking precedence over theme1.
 * Performs a deep merge for nested objects (like axis.x, axis.y, etc.) and
 * allows partial theme overrides. Arrays (like itemStyles) are replaced entirely.
 * 
 * @param theme1 - Base theme to merge from
 * @param theme2 - Partial theme that will override/extend theme1
 * @returns A new merged ChartTheme object
 */
const mergeThemes = (theme1: Partial<ChartTheme>, theme2: Partial<ChartTheme>): ChartTheme => {
  const result: any = { ...theme1 };
  
  for (const key in theme2) {
    if (theme2.hasOwnProperty(key)) {
      const value2 = (theme2 as any)[key];
      const value1 = result[key];
      
      if (value2 !== undefined) {
        if (typeof value2 === 'object' && !Array.isArray(value2) && value2 !== null &&
            typeof value1 === 'object' && !Array.isArray(value1) && value1 !== null) {
          // Recursively merge nested objects
          result[key] = mergeThemes(value1 as any, value2 as any);
        } else {
          // Override with value from theme2
          result[key] = value2;
        }
      }
    }
  }
  
  return result as ChartTheme;
};


/**
 * Utility function to extend the default theme with custom overrides.
 * Useful for creating theme variants without using the React context system.
 * 
 * @param theme - Partial theme configuration to merge with defaults
 * @returns A complete ChartTheme with defaults merged
 */
export const extendChartTheme = (...themes: Partial<ChartTheme>[]) => {
  return themes.filter(theme => theme !== undefined).reduce((acc, theme) => {
    return acc ? mergeThemes(acc, theme) : theme;
  }, LIGHT_THEME) as ChartTheme;
};


/**
 * Default chart theme configuration.
 * Provides sensible defaults for all chart styling elements.
 * Uses a blue color palette for item styles that cycles through different shades.
 */
export const LIGHT_THEME: ChartTheme = {
  axis: {
    x: {
      lineColor: '#AAAAAA',
      lineWidth: 1,
      labelColor: '#666666',
      tickLabelColor: '#666666',
      tickColor: '#DDDDDD',
      tickWidth: 1,
      splitLineColor: '#DDDDDD',
      splitLineWidth: 1
    },
    y: {
      lineColor: '#AAAAAA',
      lineWidth: 1,
      labelColor: '#666666',
      tickLabelColor: '#666666',
      tickColor: '#DDDDDD',
      tickWidth: 1,
      splitLineColor: '#DDDDDD',
      splitLineWidth: 1
    },
    r: {
      lineColor: '#DDDDDD',
      lineWidth: 1,
      labelColor: '#666666',
      tickLabelColor: '#666666',
      tickColor: '#DDDDDD',
      tickWidth: 1,
      splitLineColor: '#DDDDDD',
      splitLineWidth: 1
    }
  },
  grid: {
    x: {
      lineColor: '#AAAAAA',
      lineWidth: 1
    },
    y: {
      lineColor: '#AAAAAA',
      lineWidth: 1
    },
    r: {
      lineColor: '#EEEEEE',
      lineWidth: 1,
    }
  },
  tooltip: {
    backgroundColor: '#FFFFFF',
    labelColor: '#AAAAAA',
    valueColor: '#000000',
    borderColor: '#DDDDDD',
    borderWidth: 1,
    borderRadius: 5,
    padding: 2,
  },
  series: [
    {
      color: '#8c62f2',
      borderRadius: [4, 4, 4, 4],
      lineWidth: 2,
    },
    {
      color: '#4ad0e0',
      borderRadius: [4, 4, 4, 4],
      lineWidth: 2,
    },
    {
      color: '#ffc635',
      borderRadius: [4, 4, 4, 4],
      lineWidth: 2,
    },
    {
      color: '#ff5722',
      borderRadius: [4, 4, 4, 4],
      lineWidth: 2,
    },
    {
      color: '#f44336',
      borderRadius: [4, 4, 4, 4],
      lineWidth: 2,
    },
  ],
  legend: {
    textColor: '#666666',
    fontSize: 12,
    backgroundColor: '#00000000',
  },
};

export const DARK_THEME: ChartTheme = extendChartTheme(LIGHT_THEME, {
  axis: {
    x: {
      lineColor: '#FFFFFF',
      labelColor: '#FFFFFF',
      tickLabelColor: '#FFFFFF',
      tickColor: '#FFFFFF',
      splitLineColor: '#DDDDDD',
    } as any,
    y: {
      lineColor: '#FFFFFF',
      labelColor: '#FFFFFF',
      tickLabelColor: '#FFFFFF',
      tickColor: '#FFFFFF',
      splitLineColor: '#DDDDDD',
    } as any,
    r: {
      lineColor: '#FFFFFF',
      labelColor: '#FFFFFF',
      tickLabelColor: '#FFFFFF',
      tickColor: '#FFFFFF',
      splitLineColor: '#DDDDDD',
    } as any,
  },
  grid: {
    x: {
      lineColor: '#FFFFFF',
    } as any,
    y: {
      lineColor: '#FFFFFF',
    } as any,
    r: {
      lineColor: '#FFFFFF',
    } as any,
  },
  legend: {
    textColor: '#FFFFFF',
    backgroundColor: '#00000000',
  } as any,
  tooltip: {
    backgroundColor: '#151718',
    labelColor: '#FFFFFF',
    valueColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    padding: 2,
  } as any,
});
/**
 * Type definition for the chart theme context value.
 * Contains the current theme that can be accessed by chart components.
 */
interface ChartThemeContextType {
  /** The current chart theme configuration */
  theme: ChartTheme;
}

/**
 * React context for chart theming.
 * Allows chart components to access the current theme configuration.
 * Undefined when used outside of a ChartThemeProvider.
 */
const ChartThemeContext = createContext<ChartThemeContextType | undefined>(undefined);

/**
 * Hook to access and optionally extend the chart theme.
 * Merges the theme from context (if available) with any local theme overrides.
 * The local theme parameter takes precedence over the context theme.
 * 
 * @param theme - Optional partial theme to merge with the context theme
 * @returns ChartThemeContextType with the merged theme
 * 
 * @example
 * ```tsx
 * const { theme } = useChartTheme({ tooltip: { backgroundColor: '#000' } });
 * ```
 */
export const useChartTheme = (theme?: Partial<ChartTheme>, colors?: string[]) => {
  const context = useContext(ChartThemeContext);
  const prepareMergedThemeContext = useCallback(() => {
    const mergedTheme = mergeThemes(context?.theme || LIGHT_THEME, theme || {});
    return {
      theme: mergedTheme
    };
  }, [context?.theme, theme]);
  const [mergedThemeContext, setMergedThemeContext] = useState<ChartThemeContextType>(prepareMergedThemeContext);
  useEffect(() => {
    setMergedThemeContext(prepareMergedThemeContext);
  }, [theme, context?.theme]);
  useEffect(() => {
    if (colors) {
      setMergedThemeContext({
        theme: mergeThemes(mergedThemeContext.theme, 
          { series: mergedThemeContext.theme.series
            .map((item, index) => ({ 
              ...item, 
              color: colors[index] || item.color })) 
          })
      });
    }
  }, [colors]);
  return mergedThemeContext;
};

/**
 * Props for the ChartThemeProvider component.
 */
interface ThemeProviderProps {
  /** Partial theme configuration to merge with parent theme or defaults */
  theme: Partial<ChartTheme>;
  /** Child components that will have access to the theme */
  children: React.ReactNode;
}

/**
 * Provider component that supplies chart theme configuration to child components.
 * Supports nested providers - child providers will merge their theme with the parent theme.
 * The parent theme serves as the base, and the current provider's theme overrides it.
 * 
 * @example
 * ```tsx
 * <ChartThemeProvider theme={{ tooltip: { backgroundColor: '#000' } }}>
 *   <MyChart />
 * </ChartThemeProvider>
 * ```
 */
export const ChartThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const context = useContext(ChartThemeContext);
  const parentTheme = context?.theme || LIGHT_THEME;
  const contextValue = useMemo(() => {
    return {
      theme: mergeThemes(parentTheme, props.theme || {})
    };
  }, [parentTheme, props.theme]);
  return (
    <ChartThemeContext.Provider value={contextValue}>
      {props.children}
    </ChartThemeContext.Provider>
  );
};

/**
 * Higher-order component (HOC) that wraps a component with ChartThemeProvider.
 * Allows passing a theme prop directly to a component, which will be applied
 * to that component and its children.
 * 
 * @param Component - The component to wrap with theme provider
 * @returns A new component that accepts an optional theme prop
 * 
 * @example
 * ```tsx
 * const ThemedChart = withChartTheme(MyChart);
 * <ThemedChart theme={{ tooltip: { backgroundColor: '#000' } }} />
 * ```
 */
export const withChartTheme = <T extends React.ComponentType<any>>(Component: T) => {
  return (props: React.ComponentProps<T> & { theme?: Partial<ChartTheme> }) => {
    return (
      <ChartThemeProvider theme={props.theme}>
        <Component {...(props as React.ComponentProps<T>)} />
      </ChartThemeProvider>
    );
  };
};

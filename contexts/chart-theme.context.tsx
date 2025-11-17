import React, { createContext, useContext, useMemo } from 'react';

type AxisStyle = {
  lineColor: string;
  lineWidth: number;
  labelColor: string;
  tickColor: string;
  tickWidth: number;
};

type GridLineStyle = {
  lineColor: string;
  lineWidth: number;
};

type TooltipStyle = {
  backgroundColor: string;
  labelColor: string;
  valueColor: string;
  borderColor: string;
  borderWidth: number;
  borderRadius: number;
  padding: number;
};

type SeriesStyle = {
  colors: string[];
};

export type ChartTheme = {
  axis: {
    x: AxisStyle;
    y: AxisStyle;
  };
  grid: {
    x: GridLineStyle;
    y: GridLineStyle;
  };
  tooltip: TooltipStyle;
  series: SeriesStyle;
};

const DEFAULT_THEME: ChartTheme = {
  axis: {
    x: {
      lineColor: '#000000',
      lineWidth: 1,
      labelColor: '#666666',
      tickColor: '#DDDDDD',
      tickWidth: 1,
    },
    y: {
      lineColor: '#000000',
      lineWidth: 1,
      labelColor: '#666666',
      tickColor: '#DDDDDD',
      tickWidth: 1,
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
  series: {
    colors: ['#3b82f6', '#8ec5ff']
  },
};

interface ChartThemeContextType {
  theme: ChartTheme;
}

const ChartThemeContext = createContext<ChartThemeContextType | undefined>(undefined);

export const useChartTheme = () => {
  const context = useContext(ChartThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  theme: Partial<ChartTheme>;
  children: React.ReactNode;
}

const mergeThemes = (theme1: ChartTheme, theme2: Partial<ChartTheme>): ChartTheme => {
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

export const ChartThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const context = useContext(ChartThemeContext);
  const parentTheme = context?.theme || DEFAULT_THEME;
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

export const withChartTheme = <T extends React.ComponentType<any>>(Component: T) => {
  return (props: React.ComponentProps<T> & { theme?: Partial<ChartTheme> }) => {
    return (
      <ChartThemeProvider theme={props.theme}>
        <Component {...(props as React.ComponentProps<T>)} />
      </ChartThemeProvider>
    );
  };
};

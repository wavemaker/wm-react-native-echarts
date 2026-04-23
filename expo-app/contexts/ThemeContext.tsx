import React, { createContext, useContext, useEffect, useState } from 'react';
import { Appearance, type ColorSchemeName } from 'react-native';

function resolveColorScheme(scheme: ColorSchemeName | null | undefined): 'light' | 'dark' {
  return scheme === 'dark' ? 'dark' : 'light';
}

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  colorScheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('system');
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const updateColorScheme = () => {
      if (theme === 'system') {
        setColorScheme(resolveColorScheme(Appearance.getColorScheme()));
      } else {
        setColorScheme(theme);
      }
    };

    updateColorScheme();

    if (theme === 'system') {
      const subscription = Appearance.addChangeListener(({ colorScheme }) => {
        setColorScheme(resolveColorScheme(colorScheme));
      });

      return () => subscription?.remove();
    }
  }, [theme]);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, colorScheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

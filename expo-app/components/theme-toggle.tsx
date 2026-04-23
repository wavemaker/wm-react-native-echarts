import { useTheme } from '@/contexts/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ThemeToggleProps {
  style?: any;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ style }) => {
  const { theme, colorScheme, toggleTheme } = useTheme();

  const getIconName = () => {
    switch (theme) {
      case 'light':
        return 'sunny' as const;
      case 'dark':
        return 'moon' as const;
      case 'system':
        return 'phone-portrait' as const;
      default:
        return 'sunny' as const;
    }
  };

  const getThemeText = () => {
    switch (theme) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      case 'system':
        return 'Auto';
      default:
        return 'Light';
    }
  };

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 20,
      backgroundColor: colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
      marginHorizontal: 8,
    },
    content: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      marginLeft: 6,
      fontSize: 14,
      fontWeight: '500',
      color: colorScheme === 'dark' ? '#ffffff' : '#333333',
    },
  });

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={toggleTheme}>
      <View style={styles.content}>
        <Ionicons 
          name={getIconName()} 
          size={20} 
          color={colorScheme === 'dark' ? '#ffffff' : '#333333'} 
        />
        <Text style={styles.text}>
          {getThemeText()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

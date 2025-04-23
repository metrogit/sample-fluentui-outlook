import React from 'react';
import {
  mergeStyleSets,
  useTheme,
  IconButton,
  AnimationClassNames
} from '@fluentui/react';

interface ThemeSwitcherProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ isDarkMode, toggleTheme }) => {
  const theme = useTheme();

  const styles = mergeStyleSets({
    container: {
      padding: '12px',
      borderTop: `1px solid ${theme.palette.neutralLight}`,
      backgroundColor: theme.palette.neutralLighterAlt,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 0,
      width: '100%',
      boxSizing: 'border-box',
    },
    iconButton: {
      color: theme.palette.neutralPrimary,
      margin: 0,
      padding: '8px',
      borderRadius: '50%',
      transition: 'transform 0.3s ease, background-color 0.2s ease',
      ':hover': {
        backgroundColor: 'var(--hover-bg)',
      },
      ':active': {
        transform: 'scale(0.9)',
      }
    },
    icon: {
      fontSize: 20,
      color: theme.palette.neutralPrimary,
      transition: 'transform 0.5s ease',
    }
  });

  return (
    <div className={`${styles.container} ${AnimationClassNames.fadeIn100}`}>
      <IconButton
        iconProps={{ 
          iconName: isDarkMode ? "Sunny" : "ClearNight",
          className: 'theme-icon'
        }}
        styles={{
          root: styles.iconButton,
          icon: styles.icon
        }}
        title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        ariaLabel={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        onClick={toggleTheme}
      />
    </div>
  );
};

export default ThemeSwitcher; 
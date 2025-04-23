import { createTheme } from '@fluentui/react';

export const lightTheme = createTheme({});

export const darkTheme = createTheme({
  palette: {
    themePrimary: '#4cc2ff',
    themeLighterAlt: '#03070a',
    themeLighter: '#0d1b28',
    themeLight: '#19324b',
    themeTertiary: '#316496',
    themeSecondary: '#4793db',
    themeDarkAlt: '#5ec9ff',
    themeDark: '#76d2ff',
    themeDarker: '#9adfff',
    neutralLighterAlt: '#2b2b2b',
    neutralLighter: '#333333',
    neutralLight: '#414141',
    neutralQuaternaryAlt: '#4a4a4a',
    neutralQuaternary: '#515151',
    neutralTertiaryAlt: '#6f6f6f',
    neutralTertiary: '#c8c8c8',
    neutralSecondary: '#d0d0d0',
    neutralSecondaryAlt: '#d0d0d0',
    neutralPrimaryAlt: '#dadada',
    neutralPrimary: '#ffffff',
    neutralDark: '#f4f4f4',
    black: '#f8f8f8',
    white: '#222222',
  }
});

// Get saved theme preference or use system preference
export const getInitialThemeMode = (): boolean => {
  // Check if user previously set a preference
  const savedMode = localStorage.getItem('isDarkMode');
  if (savedMode !== null) {
    return savedMode === 'true';
  } 
  // Otherwise use system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

// Apply theme to document
export const applyThemeToDocument = (isDarkMode: boolean): void => {
  // Update document body background color
  document.body.style.backgroundColor = isDarkMode ? darkTheme.palette.white : lightTheme.palette.white;
  
  // Add/remove dark theme class
  if (isDarkMode) {
    document.body.classList.add('ms-Fabric--dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.body.classList.remove('ms-Fabric--dark');
    document.documentElement.setAttribute('data-theme', 'light');
  }

  // Force re-paint to properly apply theme changes
  const currentFocus = document.activeElement;
  const scrollPosition = { 
    x: window.scrollX, 
    y: window.scrollY 
  };
  
  // Trigger a repaint by temporary style change
  const tempStyleElement = document.createElement('style');
  document.head.appendChild(tempStyleElement);
  document.head.removeChild(tempStyleElement);
  
  // Restore scroll position and focus
  window.scrollTo(scrollPosition.x, scrollPosition.y);
  if (currentFocus instanceof HTMLElement) {
    currentFocus.focus();
  }
  
  // Extra step to ensure selected items are properly highlighted after theme change
  setTimeout(() => {
    const selectedElements = document.querySelectorAll('.selection-highlight.selected');
    selectedElements.forEach(el => {
      // Force a style recalculation by accessing offsetHeight
      el.classList.remove('selected');
      // Force browser to recalculate styles
      void (el as HTMLElement).offsetHeight;
      el.classList.add('selected');
    });
  }, 50);
}; 
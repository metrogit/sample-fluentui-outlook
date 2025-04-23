import React from 'react';
import { Stack, ITheme } from '@fluentui/react';
import Sidebar from '../Sidebar';
import ThemeSwitcher from '../ThemeSwitcher';
import UserProfile from '../UserProfile';
import { getCommonStyles, mergeStyles } from '../../utils/styles';

interface SideNavContainerProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: ITheme;
}

const SideNavContainer: React.FC<SideNavContainerProps> = ({ 
  currentView, 
  setCurrentView, 
  isDarkMode, 
  toggleTheme,
  theme 
}) => {
  const commonStyles = getCommonStyles(theme);
  
  return (
    <Stack 
      styles={{
        root: mergeStyles(
          { 
            width: '60px',
            background: theme.palette.neutralLighter,
            boxSizing: 'border-box',
            position: 'relative',
            zIndex: 1
          },
          commonStyles.fullHeight,
          commonStyles.borderRight
        )
      }}
    >
      <UserProfile />
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <ThemeSwitcher isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </Stack>
  );
};

export default SideNavContainer; 
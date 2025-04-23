import React from 'react';
import { Stack, ThemeProvider, Depths, ITheme } from '@fluentui/react';
import SideNavContainer from './SideNavContainer';
import MailLayout from './MailLayout';
import ContentLayout from './ContentLayout';
import { getCommonStyles, mergeStyles } from '../../utils/styles';

interface MainLayoutProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  theme: ITheme;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  currentView,
  setCurrentView,
  isDarkMode,
  toggleTheme,
  theme
}) => {
  const commonStyles = getCommonStyles(theme);
  
  return (
    <ThemeProvider theme={theme} key={isDarkMode ? 'dark' : 'light'}>
      <Stack 
        horizontal 
        styles={{
          root: mergeStyles(
            commonStyles.mainContainer,
            { boxShadow: Depths.depth4 }
          )
        }}
      >
        {/* Left Sidebar */}
        <SideNavContainer
          currentView={currentView}
          setCurrentView={setCurrentView}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          theme={theme}
        />

        {currentView === 'mail' ? (
          <MailLayout theme={theme} />
        ) : (
          <ContentLayout currentView={currentView} />
        )}
      </Stack>
    </ThemeProvider>
  );
};

export default MainLayout; 
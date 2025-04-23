import React from 'react';
import {
  Stack,
  IconButton,
  mergeStyleSets,
  useTheme,
  IIconProps,
  TooltipHost,
  ITooltipHostStyles,
  AnimationClassNames
} from '@fluentui/react';

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

interface NavItem {
  key: string;
  iconName: string;
  label: string;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView }) => {
  const theme = useTheme();

  const navItems: NavItem[] = [
    { key: 'mail', iconName: 'Mail', label: 'Mail' },
    { key: 'calendar', iconName: 'Calendar', label: 'Calendar' },
    { key: 'people', iconName: 'People', label: 'People' },
    { key: 'files', iconName: 'Document', label: 'Files' },
    { key: 'todo', iconName: 'CheckList', label: 'Todo' }
  ];

  const styles = mergeStyleSets({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      height: '100%',
      paddingTop: '20px',
    },
    navItem: {
      marginBottom: '10px',
      position: 'relative',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    active: {
      color: theme.palette.themePrimary,
    },
    separator: {
      width: '30px',
      height: '1px',
      backgroundColor: theme.palette.neutralLight,
      margin: '10px 0',
    }
  });

  const tooltipStyles: Partial<ITooltipHostStyles> = {
    root: {
      display: 'inline-block',
    }
  };

  const getIconButtonProps = (item: NavItem) => {
    const isActive = currentView === item.key;
    
    const iconProps: IIconProps = {
      iconName: item.iconName,
      styles: {
        root: {
          fontSize: 20,
          color: isActive 
            ? theme.palette.themePrimary 
            : theme.palette.neutralPrimary
        }
      }
    };

    return {
      iconProps,
      styles: {
        root: {
          color: isActive ? theme.palette.themePrimary : theme.palette.neutralPrimary,
          backgroundColor: 'transparent',
          width: 48,
          height: 48,
          borderRadius: '4px'
        }
      },
      onClick: () => setCurrentView(item.key),
      className: `selection-highlight ${isActive ? 'selected' : ''} ${AnimationClassNames.fadeIn500}`
    };
  };

  return (
    <Stack className={styles.container}>
      {navItems.slice(0, 4).map(item => (
        <div key={item.key} className={`${styles.navItem} ${currentView === item.key ? styles.active : ''}`}>
          <TooltipHost
            content={item.label}
            styles={tooltipStyles}
            delay={1}
            directionalHint={4} // right
          >
            <IconButton {...getIconButtonProps(item)} />
          </TooltipHost>
        </div>
      ))}

      <div className={styles.separator} />

      {navItems.slice(4).map(item => (
        <div key={item.key} className={`${styles.navItem} ${currentView === item.key ? styles.active : ''}`}>
          <TooltipHost
            content={item.label}
            styles={tooltipStyles}
            delay={1}
            directionalHint={4} // right
          >
            <IconButton {...getIconButtonProps(item)} />
          </TooltipHost>
        </div>
      ))}
    </Stack>
  );
};

export default Sidebar; 
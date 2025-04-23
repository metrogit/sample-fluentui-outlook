import { ITheme, IRawStyle } from '@fluentui/react';

export const getCommonStyles = (theme: ITheme) => {
  return {
    fullHeight: {
      height: '100%'
    },
    fullWidth: {
      width: '100%'
    },
    flexColumn: {
      display: 'flex',
      flexDirection: 'column'
    },
    flexRow: {
      display: 'flex',
      flexDirection: 'row'
    },
    flex1: {
      flex: 1
    },
    overflowHidden: {
      overflow: 'hidden'
    },
    overflowYAuto: {
      overflowY: 'auto'
    },
    borderRight: {
      borderRight: `1px solid ${theme.palette.neutralLight}`
    },
    borderLeft: {
      borderLeft: `1px solid ${theme.palette.neutralLight}`
    },
    borderBottom: {
      borderBottom: `1px solid ${theme.palette.neutralLight}`
    },
    mainContainer: {
      height: '100vh',
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: theme.palette.white
    },
    itemHover: {
      '&:hover': {
        backgroundColor: 'var(--hover-bg)'
      }
    },
    itemSelected: {
      background: theme.palette.neutralLighter,
      fontWeight: 600 as 600
    },
    sectionHeader: {
      padding: '5px 8px',
      cursor: 'pointer',
      fontWeight: 600 as 600,
      fontSize: '13px',
      color: theme.palette.neutralSecondary
    },
    folderItem: {
      padding: '8px 10px', 
      cursor: 'pointer',
      fontSize: '14px',
      borderRadius: '4px'
    }
  };
};

export const mergeStyles = (...styles: Record<string, any>[]) => {
  return styles.reduce((acc, style) => {
    return { ...acc, ...style };
  }, {}) as IRawStyle;
}; 
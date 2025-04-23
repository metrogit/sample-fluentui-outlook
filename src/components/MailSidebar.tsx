import React from 'react';
import { Stack, Text, SearchBox, ITheme } from '@fluentui/react';
import { getCommonStyles, mergeStyles } from '../utils/styles';

interface FolderItemProps {
  text: string;
  isSelected?: boolean;
  theme: ITheme;
}

const FolderItem: React.FC<FolderItemProps> = ({ text, isSelected = false, theme }) => {
  const commonStyles = getCommonStyles(theme);
  
  return (
    <Text
      styles={{
        root: mergeStyles(
          commonStyles.folderItem,
          isSelected ? commonStyles.itemSelected : commonStyles.itemHover
        )
      }}
    >
      {text}
    </Text>
  );
};

interface SectionHeaderProps {
  text: string;
  theme: ITheme;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ text, theme }) => {
  const commonStyles = getCommonStyles(theme);
  
  return (
    <Text styles={{ root: commonStyles.sectionHeader }}>
      {text}
    </Text>
  );
};

interface MailSidebarProps {
  theme: ITheme;
}

const MailSidebar: React.FC<MailSidebarProps> = ({ theme }) => {
  const commonStyles = getCommonStyles(theme);
  
  return (
    <Stack
      styles={{
        root: mergeStyles(
          { width: '220px' },
          commonStyles.fullHeight,
          { background: theme.palette.white },
          commonStyles.borderRight,
          commonStyles.overflowYAuto
        )
      }}
    >
      <Stack.Item
        styles={{
          root: mergeStyles(
            { padding: '16px 12px' },
            commonStyles.borderBottom
          )
        }}
      >
        <Text variant="large" styles={{ root: { fontWeight: 600 } }}>
          Mail
        </Text>
      </Stack.Item>
      <Stack.Item styles={{ root: { padding: '12px' } }}>
        <SearchBox
          placeholder="Search mail"
          iconProps={{ iconName: 'Search' }}
          styles={{
            root: {
              borderRadius: '4px',
              margin: '4px 0 16px',
            }
          }}
        />
        <Stack styles={{ root: { marginTop: '20px' } }}>
          <SectionHeader text="FAVORITES" theme={theme} />
          <FolderItem text="Inbox" isSelected={true} theme={theme} />
          <FolderItem text="Sent Items" theme={theme} />
          <FolderItem text="Drafts" theme={theme} />
          
          <SectionHeader text="FOLDERS" theme={theme} />
          <FolderItem text="Archive" theme={theme} />
          <FolderItem text="Junk Email" theme={theme} />
          <FolderItem text="Deleted Items" theme={theme} />
          <FolderItem text="Notes" theme={theme} />
        </Stack>
      </Stack.Item>
    </Stack>
  );
};

export default MailSidebar; 
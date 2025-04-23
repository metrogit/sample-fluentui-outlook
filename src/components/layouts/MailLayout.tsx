import React, { useState } from 'react';
import { Stack, Text, ITheme } from '@fluentui/react';
import MailList from '../MailList';
import ReadingPane from '../ReadingPane';
import CommandBarSection from '../CommandBarSection';
import MailSidebar from '../MailSidebar';
import { getCommonStyles, mergeStyles } from '../../utils/styles';

interface MailLayoutProps {
  theme: ITheme;
}

const MailLayout: React.FC<MailLayoutProps> = ({ theme }) => {
  const [selectedMailId, setSelectedMailId] = useState<string | null>(null);
  const commonStyles = getCommonStyles(theme);

  return (
    <>
      {/* Secondary Sidebar (Folder Navigation) */}
      <MailSidebar theme={theme} />

      {/* Main content area for mail */}
      <Stack styles={{
        root: mergeStyles(
          commonStyles.flex1,
          commonStyles.fullHeight,
          commonStyles.flexColumn
        )
      }}>
        {/* Command bar section */}
        <CommandBarSection currentView="mail" />

        {/* Mail content */}
        <Stack horizontal styles={{
          root: mergeStyles(
            commonStyles.flex1,
            commonStyles.overflowHidden
          )
        }}>
          {/* Mail list */}
          <Stack styles={{
            root: mergeStyles(
              { width: '400px' },
              commonStyles.borderRight,
              commonStyles.overflowYAuto
            )
          }}>
            <MailList
              selectedId={selectedMailId}
              onSelectMail={(id: string) => {
                setSelectedMailId(id);
              }}
            />
          </Stack>

          {/* Reading pane */}
          <Stack styles={{
            root: mergeStyles(
              commonStyles.flex1,
              commonStyles.overflowYAuto
            )
          }}>
            {selectedMailId ? (
              <ReadingPane mailId={selectedMailId} />
            ) : (
              <Stack
                horizontalAlign="center"
                verticalAlign="center"
                styles={{
                  root: mergeStyles(
                    commonStyles.fullHeight,
                    {
                      backgroundColor: theme.palette.neutralLighterAlt,
                      borderLeft: `1px solid ${theme.palette.neutralLight}`,
                      transition: 'background-color 0.2s ease, border-color 0.2s ease'
                    }
                  )
                }}
              >
                <Text variant="large" styles={{ root: { color: theme.palette.neutralSecondary } }}>
                  Select an email to read
                </Text>
              </Stack>
            )}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default MailLayout; 
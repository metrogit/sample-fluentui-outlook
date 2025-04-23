import React from 'react';
import { Stack, useTheme } from '@fluentui/react';
import CalendarView from '../CalendarView';
import PeopleView from '../PeopleView';
import FilesView from '../FilesView';
import TodoView from '../TodoView';
import CommandBarSection from '../CommandBarSection';
import { getCommonStyles, mergeStyles } from '../../utils/styles';

interface ContentLayoutProps {
  currentView: string;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ currentView }) => {
  const theme = useTheme();
  const commonStyles = getCommonStyles(theme);
  
  return (
    <Stack styles={{
      root: mergeStyles(
        commonStyles.flex1,
        commonStyles.fullHeight,
        commonStyles.flexColumn
      )
    }}>
      {/* Command bar for this view */}
      <CommandBarSection currentView={currentView} />
      
      {/* Full width views for other sections */}
      <Stack styles={{
        root: mergeStyles(
          commonStyles.flex1,
          commonStyles.fullWidth,
          commonStyles.overflowYAuto
        )
      }}>
        {currentView === 'calendar' && <CalendarView />}
        {currentView === 'people' && <PeopleView />}
        {currentView === 'files' && <FilesView />}
        {currentView === 'todo' && <TodoView />}
      </Stack>
    </Stack>
  );
};

export default ContentLayout; 
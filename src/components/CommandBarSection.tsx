import React from 'react';
import {
  CommandBar,
  ICommandBarItemProps,
  useTheme,
  IButtonStyles,
  AnimationClassNames,
  mergeStyleSets
} from '@fluentui/react';

interface CommandBarSectionProps {
  currentView: string;
}

const CommandBarSection: React.FC<CommandBarSectionProps> = ({ currentView }) => {
  const theme = useTheme();

  const styles = mergeStyleSets({
    commandBar: {
      borderBottom: `1px solid ${theme.palette.neutralLight}`,
    },
    container: {
      padding: '0',
      height: '44px',
    }
  });

  const buttonStyles: IButtonStyles = {
    root: {
      padding: '0 10px',
      height: '44px',
    },
    icon: {
      color: theme.palette.themePrimary,
      fontSize: 16,
    },
    label: {
      fontSize: 13,
      fontWeight: 'normal',
    },
    textContainer: {
      flexGrow: 0,
    }
  };

  // Mail view commands
  const mailItems: ICommandBarItemProps[] = [
    {
      key: 'newEmail',
      text: 'New email',
      iconProps: { iconName: 'NewMail' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
    {
      key: 'delete',
      text: 'Delete',
      iconProps: { iconName: 'Delete' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
    {
      key: 'archive',
      text: 'Archive',
      iconProps: { iconName: 'Archive' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
    {
      key: 'move',
      text: 'Move',
      iconProps: { iconName: 'MoveToFolder' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
    {
      key: 'junk',
      text: 'Junk',
      iconProps: { iconName: 'SecurityGroup' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
    {
      key: 'sweep',
      text: 'Sweep',
      iconProps: { iconName: 'Broom' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
  ];

  // Calendar view commands
  const calendarItems: ICommandBarItemProps[] = [
    {
      key: 'newEvent',
      text: 'New event',
      iconProps: { iconName: 'AddEvent' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
    {
      key: 'today',
      text: 'Today',
      iconProps: { iconName: 'Today' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
    {
      key: 'month',
      text: 'Month',
      iconProps: { iconName: 'Calendar' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
    {
      key: 'week',
      text: 'Week',
      iconProps: { iconName: 'PlanView' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
    {
      key: 'workWeek',
      text: 'Work week',
      iconProps: { iconName: 'WorkWeek' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
    {
      key: 'day',
      text: 'Day',
      iconProps: { iconName: 'CalculatorDelta' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
  ];

  // People view commands
  const peopleItems: ICommandBarItemProps[] = [
    {
      key: 'newContact',
      text: 'New contact',
      iconProps: { iconName: 'AddFriend' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
    {
      key: 'deleteContact',
      text: 'Delete',
      iconProps: { iconName: 'Delete' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
    {
      key: 'mailContact',
      text: 'Email',
      iconProps: { iconName: 'Mail' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
    {
      key: 'editContact',
      text: 'Edit',
      iconProps: { iconName: 'Edit' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
  ];

  // Files view commands
  const filesItems: ICommandBarItemProps[] = [
    {
      key: 'upload',
      text: 'Upload',
      iconProps: { iconName: 'Upload' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
    {
      key: 'newFolder',
      text: 'New folder',
      iconProps: { iconName: 'FolderAdd' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
    {
      key: 'download',
      text: 'Download',
      iconProps: { iconName: 'Download' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
    {
      key: 'copy',
      text: 'Copy to',
      iconProps: { iconName: 'Copy' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
    {
      key: 'move',
      text: 'Move to',
      iconProps: { iconName: 'Move' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
    {
      key: 'deleteFile',
      text: 'Delete',
      iconProps: { iconName: 'Delete' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
  ];

  // Todo view commands
  const todoItems: ICommandBarItemProps[] = [
    {
      key: 'newTask',
      text: 'New task',
      iconProps: { iconName: 'Add' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
    {
      key: 'completeTask',
      text: 'Complete',
      iconProps: { iconName: 'CheckMark' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
    {
      key: 'deleteTask',
      text: 'Delete',
      iconProps: { iconName: 'Delete' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
    {
      key: 'sortTasks',
      text: 'Sort',
      iconProps: { iconName: 'Sort' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
  ];

  // Far items for all views
  const farItems: ICommandBarItemProps[] = [
    {
      key: 'refresh',
      text: 'Refresh',
      ariaLabel: 'Refresh',
      iconOnly: true,
      iconProps: { iconName: 'Refresh' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
    {
      key: 'settings',
      text: 'Settings',
      ariaLabel: 'Settings',
      iconOnly: true,
      iconProps: { iconName: 'Settings' },
      buttonStyles: buttonStyles,
      className: AnimationClassNames.fadeIn500,
    },
  ];

  // Select which items to show based on the current view
  const getCommandItems = () => {
    switch (currentView) {
      case 'mail':
        return mailItems;
      case 'calendar':
        return calendarItems;
      case 'people':
        return peopleItems;
      case 'files':
        return filesItems;
      case 'todo':
        return todoItems;
      default:
        return mailItems;
    }
  };

  return (
    <div className={styles.commandBar}>
      <CommandBar
        items={getCommandItems()}
        farItems={farItems}
        className={styles.container}
        ariaLabel="Command Bar"
      />
    </div>
  );
};

export default CommandBarSection; 
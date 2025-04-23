import React, { useState } from 'react';
import {
  Panel,
  PrimaryButton,
  DefaultButton,
  TextField,
  Dropdown,
  IDropdownOption,
  Stack,
  StackItem,
  Label,
  DatePicker,
  PanelType,
  Text,
  IStackTokens,
  ITextFieldStyles,
  IDropdownStyles,
  mergeStyleSets,
  AnimationClassNames,
  Theme,
  useTheme,
} from '@fluentui/react';

interface TodoProps {
  isOpen: boolean;
  dismissPanel: () => void;
  onAddTask: (task: any) => void;
}

const statusOptions: IDropdownOption[] = [
  { key: 'notStarted', text: 'Not Started' },
  { key: 'inProgress', text: 'In Progress' },
  { key: 'completed', text: 'Completed' },
];

const priorityOptions: IDropdownOption[] = [
  { key: 'low', text: 'Low' },
  { key: 'medium', text: 'Medium' },
  { key: 'high', text: 'High' },
];

export const Todo: React.FC<TodoProps> = ({ isOpen, dismissPanel, onAddTask }) => {
  const theme = useTheme();
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<string>('notStarted');
  const [priority, setPriority] = useState<string>('medium');
  const [dueDate, setDueDate] = useState<Date | null>(null);

  // Styles
  const stackTokens: IStackTokens = { childrenGap: 16 };
  
  const styles = mergeStyleSets({
    panel: {
      selectors: {
        '.ms-Panel-commands': {
          marginTop: 20,
        },
      },
    },
    headerText: {
      color: theme.palette.themePrimary,
      marginBottom: 12,
    },
    fieldSet: {
      border: `1px solid ${theme.palette.neutralLight}`,
      borderRadius: 4,
      padding: '16px',
      marginBottom: 16,
    },
    legend: {
      padding: '0 6px',
      color: theme.palette.neutralSecondary,
      fontSize: 14, 
    },
    formFooter: {
      marginTop: 30,
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
    }
  });

  const textFieldStyles: Partial<ITextFieldStyles> = {
    fieldGroup: {
      height: 40,
      borderRadius: 4,
      ':hover': {
        borderColor: theme.palette.themePrimary,
      },
    },
    field: {
      fontSize: 14,
    },
  };

  const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: {
      width: '100%',
      marginBottom: 8,
    },
    title: {
      height: 40,
      borderRadius: 4,
      ':hover': {
        borderColor: theme.palette.themePrimary,
      },
    },
  };

  const handleSubmit = () => {
    if (taskName.trim() === '') return;

    const newTask = {
      id: Date.now(),
      name: taskName,
      description: description,
      status: statusOptions.find(option => option.key === status)?.text || 'Not Started',
      priority: priorityOptions.find(option => option.key === priority)?.text || 'Medium',
      dueDate: dueDate ? dueDate.toISOString().split('T')[0] : '',
    };

    onAddTask(newTask);
    resetForm();
    dismissPanel();
  };

  const resetForm = () => {
    setTaskName('');
    setDescription('');
    setStatus('notStarted');
    setPriority('medium');
    setDueDate(null);
  };

  return (
    <Panel
      className={`${styles.panel} ${AnimationClassNames.fadeIn100}`}
      headerText="Add New Task"
      isOpen={isOpen}
      onDismiss={dismissPanel}
      closeButtonAriaLabel="Close"
      type={PanelType.medium}
      isLightDismiss
    >
      <Text variant="large" className={styles.headerText}>Create a new task</Text>
      
      <Stack tokens={stackTokens}>
        <fieldset className={styles.fieldSet}>
          <legend className={styles.legend}>Basic Information</legend>
          
          <TextField
            label="Task Name"
            value={taskName}
            onChange={(_, newValue) => setTaskName(newValue || '')}
            required
            placeholder="Enter task name"
            styles={textFieldStyles}
          />
          
          <TextField
            label="Description"
            value={description}
            onChange={(_, newValue) => setDescription(newValue || '')}
            placeholder="Add a description"
            multiline
            rows={3}
            styles={{
              ...textFieldStyles,
              field: {
                minHeight: 80,
              },
            }}
          />
        </fieldset>
        
        <fieldset className={styles.fieldSet}>
          <legend className={styles.legend}>Task Details</legend>
          
          <Stack horizontal tokens={{ childrenGap: 10 }}>
            <Stack.Item grow={1}>
              <Dropdown
                label="Status"
                selectedKey={status}
                options={statusOptions}
                onChange={(_, option) => option && setStatus(option.key as string)}
                styles={dropdownStyles}
              />
            </Stack.Item>
            
            <Stack.Item grow={1}>
              <Dropdown
                label="Priority"
                selectedKey={priority}
                options={priorityOptions}
                onChange={(_, option) => option && setPriority(option.key as string)}
                styles={dropdownStyles}
              />
            </Stack.Item>
          </Stack>
          
          <Label>Due Date</Label>
          <DatePicker
            value={dueDate || undefined}
            onSelectDate={(date) => setDueDate(date || null)}
            placeholder="Select a date..."
            ariaLabel="Select a due date"
            formatDate={(date) => date ? date.toLocaleDateString() : ''}
            styles={{
              root: { width: '100%' },
              textField: textFieldStyles,
            }}
          />
        </fieldset>
      </Stack>

      <div className={styles.formFooter}>
        <DefaultButton
          text="Cancel"
          onClick={dismissPanel}
        />
        <PrimaryButton
          text="Add Task"
          onClick={handleSubmit}
        />
      </div>
    </Panel>
  );
};

export default Todo; 
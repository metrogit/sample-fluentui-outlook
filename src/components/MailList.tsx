import React, { useState, useEffect } from 'react';
import {
  Stack,
  Text,
  Persona,
  PersonaSize,
  useTheme,
  FocusZone,
  List,
  ITheme,
  mergeStyleSets
} from '@fluentui/react';
import '../styles/selection.css';

interface Email {
  id: string;
  from: string;
  subject: string;
  preview: string;
  date: string;
  isRead: boolean;
  isImportant: boolean;
  hasAttachments: boolean;
}

interface MailListProps {
  selectedId: string | null;
  onSelectMail: (id: string) => void;
}

const MailList: React.FC<MailListProps> = ({ selectedId, onSelectMail }) => {
  const theme: ITheme = useTheme();
  
  // Create internal state that syncs with the prop
  const [internalSelectedId, setInternalSelectedId] = useState<string | null>(selectedId);
  
  // Keep internal state in sync with props
  useEffect(() => {
    setInternalSelectedId(selectedId);
  }, [selectedId]);
  
  // Sample email data
  const [emails] = useState<Email[]>([
    {
      id: '1',
      from: 'John Smith',
      subject: 'Project Update - Q4 Planning',
      preview: 'Hi Team, I wanted to share some updates on our Q4 planning. We need to focus on...',
      date: '11:24 AM',
      isRead: false,
      isImportant: true,
      hasAttachments: true
    },
    {
      id: '2',
      from: 'Marketing Team',
      subject: 'New Campaign Assets Ready for Review',
      preview: 'Please review the attached campaign assets for the upcoming product launch...',
      date: '10:15 AM',
      isRead: true,
      isImportant: false,
      hasAttachments: true
    },
    {
      id: '3',
      from: 'Sarah Johnson',
      subject: 'Meeting Notes - Design Review',
      preview: 'Attached are the notes from yesterday\'s design review meeting. We agreed to...',
      date: 'Yesterday',
      isRead: true,
      isImportant: false,
      hasAttachments: false
    },
    {
      id: '4',
      from: 'Alex Chen',
      subject: 'Question about the API documentation',
      preview: 'I was looking at the API docs and noticed some inconsistencies in the...',
      date: 'Yesterday',
      isRead: false,
      isImportant: false,
      hasAttachments: false
    },
    {
      id: '5',
      from: 'HR Department',
      subject: 'Important: Benefits Enrollment Deadline',
      preview: 'This is a reminder that the deadline for benefits enrollment is approaching...',
      date: 'Monday',
      isRead: true,
      isImportant: true,
      hasAttachments: false
    },
    {
      id: '6',
      from: 'Tech Support',
      subject: 'RE: Laptop Upgrade Schedule',
      preview: "We've scheduled your laptop upgrade for next Wednesday. Please ensure...",
      date: 'Monday',
      isRead: true,
      isImportant: false,
      hasAttachments: false
    },
    {
      id: '7',
      from: 'Project Sync',
      subject: 'Weekly Automated Report',
      preview: 'Your weekly project metrics are attached. Key highlights: 23% increase in...',
      date: '5/12',
      isRead: true,
      isImportant: false,
      hasAttachments: true
    },
    {
      id: '8',
      from: 'Maria Garcia',
      subject: 'Vacation Request Approved',
      preview: 'Your vacation request for June 15-22 has been approved. Please remember to...',
      date: '5/10',
      isRead: true,
      isImportant: false,
      hasAttachments: false
    }
]);

  // Render each email item
  const renderEmailItem = (item?: Email) => {
    if (!item) return null;
    
    const isSelected = internalSelectedId === item.id;
    const stackStyles = mergeStyleSets({
      root: {
        padding: '10px 16px',
        cursor: 'pointer',
        color: item.isRead ? theme.palette.neutralSecondary : theme.palette.neutralPrimary,
        fontWeight: item.isRead ? 'normal' : '600',
        margin: '2px 4px',
      }
    });
    
    return (
      <Stack
        key={item.id}
        className={`selection-highlight ${isSelected ? 'selected' : ''}`}
        onClick={() => {
          setInternalSelectedId(item.id);
          onSelectMail(item.id);
        }}
        tabIndex={0}
        role="button"
        aria-selected={isSelected}
        styles={stackStyles}
      >
        <Stack horizontal horizontalAlign="space-between">
          <Persona
            text={item.from}
            size={PersonaSize.size24}
            styles={{
              root: {
                marginBottom: '4px'
              }
            }}
          />
          <Text variant="small" styles={{ root: { color: theme.palette.neutralSecondary } }}>{item.date}</Text>
        </Stack>
        
        <Text 
          variant="mediumPlus" 
          styles={{ 
            root: { 
              marginBottom: '4px',
              fontWeight: item.isRead ? 'normal' : '600'
            } 
          }}
        >
          {item.subject}
        </Text>
        
        <Text 
          variant="medium" 
          styles={{ 
            root: { 
              color: theme.palette.neutralSecondary,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            } 
          }}
        >
          {item.preview}
        </Text>
      </Stack>
    );
  };

  return (
    <FocusZone>
      <Stack>
        <Stack
          horizontal
          horizontalAlign="space-between"
          verticalAlign="center"
          styles={{
            root: {
              padding: '10px 16px',
              borderBottom: `1px solid ${theme.palette.neutralLight}`,
              background: theme.palette.neutralLighter
            }
          }}
        >
          <Text variant="medium" styles={{ root: { fontWeight: 600 } }}>Inbox</Text>
          <Text variant="medium">{emails.length} messages</Text>
        </Stack>
        
        <List
          items={emails}
          onRenderCell={renderEmailItem}
          key={`mail-list-${internalSelectedId}`}
        />
      </Stack>
    </FocusZone>
  );
};

export default MailList; 
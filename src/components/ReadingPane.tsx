import React from 'react';
import {
  Stack,
  Text,
  Persona,
  PersonaSize,
  IconButton,
  useTheme,
  mergeStyles
} from '@fluentui/react';

interface ReadingPaneProps {
  mailId: string;
}

const ReadingPane: React.FC<ReadingPaneProps> = ({ mailId }) => {
  const theme = useTheme();

  // Mock email data - in a real application this would be fetched from state or API
  const emails: Record<string, any> = {
    '1': {
      id: '1',
      from: 'John Smith',
      email: 'john.smith@example.com',
      to: 'me@contoso.com',
      cc: [],
      subject: 'Project Update - Q4 Planning',
      date: 'Today at 11:24 AM',
      body: `
        <p>Hi Team,</p>
        <p>I wanted to share some updates on our Q4 planning. We need to focus on the following key areas:</p>
        <ul>
          <li>Finalizing the product roadmap for Q4</li>
          <li>Completing the budget allocation for marketing campaigns</li>
          <li>Setting up the new analytics dashboard</li>
          <li>Preparing for the end-of-year stakeholder meeting</li>
        </ul>
        <p>Please review the attached documents and let me know if you have any questions or input. I'd like to finalize everything by the end of the week.</p>
        <p>Best regards,<br/>John</p>
      `,
      hasAttachments: true,
      attachments: ['Q4_Planning.docx', 'Budget_Proposal.xlsx']
    },
    '2': {
      id: '2',
      from: 'Marketing Team',
      email: 'marketing@example.com',
      to: 'me@contoso.com',
      cc: ['leadership@example.com'],
      subject: 'New Campaign Assets Ready for Review',
      date: 'Today at 10:15 AM',
      body: `
        <p>Hello,</p>
        <p>The creative team has finalized the assets for the upcoming product launch campaign. Please review the attached files before our meeting tomorrow.</p>
        <p>The package includes:</p>
        <ul>
          <li>Digital ad banners in various formats</li>
          <li>Social media post templates</li>
          <li>Email newsletter header design</li>
          <li>Landing page mockups</li>
        </ul>
        <p>We need your feedback by EOD to proceed with the next steps.</p>
        <p>Thank you,<br/>Marketing Team</p>
      `,
      hasAttachments: true,
      attachments: ['Campaign_Assets.zip', 'Brand_Guidelines.pdf']
    },
    '3': {
      id: '3',
      from: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      to: 'me@contoso.com',
      cc: ['design-team@example.com'],
      subject: 'Meeting Notes - Design Review',
      date: 'Yesterday at 3:45 PM',
      body: `
        <p>Hi everyone,</p>
        <p>Attached are the notes from yesterday's design review meeting. We agreed to the following action items:</p>
        <ol>
          <li>Revise the color scheme for the mobile app</li>
          <li>Conduct usability testing on the new navigation layout</li>
          <li>Create additional mockups for the settings page</li>
          <li>Schedule a follow-up meeting next week to review progress</li>
        </ol>
        <p>Please let me know if I missed anything important in the notes.</p>
        <p>Thanks,<br/>Sarah</p>
      `,
      hasAttachments: false,
      attachments: []
    },
    '4': {
      id: '4',
      from: 'Alex Chen',
      email: 'alex.c@example.com',
      to: 'me@contoso.com',
      cc: [],
      subject: 'Question about the API documentation',
      date: 'Yesterday at 11:30 AM',
      body: `
        <p>Hi,</p>
        <p>I was looking at the API docs and noticed some inconsistencies in the authentication section. Specifically:</p>
        <ul>
          <li>The example code on page 12 shows a different token format than described in the overview section</li>
          <li>The rate limiting parameters aren't clearly defined</li>
          <li>Some of the endpoint URLs in the examples don't match the base URL specified earlier</li>
        </ul>
        <p>Could we schedule a quick call to go through these issues? I want to make sure we correct them before the developer conference.</p>
        <p>Best,<br/>Alex</p>
      `,
      hasAttachments: false,
      attachments: []
    },
    '5': {
      id: '5',
      from: 'HR Department',
      email: 'hr@example.com',
      to: 'all-employees@example.com',
      cc: [],
      subject: 'Important: Benefits Enrollment Deadline',
      date: 'Monday at 9:00 AM',
      body: `
        <p>Dear Employees,</p>
        <p>This is a reminder that the deadline for benefits enrollment is approaching. All selections must be completed by <strong>June 30th</strong>.</p>
        <p>If you haven't already done so, please log in to the HR portal and:</p>
        <ol>
          <li>Review your current benefits</li>
          <li>Make any necessary changes for the upcoming year</li>
          <li>Add or remove dependents if needed</li>
          <li>Submit your final selections</li>
        </ol>
        <p>If you have any questions about the available plans or the enrollment process, please contact HR at ext. 5678.</p>
        <p>Regards,<br/>HR Department</p>
      `,
      hasAttachments: false,
      attachments: []
    }
  };

  const email = emails[mailId] || null;

  if (!email) {
    return (
      <Stack
        horizontalAlign="center"
        verticalAlign="center"
        styles={{
          root: {
            height: '100%',
            padding: '20px'
          }
        }}
      >
        <Text variant="large">Email not found</Text>
      </Stack>
    );
  }

  const actionIconStyles = mergeStyles({
    fontSize: 16,
    margin: '0 4px',
    color: theme.palette.neutralPrimary
  });

  return (
    <Stack styles={{
      root: {
        height: '100%',
        padding: '40px',
        backgroundColor: theme.palette.white,
        overflow: 'auto',
        transition: 'background-color 0.2s ease, color 0.2s ease'
      }
    }}>
      {/* Email header */}
      <Stack>
        <Text variant="xLarge" styles={{ root: { marginBottom: '10px' } }}>{email.subject}</Text>
        
        <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
          <Persona
            text={email.from}
            secondaryText={email.email}
            size={PersonaSize.size40}
          />
          <Text variant="small" styles={{ root: { color: theme.palette.neutralSecondary } }}>{email.date}</Text>
        </Stack>
        
        <Stack horizontal styles={{ root: { marginTop: '15px', marginBottom: '15px' } }}>
          <Text variant="small" styles={{ root: { width: '30px', color: theme.palette.neutralSecondary } }}>To:</Text>
          <Text variant="small">{email.to}</Text>
        </Stack>
        
        {email.cc.length > 0 && (
          <Stack horizontal styles={{ root: { marginBottom: '15px' } }}>
            <Text variant="small" styles={{ root: { width: '30px', color: theme.palette.neutralSecondary } }}>Cc:</Text>
            <Text variant="small">{email.cc.join('; ')}</Text>
          </Stack>
        )}
        
        {/* Action buttons */}
        <Stack horizontal styles={{ root: { marginTop: '10px', marginBottom: '20px' } }}>
          <IconButton
            iconProps={{ iconName: 'Reply' }}
            title="Reply"
            ariaLabel="Reply"
            styles={{ root: actionIconStyles }}
          />
          <IconButton
            iconProps={{ iconName: 'ReplyAll' }}
            title="Reply All"
            ariaLabel="Reply All"
            styles={{ root: actionIconStyles }}
          />
          <IconButton
            iconProps={{ iconName: 'Forward' }}
            title="Forward"
            ariaLabel="Forward"
            styles={{ root: actionIconStyles }}
          />
          <IconButton
            iconProps={{ iconName: 'Delete' }}
            title="Delete"
            ariaLabel="Delete"
            styles={{ root: actionIconStyles }}
          />
          <IconButton
            iconProps={{ iconName: 'Archive' }}
            title="Archive"
            ariaLabel="Archive"
            styles={{ root: actionIconStyles }}
          />
          <IconButton
            iconProps={{ iconName: 'Flag' }}
            title="Flag"
            ariaLabel="Flag"
            styles={{ root: actionIconStyles }}
          />
        </Stack>
      </Stack>
      
      {/* Email body */}
      <Stack styles={{
        root: {
          borderTop: `1px solid ${theme.palette.neutralLight}`,
          paddingTop: '20px'
        }
      }}>
        <div dangerouslySetInnerHTML={{ __html: email.body }} />
        
        {/* Attachments */}
        {email.hasAttachments && (
          <Stack styles={{ root: { marginTop: '30px' } }}>
            <Text variant="medium" styles={{ root: { fontWeight: 600, marginBottom: '10px' } }}>Attachments</Text>
            <Stack horizontal tokens={{ childrenGap: 10 }}>
              {email.attachments.map((attachment: string, index: number) => (
                <Stack
                  key={index}
                  styles={{
                    root: {
                      padding: '10px',
                      width: '150px',
                      backgroundColor: theme.palette.neutralLighter,
                      borderRadius: '2px',
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'background-color 0.2s ease, transform 0.2s ease',
                      ':hover': {
                        backgroundColor: theme.isInverted 
                          ? theme.palette.neutralLight 
                          : theme.palette.neutralQuaternaryAlt,
                        transform: 'translateY(-2px)'
                      }
                    }
                  }}
                >
                  <IconButton
                    iconProps={{ 
                      iconName: attachment.endsWith('.pdf') ? 'PDF' : 
                                attachment.endsWith('.docx') ? 'WordDocument' : 
                                attachment.endsWith('.xlsx') ? 'ExcelDocument' : 
                                attachment.endsWith('.zip') ? 'ZipFolder' : 'Attach'
                    }}
                    styles={{
                      root: { 
                        height: 'auto',
                        fontSize: 24,
                        color: theme.palette.themePrimary
                      }
                    }}
                  />
                  <Text variant="smallPlus" styles={{ root: { marginTop: '5px', wordBreak: 'break-word' } }}>
                    {attachment}
                  </Text>
                </Stack>
              ))}
            </Stack>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default ReadingPane; 
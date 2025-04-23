import React, { useState } from 'react';
import {
  Persona,
  PersonaSize,
  ContextualMenu,
  IContextualMenuProps
} from '@fluentui/react';

const UserProfile: React.FC = () => {
  const [showPersonaMenu, setShowPersonaMenu] = useState(false);
  const [personaMenuTarget, setPersonaMenuTarget] = useState<HTMLElement | null>(null);

  // Handle persona click for dropdown
  const onPersonaClick = (event: React.MouseEvent<HTMLElement>): void => {
    setPersonaMenuTarget(event.currentTarget);
    setShowPersonaMenu(!showPersonaMenu);
  };

  // Persona menu items
  const menuItems: IContextualMenuProps = {
    items: [
      {
        key: 'account',
        text: 'john.doe@example.com',
        iconProps: { iconName: 'Mail' }
      },
      {
        key: 'manage',
        text: 'Manage Accounts',
        iconProps: { iconName: 'People' }
      },
      {
        key: 'settings',
        text: 'Settings',
        iconProps: { iconName: 'Settings' }
      },
      {
        key: 'divider',
        itemType: 1 // Divider
      },
      {
        key: 'logout',
        text: 'Sign Out',
        iconProps: { iconName: 'SignOut' }
      }
    ],
    onItemClick: (_, item) => {
      setShowPersonaMenu(false);
      // Handle menu item clicks here
      if (item?.key === 'logout') {
        console.log('User logged out');
        // Implement logout functionality
      }
    },
    onDismiss: () => setShowPersonaMenu(false)
  };

  return (
    <>
      <Persona
        // imageUrl="https://via.placeholder.com/36"
        size={PersonaSize.size32}
        styles={{
          root: {
            margin: '16px 13px',
            cursor: 'pointer'
          }
        }}
        onClick={onPersonaClick}
      />
      {showPersonaMenu && (
        <ContextualMenu
          target={personaMenuTarget}
          {...menuItems}
          isBeakVisible
          beakWidth={10}
          styles={{
            root: {
              minWidth: '200px',
            }
          }}
        />
      )}
    </>
  );
};

export default UserProfile; 
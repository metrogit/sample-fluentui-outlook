import React from 'react';
import {
  Stack,
  Text,
  Icon,
  useTheme,
  mergeStyleSets,
  AnimationClassNames
} from '@fluentui/react';

interface EmptyScreenTemplateProps {
  title: string;
  iconName: string;
}

const EmptyScreenTemplate: React.FC<EmptyScreenTemplateProps> = ({
  title,
  iconName
}) => {
  const theme = useTheme();

  const styles = mergeStyleSets({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      height: '100%',
      textAlign: 'center',
      backgroundColor: theme.palette.neutralLighterAlt,
    },
    icon: {
      fontSize: 80,
      color: theme.palette.neutralTertiary,
      marginBottom: 40,
    },
    title: {
      fontSize: 28,
      fontWeight: 600,
      marginBottom: 12,
      color: theme.palette.neutralPrimary,
    },
    message: {
      fontSize: 16,
      color: theme.palette.neutralSecondary,
      maxWidth: 400,
      lineHeight: 22,
    }
  });

  return (
    <Stack className={`${styles.container} ${AnimationClassNames.fadeIn200}`}>
      <Icon iconName={iconName} className={styles.icon} />
      <Text className={styles.title}>{title}</Text>
      <Text className={styles.message}>
        This section is not implemented as part of the test task.
      </Text>
    </Stack>
  );
};

export default EmptyScreenTemplate; 
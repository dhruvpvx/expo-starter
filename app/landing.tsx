import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { AppContainer } from '@/components/common/app-container';
import { AppText } from '@/components/common/app-text';

const Landing = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <AppContainer style={styles.container}>
      <AppText>Landing</AppText>
    </AppContainer>
  );
};

export default Landing;

const stylesheet = createStyleSheet((theme) => ({
  container: {},
}));

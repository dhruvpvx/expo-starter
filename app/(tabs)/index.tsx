import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { AppContainer } from '@/components/common/app-container';
import { AppText } from '@/components/common/app-text';

const Home = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <AppContainer style={styles.container}>
      <AppText>Home</AppText>
    </AppContainer>
  );
};

export default Home;

const stylesheet = createStyleSheet((theme) => ({
  container: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.scale(40),
  },
}));

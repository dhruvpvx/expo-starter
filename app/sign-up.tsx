import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { AppContainer } from '@/components/common/app-container';
import { AppText } from '@/components/common/app-text';

const SignUp = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <AppContainer style={styles.container}>
      <AppText>SignIn</AppText>
    </AppContainer>
  );
};

export default SignUp;

const stylesheet = createStyleSheet((theme) => ({
  container: {},
}));

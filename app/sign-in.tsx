import React, { useState } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { AppContainer } from '@/components/common/app-container';
import { AppLabelInput } from '@/components/common/app-input';
import { AppButton } from '@/components/common/app-button';
import { FirebaseAuthService } from '@/services';
import { useRouter } from 'expo-router';

const SignIn = () => {
  const { styles } = useStyles(stylesheet);
  const [phoneNumber, setPhoneNumber] = useState('1234567890');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const sendOtp = () => {
    setIsLoading(true);
    FirebaseAuthService.sendOtp(phoneNumber)
      .then((res) => {
        router.push({
          pathname: '/verify-otp',
          params: {
            phoneNumber,
            verificationId: res.verificationId,
          },
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <AppContainer style={styles.container}>
      <AppLabelInput
        label="Phone Number"
        maxLength={10}
        keyboardType="number-pad"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <AppButton
        disabled={phoneNumber.trim().length !== 10}
        title="Continue"
        onPress={sendOtp}
        loading={isLoading}
      />
    </AppContainer>
  );
};

export default SignIn;

const stylesheet = createStyleSheet((theme) => ({
  container: {
    paddingHorizontal: theme.spacing.xxl,
    gap: theme.spacing.xxl,
    justifyContent: 'center',
  },
}));

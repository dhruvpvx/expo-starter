import { AppButton } from '@/components/common/app-button';
import { AppContainer } from '@/components/common/app-container';
import { AppLabelInput } from '@/components/common/app-input';
import { AppLoadingWrapper } from '@/components/common/app-loading-wrapper';
import { AppText } from '@/components/common/app-text';
import { FirebaseAuthService } from '@/services';
import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const VerifyOtp = () => {
  const { styles } = useStyles(stylesheet);

  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  const { phoneNumber, verificationId } = useLocalSearchParams<{
    phoneNumber: string;
    verificationId: string;
  }>();

  console.log(phoneNumber, verificationId);

  const verifyOtp = () => {
    setIsLoading(true);
    FirebaseAuthService.verifyOtp(verificationId, otp).finally(() => {
      setIsLoading(false);
    });
  };

  const resendOtp = () => {
    setResendLoading(true);
    FirebaseAuthService.resendOtp(phoneNumber).finally(() => {
      setResendLoading(false);
    });
  };

  return (
    <AppContainer style={styles.container}>
      <AppLabelInput
        label="OTP"
        maxLength={6}
        keyboardType="number-pad"
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
      />
      <AppButton
        disabled={otp.length !== 6}
        title="Verify OTP"
        onPress={verifyOtp}
        loading={isLoading}
      />

      <AppText textAlign="center">
        Didn't receive OTP?{' '}
        <AppLoadingWrapper loading={resendLoading}>
          <AppText onPress={resendOtp} variant="medium-12" color="blue">
            Resend
          </AppText>
        </AppLoadingWrapper>
      </AppText>
    </AppContainer>
  );
};

export default VerifyOtp;

const stylesheet = createStyleSheet((theme) => ({
  container: {
    paddingHorizontal: theme.spacing.xxl,
    gap: theme.spacing.xxl,
    justifyContent: 'center',
  },
}));

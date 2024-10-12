import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { useStyles } from 'react-native-unistyles';

interface Props extends ActivityIndicatorProps {
  loading?: boolean;
}

export const AppLoadingWrapper = ({ children, loading, ...props }: Props) => {
  const { theme } = useStyles();

  return loading ? (
    <ActivityIndicator size="small" color={theme.colors.primary} {...props} />
  ) : (
    <>{children}</>
  );
};

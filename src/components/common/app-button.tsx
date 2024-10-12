import { StyleProp, Text, ViewStyle } from 'react-native';
import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { AppLink, AppLinkProps } from './app-link';
import { AppLoadingWrapper } from './app-loading-wrapper';

interface Props extends AppLinkProps {
  title: string;
  textColor?: string;
  variant?: 'ghost';
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
}

export const AppButton = ({ ...props }: Props) => {
  const { styles } = useStyles(stylesheet, {
    variant: props.variant,
  });

  return (
    <AppLink
      {...props}
      disabled={props.loading || props.disabled}
      style={[styles.button, props.style]}
    >
      <AppLoadingWrapper loading={props.loading} color={styles.text.color}>
        {props.icon}
        <Text style={styles.text}>{props.title}</Text>
        {props.rightIcon}
      </AppLoadingWrapper>
    </AppLink>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  button: {
    height: theme.scale(48),
    borderRadius: theme.radius.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    variants: {
      variant: {
        ghost: {
          backgroundColor: theme.colors.transparent,
        },
      },
    },
  },
  text: {
    color: theme.colors.white,
    fontFamily: theme.fonts.medium,
    fontSize: theme.fontSize.large,
    variants: {
      variant: {
        ghost: {
          color: theme.colors.white,
          fontSize: theme.fontSize.medium,
        },
      },
    },
  },
}));

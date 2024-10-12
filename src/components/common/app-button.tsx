import { StyleProp, Text, ViewStyle } from 'react-native';
import React from 'react';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { AppLink, AppLinkProps } from './app-link';

interface Props extends AppLinkProps {
  title: string;
  textColor?: string;
  variant?: 'ghost';
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const AppButton = ({ ...props }: Props) => {
  const { styles } = useStyles(stylesheet, {
    variant: props.variant,
  });

  return (
    <AppLink {...props} style={[styles.button, props.style]}>
      {props.icon}
      <Text style={styles.text}>{props.title}</Text>
      {props.rightIcon}
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

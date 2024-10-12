import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, PressableProps } from 'react-native';

export interface AppLinkProps extends PressableProps {
  replace?: React.ComponentProps<typeof Link>['href'];
  authRequired?: boolean;
  push?: React.ComponentProps<typeof Link>['href'];
  href?: React.ComponentProps<typeof Link>['href'];
  back?: boolean;
  track?: object;
  copilot?: object;
  activeOpacity?: number;
}

export const AppLink = (props: AppLinkProps) => {
  const router = useRouter();

  return (
    <Pressable
      {...props}
      disabled={
        props.disabled
          ? true
          : props.onPress
            ? false
            : props.back
              ? false
              : !props.href
      }
      style={({ pressed }) => [
        typeof props.style === 'function'
          ? props.style({ pressed })
          : props.style,
        pressed && { opacity: props.activeOpacity || 0.8 },
      ]}
      onPress={(e) => {
        const action = () => {
          if (props.href) {
            router.navigate(props.href);
          } else if (props.replace) {
            router.replace(props.replace);
          } else if (props.push) {
            router.push(props.push);
          } else if (props.back) {
            router.back();
          }
          props.onPress && props.onPress(e);
        };

        action();
      }}
      {...props.copilot}
    >
      {props.children}
    </Pressable>
  );
};

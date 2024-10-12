import React from 'react';
import { Image } from 'react-native';

import { AppIcons } from '@/assets';

interface Props {
  name: keyof typeof AppIcons;
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  style?: React.ComponentProps<typeof Image>['style'];
}

export const AppIcon = ({ name, size = 16, ...props }: Props) => {
  const width = props.width || size;
  const height = props.height || size;

  return (
    <Image
      source={AppIcons[name]}
      style={[{ width, height }, props.style]}
      tintColor={props.color}
    />
  );
};

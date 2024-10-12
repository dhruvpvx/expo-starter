import { Image, ImageProps } from 'expo-image';

interface Props extends ImageProps {
  size?: number;
  width?: number;
  height?: number;
}

export const AppImage = ({ size = 24, width, height, ...props }: Props) => {
  return (
    <Image
      {...props}
      style={[{ width: width || size, height: height || size }, props.style]}
    />
  );
};

import { Text, TextProps } from 'react-native';
import { useStyles } from 'react-native-unistyles';

type FontKeys = keyof ReturnType<typeof useStyles>['theme']['fonts'];

type Sizes =
  | 4
  | 6
  | 8
  | 10
  | 12
  | 14
  | 15
  | 16
  | 18
  | 20
  | 26
  | 24
  | 28
  | 30
  | 32
  | 40;

interface Props extends TextProps {
  variant?: `${FontKeys}-${Sizes}`;
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
  lineHeight?: number;
  textDecorationLine?: 'underline' | 'line-through' | 'none';
}

export const AppText = ({ variant = 'medium-12', color, ...props }: Props) => {
  const [family, size] = variant.split('-');
  const { theme } = useStyles();
  const fontFamily = theme.fonts[family as FontKeys];

  return (
    <Text
      {...props}
      style={[
        {
          fontFamily,
          fontSize: +size,
          color,
          textAlign: props.textAlign,
          lineHeight: props.lineHeight,
          textDecorationLine: props.textDecorationLine,
        },
        props.style,
      ]}
    >
      {props.children}
    </Text>
  );
};

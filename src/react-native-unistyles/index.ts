// import { UnistylesRegistry } from 'react-native-unistyles';
// import { lightTheme } from './theme';

// type AppThemes = {
//   light: typeof lightTheme;
// };

// declare module 'react-native-unistyles' {
//   export interface UnistylesThemes extends AppThemes {}
// }

// UnistylesRegistry.addThemes({
//   light: lightTheme,
// }).addConfig({
//   adaptiveThemes: true,
// });

import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { lightTheme } from './theme';

type NamedStyles = ViewStyle | TextStyle | ImageStyle;

type VariantStyles<T> = {
  [K in keyof T]: {
    [V in keyof T[K]]: NamedStyles;
  };
};

type StyleWithVariants<T> = NamedStyles & {
  variants?: VariantStyles<T>;
};

type StyleSheet<T extends Record<string, any>> = {
  [K in keyof T]: StyleWithVariants<T[K]>;
};

type VariantProps<T> = {
  [K in keyof T]?: keyof T[K];
};

export const useStyles = <T extends StyleSheet<any>>(
  styles: T = {} as T,
  variants?: VariantProps<T[keyof T]['variants']>
) => {
  const appliedStyles = Object.entries(styles).reduce((acc, [key, style]) => {
    let finalStyle = { ...style };
    if (style.variants && variants) {
      Object.entries(variants).forEach(([variantKey, variantValue]) => {
        if (
          style.variants?.[variantKey] &&
          style.variants?.[variantKey]?.[variantValue as string]
        ) {
          finalStyle = {
            ...finalStyle,
            ...style.variants[variantKey][variantValue as string],
          };
        }
      });
    }
    delete finalStyle.variants;
    return { ...acc, [key]: finalStyle };
  }, {} as { [K in keyof T]: Omit<T[K], 'variants'> });

  return { styles: appliedStyles, theme: lightTheme };
};

export const createStyleSheet = <T extends StyleSheet<any>>(
  callback: (theme: typeof lightTheme) => T
): { [K in keyof T]: Omit<T[K], 'variants'> } => callback(lightTheme);

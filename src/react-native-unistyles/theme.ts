// import { UnistylesRuntime } from 'react-native-unistyles';
import shadow from './shadow';
import { Platform, Dimensions } from 'react-native';

const UnistylesRuntime = {
  screen: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  insets: {
    bottom: 0,
  },
};

const threshold = 0.002777777778;

const baseTheme = {
  styles: {
    avatar: {
      width: '100%',
      height: '100%',
      borderRadius: 100,
      resizeMode: 'contain',
    },
    absoluteFill: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    } as const,
    shadow,
  },
  hex2rgba(hex: string, alpha = 1) {
    const [r, g, b] = hex.match(/\w\w/g)!.map((x) => parseInt(x, 16));

    return `rgba(${r},${g},${b},${alpha})`;
  },
  select: Platform.select,
  bottom: UnistylesRuntime.insets.bottom,
  scale(value: number = 10) {
    return value * threshold * UnistylesRuntime.screen.width;
  },
  fontScale(value: number = 10) {
    return Math.round(value * threshold * UnistylesRuntime.screen.width);
  },
  height: (value: number) => UnistylesRuntime.screen.height * (value / 100),
  width: (value: number) => UnistylesRuntime.screen.width * (value / 100),
  fonts: {
    regular: '',
    medium: '',
    bold: '',
    italic: '',
    semibold: '',
  },
  get fontSize() {
    return {
      small: this.fontScale(12),
      medium: this.fontScale(14),
      large: this.fontScale(16),
    };
  },
  get ratio() {
    return UnistylesRuntime.screen.height / UnistylesRuntime.screen.width;
  },
  get isSmallDevice() {
    return Platform.select({
      ios: this.ratio < 1.8,
      default: false,
    });
  },
  get radius() {
    return {
      full: 100,
      xs: this.scale(4),
      sm: this.scale(8),
      md: this.scale(12),
      lg: this.scale(16),
      xl: this.scale(24),
    };
  },
  get spacing() {
    return {
      xxs: this.scale(2),
      xsx: this.scale(3),
      xs: this.scale(4),
      smx: this.scale(6),
      sm: this.scale(8),
      md: this.scale(12),
      mdl: this.scale(14),
      lg: this.scale(16),
      l: this.scale(22),
      xl: this.scale(24),
      xxl: this.scale(32),
    };
  },
};

export const lightTheme = {
  colors: {
    primary: '#7E41FF',
    background: '#FFFFFF',
    white: '#FFFFFF',
    black: '#000000',
    placeholder: '#808080',
    transparent: 'transparent',
  },
  ...baseTheme,
} as const;

export const darkTheme = lightTheme;

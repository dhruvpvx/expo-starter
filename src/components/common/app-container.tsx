import { View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export const AppContainer = (props: ViewProps) => {
  const { top } = useSafeAreaInsets();
  const { styles } = useStyles(stylesheet);

  return (
    <View style={[styles.container, { paddingTop: top }, props.style]}>
      {props.children}
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
}));

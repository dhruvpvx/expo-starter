import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { TextInput, TextInputProps, View } from 'react-native';
import { AppText } from './app-text';

export const AppInput = (props: TextInputProps) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <TextInput
      placeholderTextColor={theme.colors.placeholder}
      {...props}
      style={[styles.input, props.style]}
    />
  );
};

export interface AppLabelInputProps extends TextInputProps {
  label: string;
}

export const AppLabelInput = (props: AppLabelInputProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.inputContainer}>
      <AppText variant="medium-14">{props.label}</AppText>
      <AppInput {...props} style={styles.labelInput} />
    </View>
  );
};

const stylesheet = createStyleSheet((theme) => ({
  input: {
    borderRadius: theme.radius.md,
    fontFamily: theme.fonts.medium,
    fontSize: theme.scale(14),
  },
  inputContainer: {
    gap: theme.spacing.md,
  },
  labelInput: {
    borderWidth: 1,
    borderRadius: theme.radius.sm,
    fontFamily: theme.fonts.medium,
    fontSize: theme.scale(14),
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.spacing.md,
    ...theme.styles.shadow(2),
  },
}));

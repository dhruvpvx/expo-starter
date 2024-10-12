import React from 'react';
import { View, Text } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const SecondTab = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View>
      <Text>SecondTab</Text>
    </View>
  );
};

export default SecondTab;

const stylesheet = createStyleSheet((theme) => ({}));

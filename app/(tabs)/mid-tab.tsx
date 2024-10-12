import React from 'react';
import { View, Text } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const MidTab = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View>
      <Text>MidTab</Text>
    </View>
  );
};

export default MidTab;

const stylesheet = createStyleSheet((theme) => ({}));

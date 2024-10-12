import React from 'react';
import { View, Text } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const Home = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const stylesheet = createStyleSheet((theme) => ({}));

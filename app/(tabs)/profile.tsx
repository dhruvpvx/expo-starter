import React from 'react';
import { View, Text } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const Profile = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const stylesheet = createStyleSheet((theme) => ({}));

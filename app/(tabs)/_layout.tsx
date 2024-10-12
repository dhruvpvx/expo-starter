import { Tabs } from 'expo-router';
import { View, Image, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { AppIcons } from '@/assets';
import { AppText } from '@/components/common/app-text';

export default function TabLayout() {
  const { bottom } = useSafeAreaInsets();
  const { styles } = useStyles(stylesheet);

  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props) => {
        return (
          <View>
            <View style={styles.tabBar}>
              {props.state.routes.map((route, index) => {
                const tabs = [
                  { icon: AppIcons.tab1, title: 'First Tab' },
                  { icon: AppIcons.tab2, title: 'Second Tab' },
                  { icon: AppIcons.tab3, title: 'Third Tab' },
                  { icon: AppIcons.tab4, title: 'Fourth Tab' },
                  { icon: AppIcons.tab5, title: 'Fifth Tab' },
                ];
                const focused = props.state.index === index;

                const onPress = () => {
                  props.navigation.navigate(route.name);
                };

                return (
                  <Pressable
                    key={route.key}
                    style={styles.tabBarItem}
                    onPress={onPress}
                  >
                    <Image
                      source={tabs[index].icon}
                      style={styles.tabBarItemIcon}
                    />
                    <AppText numberOfLines={1} variant="medium-10">
                      {tabs[index].title}
                    </AppText>
                    {focused && <View style={styles.tabBarItemActive} />}
                  </Pressable>
                );
              })}
            </View>
            <View style={{ height: bottom, backgroundColor: 'white' }} />
          </View>
        );
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="second-tab" />
      <Tabs.Screen name="mid-tab" />
      <Tabs.Screen name="explore" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  tabBar: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.lg,
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: theme.spacing.xs,
  },
  tabBarItemIcon: {
    width: 24,
    height: 24,
  },
  tabBarItemActive: {
    width: 45,
    height: 4,
    backgroundColor: theme.colors.placeholder,
    borderRadius: theme.radius.sm,
    position: 'absolute',
    bottom: -12,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  tripDesigner: {
    width: theme.scale(64),
    aspectRatio: 1,
    borderRadius: theme.radius.full,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -theme.scale(44),
  },
}));

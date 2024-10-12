import { useFonts } from 'expo-font';
import { Stack } from 'expo-router/stack';

import fonts from '@/assets/fonts';

export default function Layout() {
  const [loaded, error] = useFonts(fonts);

  if (!loaded && !error) return null;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="landing" />
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="sign-up" />
    </Stack>
  );
}

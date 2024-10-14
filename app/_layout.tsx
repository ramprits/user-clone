import { StatusBar } from 'expo-status-bar';
import '../global.css';

import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
}

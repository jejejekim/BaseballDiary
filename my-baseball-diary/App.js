import React, { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { useAssets } from 'expo-asset';
import { useFonts } from 'expo-font';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import Tabs from './navigation/Tabs';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts(Ionicons.font);
  const [assets] = useAssets([
    /* require('path/to/other.png') */
  ]);
  const isDark = useColorScheme() === "dark"; //다크모드 state

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded && assets) await SplashScreen.hideAsync();
  }, [fontsLoaded, assets]);

  if (!fontsLoaded || !assets) {
    return null;
  }

  return(
      <NavigationContainer onReady={onLayoutRootView} theme={isDark ? DarkTheme : DefaultTheme}>
        <Tabs />
      </NavigationContainer>
    )
}
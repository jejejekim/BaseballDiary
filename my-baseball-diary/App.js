import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useAssets } from "expo-asset";
import { useFonts } from "expo-font";
import { useColorScheme } from "react-native";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import Root from "./navigation/Root";
import Stack from "./navigation/Stack";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styled";
import Realm from "realm";
import { DBContext } from "./context";

SplashScreen.preventAutoHideAsync();

const DiarySchema = {
  name: "Diary",
  properties: {
    _id: "int",
    emotion: "string",
    message: "string",
  },
  primaryKey: "_id",
};

export default function App() {
  const [fontsLoaded] = useFonts({
    PretendardB: require("./assets/Fonts/Pretendard-Bold.ttf"),
    PretendardR: require("./assets/Fonts/Pretendard-Regular.ttf"),
    PretendardM: require("./assets/Fonts/Pretendard-Medium.ttf"),
    Audio: require("./assets/Fonts/Audiowide-Regular.ttf"),
    // (Ionicons.font)
  });
  const [assets] = useAssets([
    require("./assets/Images/FieldImg.png"),
    /* require('path/to/other.png') */
  ]);
  const isDark = useColorScheme() === "dark"; //다크모드 state

  //realm load
  const [ready, setReady] = useState(false);
  const [realm, setRealm] = useState(null); //realm 커넥션을 만들기 위한 state
  async function startLaoding() {
    try {
      const db = await Realm.open({
        path: "diaryDB",
        schema: [DiarySchema],
      });
      setRealm(db);
    } finally {
      setReady(true);
    }
    // console.log("start Loading");
  }

  useEffect(() => {
    startLaoding();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded && assets && ready) await SplashScreen.hideAsync();
  }, [fontsLoaded, assets, ready]);

  if (!fontsLoaded || !assets || !ready) {
    return null;
  }

  return (
    <DBContext.Provider value={realm}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <NavigationContainer
          onReady={onLayoutRootView}
          theme={isDark ? DarkTheme : DefaultTheme}
        >
          <Root />
        </NavigationContainer>
      </ThemeProvider>
    </DBContext.Provider>
  );
}

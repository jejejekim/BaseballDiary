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
import { GestureHandlerRootView } from "react-native-gesture-handler";
import crawlingData from "./KBOData.json";
import { KBOData } from "./KBOData";

SplashScreen.preventAutoHideAsync();

// let data = JSON.parse(JSON.stringify(crawlingData));

// let KBOData = {
//   startTime: data.startTime,
//   score: data.score,
//   team: data.team,
//   hitter: data.hitter,
//   pitcher: data.pitcher,
// };

//데이터 베이스 구조
const DiarySchema = {
  name: "Diary",
  properties: {
    _id: "int",
    mvp: "string",
    record1: "string",
    record2: "string",
    note: "string",
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
    require("./assets/Images/PositionField.png"),
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
        //스키마 스펙 변경할 때마다 버전 변경해야함
        schemaVersion: 1, //참고: https://velog.io/@pjj186/React-Native-Realm-Migration //https://www.mongodb.com/docs/realm/sdk/react-native/model-data/change-an-object-model/
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
    <GestureHandlerRootView style={{ flex: 1 }}>
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
    </GestureHandlerRootView>
  );
}

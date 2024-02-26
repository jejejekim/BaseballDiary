import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../srceens/Home";
import DiaryList from "../srceens/DiaryList";
import MyPage from "../srceens/MyPage";
import Write from "../srceens/Write";
import { useColorScheme } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors, { WHITE, GRAY100, GRAY500, GRAY700, BLACK } from "../colors";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";
  return (
    //다크모드 작업 시 참고
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.WHITE,
          height: 54,
        },
        // tabBarActiveTintColor: isDark ? "white" : GRAY700,
        tabBarActiveTintColor: colors.GRAY700,
        tabBarInactiveTintColor: colors.GRAY500,
        headerStyle: {
          backgroundColor: colors.WHITE,
        },
        headerTitleStyle: {
          //   color: isDark ? "white" : BLACK,
          color: colors.BLACK,
        },
        headerShadowVisible: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerTitleStyle: {
          fontSize: 18,
          fontFamily: "PretendardM",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <MaterialIcons name="home" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="DiaryList"
        component={DiaryList}
        options={{
          headerShown: false,
          // title: "2023년 10월 16일",
          // headerTitleAlign: "center",
          // tabBarIcon: ({ focused, color, size }) => {
          //   return (
          //     <MaterialIcons
          //       name="my-library-books"
          //       color={color}
          //       size={size}
          //     />
          //   );
          // },
        }}
      />
      <Tab.Screen
        name="Write"
        component={Write}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            return <MaterialIcons name="person" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../srceens/Home";
import DiaryList from "../srceens/DiaryList";
import MyPage from "../srceens/MyPage";
import { useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { WHITE, GRAY100, GRAY500, GRAY700, BLACK } from "../colors";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    const isDark = useColorScheme() === "dark";
    return(
        //다크모드 작업 시 참고
        <Tab.Navigator screenOptions={{tabBarStyle:{
            backgroundColor: isDark ? "black" : "white",
            height: 54,
        },
        tabBarActiveTintColor: isDark ? "white" : GRAY700,
        tabBarInactiveTintColor: GRAY500,
        headerStyle: {
            backgroundColor: isDark ? "black" : "white",
        },
        headerTitleStyle: {
            color: isDark ? "white" : BLACK,
        },
        headerShadowVisible: false,
        tabBarShowLabel: false,
        }}>
            <Tab.Screen name="Home" component={Home}  options={{
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => {
                    return <Ionicons name="home" color={color} size={size} />
                }
            }}/>
            <Tab.Screen name="DiaryList" component={DiaryList} options={{
                title: "2023년 10월 16일",
                headerTitleAlign: "center",
                tabBarIcon: ({focused, color, size}) => {
                    return <Ionicons name="book" color={color} size={size} />
                }
            }}/>
            <Tab.Screen name="MyPage" component={MyPage} options={{
                headerShown: false,
                tabBarIcon: ({focused, color, size}) => {
                    return <Ionicons name="person" color={color} size={size} />
                }
            }}/>
        </Tab.Navigator>
        );
    };
export default Tabs;
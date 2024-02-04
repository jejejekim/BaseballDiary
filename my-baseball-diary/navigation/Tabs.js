import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../sreens/Home";
import Diary from "../sreens/Diary";
import MyPage from "../sreens/MyPage";
import { useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GRAY100, GRAY500, GRAY700, BLACK } from "../colors";

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
        headerShown: false,
        tabBarShowLabel: false,
        // tabBarLabelStyle: {
        //     marginTop: -4,
        //     fontSize: 12,
        // },
        }}>
            <Tab.Screen name="HOME" component={Home}  options={{
                tabBarIcon: ({focused, color, size}) => {
                    return <Ionicons name="home" color={color} size={size} />
                }
            }}/>
            <Tab.Screen name="DIRAY" component={Diary} options={{
                tabBarIcon: ({focused, color, size}) => {
                    return <Ionicons name="book" color={color} size={size} />
                }
            }}/>
            <Tab.Screen name="MYPAGE" component={MyPage} options={{
                tabBarIcon: ({focused, color, size}) => {
                    return <Ionicons name="person" color={color} size={size} />
                }
            }}/>
        </Tab.Navigator>
        );
    };
export default Tabs;
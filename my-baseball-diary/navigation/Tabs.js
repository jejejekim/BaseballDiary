import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../sreens/Home";
import Diary from "../sreens/Diary";
import MyPage from "../sreens/MyPage";

const Tab = createBottomTabNavigator();

const Tabs = () => (<Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Diary" component={Diary} />
    <Tab.Screen name="MyPage" component={MyPage} />
</Tab.Navigator>
);
export default Tabs;
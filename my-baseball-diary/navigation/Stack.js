import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";
import { WHITE, BLACK } from "../colors";

const Diary = () => (
<View>
    <Text>Diary</Text>
</View>
);

const NativeStack = createNativeStackNavigator();

const Stack = () => <NativeStack.Navigator
    screenOptions={{ 
        title: "2023년 10월 16일",
        headerStyle: {
            backgroundColor: WHITE,
        },
        headerTintColor: BLACK,
        headerShadowVisible: false,
        headerTitleAlign: "center",
    }}>
    <NativeStack.Screen name="Diary" component={Diary} />
</NativeStack.Navigator>

export default Stack;
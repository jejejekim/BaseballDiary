import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity, Button } from "react-native";
import colors from "../colors";
import Write from "../srceens/Write";
import NoteItem from "../components/NoteItem";
import styled from "styled-components/native";

const Diary = () => (
  <View>
    <Text>Diary</Text>
  </View>
);

// const WriteModal = () => <Write />; //왜 이걸 넣으면 안되는 거지??????

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator
    screenOptions={{
      title: "2023년 10월 16일",
      headerStyle: {
        backgroundColor: colors.WHITE,
      },
      contentStyle: {
        borderTopColor: colors.GRAYBG,
        borderTopWidth: 1,
      },
      headerTitleStyle: {
        fontSize: 18,
        fontFamily: "PretendardM",
      },
      headerTintColor: colors.BLACK,
      headerShadowVisible: false,
      headerTitleAlign: "center",
    }}
  >
    <NativeStack.Screen name="Diary" component={Diary} />
    <NativeStack.Screen name="Write" component={Write} />
  </NativeStack.Navigator>
);

export default Stack;

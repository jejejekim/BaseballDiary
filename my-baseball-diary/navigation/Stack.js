import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";
import colors from "../colors";
import Write from "../srceens/Write";
import NoteItem from "../components/NoteItem";
import styled from "styled-components/native";

const Done = styled.Text`
  font-family: PretendardM;
  font-size: 18px;
  color: ${colors.MAINGREEN};
`;

const Diary = () => (
  <View>
    <Text>Diary</Text>
  </View>
);

const WriteModal = () => <Write />;

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
    <NativeStack.Screen
      name="Write"
      component={WriteModal}
      options={{
        headerRight: () => (
          <TouchableOpacity
            onPress={() => alert("This is a button!")}
            color="#fff"
          >
            <Done>완료</Done>
          </TouchableOpacity>
        ),
      }}
    />
  </NativeStack.Navigator>
);

export default Stack;

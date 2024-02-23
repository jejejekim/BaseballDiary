import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";
import colors from "../colors";
import Write from "../srceens/Write";
import NoteItem from "../components/NoteItem";

const Diary = () => (
  <View>
    <Text>Diary</Text>
  </View>
);

const WriteModal = () => <Write />;

const NoteModal = () => <NoteItem />;

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
    <NativeStack.Screen name="Write" component={WriteModal} />
    <NativeStack.Screen
      name="Note"
      component={NoteModal}
      options={{ headerShown: false, presentation: "modal" }}
    />
  </NativeStack.Navigator>
);

export default Stack;

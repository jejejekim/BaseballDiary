import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const DiaryList = ({navigation: {navigate}}) =>(
    <TouchableOpacity 
    onPress={()=>navigate("Stack", {screen: "Diary"})}
    style={{flex:1, justifyContent: "center", alignItems: "center"}}>
        <Text>DiaryList</Text>
    </TouchableOpacity>
);

export default DiaryList;
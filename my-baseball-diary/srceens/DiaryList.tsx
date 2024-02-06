import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

const Touch = styled.TouchableOpacity`
    flex:1;
    justify-content: "center";
    align-items: "center";
`;

const Title = styled.Text`
    color: ${props=>props.theme.textColor};
`;

const DiaryList: React.FC<NativeStackScreenProps<any, "DiaryList">> = ({
    navigation: {navigate}
}) =>(
    <Touch onPress={()=>navigate("Stack", {screen: "Diary"})}>
        <Title>DiaryList</Title>
    </Touch>
);

export default DiaryList;
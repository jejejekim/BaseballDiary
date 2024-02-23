import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../colors";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import Calendar from "../components/Calendar";
import { useDB } from "../context";

const View = styled.View`
  flex: 1;
  background-color: ${colors.MAINGREEN};
  padding: 0px 20px;
  padding-top: 30px;
`;

const Container = styled.View`
  padding: 0px 20px;
  padding-top: 30px;
  background-color: ${colors.MAINGREEN};
`;

const Field = styled.Image`
  flex: 1;
  right: -25px;
  bottom: -102px;
`;

const Title = styled.Text`
  color: ${colors.WHITE};
  font-size: 56px;
  margin-bottom: 32px;
  font-family: Audio;
`;

const Btn = styled.TouchableOpacity`
  position: absolute;
  bottom: 32px;
  right: 20px;
  height: 60px;
  width: 60px;
  border-radius: 999px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.WHITE};
`;
const BtnText = styled.Text`
  color: ${colors.GRAY800};
`;

const Home: React.FC<NativeStackScreenProps<any, "Home">> = ({
  navigation: { navigate },
}) => {
  const realm = useDB();
  // const [feelings, setFeelings] = useState(realm.object("Diary")); //데이터 가져오기 //fillterd를 사용해 선별해서 가져오기도 가능
  return (
    <View>
      <Title>Let's Playball</Title>
      <Calendar />
      {/* <Field
      source={require("../assets/Images/FieldImg.png")}
      resizeMode="contain"
    /> */}
      <Btn onPress={() => navigate("Stack", { screen: "Write" })}>
        <MaterialIcons name="add" color={`${colors.GRAY800}`} size={35} />
      </Btn>
    </View>
  );
};

export default Home;

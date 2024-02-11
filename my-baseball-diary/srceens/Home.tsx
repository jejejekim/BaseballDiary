import React from "react";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../colors";
import Calendar from "../components/Calendar";

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
  /* position: relative; */
  right: -25px;
  bottom: -102px;
`;

const Title = styled.Text`
  /* padding: 0px 20px;
  padding-top: 30px; */
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

const Home = ({ navigation: { navigate } }) => (
  <View>
    <Title>Let's Playball</Title>
    <Calendar />
    {/* <Field
      source={require("../assets/Images/FieldImg.png")}
      resizeMode="contain"
    /> */}
    <Btn onPress={() => navigate("Write")}>
      <MaterialIcons name="add" color={`${colors.GRAY800}`} size={35} />
    </Btn>
  </View>
);

export default Home;

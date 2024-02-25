import React from "react";
import styled from "styled-components/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import colors from "../colors";
import DiaryListItem from "../components/DiaryListItem";

const Wrapper = styled.View`
  flex: 1;
  padding: 20px 20px;
  background-color: ${colors.MAINBROWN};
  /* align-items: center; */
`;

const WhiteLine = styled.View`
  width: 8px;
  height: 140%;
  position: absolute;
  background-color: ${colors.WHITE};
  margin-left: 36px;
`;

const Touch = styled.TouchableOpacity`
  flex: 1;
  justify-content: "center";
  align-items: "center";
`;

const Title = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

const DiaryList: React.FC<NativeStackScreenProps<any, "DiaryList">> = ({
  navigation: { navigate },
}) => {
  return (
    <Wrapper>
      <WhiteLine />
      <DiaryListItem />
      <Touch onPress={() => navigate("Stack", { screen: "Diary" })}>
        <Title>DiaryList</Title>
      </Touch>
    </Wrapper>
  );
};

export default DiaryList;

import React from "react";
import styled from "styled-components/native";
import colors from "../colors";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "react-native";

const Wrapper = styled.View`
  flex: 0.7;
  align-items: center;
  padding: 0px 20px;
  /* padding-top: 30px; */
  background-color: ${colors.WHITE};
`;

const InfoTitle = styled.Text`
  font-family: PretendardR;
  font-size: 13px;
  color: ${colors.GRAY600};
  margin-bottom: 4px;
`;

const NoteModal = styled.TouchableOpacity`
  width: 100%;
  height: 57%;
  font-family: PretendardR;
  font-size: 13px;
  background-color: ${colors.GRAYBG};
  color: ${colors.GRAY700};
  border-radius: 8px;
  padding: 12px 12px;
`;

const NotePlaceHolder = styled.Text``;

const NoteInput = styled.TextInput`
  width: 100%;
  height: 57%;
  font-family: PretendardR;
  font-size: 13px;
  background-color: ${colors.GRAYBG};
  color: ${colors.GRAY700};
  border-radius: 8px;
  padding: 12px 12px;
`;

const NoteItem = () => (
  <>
    <Wrapper>
      <InfoTitle>NOTE</InfoTitle>
      <NoteInput
        returnKeyType="done"
        placeholder="오늘의 경기는 어땠나요?"
        placeholderTextColor={colors.GRAY500}
        textAlignVertical="top"
      />
    </Wrapper>
  </>
);

export default NoteItem;

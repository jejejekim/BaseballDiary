import React from "react";
import styled from "styled-components/native";
import colors from "../colors";

const Wrapper = styled.View`
  /* flex: 0.97; */
`;

const InfoTitle = styled.Text`
  font-family: PretendardR;
  font-size: 13px;
  color: ${colors.GRAY600};
  margin-bottom: 4px;
`;

const NoteModal = styled.TouchableOpacity``;

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

const NoteItem = () => {
  return (
    <>
      <Wrapper>
        <InfoTitle>NOTE</InfoTitle>
        <NoteModal />
        <NoteInput
          returnKeyType="done"
          placeholder="오늘의 경기는 어땠나요?"
          placeholderTextColor={colors.GRAY500}
          textAlignVertical="top"
        />
      </Wrapper>
    </>
  );
};

export default NoteItem;

import React from "react";
import styled from "styled-components/native";
import colors from "../colors";

const Wrapper = styled.View``;

const InfoTitle = styled.Text`
  font-family: PretendardR;
  font-size: 13px;
  color: ${colors.GRAY600};
  margin-bottom: 4px;
`;

const NoteInput = styled.TextInput`
  width: 100%;
  height: 187px;
  font-family: PretendardR;
  font-size: 13px;
  background-color: ${colors.GRAYBG};
  color: ${colors.GRAY700};
  border-radius: 4px;
  padding: 6px 8px;
`;

const NoteItem = () => {
  return (
    <>
      <Wrapper>
        <InfoTitle>NOTE</InfoTitle>
        <NoteInput
          returnKeyType="done"
          placeholder="오늘의 경기는 어땠나요?"
          placeholderTextColor={colors.GRAY500}
        />
      </Wrapper>
    </>
  );
};

export default NoteItem;

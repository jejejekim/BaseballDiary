import React from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../colors";
import BatOrPitItem from "./BatOrPitItem";
import PositionItem from "./PositionItem";

const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 14px;
`;

const LineUpWrapper = styled.View`
  width: 21.7%;
  flex-direction: column;
`;

const InfoContainer = styled.View`
  width: 74.5%;
  margin-left: 12px;
`;

const InfoTitle = styled.Text`
  font-family: PretendardR;
  font-size: 13px;
  color: ${colors.GRAY600};
  margin-bottom: 4px;
`;

const RecordContainer = styled.View`
  height: 108px;
  justify-content: space-between;
`;

const MVPItem = styled.View`
  width: 100%;
  flex-direction: row;
`;

const MVPHeader = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${colors.GRAY700};
  padding: 6px 8px;
  margin-right: 4px;
  border-radius: 4px;
`;

const MVP = styled.Text`
  font-family: PretendardR;
  font-size: 13px;
  color: ${colors.WHITE};
  padding-left: 4px;
`;

const MVPInput = styled.TextInput`
  width: 76%;
  height: 32px;
  font-family: PretendardR;
  font-size: 13px;
  background-color: ${colors.GRAY700};
  color: ${colors.WHITE};
  border-radius: 4px;
  padding: 6px 8px;
  text-align: center;
`;

const RecordItem = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 32px;
  padding: 6px 8px;
  background-color: ${colors.GRAYBG};
  border-radius: 4px;
`;

const RecordInput = styled.TextInput`
  width: 100%;
  font-family: PretendardR;
  font-size: 13px;
  color: ${colors.GRAY700};
  margin-left: 4px;
`;

const LineUpBoardItem = ({
  mvp,
  record1,
  record2,
  onChangeText,
  onChangeRecord1,
  onChangeRecord2,
  onSubmit,
}) => {
  return (
    <>
      <Wrapper>
        <LineUpWrapper>
          <BatOrPitItem />
        </LineUpWrapper>
        <InfoContainer>
          <InfoTitle>POSITION</InfoTitle>
          <PositionItem />
          <InfoTitle>RECORD</InfoTitle>
          <RecordContainer>
            <MVPItem>
              <MVPHeader>
                <MaterialIcons name="person" color={colors.WHITE} size={14} />
                <MVP>MVP</MVP>
              </MVPHeader>
              <MVPInput
                returnKeyType="next"
                onSubmitEditing={onSubmit}
                onChangeText={onChangeText}
                value={mvp}
                placeholder="내가 생각하는 MVP는 누구?"
                placeholderTextColor={colors.GRAY500}
              />
            </MVPItem>
            <RecordItem>
              <MaterialCommunityIcons name="pencil" size={14} />
              <RecordInput
                returnKeyType="next"
                onSubmitEditing={onSubmit}
                onChangeText={onChangeRecord1}
                value={record1}
                placeholder="오늘 인상 깊었던 기록"
                placeholderTextColor={colors.GRAY500}
              />
            </RecordItem>
            <RecordItem>
              <MaterialCommunityIcons name="pencil" size={14} />
              <RecordInput
                returnKeyType="next"
                onSubmitEditing={onSubmit}
                onChangeText={onChangeRecord2}
                value={record2}
                placeholder="오늘 인상 깊었던 기록"
                placeholderTextColor={colors.GRAY500}
              />
            </RecordItem>
          </RecordContainer>
        </InfoContainer>
      </Wrapper>
    </>
  );
};

export default LineUpBoardItem;

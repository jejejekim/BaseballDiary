import React, { useState } from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../colors";
import { Alert } from "react-native";

const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  margin-bottom: 14px;
`;

const LineUpWrapper = styled.View`
  width: 21.7%;
  flex-direction: column;
`;

const BatOrPitContainer = styled.View`
  width: 90%;
  flex-direction: row;
  margin-bottom: 6px;
`;

const BatHeader = styled.View`
  width: 50%;
  flex-direction: row;
  align-items: center;
  margin-right: 6px;
`;

const PitHeader = styled.View`
  width: 50%;
  flex-direction: row;
  align-items: center;
`;

const Bat = styled.Text`
  font-family: PretendardM;
  font-size: 13px;
  color: ${colors.MAINGREEN};
  margin-left: 2px;
`;

const Pit = styled.Text`
  font-family: PretendardM;
  font-size: 13px;
  color: ${colors.GRAY100};
  margin-left: 2px;
`;

const LineUpContainer = styled.View`
  height: 270px;
  justify-content: space-between;
`;

const LineUpItem = styled.View`
  flex-direction: row;
`;

const NumItem = styled.Text`
  width: 26px;
  background-color: ${colors.GRAYBG};
  text-align: center;
  padding: 4px 3px;
  font-family: PretendardR;
  font-size: 13px;
  color: ${colors.GRAY700};
  border-radius: 4px;
  margin-right: 4px;
`;

const PlayerItem = styled.Text`
  width: 50px;
  background-color: ${colors.GRAYBG};
  text-align: center;
  padding: 4px 4px;
  font-family: PretendardR;
  font-size: 13px;
  color: ${colors.GRAY700};
  border-radius: 4px;
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

const PositionContainer = styled.View`
  background-color: ${colors.MAINGREEN};
  width: 100%;
  height: 131.5px;
  border-radius: 12px;
  margin-bottom: 10px;
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
          <BatOrPitContainer>
            <BatHeader>
              <MaterialCommunityIcons
                name="baseball-bat"
                color={colors.MAINGREEN}
                size={14}
              />
              <Bat>야수</Bat>
            </BatHeader>
            <PitHeader>
              <MaterialCommunityIcons
                name="baseball"
                color={colors.GRAY100}
                size={14}
              />
              <Pit>투수</Pit>
            </PitHeader>
          </BatOrPitContainer>
          <LineUpContainer>
            <LineUpItem>
              <NumItem>1</NumItem>
              <PlayerItem>안권수</PlayerItem>
            </LineUpItem>
            <LineUpItem>
              <NumItem>2</NumItem>
              <PlayerItem>노진혁</PlayerItem>
            </LineUpItem>
            <LineUpItem>
              <NumItem>3</NumItem>
              <PlayerItem>윤동희</PlayerItem>
            </LineUpItem>
            <LineUpItem>
              <NumItem>4</NumItem>
              <PlayerItem>전준우</PlayerItem>
            </LineUpItem>
            <LineUpItem>
              <NumItem>5</NumItem>
              <PlayerItem>유강남</PlayerItem>
            </LineUpItem>
            <LineUpItem>
              <NumItem>6</NumItem>
              <PlayerItem>한동희</PlayerItem>
            </LineUpItem>
            <LineUpItem>
              <NumItem>7</NumItem>
              <PlayerItem>정대선</PlayerItem>
            </LineUpItem>
            <LineUpItem>
              <NumItem>8</NumItem>
              <PlayerItem>김민석</PlayerItem>
            </LineUpItem>
            <LineUpItem>
              <NumItem>9</NumItem>
              <PlayerItem>이학주</PlayerItem>
            </LineUpItem>
          </LineUpContainer>
        </LineUpWrapper>
        <InfoContainer>
          <InfoTitle>POSITION</InfoTitle>
          <PositionContainer></PositionContainer>
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

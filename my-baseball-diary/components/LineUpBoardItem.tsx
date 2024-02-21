import React from "react";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../colors";

const Wrapper = styled.View`
  flex-direction: row;
  margin-bottom: 12px;
`;

const LineUpWrapper = styled.View`
  flex-direction: column;
  margin-right: 12px;
`;

const BatOrPitContainer = styled.View`
  flex-direction: row;
  margin-bottom: 6px;
`;

const BatHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 6px;
`;

const PitHeader = styled.View`
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
  width: 243px;
`;

const InfoTitle = styled.Text`
  font-family: PretendardR;
  font-size: 13px;
  color: ${colors.GRAY600};
  margin-bottom: 4px;
`;

const PositionContainer = styled.View`
  background-color: ${colors.MAINGREEN};
  width: 243px;
  height: 130px;
  border-radius: 12px;
  margin-bottom: 10px;
`;

const RecordContainer = styled.View`
  height: 108px;
  justify-content: space-between;
`;

const MVPItem = styled.View`
  flex-direction: row;
`;

const MVPHeader = styled.Text`
  flex-direction: row;
  justify-content: center;
  text-align: center;
  /* align-items: center; */
  background-color: ${colors.GRAY700};
  padding: 6px 8px;
  margin-right: 4px;
  border-radius: 4px;
`;

const MVP = styled.Text`
  font-family: PretendardR;
  font-size: 13px;
  color: ${colors.WHITE};
  margin-left: 4px;
`;

const MVPInput = styled.TextInput`
  width: 178px;
  height: 32px;
  font-family: PretendardR;
  font-size: 13px;
  background-color: ${colors.GRAY700};
  color: ${colors.WHITE};
  border-radius: 4px;
  padding: 6px 8px;
  text-align: center;
`;

const RecordInput = styled.TextInput`
  width: 242px;
  height: 32px;
  font-family: PretendardR;
  font-size: 13px;
  background-color: ${colors.GRAYBG};
  color: ${colors.GRAY700};
  border-radius: 4px;
  padding: 6px 8px;
`;

const LineUpBoardItem = () => {
  return (
    <>
      <Wrapper>
        <LineUpWrapper>
          <BatOrPitContainer>
            <BatHeader>
              <MaterialCommunityIcons
                name="baseball-bat"
                color={colors.MAINGREEN}
                size={12}
              />
              <Bat>야수</Bat>
            </BatHeader>
            <PitHeader>
              <MaterialCommunityIcons
                name="baseball"
                color={colors.GRAY100}
                size={12}
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
                returnKeyType="done"
                // onSubmitEditing={onSubmit}
                // onChangeText={onChangeText}
                // value={feelings}
                placeholder="오늘 MVP는 누구?"
                placeholderTextColor={colors.GRAY500}
              />
            </MVPItem>
            {/* <MaterialCommunityIcons name="pencil" size={12} /> */}
            <RecordInput
              returnKeyType="done"
              placeholder="오늘 인상 깊었던 기록"
              placeholderTextColor={colors.GRAY500}
            />
            <RecordInput
              returnKeyType="done"
              placeholder="오늘 인상 깊었던 기록"
              placeholderTextColor={colors.GRAY500}
            />
          </RecordContainer>
        </InfoContainer>
      </Wrapper>
    </>
  );
};

export default LineUpBoardItem;

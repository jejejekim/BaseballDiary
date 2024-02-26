import React from "react";
import styled from "styled-components/native";
import colors from "../colors";

const PositionContainer = styled.View`
  background-color: ${colors.MAINGREEN};
  width: 100%;
  height: 131.5px;
  border-radius: 12px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

const PositionField = styled.Image`
  position: absolute;
  width: 90%;
`;

const Player = styled.Text`
  /* width: 50px; */
  font-family: PretendardM;
  font-size: 13px;
  color: ${colors.WHITE};
`;

const PlayerContainer = styled.View`
  height: 97%;
  justify-content: space-between;
  align-items: center;
`;

const OutFielder = styled.View`
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
`;
const LF = styled(Player)`
  margin-top: 12px;
`;
const CF = styled(Player)``;
const RF = styled(Player)`
  margin-top: 12px;
`;

const InFielder = styled.View`
  width: 67%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;
const ThirdBase = styled(Player)`
  margin-top: 20px;
`;
const ShortStop = styled(Player)`
  margin-right: 36px;
`;
const SecondBase = styled(Player)``;
const FirstBase = styled(Player)`
  margin-top: 20px;
`;

const CatcherDH = styled.View`
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
  height: 24px;
`;
const Catcher = styled(Player)`
  margin-left: 92px;
  top: -6px;
`;
const DH = styled(Player)`
  top: -16px;
  right: 6px;
`;

const PositionItem = () => {
  return (
    <PositionContainer>
      <PositionField source={require("../assets/Images/PositionField.png")} />
      <PlayerContainer>
        <OutFielder>
          <LF>안권수</LF>
          <CF>김민석</CF>
          <RF>윤동희</RF>
        </OutFielder>
        <InFielder>
          <ThirdBase>이학주</ThirdBase>
          <ShortStop>노진혁</ShortStop>
          <SecondBase>정대선</SecondBase>
          <FirstBase>한동희</FirstBase>
        </InFielder>
        <CatcherDH>
          <Catcher>유강남</Catcher>
          <DH>전준우</DH>
        </CatcherDH>
      </PlayerContainer>
    </PositionContainer>
  );
};

export default PositionItem;

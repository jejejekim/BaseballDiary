import React from "react";
import styled from "styled-components/native";
import colors from "../colors";
import { KBOData } from "../KBOData";

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
  const hitters = KBOData.hitter;
  return (
    <PositionContainer>
      <PositionField source={require("../assets/Images/PositionField.png")} />
      <PlayerContainer>
        <OutFielder>
          <LF>{hitters.find((hitter) => hitter.position === "좌").name}</LF>
          <CF>{hitters.find((hitter) => hitter.position === "중").name}</CF>
          <RF>{hitters.find((hitter) => hitter.position === "우").name}</RF>
        </OutFielder>
        <InFielder>
          <ThirdBase>
            {hitters.find((hitter) => hitter.position === "三").name}
          </ThirdBase>
          <ShortStop>
            {hitters.find((hitter) => hitter.position === "유").name}
          </ShortStop>
          <SecondBase>
            {hitters.find((hitter) => hitter.position === "二").name}
          </SecondBase>
          <FirstBase>
            {hitters.find((hitter) => hitter.position === "一").name}
          </FirstBase>
        </InFielder>
        <CatcherDH>
          <Catcher>
            {hitters.find((hitter) => hitter.position === "포").name}
          </Catcher>
          <DH>{hitters.find((hitter) => hitter.position === "지").name}</DH>
        </CatcherDH>
      </PlayerContainer>
    </PositionContainer>
  );
};

export default PositionItem;

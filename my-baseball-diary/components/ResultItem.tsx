import React from "react";
import styled from "styled-components/native";
import colors from "../colors";
import { MaterialIcons } from "@expo/vector-icons";
import { KBOData } from "../KBOData";

const TeamContainer = styled.View`
  width: 82%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TeamContainer2 = styled(TeamContainer)`
  width: 100%;
`;

const Team = styled.View`
  justify-content: center;
  align-items: center;
`;

const HomeTeam = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TeamLogo = styled.View`
  background-color: darkgray;
  width: 44px;
  height: 28px;
`;

const TeamName = styled.Text`
  font-family: PretendardR;
  font-size: 14px;
  color: ${colors.BLACK};
`;

const ScoreContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Score = styled.Text<{ fontSize?: string }>`
  font-family: PretendardB;
  font-size: 44px;
  color: ${colors.BLACK};
  margin-bottom: 12px;
`;

const Score2 = styled.Text<{ fontSize?: string }>`
  font-family: PretendardB;
  font-size: 32px;
  color: ${colors.BLACK};
  margin-bottom: 12px;
`;

const WinOrLose = styled.Text`
  width: 70px;
  text-align: center;
  justify-content: center;
  font-family: PretendardR;
  font-size: 14px;
  color: ${colors.WHITE};
  background-color: ${colors.MAINGREEN};
  padding: 4px 10px;
  border-radius: 999px;
  margin: 0px 16px 4px 16px;
`;

const TimeInfo = styled.Text`
  font-family: PretendardR;
  font-size: 12px;
  color: ${colors.GRAY600};
`;

const InfoContainer = styled.View`
  height: 45px;
  flex-direction: column;
  align-items: center;
`;

export const ResultItem = () => {
  const awayTeam = KBOData.team.away;
  const homeTeam = KBOData.team.home;

  return (
    <TeamContainer>
      <Team>
        <TeamLogo></TeamLogo>
        <TeamName>{awayTeam}</TeamName>
      </Team>

      <ScoreContainer>
        <Score>7</Score>
        <InfoContainer>
          <WinOrLose>승리요정</WinOrLose>
          <TimeInfo>10.16(토) 18:30</TimeInfo>
        </InfoContainer>
        <Score>2</Score>
      </ScoreContainer>

      <Team>
        <TeamLogo></TeamLogo>
        <HomeTeam>
          <MaterialIcons name="home" color={colors.GRAY700} size={10} />
          <TeamName>{homeTeam}</TeamName>
        </HomeTeam>
      </Team>
    </TeamContainer>
  );
};

export const DiaryResultItem = () => {
  return (
    <TeamContainer2>
      <Team>
        <TeamLogo></TeamLogo>
        <TeamName>롯데</TeamName>
      </Team>

      <ScoreContainer>
        <Score2>7</Score2>
        <InfoContainer>
          <WinOrLose>승리요정</WinOrLose>
          <TimeInfo>10.16(토) 18:30</TimeInfo>
        </InfoContainer>
        <Score2>2</Score2>
      </ScoreContainer>

      <Team>
        <TeamLogo></TeamLogo>
        <HomeTeam>
          <MaterialIcons name="home" color={colors.GRAY700} size={10} />
          <TeamName>한화</TeamName>
        </HomeTeam>
      </Team>
    </TeamContainer2>
  );
};

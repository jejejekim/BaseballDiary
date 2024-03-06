import React from "react";
import styled from "styled-components/native";
import colors from "../colors";
import { Dimensions } from "react-native";
import { KBOData } from "../KBOData";

const screenWidth = Dimensions.get("window").width;
const containerWidth = screenWidth - 40;
const inningWidth = containerWidth - 48;

const ScoreHeader = styled.View`
  width: ${containerWidth}px;
  flex-direction: row;
`;

const TeamHeader = styled.Text`
  width: 40px;
  text-align: center;
  font-family: PretendardR;
  font-size: 12px;
  color: ${colors.GRAY600};
  margin-right: 8px;
`;

const InningHeader = styled.View`
  width: ${inningWidth}px;
  flex-direction: row;
  justify-content: space-between;
`;

const Inning = styled.Text`
  width: 22px;
  font-family: PretendardR;
  font-size: 12px;
  color: ${colors.GRAY600};
  text-align: center;
  justify-content: center;
`;

const AwayHeader = styled.View`
  width: ${containerWidth}px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const HomeHeader = styled.View`
  width: ${containerWidth}px;
  flex-direction: row;
  justify-content: space-between;
`;

const ItemContainer = styled.View`
  width: ${inningWidth}px;
  flex-direction: row;
  justify-content: space-between;
`;

const TeamItem = styled.Text`
  width: 40px;
  background-color: ${colors.GRAYBG};
  text-align: center;
  justify-content: center;
  padding: 4px 8px;
  font-family: PretendardR;
  font-size: 12px;
  color: ${colors.GRAY700};
  border-radius: 4px;
`;

const BoxItem = styled.Text`
  width: 22px;
  background-color: ${colors.GRAYBG};
  text-align: center;
  padding: 4px 8px;
  font-family: PretendardR;
  font-size: 12px;
  color: ${colors.GRAY700};
  border-radius: 4px;
`;

const ScoreContents = styled.View``;

const ScoreBoardItem = () => {
  const awayScore = KBOData.score.away;
  const homeScore = KBOData.score.home;
  const awayTeam = KBOData.team.away;
  const homeTeam = KBOData.team.home;
  console.log(awayTeam);

  //원정팀 스코어 박스 아이템 렌더링
  const awayRendering = () => {
    const result = [];
    for (let i = 0; i < awayScore.length; i++) {
      result.push(<BoxItem>{awayScore[i]}</BoxItem>);
    }
    return result;
  };
  //홈팀 스코어 박스 아이템 렌더링
  const homeRendering = () => {
    const result = [];
    for (let i = 0; i < homeScore.length; i++) {
      result.push(<BoxItem>{homeScore[i]}</BoxItem>);
    }
    return result;
  };

  return (
    <>
      <ScoreHeader>
        <TeamHeader>TEAM</TeamHeader>
        <InningHeader>
          <Inning>1</Inning>
          <Inning>2</Inning>
          <Inning>3</Inning>
          <Inning>4</Inning>
          <Inning>5</Inning>
          <Inning>6</Inning>
          <Inning>7</Inning>
          <Inning>8</Inning>
          <Inning>9</Inning>
          <Inning>10</Inning>
          <Inning>11</Inning>
          <Inning>12</Inning>
        </InningHeader>
      </ScoreHeader>
      <ScoreContents>
        <AwayHeader>
          <TeamItem>{awayTeam}</TeamItem>
          <ItemContainer>{awayRendering()}</ItemContainer>
        </AwayHeader>
        <HomeHeader>
          <TeamItem>{homeTeam}</TeamItem>
          <ItemContainer>{homeRendering()}</ItemContainer>
        </HomeHeader>
      </ScoreContents>
    </>
  );
};

export default ScoreBoardItem;

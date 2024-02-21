import React from "react";
import styled from "styled-components/native";
import colors from "../colors";
import { Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;
const containerWidth = screenWidth - 40;
const inningWidth = containerWidth - 48;

const ScoreHeader = styled.View`
  width: ${containerWidth}px;
  flex-direction: row;
  margin-top: 12px;
`;

const TeamHeader = styled.Text`
  width: 40px;
  font-family: PretendardR;
  font-size: 12px;
  color: ${colors.GRAY600};
  margin-left: 8px;
  text-align: center;
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

const BoxItem = styled.Text`
  background-color: ${colors.GRAYBG};
  text-align: center;
  justify-content: center;
  padding: 4px 8px;
  font-family: PretendardR;
  font-size: 12px;
  color: ${colors.GRAY700};
  border-radius: 4px;
`;

const ScoreContents = styled.View``;

const ScoreBoardItem = () => {
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
          <BoxItem>롯데</BoxItem>
          <BoxItem>0</BoxItem>
          <BoxItem>1</BoxItem>
          <BoxItem>0</BoxItem>
          <BoxItem>0</BoxItem>
          <BoxItem>1</BoxItem>
          <BoxItem>2</BoxItem>
          <BoxItem>0</BoxItem>
          <BoxItem>3</BoxItem>
          <BoxItem>0</BoxItem>
          <BoxItem>-</BoxItem>
          <BoxItem>-</BoxItem>
          <BoxItem>-</BoxItem>
        </AwayHeader>
        <HomeHeader>
          <BoxItem>한화</BoxItem>
          <BoxItem>1</BoxItem>
          <BoxItem>0</BoxItem>
          <BoxItem>0</BoxItem>
          <BoxItem>0</BoxItem>
          <BoxItem>1</BoxItem>
          <BoxItem>0</BoxItem>
          <BoxItem>0</BoxItem>
          <BoxItem>0</BoxItem>
          <BoxItem>0</BoxItem>
          <BoxItem>-</BoxItem>
          <BoxItem>-</BoxItem>
          <BoxItem>-</BoxItem>
        </HomeHeader>
      </ScoreContents>
    </>
  );
};

export default ScoreBoardItem;

import React from "react";
import styled from "styled-components/native";
import colors from "../colors";
import { KBOData } from "../KBOData";

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

export const BatLineUpListItem = () => {
  const hitter = KBOData.hitter;
  return (
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
  );
};

export const PitLineUpListItem = () => {
  return (
    <LineUpContainer>
      <LineUpItem>
        <NumItem>SP</NumItem>
        <PlayerItem>심재민</PlayerItem>
      </LineUpItem>
      <LineUpItem>
        <NumItem>-</NumItem>
        <PlayerItem>최준용</PlayerItem>
      </LineUpItem>
      <LineUpItem>
        <NumItem>승</NumItem>
        <PlayerItem>신정락</PlayerItem>
      </LineUpItem>
      <LineUpItem>
        <NumItem>홀</NumItem>
        <PlayerItem>구승민</PlayerItem>
      </LineUpItem>
      <LineUpItem>
        <NumItem>-</NumItem>
        <PlayerItem>김상수</PlayerItem>
      </LineUpItem>
      <LineUpItem>
        <NumItem>-</NumItem>
        <PlayerItem>김원중</PlayerItem>
      </LineUpItem>
      <LineUpItem>
        <NumItem>-</NumItem>
        <PlayerItem>-</PlayerItem>
      </LineUpItem>
      <LineUpItem>
        <NumItem>-</NumItem>
        <PlayerItem>-</PlayerItem>
      </LineUpItem>
      <LineUpItem>
        <NumItem>-</NumItem>
        <PlayerItem>-</PlayerItem>
      </LineUpItem>
    </LineUpContainer>
  );
};

import React, { useState } from "react";
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
  const hitterArr = KBOData.hitter;

  //대타 선수들 라인업에서 삭제
  const hitter = hitterArr.reduce((acc, curr) => {
    if (acc.findIndex(({ num }) => num === curr.num) === -1) {
      acc.push(curr);
    }
    return acc;
  }, []);

  const rendering = () => {
    const result = [];
    for (let i = 0; i < 9; i++) {
      result.push(
        <LineUpItem>
          <NumItem>{hitter[i].num}</NumItem>
          <PlayerItem>{hitter[i].name}</PlayerItem>
        </LineUpItem>
      );
    }
    return result;
  };
  return <LineUpContainer>{rendering()}</LineUpContainer>;
};

export const PitLineUpListItem = () => {
  const pitcher = KBOData.pitcher;

  const rendering = () => {
    const result = [];
    for (let i = 0; i < pitcher.length; i++) {
      if (pitcher[i].record == " ") {
        //튜수 기록이 비어있으면 - 넣어서
        result.push(
          <LineUpItem>
            <NumItem>-</NumItem>
            <PlayerItem>{pitcher[i].name}</PlayerItem>
          </LineUpItem>
        );
      } else {
        result.push(
          <LineUpItem>
            <NumItem>{pitcher[i].record}</NumItem>
            <PlayerItem>{pitcher[i].name}</PlayerItem>
          </LineUpItem>
        );
      }
    }
    for (let i = 0; i < 9 - pitcher.length; i++) {
      //9개 칸에서 투수 비는 만큼 -로 채워서 넣기
      result.push(
        <LineUpItem>
          <NumItem>-</NumItem>
          <PlayerItem>-</PlayerItem>
        </LineUpItem>
      );
    }
    return result;
  };
  return <LineUpContainer>{rendering()}</LineUpContainer>;
};

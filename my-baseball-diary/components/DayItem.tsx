import React from "react";
import styled from "styled-components/native";
import colors from "../colors";

//date값이 null일 때 반환하는 빈 DayItem
export const DayNullItem = styled.View``;

export const DayDisabledItem = styled.TouchableOpacity`
  background-color: ${colors.GRAY50};
  border-color: ${colors.GRAY500};
  border-radius: 999px;
  justify-content: center;
  align-items: center;
`;

//DayDefaultItem
export const DayDefaultItem = styled.TouchableOpacity`
  background-color: ${colors.WHITE30};
  border-radius: 999px;
  justify-content: center;
  align-items: center;
`;

export const DaySelectedItem = styled.TouchableOpacity`
  background-color: ${colors.WHITE30};
  border-width: 1px;
  border-color: ${colors.WHITE};
  border-radius: 999px;
  justify-content: center;
  align-items: center;
`;

export const DayRedItem = styled.View`
  background-color: ${colors.POINTRED};
  border-radius: 999px;
  justify-content: center;
  align-items: center;
`;

export const DayYellowItem = styled.View`
  background-color: ${colors.POINTYELLOW};
  border-radius: 999px;
  justify-content: center;
  align-items: center;
`;

export const DayGreenItem = styled.View`
  background-color: ${colors.POINTGREEN};
  border-radius: 999px;
  justify-content: center;
  align-items: center;
`;

import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
// import { Calendar } from "react-native-calendario";
// import CalendarPicker from "react-native-calendar-picker";
// import { Calendar } from "react-native-calendars";
import { Image, StyleSheet } from "react-native";
import colors from "../colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import dayjs from "dayjs";
import renderCalendarBoard from "./renderCalendarBoard";

const BoardContainer = styled.View`
  /* flex: 1; */
  /* width: 100%; */
`;

const Board = styled.Text``;

const Calendar = () => {
  const [selectedDay, setSeletedDay] = useState<string>(
    dayjs().format("YY-MM-DD")
  );

  const handleSelectDate = (v: string) => {
    setSeletedDay(v);
  };

  const board = renderCalendarBoard(selectedDay, handleSelectDate);
  const firstDay = dayjs(selectedDay).set("date", 1);

  // 왜 포맷에 하이픈을 쓰면 에러가 날까...?

  // console.log(firstDay);

  return (
    <BoardContainer>
      <Board>{board}</Board>
    </BoardContainer>
  );
};

export default Calendar;

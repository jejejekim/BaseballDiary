import React, { useState } from "react";
import styled from "styled-components/native";
import dayjs from "dayjs";
import { useEffect } from "react";
import { Text, Touchable, TouchableOpacity, View } from "react-native";
import colors from "../colors";
import CalendarItem from "./CalendarItem";

const DayContainer = styled.View`
  /* display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  margin: 8px; */
  /* display: grid;
  grid-template-columns: repeat(7, 1fr); */
`;

const renderCalendarBoard = (
  selectedDay: string,
  handleSelectDate: (v: string) => void
) => {
  const initArr = (firstDay: number, daysInMonth: number) => {
    return Array.from({ length: firstDay + daysInMonth }, (v, i) =>
      i < firstDay
        ? null
        : dayjs(selectedDay)
            .startOf("month")
            .set("date", i - firstDay + 1)
            .format("DD")
    );
  };

  const [arr, setArr] = useState<(string | null)[]>([]);

  useEffect(() => {
    const firstDay = dayjs(selectedDay).startOf("month").day();
    const daysInMonth = dayjs(selectedDay).daysInMonth();
    setArr(initArr(firstDay, daysInMonth));
    // console.log(daysInMonth);
  }, [selectedDay]);

  return (
    <>
      <CalendarItem
        data={arr}
        handleSelectDate={handleSelectDate}
        selectedDay={selectedDay}
      />
    </>
  );
};

export default renderCalendarBoard;

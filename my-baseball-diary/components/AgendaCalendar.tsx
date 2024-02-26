import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import colors from "../colors";
import { Dimensions, Text, View } from "react-native";
import dayjs from "dayjs";
import {
  AgendaList,
  CalendarProvider,
  ExpandableCalendar,
} from "react-native-calendars";
import moment from "moment";
import Swiper from "react-native-swiper";
import { FlatList } from "react-native-gesture-handler";
import { AgendaCalendarItem } from "./CalendarItem";
import { DayDefaultItem } from "./DayItem";

const numColumns = 7;
const screenWidth = Dimensions.get("window").width;
const gap = 8;
const availableSpace = screenWidth - 40 - (numColumns - 1) * gap;
const itemSize = availableSpace / numColumns;

const Wrapper = styled.View`
  position: absolute;
  width: 100%;
  background-color: ${colors.WHITE};
`;

const AgendaCalendarContainer = styled.View`
  padding-top: 8px;
  padding-bottom: 20px;
  padding-right: 20px;
  padding-left: 20px;
`;

const AgendaCalendar = () => {
  const [selectedDay, setSelectedDay] = useState<string>(
    dayjs().format("YY-MM-D") // 왜 포맷에 슬래쉬를 쓰면 에러가 날까...?
  );

  const handleSelectDate = (v: string) => {
    setSelectedDay(v);
  };

  const initArr = (firstDay: number, daysInMonth: number) => {
    return Array.from({ length: firstDay + daysInMonth }, (v, i) =>
      i < firstDay
        ? null
        : dayjs(selectedDay)
            .startOf("month")
            .set("date", i - firstDay + 1)
            .format("YY-MM-D")
    );
  };

  const [arr, setArr] = useState<(string | null)[]>([]);

  useEffect(() => {
    const firstDay = dayjs(selectedDay).startOf("month").day() - 1; //달의 1일의 요일
    const daysInMonth = dayjs(selectedDay).daysInMonth(); //달에 있는 일의 개수
    setArr(initArr(firstDay, daysInMonth));
  }, [selectedDay]);

  return (
    <Wrapper>
      <AgendaCalendarContainer>
        <AgendaCalendarItem
          data={arr}
          handleSelectDate={handleSelectDate}
          selectedDay={selectedDay}
        />
      </AgendaCalendarContainer>
    </Wrapper>
  );
};

export default AgendaCalendar;

import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import colors from "../colors";
import dayjs from "dayjs";
import { AgendaCalendarItem } from "./CalendarItem";

const Wrapper = styled.View`
  position: absolute;
  width: 100%;
  background-color: ${colors.WHITE};
`;

const TopBar = styled.View`
  padding: 16px;
`;

const SelectedMonth = styled.Text`
  text-align: center;
  font-family: PretendardM;
  font-size: 18px;
  color: ${colors.BLACK};
`;

const AgendaCalendarContainer = styled.View`
  /* padding-top: 8px; */
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
      <TopBar>
        <SelectedMonth>
          20{dayjs(selectedDay).year()}년 {dayjs(selectedDay).month() + 1}월
        </SelectedMonth>
      </TopBar>
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

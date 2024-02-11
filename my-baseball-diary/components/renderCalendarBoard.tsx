import React, { useState } from "react";
import styled from "styled-components/native";
import dayjs from "dayjs";
import { useEffect } from "react";
import CalendarItem from "./CalendarItem";

const DayContainer = styled.View``;

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
            .format("YY-MM-D")
    );
  };

  const [arr, setArr] = useState<(string | null)[]>([]);

  useEffect(() => {
    const firstDay = dayjs(selectedDay).startOf("month").day() - 1;
    const daysInMonth = dayjs(selectedDay).daysInMonth();
    setArr(initArr(firstDay, daysInMonth));
    // console.log(selectedDay);
  }, [selectedDay]);

  return (
    <>
      <CalendarItem data={arr} handleSelectDate={handleSelectDate} />
    </>
  );
};

export default renderCalendarBoard;

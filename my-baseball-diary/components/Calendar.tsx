import React, { useState } from "react";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Calendar } from "react-native-calendario";
// import CalendarPicker from "react-native-calendar-picker";
// import { Calendar } from "react-native-calendars";
import { Image, StyleSheet } from "react-native";
import colors from "../colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";

const CalendarItem = () => {
  //   const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"]; //요일 배열
  //   const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  //   //현재 달 시작하는 날짜 받아옴
  //   const curMonthStartDate = new Date(
  //     currentMonth.getFullYear(),
  //     currentMonth.getMonth(),
  //     1
  //   ).getDay();

  //   //현재 달 마지막 날짜 받아옴
  //   const curMonthEndDate = new Date(
  //     currentMonth.getFullYear(),
  //     currentMonth.getMonth() + 1,
  //     0
  //   );

  //   //이전 월의 마지막 날까 받아옴
  //   const prevMonthEndDate = new Date(
  //     currentMonth.getFullYear(),
  //     currentMonth.getMonth(),
  //     0
  //   );

  //   //다음 월의 첫번째 날짜 가져옴
  //   const nextMonthStartDate = new Date(
  //     currentMonth.getFullYear(),
  //     currentMonth.getMonth() + 1,
  //     1
  //   );

  //   //모든 날짜를 담는 배열
  //   const days: Date[] = Array.from({ length: curMonthStartDate }, (_, i) => {
  //     return new Date(
  //       currentMonth.getFullYear(),
  //       currentMonth.getMonth() - 1,
  //       prevMonthEndDate.getDate() - i
  //     );
  //   }).reverse();

  return <View></View>;
};

export default CalendarItem;

import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { Image, StyleSheet } from "react-native";
import colors from "../colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import dayjs from "dayjs";
import renderCalendarBoard from "./renderCalendarBoard";
import { Dimensions } from "react-native";

//(참고)https://9yujin.tistory.com/86?category=1071254

const numColumns = 7;
const screenWidth = Dimensions.get("window").width;
const gap = 8;
const availableSpace = screenWidth - 40 - (numColumns - 1) * gap;
const itemSize = availableSpace / numColumns;

const WSeparator = styled.View`
  width: 8px;
`;

const Wrapper = styled.View`
  position: absolute;
`;

const PreBtn = styled.TouchableOpacity``;

const NextBtn = styled.TouchableOpacity``;

const MonthContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.WHITE30};
  border-radius: 20px;
  padding: 14px 16px;
  margin-bottom: 12px;
`;

const MonthText = styled.Text`
  color: ${colors.WHITE};
  font-family: PretendardM;
  font-size: 18px;
`;

const CalendarContainer = styled.View`
  justify-content: center;
`;

const DayContainer = styled.FlatList`
  margin-bottom: 12px;
  padding: 0px 16px;
`;

const DayText = styled.Text`
  color: ${colors.WHITE};
  width: ${itemSize}px;
  height: fit-content;
  font-family: PretendardR;
  font-size: 12px;
`;

const BoardContainer = styled.View``;

const Board = styled.View``;

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState<string>(
    dayjs().format("YY-MM-D") // 왜 포맷에 슬래쉬를 쓰면 에러가 날까...?
  );

  const handleSelectDate = (v: string) => {
    setSelectedDay(v);
  };

  const board = renderCalendarBoard(selectedDay, handleSelectDate); //renderCalendarBoard 함수에서 보드 받아오기

  const dayList = ["일", "월", "화", "수", "목", "금", "토"]; //요일 배열

  //preBtn onPress 이전 달로 이동
  const handlePrevMonth = () => {
    const newDate = dayjs(selectedDay)
      .subtract(1, "month")
      .endOf("month")
      .format("YY-MM-D");
    setSelectedDay(newDate);
  };

  //nextBtn onPress
  const handleNextMonth = () => {
    const newDate = dayjs(selectedDay)
      .add(1, "month")
      .startOf("month")
      .format("YY-MM-D");
    setSelectedDay(newDate);
  };

  return (
    <>
      <Wrapper>
        <MonthContainer>
          <PreBtn onPress={handlePrevMonth}>
            <MaterialIcons
              name="chevron-left"
              color={`${colors.WHITE}`}
              size={24}
            />
          </PreBtn>
          <MonthText>{dayjs(selectedDay).format("20YY년 MM월")}</MonthText>
          <NextBtn onPress={handleNextMonth}>
            <MaterialIcons
              name="chevron-right"
              color={`${colors.WHITE}`}
              size={24}
            />
          </NextBtn>
        </MonthContainer>

        <CalendarContainer>
          <DayContainer
            horizontal
            data={dayList}
            renderItem={({ item }) => <DayText>{item}</DayText>}
            ItemSeparatorComponent={WSeparator}
            showsHorizontalScrollIndicator={false}
          />
          <BoardContainer>
            <Board>{board}</Board>
          </BoardContainer>
        </CalendarContainer>
      </Wrapper>
    </>
  );
};

export default Calendar;

import React, { useState } from "react";
import styled from "styled-components/native";
import colors from "../colors";
import { Dimensions } from "react-native";
import { View } from "react-native";
import dayjs from "dayjs";
import {
  DayNullItem,
  DayDefaultItem,
  DaySelectedItem,
  DayDisabledItem,
  DayRedItem,
  DayYellowItem,
  DayGreenItem,
} from "./DayItem";
import { Text } from "react-native";
import { BackdropBlur, Canvas, Fill, Group } from "@shopify/react-native-skia";

//(참고)https://gist.github.com/intergalacticspacehighway/0def6d0b9b2672c3ae4b8ed5923a04b4

const numColumns = 7; //컬럼 개수
const screenWidth = Dimensions.get("window").width; //스크린 너비
const gap = 8; //갭 크기
const availableSpace = screenWidth - 40 - (numColumns - 1) * gap; //캘린더 보드가 담길 너비
const itemSize = availableSpace / numColumns; //DayItem 컴포넌트 크기

//DayItem을 담는 grid
const DayList = styled.FlatList``;

//날짜 표시하는 텍스트
const DayText = styled.Text`
  color: ${colors.WHITE};
  text-align: center;
  font-family: PretendardR;
  font-size: 18px;
`;

const HSeparator = styled.View`
  width: 8px;
`;

const AgendaCalendarContainer = styled.View`
  width: ${screenWidth};
  background-color: ${colors.WHITE};
`;

const DayContainer = styled.FlatList`
  margin-bottom: 12px;
  padding: 0px 16px;
`;

const RenderWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  margin-right: 8px;
`;

const DayText2 = styled.Text`
  color: ${colors.BLACK};
  width: ${itemSize}px;
  height: fit-content;
  font-family: PretendardR;
  font-size: 12px;
  text-align: center;
  margin-bottom: 8px;
`;

export const CalendarItem = ({ data, handleSelectDate, selectedDay }) => {
  //flastlist의 renderItem props 안애 들어갈 내용
  const renderItem = ({ item }) => {
    return item === null ? ( //날짜가 null이 아니고 제대로 들어왔는가
      <DayNullItem style={{ width: itemSize, height: itemSize }}></DayNullItem> //텅 빈 아이템 리턴
    ) : item === selectedDay ? ( //
      <DaySelectedItem //날짜가 selectedDay라면 selectedItem 리턴
        onPress={() => {
          handleSelectDate(dayjs(item).format("YY-MM-D")); //클릭하면 selectedDay 상태 변경
        }}
        style={{ width: itemSize, height: itemSize }}
      >
        <DayText>{dayjs(item).date()}</DayText>
      </DaySelectedItem>
    ) : (
      <>
        <DayDefaultItem //아니라면 defaultItem 아이템 리턴
          onPress={() => {
            handleSelectDate(dayjs(item).format("YY-MM-D")); //클릭하면 selectedDay 상태 변경
          }}
          style={{ width: itemSize, height: itemSize }}
        >
          <DayText>{dayjs(item).date()}</DayText>
        </DayDefaultItem>
      </>
    );
  };
  return (
    <View>
      <DayList
        data={data}
        renderItem={renderItem}
        numColumns={numColumns}
        contentContainerStyle={{ gap }}
        columnWrapperStyle={{ gap }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

//수평 캘린더 보드
export const AgendaCalendarItem = ({ data, handleSelectDate, selectedDay }) => {
  const dayList = ["일", "월", "화", "수", "목", "금", "토"]; //요일 배열

  //flastlist의 renderItem props 안애 들어갈 내용
  const renderItem = ({ item }) => {
    return item === null ? ( //날짜가 null이 아니고 제대로 들어왔는가
      <View style={{ width: 0, height: 0 }}></View> //텅 빈 아이템 리턴
    ) : item === selectedDay ? (
      <RenderWrapper>
        {/* 요일 */}
        <DayText2>{dayList[dayjs(item).day()]} </DayText2>
        <DayDisabledItem //날짜가 selectedDay라면 selectedItem 리턴
          onPress={() => {
            handleSelectDate(dayjs(item).format("YY-MM-D")); //클릭하면 selectedDay 상태 변경
          }}
          style={{ width: itemSize, height: itemSize }}
        >
          <DayText style={{ color: colors.GRAY500 }}>
            {dayjs(item).date()}
          </DayText>
        </DayDisabledItem>
      </RenderWrapper>
    ) : (
      <RenderWrapper>
        {/* 요일 */}
        <DayText2>{dayList[dayjs(item).day()]}</DayText2>
        <DayDisabledItem //아니라면 defaultItem 아이템 리턴
          onPress={() => {
            handleSelectDate(dayjs(item).format("YY-MM-D")); //클릭하면 selectedDay 상태 변경
          }}
          style={{ width: itemSize, height: itemSize }}
        >
          <DayText style={{ color: colors.GRAY500 }}>
            {dayjs(item).date()}
          </DayText>
        </DayDisabledItem>
      </RenderWrapper>
    );
  };
  return (
    <View>
      <DayList
        horizontal
        data={data}
        renderItem={renderItem}
        // ItemSeparatorComponent={HSeparator}
        // contentContainerStyle={{ gap }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

import React from "react";
import styled from "styled-components/native";
import colors from "../colors";
import { Dimensions } from "react-native";
import { View } from "react-native";
import dayjs from "dayjs";

//(참고)https://gist.github.com/intergalacticspacehighway/0def6d0b9b2672c3ae4b8ed5923a04b4

const numColumns = 7;
const screenWidth = Dimensions.get("window").width;
const gap = 8;
const availableSpace = screenWidth - 40 - (numColumns - 1) * gap;
const itemSize = availableSpace / numColumns;

const DayList = styled.FlatList``;

const DayNullItem = styled.View`
  width: ${itemSize};
  height: ${itemSize};
`;

const DayDefaultItem = styled.TouchableOpacity`
  width: ${itemSize};
  height: ${itemSize};
  background-color: ${colors.WHITE30};
  border-radius: 999px;
  justify-content: center;
  align-items: center;
`;

const DayText = styled.Text`
  color: ${colors.WHITE};
  text-align: center;
  font-family: PretendardR;
  font-size: 18px;
`;

const CalendarItem = ({ data, handleSelectDate }) => {
  //flastlist의 renderItem props 안애 들어갈 내용
  const renderItem = ({ item }) => {
    return item === null ? ( //만약 날짜가 null이라면
      <DayNullItem></DayNullItem> //텅 빈 아이템 리턴
    ) : (
      <DayDefaultItem //날짜가 제대로 들어왔으면 디폴트 아이템 리턴
        onPress={() => {
          handleSelectDate(dayjs(item).format("YY-MM-D")); //클릭하면 selectedDay 상태 변경
        }}
      >
        <DayText>{dayjs(item).date()}</DayText>
      </DayDefaultItem>
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

export default CalendarItem;

import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import colors from "../colors";
import { Dimensions } from "react-native";

const DayList = styled.FlatList`
  /* width: ${windowWidth}; */
`;

const WSeparator = styled.View`
  width: 8px;
`;

const DayItem = styled.TouchableOpacity`
  width: 41.14px;
  height: 41.14px;
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

const windowWidth = Dimensions.get("window").width;

const CalendarItem = ({ data, handleSelectDate, selectedDay }) => (
  <DayList
    data={data}
    renderItem={({ item }) => (
      <DayItem
        onPress={() => handleSelectDate(selectedDay)}
        width={(windowWidth - 8 * 6) / 7}
      >
        <DayText>{item}</DayText>
      </DayItem>
    )}
    numColumns={7}
    columnWrapperStyle={{
      //   justifyContent: "space-between",
      marginBottom: 8,
    }}
    // ItemSeparatorComponent={WSeparator}
  />
);

export default CalendarItem;

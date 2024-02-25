import React from "react";
import styled from "styled-components/native";
import { DiaryResultItem } from "./ResultItem";
import colors from "../colors";
import DashedLine from "react-native-dashed-line";

const Wrapper = styled.View`
  flex-direction: row;
`;

const DayDefaultItem = styled.TouchableOpacity`
  width: 41.14px;
  height: 41.14px;
  background-color: ${colors.POINTRED};
  border-radius: 999px;
  justify-content: center;
  align-items: center;
`;

const ListItemContainer = styled.View`
  width: 84%;
  align-items: center;
  margin-left: 12px;
`;

const ListPhotoContainer = styled.View`
  width: 100%;
  background-color: ${colors.WHITE};
  padding: 10px 10px 11px 10px;
  border-radius: 12px;
  margin-bottom: -1px;
`;

const Photo = styled.View`
  width: 100%;
  height: 220px;
  background-color: ${colors.GRAY100};
  border-radius: 10px;
`;

const ResultContainer = styled.View`
  background-color: ${colors.WHITE};
  padding: 12px 20px;
  border-radius: 12px;
  overflow: hidden;
  font-size: 20px;
`;

const DiaryListItem = () => {
  return (
    <>
      <Wrapper>
        <DayDefaultItem />
        <ListItemContainer>
          <ListPhotoContainer>
            <Photo />
          </ListPhotoContainer>
          <DashedLine
            style={{ width: "94%", backgroundColor: "#fff" }}
            dashLength={4}
            dashColor={colors.GRAY100}
          />
          <ResultContainer>
            <DiaryResultItem />
          </ResultContainer>
        </ListItemContainer>
      </Wrapper>
    </>
  );
};

export default DiaryListItem;

import React from "react";
import styled from "styled-components/native";
import ResultItem from "./ResultItem";
import colors from "../colors";

const ListItemContainer = styled.View`
  width: 300px;
`;

const ListPhotoContainer = styled.View`
  background-color: ${colors.WHITE};
  padding: 8px;
  border-radius: 12px;
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
  margin-top: -3px;
`;

const DiaryListItem = () => {
  return (
    <>
      <ListItemContainer>
        <ListPhotoContainer>
          <Photo />
        </ListPhotoContainer>
        <ResultContainer
          style={{
            borderWidth: 0,
            borderTopWidth: 1,
            borderColor: "#D9D8E0",
            borderStyle: "dashed",
          }}
        >
          <ResultItem />
        </ResultContainer>
      </ListItemContainer>
    </>
  );
};

export default DiaryListItem;

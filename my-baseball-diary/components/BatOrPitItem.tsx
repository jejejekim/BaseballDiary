import React, { useState } from "react";
import styled from "styled-components/native";
import colors from "../colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BatLineUpListItem, PitLineUpListItem } from "./LineUplistItem";

const BatOrPitContainer = styled.View`
  width: 90%;
  flex-direction: row;
  margin-bottom: 6px;
`;

const BatHeader = styled.TouchableOpacity`
  width: 50%;
  flex-direction: row;
  align-items: center;
  margin-right: 6px;
`;

const PitHeader = styled.TouchableOpacity`
  width: 50%;
  flex-direction: row;
  align-items: center;
`;

const Bat = styled.Text`
  font-family: PretendardM;
  font-size: 13px;
  margin-left: 2px;
`;

const Pit = styled.Text`
  font-family: PretendardM;
  font-size: 13px;
  margin-left: 2px;
`;

const BatOrPitItem = () => {
  const [isSelectedBat, setIsSelectedBat] = useState(true);

  const onIsSelectedBat = () => {
    setIsSelectedBat(true);
  };

  const onIsSelectedPit = () => {
    setIsSelectedBat(false);
  };

  return isSelectedBat ? (
    <>
      <BatOrPitContainer>
        <BatHeader onPress={onIsSelectedBat}>
          <MaterialCommunityIcons
            name="baseball-bat"
            color={colors.MAINGREEN}
            size={14}
          />
          <Bat
            style={{
              color: `${colors.MAINGREEN}`,
            }}
          >
            야수
          </Bat>
        </BatHeader>
        <PitHeader onPress={onIsSelectedPit}>
          <MaterialCommunityIcons
            name="baseball"
            color={colors.GRAY100}
            size={14}
          />
          <Pit
            style={{
              color: `${colors.GRAY100}`,
            }}
          >
            투수
          </Pit>
        </PitHeader>
      </BatOrPitContainer>
      <BatLineUpListItem />
    </>
  ) : (
    <>
      <BatOrPitContainer>
        <BatHeader onPress={onIsSelectedBat}>
          <MaterialCommunityIcons
            name="baseball-bat"
            color={colors.GRAY100}
            size={14}
          />
          <Bat
            style={{
              color: `${colors.GRAY100}`,
            }}
          >
            야수
          </Bat>
        </BatHeader>
        <PitHeader onPress={onIsSelectedPit}>
          <MaterialCommunityIcons
            name="baseball"
            color={colors.MAINGREEN}
            size={14}
          />
          <Pit
            style={{
              color: `${colors.MAINGREEN}`,
            }}
          >
            투수
          </Pit>
        </PitHeader>
      </BatOrPitContainer>
      <PitLineUpListItem />
    </>
  );
};

export default BatOrPitItem;

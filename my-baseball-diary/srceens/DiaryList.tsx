import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import colors from "../colors";
import DiaryListItem from "../components/DiaryListItem";
import { useDB } from "../context";
import { FlatList } from "react-native-gesture-handler";
import { Text } from "react-native";

const Wrapper = styled.View`
  flex: 1;
  padding: 20px 20px;
  background-color: ${colors.MAINBROWN};
  /* align-items: center; */
`;

const WhiteLine = styled.View`
  width: 8px;
  height: 140%;
  position: absolute;
  background-color: ${colors.WHITE};
  margin-left: 36px;
`;

const Touch = styled.TouchableOpacity`
  flex: 1;
  justify-content: "center";
  align-items: "center";
`;

const Title = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

const DiaryList: React.FC<NativeStackScreenProps<any, "DiaryList">> = ({
  navigation: { navigate },
}) => {
  const realm = useDB();
  const [mvp, setMvp] = useState([]);
  useEffect(() => {
    const mvp = realm.objects("Diary");
    setMvp(mvp);
    mvp.addListener(() => {
      const mvp = realm.objects("Diary");
      setMvp(mvp);
    });
    return () => {
      mvp.removeAllListeners();
    };
  }, []);

  return (
    <Wrapper>
      <WhiteLine />
      <FlatList data={mvp} renderItem={({ item }) => <Text>{item.mvp}</Text>} />

      {/* <FlatList data={null} renderItem={({ item }) => <DiaryListItem />} /> */}
      {/* <Touch onPress={() => navigate("Stack", { screen: "Diary" })}>
        <Title>DiaryList</Title>
      </Touch> */}
    </Wrapper>
  );
};

export default DiaryList;

import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import colors from "../colors";
import DiaryListItem from "../components/DiaryListItem";
import { useDB } from "../context";
import { FlatList } from "react-native-gesture-handler";
import { Image, Text } from "react-native";
import { AgendaList, Calendar } from "react-native-calendars";
import AgendaCalendar from "../components/AgendaCalendar";

const Wrapper = styled.View`
  flex: 1;
  background-color: ${colors.MAINBROWN};
  /* align-items: center; */
`;

const Container = styled.View`
  padding: 20px 20px;
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
      <AgendaCalendar />
      <Container>
        {/* 무조건 스키마에 있는 정보가 들어와야 뜨기 때문에 api 연결 이후에 고려 */}
        {/* <FlatList data={mvp} renderItem={({ item }) => <Text>{item.mvp}</Text>} /> */}

        {/* <FlatList data={null} renderItem={({ item }) => <DiaryListItem />} /> */}
        {/* <Touch onPress={() => navigate("Stack", { screen: "Diary" })}>
        <Title>DiaryList</Title>
      </Touch> */}
      </Container>
    </Wrapper>
  );
};

export default DiaryList;

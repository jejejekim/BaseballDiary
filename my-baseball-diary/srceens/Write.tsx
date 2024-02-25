import React, { useContext, useEffect, useLayoutEffect } from "react";
import styled from "styled-components/native";
import colors from "../colors";
import { useState } from "react";
import { Alert, Button, TouchableOpacity } from "react-native";
import { useDB } from "../context";
import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { ResultItem } from "../components/ResultItem";
import ScoreBoardItem from "../components/ScoreBoradItem";
import LineUpBoardItem from "../components/LineUpBoardItem";
import NoteItem from "../components/NoteItem";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import Stack from "../navigation/Stack";

const screenWidth = Dimensions.get("window").width;

const View = styled.View`
  flex: 1;
  align-items: center;
  padding: 0px 20px;
  background-color: ${colors.WHITE};
`;

const ScoreBoard = styled.View`
  align-items: center;
  background-color: ${colors.WHITE};
  padding: 12px 0px;
`;

const Divder = styled.View`
  width: ${screenWidth}px;
  height: 4px;
  background-color: ${colors.GRAYBG};
`;

const DiaryView = styled.View`
  width: 100%;
  margin-top: 16px;
`;

const Done = styled.Text`
  font-family: PretendardM;
  font-size: 18px;
  color: ${colors.MAINGREEN};
`;

const Write: React.FC<NativeStackScreenProps<any, "Write">> = ({
  navigation,
}) => {
  // const navigation = useNavigation(); //어째서인지 네비게이션이 안 되어서 useNavigation으로 해결.. //https://velog.io/@dltmdals9071/RN-navigation-error
  const realm = useDB(); //db를 props를 통하지 않고 가져다쓰기 가능

  const [mvp, setMvp] = useState(""); //mvp
  const [record1, setRecord1] = useState(""); //인상 깊은 기록 1
  const [record2, setRecord2] = useState(""); //인상 깊은 기록 2
  const [note, setNote] = useState(""); //노트

  const onChangeText = (text) => setMvp(text); //텍스트 변할 때마다 상태 업데이트
  const onChangeRecord1 = (text) => setRecord1(text);
  const onChangeRecord2 = (text) => setRecord2(text);
  const onChangeNote = (text) => setNote(text);

  //스택 네비게이션 완료 버튼
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onFinalSubmit}>
          <Done>완료</Done>
        </TouchableOpacity>
      ),
    });
  }),
    [navigation];

  const onSubmit = () => {
    // if (mvp === "" || record1 === "") {
    //   return Alert.alert("일기 내용을 모두 입력해주세요"); //입력했는지 확인하고 alert 띄우기 <<이거 조건 수정하기
    // }
    realm.write(() => {
      const diaryContents = realm.create("Diary", {
        //App.js에서 짜놓은 스키마에 맞춰 작성
        _id: Date.now(),
        mvp: mvp,
        record1: record1,
        record2: record2,
        note: note,
      });
      console.log(diaryContents);
    });
  };

  //스택 네비게이션에서 완료 버튼 눌렀을 때의 함수
  const onFinalSubmit = () => {
    setMvp(""); //제출하고 나면 비워줘야 함
    setRecord1("");
    setRecord2("");
    setNote("");
    navigation.navigate("DiaryList"); //네비게이트로 리스트 화면 가기~
  };

  return (
    <View>
      <ScoreBoard>
        <ResultItem />
        <ScoreBoardItem />
      </ScoreBoard>
      <Divder />
      <DiaryView>
        <LineUpBoardItem
          mvp={mvp}
          record1={record1}
          record2={record2}
          onChangeText={onChangeText}
          onChangeRecord1={onChangeRecord1}
          onChangeRecord2={onChangeRecord2}
          onSubmit={onSubmit}
        />
      </DiaryView>
      <NoteItem onSubmit={onSubmit} onChangeNote={onChangeNote} note={note} />
    </View>
  );
};
export default Write;

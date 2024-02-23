import React, { useContext, useEffect } from "react";
import styled from "styled-components/native";
import colors from "../colors";
import { useState } from "react";
import { Alert } from "react-native";
import { useDB } from "../context";
import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import ResultItem from "../components/ResultItem";
import ScoreBoardItem from "../components/ScoreBoradItem";
import LineUpBoardItem from "../components/LineUpBoardItem";
import NoteItem from "../components/NoteItem";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import Stack from "../navigation/Stack";

// const TextInput = styled.TextInput`
//   background-color: ${colors.GRAYBG};
//   border-radius: 4px;
//   padding: 10px 20px;
//   font-size: 18px;
// `;

// const Btn = styled.TouchableOpacity`
//   width: 100%;
//   margin-top: 20px;
//   background-color: ${colors.MAINGREEN};
//   padding: 10px 20px;
//   align-items: center;
//   border-radius: 20px;
//   box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
// `;

// const BtnText = styled.Text`
//   color: white;
//   font-weight: 500;
//   font-size: 18px;
// `;

// //이모지를 감싸는 맨 위 컨테이너
// const Emotions = styled.View`
//   flex-direction: row;
//   justify-content: space-between;
//   margin-bottom: 20px;
// `;

// const Emotion = styled.TouchableOpacity`
//   background-color: white;
//   box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
//   padding: 10px;
//   border-radius: 10px;
//   border-width: 1px;
//   border-color: ${(props) =>
//     props.selected ? "rgba(41, 30, 95, 1);" : "transparent"};
// `;

// //이모지가 글자로 인식돼서 그걸 감싸기 위해 만듦
// const EmotionText = styled.Text`
//   font-size: 24px;
// `;

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

const emotions = ["🤯", "🥲", "🤬", "🤗", "🥰", "😊", "🤩"];

const Write = () => {
  // const navigation = useNavigation(); //어째서인지 네비게이션이 안 되어서 useNavigation으로 해결.. //https://velog.io/@dltmdals9071/RN-navigation-error
  const realm = useDB(); //db를 props를 통하지 않고 가져다쓰기 가능

  const [mvp, setMvp] = useState(""); //mvp
  const [record1, setRecord1] = useState(""); //인상 깊은 기록 1
  const [record2, setRecord2] = useState(""); //인상 깊은 기록 2
  const [note, setNote] = useState(""); //노트

  const onChangeText = (text) => setMvp(text); //텍스트 변할 때마다 상태 업데이트
  const onChangeText1 = (text) => setRecord1(text);
  const onChangeText2 = (text) => setRecord2(text);

  const onSubmit = () => {
    if (mvp === "" || record1 === "") {
      return Alert.alert("일기 내용을 모두 입력해주세요"); //입력했는지 확인하고 alert 띄우기
    }
    realm.write(() => {
      const diaryContents = realm.create("Diary", {
        //App.js에서 짜놓은 스키마에 맞춰 작성
        _id: Date.now(),
        mvp: mvp,
        record1: record1,
        record2: record2,
        note: note,
      });
      // console.log(diaryContents);
    });
    setMvp(""); //제출하고 나면 비워줘야 함
    setRecord1("");
    setRecord2("");
    setNote("");
    //네비게이트로 리스트 화면 가기~
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
          onChangeText1={onChangeText1}
          onChangeText2={onChangeText2}
          onSubmit={onSubmit}
        />
      </DiaryView>
      <NoteItem />
    </View>
  );
};
export default Write;

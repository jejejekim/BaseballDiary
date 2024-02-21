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
  padding-top: 30px;
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

const emotions = ["🤯", "🥲", "🤬", "🤗", "🥰", "😊", "🤩"];

const Write = ({ navigation: { goBack } }) => {
  const realm = useDB(); //db를 props를 통하지 않고 가져다쓰기 가능
  const [selectedEmotion, setEmotion] = useState(null); //감정 이모지 저장
  const [feelings, setFeelings] = useState(""); //감정 텍스트 저장
  const onChangeText = (text) => setFeelings(text); //인풋 텍스트 내용이 변경되면 위에 저장
  const onEmotionPress = (face) => setEmotion(face); //이모션을 누르면 state에 저장
  const onSubmit = () => {
    //제출 해야되는 내용 다 적었는지 확인
    if (feelings === "" || selectedEmotion == null) {
      return Alert.alert("Please complete form.");
    }
    realm.write(() => {
      const feeling = realm.create(
        "Diary", //잤던 스키마에 맞춰서 value 넣어주기
        {
          _id: Date.now(),
          emotion: selectedEmotion,
          message: feelings,
        }
      );
      console.log(feeling);
    });
    setEmotion(null); //제출하고 나면 비워줘야됨
    setFeelings("");
    goBack();
  };
  return (
    <View>
      <ScoreBoard>
        <ResultItem />
        <ScoreBoardItem />
      </ScoreBoard>
      <Divder />
    </View>
    // <View>
    //   <Emotions>
    //     {/* 이모지 불러오기 */}
    //     {emotions.map((emotion, index) => (
    //       <Emotion
    //         selected={emotion === selectedEmotion}
    //         onPress={() => onEmotionPress(emotion)}
    //         key={index}
    //       >
    //         <EmotionText>{emotion}</EmotionText>
    //       </Emotion>
    //     ))}
    //   </Emotions>
    //   <TextInput
    //     returnKeyType="done"
    //     onSubmitEditing={onSubmit}
    //     onChangeText={onChangeText}
    //     value={feelings}
    //     placeholder="오늘 인상 깊었던 기록"
    //   />
    //   <Btn>
    //     <BtnText>완료</BtnText>
    //   </Btn>
    // </View>
  );
};
export default Write;

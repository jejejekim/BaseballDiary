import React, { useCallback, useMemo, useRef, useState } from "react";
import styled from "styled-components/native";
import colors from "../colors";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Dimensions, Text } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const screenWidth = Dimensions.get("window").width;

const Wrapper = styled.View`
  flex: 1;
  width: ${screenWidth}px;
  padding: 0px 20px;
  margin-top: 8px;
  background-color: ${colors.WHITE};
  align-items: center;
`;

const InfoTitle = styled.Text`
  width: 100%;
  font-family: PretendardR;
  font-size: 13px;
  color: ${colors.GRAY600};
  margin-bottom: 4px;
`;

// const NoteTouch = styled.TouchableOpacity`
//   width: 100%;
//   height: 33%;
//   font-family: PretendardR;
//   font-size: 13px;
//   background-color: ${colors.GRAYBG};
//   color: ${colors.GRAY700};
//   border-radius: 8px;
//   padding: 12px 12px;
// `;

// const NoteText = styled.Text`
//   font-family: PretendardR;
//   font-size: 13px;
//   color: ${({ isFilled }) => (isFilled ? "red" : "black")};
// `;

const NoteContainer = styled.View`
  width: 100%;
`;

const NoteInput = styled.TextInput`
  width: 100%;
  height: 223px;
  background-color: ${colors.GRAYBG};
  border-radius: 8px;
  padding: 12px 12px;
`;

const PhotoContainer = styled.View`
  width: 100%;
  margin-top: 12px;
`;

const PhotoInput = styled.View`
  width: 100%;
  height: 277px;
  background-color: ${colors.GRAYBG};
  border-radius: 8px;
  padding: 12px 12px;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  /* height: 51px; */
  bottom: 0%;
  position: fixed;
  background-color: ${colors.MAINGREEN};
  border-radius: 12px;
  padding: 16px 0px;
  margin: 24px 0px 24px 0px;
  align-items: center;
`;

const BtnText = styled.Text`
  font-family: PretendardM;
  font-size: 16px;
  color: ${colors.WHITE};
`;

const NoteItem = ({ onSubmit, onChangeNote, note }) => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["85%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    // console.log("handleSheetChanges", index);
  }, []);

  //뒷배경 누르면 모달창 닫기
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  //작성완료 버튼 클릭하면 실행되는 함수
  //모달창 내려감
  const onSubmitModal = () => {
    bottomSheetModalRef.current?.close();
  };

  // renders
  return (
    //바텀시트 참고: https://ddioniii.tistory.com/50
    <BottomSheetModalProvider>
      <InfoTitle>NOTE</InfoTitle>
      <NoteInput
        onPressIn={handlePresentModalPress}
        returnKeyType="next"
        // onSubmitEditing={onCopyPaste}
        onChangeText={onChangeNote}
        value={note}
        placeholder="오늘의 경기는 어땠나요?"
        placeholderTextColor={colors.GRAY500}
        textAlignVertical="top"
      />

      {/* 모달 */}
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
      >
        <Wrapper>
          <NoteContainer>
            <InfoTitle>NOTE</InfoTitle>
            <NoteInput
              returnKeyType="next"
              // onSubmitEditing={onCopyPaste}
              onChangeText={onChangeNote}
              value={note}
              placeholder="오늘의 경기는 어땠나요?"
              placeholderTextColor={colors.GRAY500}
              textAlignVertical="top"
            />
          </NoteContainer>
          <PhotoContainer>
            <InfoTitle>PHOTO</InfoTitle>
            <PhotoInput />
          </PhotoContainer>
          <Button>
            <BtnText onPress={onSubmitModal}>작성완료</BtnText>
          </Button>
        </Wrapper>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default NoteItem;

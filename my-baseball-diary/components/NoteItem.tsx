import React, { useCallback, useMemo, useRef } from "react";
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
  width: ${screenWidth}px;
  padding: 0px 20px;
  background-color: ${colors.WHITE};
`;

const InfoTitle = styled.Text`
  width: 100%;
  font-family: PretendardR;
  font-size: 13px;
  color: ${colors.GRAY600};
  margin-bottom: 4px;
`;

const NoteTouch = styled.TouchableOpacity`
  width: 100%;
  height: 33%;
  font-family: PretendardR;
  font-size: 13px;
  background-color: ${colors.GRAYBG};
  color: ${colors.GRAY700};
  border-radius: 8px;
  padding: 12px 12px;
`;

const NotePlaceHolder = styled.Text`
  font-family: PretendardR;
  font-size: 13px;
  color: ${colors.GRAY500};
`;

const NoteInput = styled.TextInput`
  width: 100%;
  height: 270px;
  background-color: ${colors.GRAYBG};
  border-radius: 8px;
  padding: 12px 12px;
`;

const NoteItem = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["80%"], []);

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

  // renders
  return (
    //바텀시트 참고: https://ddioniii.tistory.com/50
    <BottomSheetModalProvider>
      <InfoTitle>NOTE</InfoTitle>
      <NoteTouch onPress={handlePresentModalPress}>
        <NotePlaceHolder>오늘의 경기는 어땠나요?</NotePlaceHolder>
      </NoteTouch>

      {/* 모달 */}
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
      >
        <Wrapper>
          <InfoTitle>NOTE</InfoTitle>
          <NoteInput
            returnKeyType="done"
            placeholder="오늘의 경기는 어땠나요?"
            placeholderTextColor={colors.GRAY500}
            textAlignVertical="top"
          />
        </Wrapper>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

export default NoteItem;

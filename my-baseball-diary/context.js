import React, { useContext } from "react";

export const DBContext = React.createContext(); //realm context=우리가 원하는 모든 걸 넣을 수 있는 공간

//db를 props를 통하지 않고 가져다 쓸 수 있게 하는 hook
export const useDB = () => {
  return useContext(DBContext);
};

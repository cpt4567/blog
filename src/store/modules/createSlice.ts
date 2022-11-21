/*** slice(액션 + 슬라이스 통합본) ***/

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type StateType = {
  initialData: boolean;
};

const initialState: StateType = {
  initialData: false,
};

const slice = createSlice({
  name: 'justName', // recoil의 key 역할 중복 방지 네이밍
  initialState, // 초기 값 => default
  reducers: {
    // action의 타입은 PayloadAction<제네릭> 으로 정의해준다.
    justLogic(state: StateType, action: PayloadAction<boolean>) {
      state.initialData = action.payload; // immer가 내장되어 있어서, 불변성 신경 쓰지 않고 바로 수정해주면 된다.
    },
  },
});

//액션을 export
export const { justLogic } = slice.actions;

//슬라이스를 export
export default slice;

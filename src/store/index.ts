// *** 슬라이스들을 통합한 store RootState 정의 ***

import { configureStore, Action } from '@reduxjs/toolkit';
import { curryGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import slice from './modules/createSlice';
// import logger from 'redux-logger'

// redux store 생성 함수
const makeStore = () => {
  // 미들웨어 추가 (필요 없는 경우 생략)
  // const middleware = curryGetDefaultMiddleware()
  // if(process.env.NODE_ENV === 'development') {
  //   middleware.push(logger)
  // }

  const store = configureStore({
    reducer: {
      data: slice.reducer,
    },
    // middleware, // 불필요시 생략
    devTools: process.env.NODE_ENV === 'development', // 개발자도구 설정
  });
};

//store 생성
const store = makeStore();
// store export
export default store;

//RootState export
// export type AppState = ReturnType<typeof store.getState>

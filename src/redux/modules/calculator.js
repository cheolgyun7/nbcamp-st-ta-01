import { PLUS_BUTTON, MINUS_BUTTON } from "./action";

// 초기 상태값
const initialState = {
  result: 0,
};

// 리듀서
const calculator = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_BUTTON:
      return {
        ...state,
        result: state.result + action.payload,
      };
    case MINUS_BUTTON:
      return {
        ...state,
        result: state.result - action.payload,
      };
    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default calculator;

import {TEST_REDUCER} from "./constants";

const initialState = {
  test:'测试一下',
  another:999999999999
}
function newReducer2(state = initialState,action) {
  switch (action.type) {
    case TEST_REDUCER:
      return {...state,test: "我被改啦"}
    default:
      return state
  }
}
export default newReducer2
import {CHANGE_DATA_LIST, GET_DATE} from "./constants";

const initialState = {
  count1:1,
  count2:2,
  mytest:'我是测试的内容',
  name:'三七安',
  list:[]
}
function newReducer1(state = initialState,action) {
  switch (action.type) {
    case GET_DATE:
      return state
    case CHANGE_DATA_LIST:
      console.log(action.data)
      return {...state,list: [...action.data]}
    default:
      return state
  }
}
export default newReducer1
import {combineReducers} from "redux";
import newReducer1 from "./newReducer1";
import newReducer2 from "./newReducer2";
const allReducer = combineReducers(
  {
    newReducer1,
    newReducer2
  }
)
export default allReducer
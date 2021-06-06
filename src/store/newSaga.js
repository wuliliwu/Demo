import {takeEvery,takeLatest,fork,put,all} from 'redux-saga/effects'
import axios from "axios";
import {NEW_SAGA} from "./constants";

function *getJson() {
  const res = yield axios.get('http://www.51houniao.com/product/product/guessYouLike')
  console.log(res)
}
function *newSaga() {
  yield takeLatest(NEW_SAGA,getJson)
}
export default newSaga
import {takeEvery,fork,put,all} from 'redux-saga/effects'
import axios from "axios";
import newSaga from "./newSaga";
// 导入需要拦截的action
// import {
//   FETCH_DATE
// } from "./actionCreators";
import {FETCH_DATE, GET_ANOTHER_DATA, HOUNIAO_DATA} from "./constants";
import {changeDataList} from "./actionCreators";

function *homedata(action){
  const res = yield axios('http://www.51houniao.com/product/product/guessYouLike')
  console.log(res)
}

function *getanotherdata() {
  const result1 =  yield axios('http://www.51houniao.com/product/product/guessYouLike')
  yield put(changeDataList(result1.data))
  console.log(result1.data)
}
function* mySaga1() {
  // 这里解释要劫持哪个action
  yield takeEvery(FETCH_DATE,homedata)
  yield takeEvery(GET_ANOTHER_DATA,getanotherdata)

  // yield all([fork()])
}
function *houniaoData() {
  const result2 = yield axios('http://www.51houniao.com/product/banner/getBySeller/4bc4027c645343f09a964b5c2e9f875b')
  console.log(result2)

}

function * mySaga2() {
  yield takeEvery(HOUNIAO_DATA,houniaoData)
}

function *allSagas() {
  yield all([fork(mySaga1),fork(mySaga2),fork(newSaga)])
}
export default allSagas
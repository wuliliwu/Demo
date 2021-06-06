import {
  GET_DATE,
  CHANGE_BANNER,
  FETCH_DATE,
  TEST_REDUCER,
  GET_ANOTHER_DATA,
  CHANGE_DATA_LIST,
  HOUNIAO_DATA, NEW_SAGA
} from "./constants";
export const changeBanner = (data) => {
  return {
    type:CHANGE_BANNER,
    payload:data
  }
}

// 如果正常dispatch应该回到reducer函数里面,但是我们需要在saga里面进行拦截
export const getHomeData = {
  type:FETCH_DATE
}

export const changeTest = {
  type:TEST_REDUCER
}

export const getAnotherData = {
  type:GET_ANOTHER_DATA
}

export const changeDataList = (data) => {
  return {
    type:CHANGE_DATA_LIST,
    data
  }
}

export const houniaoData = {
  type:HOUNIAO_DATA
}

export const change_newSaga =  {

    type:NEW_SAGA,

}
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import { createSelector } from 'reselect';
import Sagademo from "./demo/saga/Sagademo";
import {change_newSaga, changeTest, getAnotherData, houniaoData} from "./store/actionCreators";

const counterCreateSelector = createSelector(
  // state => state.newReducer1.count1,
  // state => state.newReducer1.count2,
  state => state.newReducer1.name,
  // state => state.newReducer2.test,
  // (a,b,c) => {
  //   console.log('看看影响不')
  //   return (c+a+b)
  // },
  (a) => a
)

const mytestSelector = createSelector(
  state => state.newReducer1.mytest,
  value => value+'我被改了'
)

const listCreateSelect = createSelector(
  state => state.newReducer2.test,

  (list) =>{
    console.log('test被改了')
    return  list
  }
)
function App() {
  const dispatch = useDispatch()
  const counter = useSelector(counterCreateSelector)
  const {mytest} = useSelector(state => {
    return{mytest:state.newReducer1.mytest+'我也被改了'}}
    )
  const mytest1 = useSelector(mytestSelector)
  const list = useSelector(listCreateSelect)
  return (
    <div >
      <Sagademo/>
      <br/>
      {
        <div>{mytest}-------{mytest1}</div>

      }
      <br/>
      {
        list
      }
      <br/>
      {
        counter
      }
      <button onClick={e => dispatch(changeTest)}>修改文字</button>
      <br/>
      <button onClick={e => dispatch(getAnotherData)}>点击获取另外的数据</button>
      <button onClick={e => dispatch(houniaoData)}>候鸟数据</button>
      <button onClick={e =>dispatch(change_newSaga)}>
        change_newSaga
      </button>
      {/*{*/}
      {/*  list.map((item,index)=> {*/}
      {/*    return <div key={item.id}>{item.id},{item.age}</div>*/}
      {/*  })*/}
      {/*}*/}

    </div>
  );
}

export default App;

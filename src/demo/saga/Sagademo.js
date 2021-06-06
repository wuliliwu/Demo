import React, {Component} from 'react';
import {connect, useDispatch} from "react-redux";
import {getHomeData} from "../../store/actionCreators";


// function mapStateToProps(state) {
//   return {
//
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     getHomeData1() {
//       dispatch(getHomeData)
//     }
//   };
// }
// function getHomeData1() {
//       dispatch(getHomeData)
// }

const Sagademo = () => {
    const dispatch = useDispatch()
    return (
      <div>
        <button onClick={e => dispatch(getHomeData)}>点击获取数据</button>
      </div>
    );
}

export default Sagademo
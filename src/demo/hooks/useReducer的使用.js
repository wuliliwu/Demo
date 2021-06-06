import React,{useReducer} from 'react';
function reducer(state,action) {
  switch (action.type) {
    case 'increament':
      return {...state,count:state.count+1}
    default:
      return state
  }
}

const UseReducerDemo = () => {
  const [count,dispatch] = useReducer(reducer,{count:10})
  return (
    <div>
      当前计数:{count.count}
      <br/>
      <button onClick={event => dispatch({type:'increament'})}>+</button>
    </div>
  );
};

export default UseReducerDemo;

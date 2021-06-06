import React,{useState} from 'react';

const CountHook = () => {
  // useState有两个参数,
  //   第一个参数是当前state的值,第二个参数是要设置新的值的
  //   时候所使用的一个函数
  const arr = useState(0)
  const state = arr[0]
  const setState = arr[1]
  return (
    <div>
      <h2>当前计数:{state}</h2>
      <button onClick={ e=> setState(state+1)}>+1</button>
      <button onClick={ e=> setState(state-3)}>-1</button>
    </div>
  );
};

export default CountHook;

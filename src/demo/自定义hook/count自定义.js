import React,{useState} from 'react';

function useCountHookDemo(initNum) {
  const [count,setCount] = useState(initNum)
  const addCount = () => {
    setCount(count + 1)
  }
  const subCount = () => {
    setCount(count - 1)
  }
  return [count,addCount,subCount]
}

const App = () => {
  // 解构自己定义的钩子函数
  const [count,addCount,subCount] = useCountHookDemo(5)
  return (
    <div>
      自定义的钩子函数
      <br/>
      当前计数:{count}
      <br/>
      <button onClick={addCount}>+</button>
      <button onClick={subCount}>-</button>
    </div>
  );
};

export default App;

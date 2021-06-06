import React,{useState,useEffect} from 'react';
const HookCount = () => {
  const [counter,setCounter] = useState(0)
  // userEffect里面传入的是一个函数,相当于类组件中的生命周期函数
  // 主要是用来代替生命周期的
  useEffect(() => {
    document.title = counter
  })
  return (
    <div>
      <h2>当前计数:{counter}</h2>
      <button onClick={e => setCounter(counter+1) }>+1</button>
    </div>
  );
};

export default HookCount;

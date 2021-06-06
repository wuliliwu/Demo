import React,{useEffect,useState} from 'react';

const UseEffect = () => {
  const [count,setCount] = useState(0)
  const [show,setShow] = useState(true)
  useEffect(()=> {//这个函数相当于componentDidMount
    console.log('订阅了一些事件')
    return () => {//这个函数相当于componentWillUnMount
      console.log('取消了订阅')
    }
  },[])
  // count的usereffect的使用

  useEffect(() => {
    console.log('count发生了变化')
  },[count])
  //第二个参数呢,就是在当前参数发生变化的时候菜户调用useEffect这个函数,其他参数发生变化是不会触发这个函数,用来做性能优化
  // 如果第二个参数是个空数组的话,则表示只有在组件第一次渲染成功的时候调用一次
  return (
    <div>
      当前计数:{count}
      {show?'黄家辉':'未登录'}
      <button onClick={event => setShow(!show)}>登陆/注销</button>
      <button onClick={event => setCount(count+1)}>+1</button>
      <h2>effect的订阅使用</h2>
    </div>
  );
};

export default UseEffect;


import React,{useState} from 'react';
import useLiftTest from "./myhooks/liftTest";


const ChildHook = () =>  {
  useLiftTest()
  return (
    <div>
      我是子组件
    </div>
  );
}


function MyHook(props) {
  const [show, setShow] = useState(true);
  return (
    <div>
      我是自定义hook的演示

      <br/>
      {
        show?<ChildHook/>:'我走了'
      }
      <button onClick={ e => setShow(!show)}>切换显示/隐藏</button>
    </div>
  );
}

export default MyHook;
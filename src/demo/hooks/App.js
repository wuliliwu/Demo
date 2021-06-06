import React,{useState} from 'react'
// import CountHook from "./hookCount";
// import ClassCount from "./class实现计数器标题";
// import HookCount from "./hook实现title的修改";
// import UseEffect from "./useEffect的订阅";
// import UseContext from "./useContext的使用";
import UseReducerDemo from "./useReducer的使用";
function App() {
  const [show,setShow] = useState(true)
  return(
    <div>
      {/*<CountHook/>*/}
      {/*<ClassCount/>*/}
      {/*<HookCount/>*/}
      {/*{show?<UseEffect/>:null}*/}
      {/*<button onClick={event => setShow(!show)}>切换</button>*/}
      {/*<UseContext/>*/}
      <UseReducerDemo/>
    </div>
  )
}
export default App
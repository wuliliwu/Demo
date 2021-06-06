import React,{useRef,forwardRef} from 'react';

function MyChild(props,ref) {
  return(
    <div>
      这是我的子组件
      <input type="text" ref={ref}/>
    </div>
  )
}
const ARef = forwardRef(MyChild)
const UseRefDemo = () => {
  const myRef = useRef(null)
  const printRef = ()=>{

    console.log(2121)
    console.log(myRef)
  }
  return (
    <div>
      UseRefDemo的使用
      <ARef ref={myRef}
      />
      <button onClick={printRef}>打印一下ref</button>
    </div>
  )


};

export default UseRefDemo;

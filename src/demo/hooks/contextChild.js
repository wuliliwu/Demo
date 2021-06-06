import React,{useContext} from 'react';
import {UserContext} from "./useContext的使用";

const ContextChild = () => {
  const user = useContext(UserContext) //这样子就可以直接取出来用了;
  //不再需要使用 UserContext.Consumer value => {}这样的方式去取
  console.log(user)
  return (
    <div>
      <h2>ContextChild</h2>
    </div>
  );
};

export default ContextChild;

import React from 'react';
import ContextChild from "./contextChild";
import {createContext} from "react";
export const UserContext = createContext()
const UseContext = () => {
  return (
    <div>
      我是useContext组价
      <UserContext.Provider value={{name:'三七安',age:18}}>
        <ContextChild/>
      </UserContext.Provider>

    </div>
  );
};

export default UseContext;

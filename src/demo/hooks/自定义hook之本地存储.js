import React,{useState} from 'react';
import useLocalStorageTest from "./myhooks/localStorageTest";
function LocalStorage(props) {
  // const [name,setName] = useState('三七安')
  const [val,setVal] = useLocalStorageTest('name')
  return (
    <div>
      本地存储案例:{val}
      <button onClick={ e => setVal('三七安')}>点击存储</button>
    </div>
  );
}

export default LocalStorage;
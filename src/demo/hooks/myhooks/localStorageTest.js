import React,{useState,useEffect} from 'react';

const useLocalStorageTest = (key) =>{
  const [val,setVal] = useState(() => {
    return window.localStorage.getItem(key)
  })
  useEffect(() => {
    window.localStorage.setItem(key,val)
  }, [val]);

  return [val,setVal];

}

export default useLocalStorageTest;
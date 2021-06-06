import React,{useEffect} from 'react';

const useLiftTest = () => {
  useEffect(()=> {
    console.log('组件的生命周期创建了')
    return () => {
      console.log('组件的生命周期销毁了')
    }
  })
}

export default useLiftTest;
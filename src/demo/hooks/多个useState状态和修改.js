import React,{useState} from 'react'

function ManyDataHook() {
  const [count,setCount] = useState(20)
  const [friends,setFriends] = useState(['安安,三七'])
  return(
    <div>
      <div>当前计数:{count}</div>
      <button onClick={ e => setCount(count+1)}>+1</button>
      <ul>
        我是一个列表
        {
          friends.map(item => {
            return <li key={item}>{item}</li>
          })
        }
      <button onClick={event => setFriends([...friends,'tom说'])}>点击添加列表项</button>
      </ul>
    </div>
  )
}
export default ManyDataHook

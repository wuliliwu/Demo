import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends:[
        {
          age:88,
          name:'三七安'
        }, {
          age:12,
          name:'黄家辉'
        }
      ]
    }
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextState.friends !== this.state.friends){
      return true
    }else {
      return  false
    }
  }

  render() {
    console.log('render了')
    const {friends} = this.state
    return (
      <div>
        <h2>演示不可变数据</h2>
        <ul>
          {
            friends.map((item,index) =>{
              return <li key={index}>姓名:{item.name}  年龄:{item.age}</li>
            })
          }
        </ul>
        <button onClick={event => this.addDate() }>添加数据</button>
      </div>
    );
  }
  addDate(){
    // const newData = {name:'安安呐',age:54}
    // this.state.friends.push(newData)
    // this.setState({
    //   friends:this.state.friends
    // })
    
    // 推荐做法
    const newFriends = [...this.state.friends]
    const newData = {name:'安安呐',age:54}
    newFriends.push(newData)
    this.setState({
      friends:newFriends
    })

  }
}

export default App;
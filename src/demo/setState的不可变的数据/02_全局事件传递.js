import React, {PureComponent} from 'react';
import {EventEmitter} from 'events'
// 事件总线eventBus
const eventBus = new EventEmitter()
class Home extends PureComponent{
  render() {
    return (
      <div>
          Home
      </div>
    );
  }
  // 一般在这里进行事件监听
  componentDidMount() {
    eventBus.addListener('sayHello',this.handleSayHello)
  }
  // 如果传过来是多个参数,接收的时候也是多个参数
  // handleSayHello(msg1,msg2) {
  //   console.log(msg1,msg2)
  // }
// 尝试传一个对象
  handleSayHello(obj) {
    console.log(obj)
  }
  // 在这里进行事件解绑
  componentWillUnmount() {
    eventBus.removeListener('sayHello',this.handleSayHello)
  }
}

class Profile extends PureComponent{
  render() {
    return (
      <div>
        Profile
        <button onClick={ event => this.emmitEvent()}>点击了profile按钮</button>
      </div>
    );
  }
  emmitEvent() {
    // eventBus.emit('sayHello','HelloHome','三七安')
    eventBus.emit('sayHello',{name:'HelloHome',p1:'三七安'})
  }
}

class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <Profile/>
      </div>
    );
  }
}

export default App;
import React, {PureComponent} from 'react';

// 在这里 定义一个高阶组件高阶组件其实就是一个函数

class Home extends PureComponent{
  render() {
    return (
      <div>
        Home的信息:姓名:{`${this.props.name}`},年龄:{this.props.age}地区:{this.props.region}
      </div>
    )
  }
}
class About extends PureComponent{
  render() {
    return (
      <div>
        About的信息:姓名:{`${this.props.name}`},年龄:{this.props.age}地区:{this.props.region}
      </div>
    )
  }
}

function enhanceComponent(WrappedComponent) {
  return class NewComponent extends PureComponent{
    render() {
      return (
        <WrappedComponent {...this.props} region={'中国'}/>
      )
    }
  }
}
const NewHome = enhanceComponent(Home)
const NewAbout = enhanceComponent(About)


class App extends PureComponent {
  render() {
    return (
      <div>
        <NewHome name='三七安' age='18'/>
        <NewAbout name='三七安' age='18'/>
      </div>
    );
  }
}


export default App;
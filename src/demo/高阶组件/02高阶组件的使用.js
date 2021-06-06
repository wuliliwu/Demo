import React, {PureComponent,createContext} from 'react';
// 在这里 定义一个高阶组件高阶组件其实就是一个函数
const userContext = createContext({
  name:'三七安',
  age:10,
  region:'中国'
})
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

class Category extends PureComponent{
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.age}</li>
          <li>{this.props.region}</li>
        </ul>
      </div>
    );
  }

}
function withUser(WrappedComponent) {
  return class NewComponent extends PureComponent{
    render() {
      return (
        <userContext.Consumer>
          {
            value =>{
              // 这里相当于把value也当成属性的 方式 给props,用这种方式传过去
              return  <WrappedComponent {...this.props} {...value}/>
            }
          }
        </userContext.Consumer>
      );
    }

  }
}

const NewHome = withUser(Home)
const NewCategory = withUser(Category)

class App extends PureComponent {
  render() {
    return (
      <div>
        <userContext.Provider value={{
          name:'黄家辉',
          age:12,
          region:'山西'
        }}>
          <NewHome/>
          <NewCategory/>
          {/*<About/>*/}
        </userContext.Provider>

      </div>
    );
  }
}


export default App;
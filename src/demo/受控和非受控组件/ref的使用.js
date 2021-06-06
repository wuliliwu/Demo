import React, {PureComponent,createRef} from 'react';

class Counter extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      counter:123
    }
  }
  render() {
    return(
      <div>
        12345
      </div>
    )
  }
}
class Refuse extends PureComponent {
  constructor(props) {
    super(props);
    // 第二种方式
    // this.titleRef = createRef()
    // 第三种方式
    this.titleRef = null
    this.counterRef = createRef()
  }
  render() {
    return (
      <div>
        {/*第一种方式 --- 字符串*/}
        {/*<h2 ref='titleRef'>hello React</h2>*/}
        {/*第二种方式 --- 对象*/}
        {/*<h2 ref={this.titleRef}>hello React</h2>*/}
        {/*第三种方式:回调函数*/}
        <h2 ref={(arg) => {this.titleRef = arg}}>hello React</h2>
        <button onClick={event => this.changeText()}>改变文本</button>
        <hr/>
        <Counter ref={this.counterRef}/>
      </div>
    );
  }
  changeText(){
    // 使用方式一:字符串
    // this.refs.titleRef.innerHTML = 'Hello World'
    // 使用方式二:对象
    // console.log(this.titleRef.current)
    // this.titleRef.current.innerHTML = 'Hello World'
    // 第三种方式:函数的方式
    console.log(this.titleRef)
    console.log(this.counterRef.current)

  }
  componentDidMount() {

  }
}


export default Refuse;
import React, {PureComponent} from 'react';
class App extends PureComponent {
  render() {
    return (
      <div>
        我是App
      </div>
    );
  }
}

function enhanceComponent(WrapComponent) {
  class NewComponent extends PureComponent{
    render() {
      return (
      <div>
        <h2>我包装了一下</h2>
        <WrapComponent/>
      </div>
      )
    }
  }
  // 给返回的组价重命名
  NewComponent.displayName = 'Sanqian'
  return NewComponent
}


export default enhanceComponent(App);
import React, {PureComponent} from 'react';
class Home extends PureComponent{


  render() {
    return (
      <div>
        Home
      </div>
    );
  }
}

class About extends PureComponent{
  render() {
    return (
      <div>
        About
      </div>
    );
  }

}

function withRenderTime(WrappedComponent) {
  return class NewCpn extends PureComponent{
    componentWillMount() {
      this.beginTime = Date.now()
    }
    componentDidMount() {
      this.endTime = Date.now()
      const interval =  this.endTime - this.beginTime
      console.log(`${WrappedComponent.name}的渲染时间:${interval}`)
    }
    render() {
      return (
        <>
          <WrappedComponent {...this.props}/>
        </>
      );
    }

  }
}
const NewHome = withRenderTime(Home)
const NewAbout = withRenderTime(About)
class App extends PureComponent {
  render() {
    return (
      <div>
        <NewHome/>
        <NewAbout/>
      </div>
    );
  }
}

export default App;
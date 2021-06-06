import React, {PureComponent} from 'react';

class LoginPage extends PureComponent{
  render() {
    return (
      <div>
        登陆页面
      </div>
    );
  }
}
class CartPage extends PureComponent{
  render() {
    return (
      <div>
        购物车页面
      </div>
    );
  }
}

function withAuth(WrappedComponent) {
  class NewCpn extends PureComponent{
    render() {
      const {isLogin} = this.props
      return (
        <>
          {
            isLogin?<WrappedComponent {...this.props}/>:<LoginPage />
          }
        </>
      )
    }
  }
  NewCpn.displayName = 'sanqian'
  return NewCpn
}


const NewCart = withAuth(CartPage)

class App extends PureComponent {
  render() {
    return (
      <div>
        <NewCart isLogin={true}/>
      </div>
    );
  }
}


export default App;
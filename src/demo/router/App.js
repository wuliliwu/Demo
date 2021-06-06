import React, {Component} from 'react';
import {renderRoutes} from "react-router-config";
import {BrowserRouter, NavLink, Route, Switch, withRouter} from 'react-router-dom'
import {routes} from "../../router";
// import Home from "./pages/home";
// import About from "./pages/about";
// import Profile from "./pages/profile";
// import Notfount from "./pages/notfount";
// import User from "./pages/user";
// import Login from "./pages/login";
// import Product from "./pages/product";
// import Detail from "./pages/detail";
// import Detail3 from "./pages/detail3";

class App extends Component {
  render() {
    return (
      <div>
        {/*<BrowserRouter>*/}
        {/*这里的link都会渲染成a标签,并且显示*/}
        {/*<Link to='/'>首页</Link>*/}
        {/*<Link to='/about'>关于</Link>*/}
        {/*<Link to='/profile'>我的</Link>*/}

        {/*navLink的使用*/}
        {/*可以自定义class的名字 activeClassName=''*/}
        <NavLink to='/' activeStyle={{color: 'red'}} exact>首页</NavLink>
        <NavLink to='/about' activeStyle={{color: 'red'}}>关于</NavLink>
        <NavLink to='/profile' activeStyle={{color: 'red'}}>我的</NavLink>
        <NavLink to='/user' activeStyle={{color: 'red'}}>用户</NavLink>
        <NavLink to='/detail/asda' activeStyle={{color: 'red'}}>详情页</NavLink>
        <NavLink to={
          {
            pathname: 'detail3',
            search: '?name=三七安',
            state: {
              id: 123,
              sku: '54554'
            }

          }
        } activeStyle={{color: 'red'}}>详情页333</NavLink>
        <button onClick={event => this.toProduct()}>商品列表</button>

        {/*这里的route只有路径匹配了才会显示,并不会全部显示*/}

        {/*<Switch>*/}
        {/*  <Route path='/' exact={true} component={Home}/>*/}
        {/*  <Route path='/about' component={About}/>*/}
        {/*  <Route path='/profile' component={Profile}/>*/}
        {/*  <Route path='/user' component={User}/>*/}
        {/*  <Route path='/login' component={Login}/>*/}
        {/*  <Route path='/product' component={Product}/>*/}
        {/*  <Route path='/detail/:id' component={Detail}/>*/}
        {/*  <Route path='/detail3' component={Detail3}/>*/}
        {/*  <Route component={Notfount}/>*/}
        {/*</Switch>*/}

        {renderRoutes(routes)}

        {/*</BrowserRouter>*/}
      </div>
    );
  }

  toProduct() {
    console.log(this.props)
    this.props.history.push('/product')
  }
}

export default withRouter(App);
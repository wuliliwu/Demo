import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import {renderRoutes} from "react-router-config";
// import {routes} from "../../../router";
export function Culture() {
  return (
    <div>
      <h2>企业文化</h2>
    </div>
  )
}
export function Connect() {
  return (
    <div>
      <h2>联系我们</h2>
    </div>
  )
}
export function Recommend() {
  return (
    <div>
      <h2>我要推荐</h2>
    </div>
  )
}
export function Join(props) {
  console.log(props)
  return (
    <div>
      <h2>加入我们,欢迎投递简历</h2>
    </div>
  )
}
class About extends Component {
  render() {
    console.log(this.props.route)
    return (
      <div>
        about页面
        <br/>
        <button onClick={event =>this.toJoin()}>加入我们</button>
        <br/>
        <NavLink to='/about'>企业文化</NavLink>
        <NavLink to='/about/connect'>联系我们</NavLink>
        <NavLink to='/about/recommend'>我要推荐</NavLink>
        {/*<Switch>*/}
        {/*  <Route path='/about' exact={true} component={Culture}/>*/}
        {/*  <Route path='/about/connect' component={Connect}/>*/}
        {/*  <Route path='/about/recommend' component={Recommend}/>*/}
        {/*  <Route path='/about/join' component={Join}/>*/}
        {/*</Switch>*/}

        {renderRoutes(this.props.route.routes)}

      </div>
    );
  }
  toJoin() {
    this.props.history.push('/about/join',{id:455})
  }
}

export default About;
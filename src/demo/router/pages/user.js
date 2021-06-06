import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin:true
    }
  }
  render() {
    return (
      <div>
        {
          this.state.isLogin?<div>
            用户界面
            <h2>三七安</h2>
          </div>:<Redirect to={'/login'}/>
        }

      </div>
    );
  }
}

export default User;
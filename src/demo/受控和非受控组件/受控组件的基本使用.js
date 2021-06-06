import React, {PureComponent} from 'react';
// import PropTypes from 'prop-types';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username:''
    }
  }
  render() {
    return (
      <div>
        受控组件的基本使用
        <form onSubmit={event => this.handleSubmit(event)}>
          <label htmlFor="username">用户名:</label>
          <input type="text" id='username' onChange={event => this.handleChange(event)} value={this.state.username}/>
          <input type="submit" value='提交'/>
        </form>
      </div>
    );
  }
  handleSubmit(event){
    event.preventDefault()
  }
  handleChange(event){
    console.log(event.target.value)
    this.setState({
      username:event.target.value
    })
  }
}

// App.propTypes = {};

export default App;
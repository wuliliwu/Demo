import React, {PureComponent} from 'react';

class ClassCount extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }


  componentDidMount() {
    document.title = this.state.counter
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    document.title = this.state.counter
  }

  addcounter() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div>
        <h2>当前计数:{this.state.counter}</h2>
        <button onClick={e => this.addcounter()}>+1</button>
      </div>
    );
  }
}

export default ClassCount;

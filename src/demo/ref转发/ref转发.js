import React, {PureComponent,createRef,forwardRef} from 'react';
const Home = forwardRef(
  function Home(props,ref) {
    return <h2 ref={ref}>Home</h2>
  }
)
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.homeRef = createRef()
    this.titleRef = createRef()
  }
  render() {
    return (
      <div>
        <Home ref={this.homeRef}/>
        <button onClick={event => this.printRef()}>打印ref</button>
      </div>
    );
  }
  printRef(){
    console.log(this.homeRef)
  }
}


export default App;
import React,{ Component } from 'react'
import './demo.css'
const AMap = window.AMap;
var map;
class Map extends Component{
  constructor(props){
    super(props)
    this.state = {
    }
  }
  componentDidMount(){
    map = new AMap.Map('container');//新建地图

  }
  render(){
    const { filterName } = this.state
    return (
      <div className="mapCmp">
        <div id="container">

        </div>
        输入目的地:<input type="text"/>
        <button>点击搜索</button>
      </div>
    )
  }
}

export default Map


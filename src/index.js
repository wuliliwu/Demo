import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./store";
import {BrowserRouter,HashRouter} from 'react-router-dom'
// import App from './App';
// setState数据不可变的演示
// import App from './demo/setState的不可变的数据/App'
// import App from './demo/setState的不可变的数据/02_全局事件传递'
// import App from './demo/受控和非受控组件/ref的使用'
// import App from './demo/受控和非受控组件/受控组件的基本使用'
// import App from './demo/高阶组件/高阶组件的概念'
// import App from './demo/高阶组件/02高阶组件的使用'
// import App from './demo/高阶组件/高阶组件的鉴权'
// import App from './demo/高阶组件/生命周期劫持'
// import App from './demo/ref转发/ref转发'
// import App from './demo/router/App'
// import App from './demo/hooks/App'
// import App from "./demo/自定义hook/count自定义";
// import App from './demo/map'
// import UseRefDemo from "./demo/useRef的使用/UseRef的使用";
// import App from './demo/图片上传/app'
// import App from './demo/hooks/多个useState状态和修改'
// import App from './demo/hooks/自定义hook之本地存储'

// import App from './demo/hooks/自定义hook'

// import App from  './demo/saga/Sagademo'
import App from './App'

import {Provider} from "react-redux";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>

    {/*<UseRefDemo/>*/}
  </BrowserRouter>,
  document.getElementById('root')
);

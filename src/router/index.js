import Home from "../demo/router/pages/home";
import About, {Connect, Culture, Join} from "../demo/router/pages/about";
import Profile from "../demo/router/pages/profile";
import User from "../demo/router/pages/user";
import Login from "../demo/router/pages/login";
import Product from "../demo/router/pages/product";
import Detail3 from "../demo/router/pages/detail3";
export const routes = [
  {
    path:'/',
    exact:true,
    component:Home
  },{
    path:'/about',
    component:About,
    routes:[
      {
        path:'/about',
        exact:true,
        component:Culture
      },{
        path:'/about/connect',
        component:Connect
      }, {
        path:'/about/join',
        component:Join
      }
    ]
  },{
    path:'/profile',
    component:Profile
  },{
    path:'/user',
    component:User
  },{
    path:'/login',
    component:Login
  },{
    path:'/product',
    component:Product
  },{
    path:'/detail3',
    component:Detail3
  }
]
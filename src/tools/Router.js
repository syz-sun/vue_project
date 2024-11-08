import { createRouter,createWebHashHistory } from "vue-router"
import Login from "../components/login/Login.vue"
import Home from "../components/home/Home.vue"
import Store from "../tools/Storage"
const Router =createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/login",
            component:Login,
            name :"login",
        },
        {
            path:"/home",
            component:Home,
            name:"home"
        }
    ]
})
Router.beforeEach((from)=>{
    let isLogin = Store.getters.isLogin;
    if (isLogin|| from.name=='login'){
        return true;
    }else{
        return {name:"login"}
    }
})
export default Router;
import {createRouter, createWebHashHistory} from "vue-router";

import type{RouteRecord, RouteRecordRaw} from "vue-router";

import RouterConfig from './config'
import {useRouterStore} from "@/store/useRouterStore";
import {useUserStore} from "@/store/useUserStore";

const routes = [
    {
        path:"/Login",
        name:"Login",
        component:()=>import('@/views/Login.vue')
    },
    {
        path:"/MainBox",
        name:"MainBox",
        component:()=>import('@/views/MainBox.vue')
    },


]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

/*路由拦截*/
router.beforeEach((to, from, next)=>{
    const {isGetterRouter} = useRouterStore()
    const {user} = useUserStore()

   /* 若没有登陆过*/
    if(to.name === "Login"){
        next()
    }else{
        if(!user.role){
            next({
                path:"/Login"
            })
        }else{
            /*第一次配置路由时才会调用ConfigRouter*/
            if(!isGetterRouter){
                /*remove MainBox，换号登录先去掉之前的，然后在下面的代码中创建一个新的*/
                router.removeRoute("MainBox")
                ConfigRouter()
                next({
                    path:to.fullPath
                })
            }else {
                next()
            }

        }
    }

})

const ConfigRouter = ()=>{
    /*创建MainBox*/
    router.addRoute({
        path: '/MainBox',
        name: 'MainBox',
        component: ()=>import('@/views/MainBox.vue')
    })

    let {changeRouter} = useRouterStore()
    RouterConfig.forEach(item=>{
        if(checkPermission(item.path)){
            router.addRoute("MainBox", item)
        }
    })

    /*重定向*/
    router.addRoute("MainBox",{
        path:"/",
        redirect:"/Home"
    })

    /*404*/
    router.addRoute("MainBox",{
        path:"/:pathMatch(.*)*",
        name:"not found",
        component:()=>import('@/views/notfound/NotFound.vue')
    })

    /*console.log(router.getRoutes())*/

    changeRouter(true)
}

const checkPermission = (path:string)=>{
    const {user}= useUserStore()

    return user.role.rights.includes(path)
}

export default router
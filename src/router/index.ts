import {createRouter, createWebHashHistory} from "vue-router";

import type{RouteRecord, RouteRecordRaw} from "vue-router";

const routes:Array<RouteRecordRaw> = [
    {
        path:"/",
        component:()=>import('@/Components_page/Login.vue')
    },
    {
        path:"/Register",
        component:()=>import('@/Components_page/Register.vue')
    },
    {
        path:"/BusinessInfo",
        component:()=>import('@/Components_page/BusinessInfo.vue')
    },
    {
        path:"/BusinessList",
        component:()=>import('@/Components_page/BusinessList.vue')
    },
    {
        path:"/Index",
        component:()=>import('@/Components_page/Index.vue')
    },
    {
        path:"/Order",
        component:()=>import('@/Components_page/Order.vue')
    },
    {
        path:"/OrderList",
        component:()=>import('@/Components_page/OrderList.vue')
    },
    {
        path:"/Payment",
        component:()=>import('@/Components_page/Payment.vue')
    },
    {
        path:"/UserAddress",
        component:()=>import('@/Components_page/UserAddress.vue')
    },
    {
        path:"/AddUserAddress",
        component:()=>import('@/Components_page/AddUserAddress.vue')
    },
    {
        path:"/EditUserAddress",
        component:()=>import('@/Components_page/EditUserAddress.vue')
    },

]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router
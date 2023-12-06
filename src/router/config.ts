import Home from "@/views/home/Home.vue";

const routers = [
    {
        path:'/Home',
        component:()=>import('@/views/home/Home.vue')
    },
    {
        path:"/business/businessPage",
        component:()=>import('@/views/business/businessPage.vue')
    },
    {
        path:"/business/itemsManagement",
        component:()=>import('@/views/business/itemsManagement.vue')
    },
    {
        path:"/business/shopManagement",
        component:()=>import('@/views/business/shopManagement.vue')
    },
    {
        path:"/customer/customerPage",
        component:()=>import('@/views/customer/customerPage.vue')
    },
    {
        path:"/customer/myOrder",
        component:()=>import('@/views/customer/myOrder.vue')
    },
    {
        path:"/customer/recommend",
        component:()=>import('@/views/customer/recommend.vue')
    },

]

export default routers;
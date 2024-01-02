<script setup lang="ts">
import {useUserStore} from "@/store/useUserStore";
import {useRouter} from "vue-router";
import {useRouterStore} from "@/store/useRouterStore";
import SideMenu from "@/Components/MainBox/businessSideMenu.vue";
import TopHeader from "@/Components/MainBox/customerTopHeader.vue";

const {changeUser} = useUserStore()
const router = useRouter()
const {changeRouter} = useRouterStore()

const handleExit = ()=>{

  changeUser({})

  changeRouter(false)
  /*跳转到登陆页面*/
  router.push("/Login")
}
const toPage = (url:string)=>{
  router.push(url)
}

const changeUserString:string = localStorage.getItem('userName')!;
const userName = changeUserString
const role = parseInt(changeUserString)

</script>

<template>
  <el-header class="px-0">
    <div class="flex justify-center p-y-4 items-center px-0">
      <el-menu style="height: 6vh"
               default-active="1"
               class="el-menu-vertical-demo flex">
        <el-menu-item index="1"  @click="toPage('/customer/recommend')" class="mb-5">
          <el-icon>
            <icon-menu/>
          </el-icon>
          <span class="text-2xl font-400">店铺推荐</span>
        </el-menu-item>
        <el-menu-item index="2"  @click="toPage('/customer/myOrder')" class="mb-5">
          <el-icon> <!--这里是图标-->
            <icon-menu/>
          </el-icon>
          <span class="text-2xl font-400" >我的订单</span>
        </el-menu-item>
      </el-menu>
      <div class="flex items-center justify-center gap-x-4 absolute right-4">
        <div class="text-2xl">{{ userName }}</div>
        <el-button @click="handleExit">退出</el-button>
      </div>
    </div>


  </el-header>
</template>

<style scoped>

</style>
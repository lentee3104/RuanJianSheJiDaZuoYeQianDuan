<script setup lang="ts">


import {useUserStore} from "@/store/useUserStore";
import {useRouter} from "vue-router";
import {useRouterStore} from "@/store/useRouterStore";
import SideMenu from "@/Components/MainBox/businessSideMenu.vue";
import TopHeader from "@/Components/MainBox/businessTopHeader.vue";
import BusinessSideMenu from "@/Components/MainBox/businessSideMenu.vue";

const {changeUser} = useUserStore()
const router = useRouter()
const {changeRouter} = useRouterStore()

const handleExit = ()=>{

  changeUser({})

  changeRouter(false)
  /*跳转到登陆页面*/
  router.push("/Login")
}


// 从localStorage中获取changeUser值
const changeUserString:string = localStorage.getItem('roleType')!;
const role = parseInt(changeUserString)

</script>

<template>
<!--  <div>
    MainBox
    <el-button @click="handleExit">退出</el-button>
    <router-view></router-view>
  </div>-->
    <div class="common-layout">
      <el-container style="height: 100vh">
        <business-side-menu v-if="role===1"></business-side-menu>

        <el-container direction="vertical">
          <top-header></top-header>
          <el-main>
            <el-scrollbar><!--这是滚动条-->
              <router-view></router-view>
            </el-scrollbar>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<style scoped>

</style>
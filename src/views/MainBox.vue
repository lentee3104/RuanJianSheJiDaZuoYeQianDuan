<script setup lang="ts">


import {useUserStore} from "@/store/useUserStore";
import {useRouter} from "vue-router";
import {useRouterStore} from "@/store/useRouterStore";
import SideMenu from "@/Components/MainBox/businessSideMenu.vue";
import TopHeader from "@/Components/MainBox/customerTopHeader.vue";
import BusinessSideMenu from "@/Components/MainBox/businessSideMenu.vue";
import CustomerSideMenu from "@/Components/MainBox/customerSideMenu.vue";
import BusinessTopHeader from "@/Components/MainBox/businessTopHeader.vue";
import CustomerTopHeader from "@/Components/MainBox/customerTopHeader.vue";

const {changeUser} = useUserStore()
const router = useRouter()
const {changeRouter} = useRouterStore()

const handleExit = () => {

  changeUser({})

  changeRouter(false)
  /*跳转到登陆页面*/
  router.push("/Login")
}


// 从localStorage中获取changeUser值
const changeUserString: string = localStorage.getItem('roleType')!;
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
      <div v-if="role===1">
        <business-side-menu></business-side-menu>
      </div>
      <div v-else-if="role===2">
<!--        <customer-side-menu></customer-side-menu>-->
      </div>
      <el-container direction="vertical" class="px-0">
        <div v-if="role===1">
          <business-top-header></business-top-header>
        </div>
        <div v-else-if="role===2">
          <customer-top-header></customer-top-header>
        </div>
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
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

const changeUserString:string = localStorage.getItem('userName')!;
const userName = changeUserString
const role = parseInt(changeUserString)

</script>

<template>

  <el-header style="height: 6vh">
    <div class="flex justify-center relative p-y-4 items-center px-0">
      <div class="flex items-center justify-center gap-x-4 absolute top-1/2 right-4">
        <div class="text-2xl">{{ userName }}</div>
        <el-button @click="handleExit">退出</el-button>
      </div>
    </div>


  </el-header>
</template>

<style scoped>

</style>
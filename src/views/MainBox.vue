<script setup lang="ts">


import {useUserStore} from "@/store/useUserStore";
import {useRouter} from "vue-router";
import {useRouterStore} from "@/store/useRouterStore";

const {changeUser} = useUserStore()
const router = useRouter()
const {changeRouter} = useRouterStore()

const handleExit = ()=>{

  changeUser({})

  changeRouter(false)
  /*跳转到登陆页面*/
  router.push("/Login")
}

</script>

<template>
  <div>
    MainBox
    <el-button @click="handleExit">退出</el-button>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
import {useUserStore} from "@/store/useUserStore";
import {useRouter} from "vue-router";
import {useRouterStore} from "@/store/useRouterStore";
import SideMenu from "@/Components/MainBox/SideMenu.vue";
import TopHeader from "@/Components/MainBox/TopHeader.vue";

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
<!--  <div>header</div>-->
  <el-header>herder
    <el-button @click="handleExit">退出</el-button>
  </el-header>
</template>

<style scoped>

</style>
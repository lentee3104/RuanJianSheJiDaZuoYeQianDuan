<script setup lang="ts">
import {useUserStore} from "@/store/useUserStore";
import {useRouter} from "vue-router";
import {reactive, ref} from "vue";
import axios from "axios";

/*这边是权限管理*/
const {changeUser} = useUserStore()
const router = useRouter()

const toPage = (url:string)=>{
  router.push(url);
}

</script>

<template>
  <!--  <div class="flex-col">
      <div>Login</div>
      <el-button size="large" @click="handleLoginBusiness">登录-business</el-button>
      <el-button size="large" @click="handleLoginCustomer">登录-customer</el-button>
    </div>-->
  <div class="w-[500px] h-[300px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">

      <div class="flex-col justify-center items-center">
        <div class="flex justify-center items-center">
          软件设计与体系结构大作业
        </div>
        <div class="flex justify-center items-center">
          <el-button @click="toPage('/businessLogin')">商家身份登录</el-button>
          <el-button @click="toPage('/customerLogin')">用户身份登录</el-button>
        </div>
      </div>
  </div>


</template>

<style scoped>

</style>
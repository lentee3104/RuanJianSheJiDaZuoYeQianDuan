<script setup lang="ts">
import {useUserStore} from "@/store/useUserStore";
import {useRouter} from "vue-router";

const {changeUser} = useUserStore()

const router = useRouter()

const handleLoginBusiness = () => {
  /*设置local storage为business权限*/
  /*pinia默认存在内存，同步到本地存储进行持久化*/
  changeUser({
    "id": 1,
    "username": "business",
    "password": "123",
    "role": {
      "roleName": "商家",
      "roleType": 1,
      "rights": [
        "/Login",
        "/MainBox",
        "/Home",
        "/business/businessPage",
        "/business/itemsManagement",
        "/business/shopManagement"
      ]
    }
  })

  router.push('/')
}

const handleLoginCustomer = () => {
  /*设置local storage为customer权限*/
  changeUser({
    "id": 2,
    "username": "customer",
    "password": "123",
    "role": {
      "roleName": "顾客",
      "roleType": 2,
      "rights": [
        "/Login",
        "/MainBox",
        "/Home",
        "/customer/customerPage",
        "/customer/myOrder",
        "/customer/recommend"
      ]
    }
  })

  router.push('/')
}

</script>

<template>
  <div class="flex-col">
    <div>Login</div>
    <el-button size="large" @click="handleLoginBusiness">登录-business</el-button>
    <el-button size="large" @click="handleLoginCustomer">登录-customer</el-button>
  </div>
</template>

<style scoped>

</style>
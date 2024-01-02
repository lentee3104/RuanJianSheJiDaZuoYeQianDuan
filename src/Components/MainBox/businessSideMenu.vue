<script setup lang="ts">

import {onMounted, ref} from "vue";
import axios from "axios";
import {
  Menu as IconMenu,
  Location,
} from '@element-plus/icons-vue'
import {useRouter} from "vue-router";
import TopHeader from "@/Components/MainBox/customerTopHeader.vue";
import {useUserStore} from "@/store/useUserStore";
import {useRouterStore} from "@/store/useRouterStore";

const dataList = ref([])
const router = useRouter()

const toPage = (url: string) => {
  router.push(url)
}

const {changeUser} = useUserStore()
const {changeRouter} = useRouterStore()

const handleExit = () => {

  changeUser({})

  changeRouter(false)
  /*跳转到登陆页面*/
  router.push("/Login")
}

const changeUserString: string = localStorage.getItem('userName')!;
const userName = changeUserString
const role = parseInt(changeUserString)
</script>

<template>
  <div class="px-0 py-4 pl-4">
    <el-aside style="height: 96vh" width="200px" class="px-0">
      <el-scrollbar class="px-0">
        <div>
          <div class="text-3xl font-bold mb-5">
            商家管理系统
          </div>

          <el-menu
              class="el-menu-vertical-demo">
            <el-menu-item index="1" @click="toPage('/business/shopManagement')" class="mb-5">
              <el-icon>
                <icon-menu/>
              </el-icon>
              <span class="text-2xl font-400">我的门店</span>
            </el-menu-item>
            <el-menu-item index="2" @click="toPage('/business/itemManagement')" class="mb-5">
              <el-icon> <!--这里是图标-->
                <icon-menu/>
              </el-icon>
              <span class="text-2xl font-400">我的商品</span>
            </el-menu-item>
          </el-menu>


            <div class="flex items-center justify-center gap-x-4 absolute bottom-0 right-4">
              <div class="text-2xl">{{ userName }}</div>
              <el-button @click="handleExit">退出</el-button>
            </div>
          </div>


      </el-scrollbar>
    </el-aside>
  </div>
</template>

<style scoped>

</style>
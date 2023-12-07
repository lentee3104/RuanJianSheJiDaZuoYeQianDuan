<script setup lang="ts">
import {onMounted,ref} from "vue";
import {useRouter} from "vue-router";

const dataList = ref([])
const router = useRouter()

const toPage = (url:string)=>{
  router.push(url)
}
</script>

<template>
  <!--  <div>Side</div>-->
  <el-aside width="200px">
    <el-scrollbar>
      <div class="text-3xl font-bold">
        商家管理系统
      </div>

      <el-menu style="height: 100vh"
               default-active="1"
               class="el-menu-vertical-demo">
        <el-menu-item index="1"  @click="toPage('/customer/recommend')">
          <el-icon>
            <icon-menu/>
          </el-icon>
          <span class="text-2xl font-400">店铺推荐</span>
        </el-menu-item>
        <el-menu-item index="2"  @click="toPage('/customer/myOrder')">
          <el-icon> <!--这里是图标-->
            <icon-menu/>
          </el-icon>
          <span class="text-2xl font-400" >我的订单</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<style scoped>

</style>
<script setup lang="ts">

import {onMounted,ref} from "vue";
import axios from "axios";
import {
  Menu as IconMenu,
  Location,
} from '@element-plus/icons-vue'

const dataList = ref([])

onMounted(() => {
  getList()
})

const getList = async () => {
  var res = await axios.get("/rights.json")
  console.log(res.data)
  dataList.value = res.data
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
        <el-menu-item index="1">
          <el-icon>
            <icon-menu/>
          </el-icon>
          <span class="text-2xl font-400">我的门店</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon> <!--这里是图标-->
            <icon-menu/>
          </el-icon>
          <span class="text-2xl font-400">我的商品</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<style scoped>

</style>
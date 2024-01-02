<script setup lang="ts">
import {ref, onMounted} from 'vue';
import axios from "axios";

const itemList = ref([]);
const business_id = localStorage.getItem('businessId')

// 在组件创建时调用获取商家店铺列表数据
onMounted(() => {
  getBusinessItemList();
});

// 发送请求获取商家店铺列表数据
async function getBusinessItemList() {
  try {
    const response = await axios.post('http://localhost:5000/BusinessItemList', null, {
      params: {
        business_id: business_id
      }
    });

    //处理成功响应
    console.log("查询BusinessItemList成功");
    console.log(response.data);
    itemList.value = response.data;
  } catch (error: any) {
    // 处理错误响应
    console.error('查询BusinessItemList失败');
    console.error(error.response.data);
  }
};

// 新增店铺
let newItemName = ref("")
let newItemPrice = ref("")

async function addItem() {
  try {
    const response = await axios.post('http://localhost:5000/AddItem', null, {
      params: {
        item_name: newItemName.value,
        item_price: newItemPrice.value,
        business_id: business_id,
      }
    });

    console.log("添加商品成功");
    console.log(response.data);

    // 添加成功后重新获取商家店铺列表数据
    await getBusinessItemList();
  } catch (error: any) {
    console.error('添加商品失败');
    console.error(error.response.data);
  }
}

</script>

<template>
  <div class="flex-col w-[100%] justify-center items-center gap-y-10" style="display: flex; justify-content: center;">

    <div class="flex items-center text-2xl gap-x-16">
        <div class="flex items-center gap-x-4">
          <div class="w-auto">新增商品名称:</div>
          <el-input style="width: 200px" v-model="newItemName" type="text" required/>
        </div>
        <div class="flex items-center gap-x-4">
          <div class="w-auto">新增商品价格:</div>
          <el-input style="width: 100px" v-model="newItemPrice" type="number" required/>
        </div>
        <el-button type="primary" @click="addItem" style="font-size: 20px">添加商品</el-button>
    </div>

    <div>
      <el-table :data="itemList" style="width: 100% ;font-size: 20px">
        <el-table-column fixed align="center" type="index" label="序号" width="200"/>
        <el-table-column prop="itemName" label="itemName" align="center" width="300"/>
        <el-table-column prop="itemPrice" label="itemPrice" align="center" width="300"/>
        <el-table-column fixed="right" label="Operations" align="center" width="300">
          <template #default>
            <el-button style="font-size: 20px" link type="primary" size="large" @click="">Detail</el-button>
            <el-button style="font-size: 20px" link type="primary" size="large" @click="">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style scoped>

</style>
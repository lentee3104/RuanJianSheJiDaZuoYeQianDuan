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
    const response = await axios.post('http://localhost:5000/AddItem', null,{
      params:{
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
  <div>
    这是商品管理页面
  </div>
  <div class="flex-col items-center ">
    <div>
      <div class="flex items-center gap-x-8">
        <div class="flex items-center">
          <div class="w-[110px]">新增商品名称:</div>
          <el-input style="width: 200px" v-model="newItemName" type="text" required />
        </div>
        <div class="flex items-center">
          <div class="w-[110px]">新增商品价格:</div>
          <el-input style="width: 100px" v-model="newItemPrice" type="number" required />
        </div>
        <el-button @click="addItem">添加商品</el-button>
      </div>
    </div>

    <div v-for="item in itemList" :key="item.itemId" class="flex items-center gap-x-4">
      <p>Item ID: {{ item.itemId }}</p>
      <p>Item Name: {{ item.itemName }}</p>
      <p>Item Price: {{ item.itemPrice }}</p>
      <p>Business ID: {{ item.businessId }}</p>
<!--      <el-button @click="confirmDelete(item.itemName)">删除</el-button>-->
      <!-- 这里可以根据需要添加其他展示信息 -->
    </div>
  </div>
</template>

<style scoped>

</style>
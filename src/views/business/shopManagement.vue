<script setup lang="ts">
import {ref, onMounted} from 'vue';
import axios from "axios";

const shopList = ref([]);
const business_id = localStorage.getItem('businessId')

// 在组件创建时调用获取商家店铺列表数据
onMounted(() => {
  getBusinessShopList();
});

// 发送请求获取商家店铺列表数据
async function getBusinessShopList() {
  try {
    const response = await axios.post('http://localhost:5000/BusinessShopList', null, {
      params: {
        business_id: business_id
      }
    });

    //处理成功响应
    console.log("查询BusinessShopList成功");
    console.log(response.data);
    shopList.value = response.data;
  } catch (error: any) {
    // 处理错误响应
    console.error('登录失败');
    console.error(error.response.data);
  }
};

// 新增店铺
let newShopName = ref("")
async function addShop() {
  try {
    const response = await axios.post('http://localhost:5000/AddShop', null,{
      params:{
        shop_name: newShopName.value,
        business_id: business_id
      }
    });

    console.log("添加店铺成功");
    console.log(response.data);

    // 添加成功后重新获取商家店铺列表数据
    await getBusinessShopList();
  } catch (error: any) {
    console.error('添加店铺失败');
    console.error(error.response.data);
  }
}


/*这里是删除功能*/
const confirmDelete = () => {
  if (window.confirm('确定要删除该门店吗？')) {
    deleteShop();
  }
};

async function deleteShop (){
  // 调用删除方法，执行删除操作
  // 在这里调用后端接口或执行其他逻辑
  // 例如：axios.delete('/shops/' + shopId)
  // 删除成功后，可以执行一些操作，如重载门店列表等

};
</script>

<template>
  <div class="flex-col items-center ">
    <div>这是店铺管理页面</div>

    <form @submit.prevent="addShop">
      <label class="flex items-center">
        <div class="w-[200px]">新增门店名称</div>
        <el-input  v-model="newShopName" type="text" required />
        <el-button >添加店铺</el-button>
      </label>
    </form>

    <div v-for="shop in shopList" :key="shop.shopId" class="flex items-center gap-x-4">
      <p>Shop ID: {{ shop.shopId }}</p>
      <p>Shop Name: {{ shop.shopName }}</p>
      <p>Business ID: {{ shop.businessId }}</p>
      <el-button @click="confirmDelete">删除</el-button>
      <!-- 这里可以根据需要添加其他展示信息 -->
    </div>
  </div>

</template>

<style scoped>

</style>
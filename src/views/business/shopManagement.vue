<script setup lang="ts">
import {ref, onMounted} from 'vue';
import axios from "axios";
import router from "@/router";

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
    console.error('查询失败');
    console.error(error.response.data);
  }
};

// 新增店铺
let newShopName = ref("")

async function addShop() {
  try {
    const response = await axios.post('http://localhost:5000/AddShop', null, {
      params: {
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
const confirmDelete = (shopName: any) => {
  if (window.confirm('确定要删除该门店吗？')) {
    deleteShop(shopName);
  }
};

async function deleteShop(shopName: any) {
  try {
    const response = await axios.post('http://localhost:5000/DeleteShop', null, {
      params: {
        shop_name: shopName,
      }
    });

    console.log("删除店铺成功");
    console.log(response.data);

    // 添加成功后重新获取商家店铺列表数据
    await getBusinessShopList();
  } catch (error: any) {
    console.error('删除店铺失败');
    console.error(error.response.data);
  }
}

/*进入shop详情页管理商品部分*/
const setItem = (shop: any) => {
  router.push({
    name: 'business/shopItemControl',
    query: {
      shopId: shop.shopId.toString(),
      shopName: shop.shopName.toString(),
      businessId: shop.businessId.toString()
    }
  });
};

const orderControl = (shopId: number, shopName: string) => {
  router.push({
    name: "business/businessOrderControl",
    query: {
      shopId: shopId,
      shopName: shopName
    }
  })
}

</script>

<template>
  <div class="justify-center flex-col items-center">
      <div class="flex items-center justify-center gap-x-8 text-2xl">
        <div class="w-auto">新增门店名称</div>
        <el-input size="large" style="width: 300px" v-model="newShopName" type="text" required/>
        <el-button type="primary" size="large" @click="addShop" style="font-size: 20px">添加店铺</el-button>
      </div>

    <div class="flex justify-between flex-wrap">
      <div v-for="shop in shopList" class="flex w-[240px] h-[300px] border-purple border-2 m-8 justify-center">
        <div class="w-full h-full flex-col justify-center items-center">
          <div class="flex justify-center text-3xl my-6">
            <p>{{ shop.shopName }}</p>
          </div>
          <div class="flex justify-center my-4">
            <el-button size="large" @click="setItem(shop)">商品设置</el-button>
          </div>
          <div class="flex justify-center my-4">
            <el-button size="large" @click="orderControl(shop.shopId, shop.shopName)">查看订单</el-button>
          </div>
          <div class="flex justify-center my-4">
            <el-button size="large" @click="confirmDelete(shop.shopName)">删除门店</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
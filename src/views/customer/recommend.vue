<script setup lang="ts">
import {onMounted, ref} from "vue";
import axios from "axios";
import BusinessLogin from "@/Components/Login/businessLogin.vue";
import routers from "@/router/config";
import router from "@/router";

const shopList = ref([]);
onMounted(() => {
  getAllShopList()

});

async function getAllShopList(){
  try{
    const response = await axios.post('http://localhost:5000/AllShopList', null)

    if(response.data != null){
      console.log("获取AllShopList成功")
      shopList.value = response.data
    }
  } catch (error: any) {
    console.error('获取AllShopList失败');
    console.error(error.response.data);
  }
}

const toShop = (shopId: number) =>{
  router.push({
    name: 'customer/customerSelectItemInShop',
    query: {
      shopId: shopId.toString()
    }
  });
}

</script>

<template>
  <div>
    这是客户购买的推荐页
  </div>
  <div class="flex-col items-center ">
    <div v-for="shop in shopList" :key="shop.shopId" class="flex items-center gap-x-4">
      <p>Item ID: {{ shop.shopId }}</p>
      <p>Item Name: {{ shop.shopName }}</p>
      <p>Business ID: {{ shop.businessId }}</p>
      <el-button @click="toShop(shop.shopId)">挑选商品</el-button>
    </div>
  </div>
</template>

<style scoped>

</style>
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

const toShop = (shopId: any) =>{
  console.log("toShop(shop.shopId)" + shopId)
  localStorage.setItem("shopId", shopId)
  router.push({
    name: 'customer/customerSelectItemInShop',
    query: {
      shopId: shopId
    }
  });
}

</script>

<template>
  <div class="mt-10">
    <div>
      这是客户购买的推荐页
    </div>
    <div class="flex justify-between flex-wrap">
      <div v-for="shop in shopList" class="flex w-[240px] h-[300px] border-purple border-2 m-8 justify-center">
        <div class="w-full h-full flex-col justify-center items-center">
          <div class="flex justify-center text-3xl my-6">
            <p>{{ shop.shopId }}</p>
          </div>
          <div class="flex justify-center text-3xl my-6">
            <p>{{ shop.shopName }}</p>
          </div>
          <div class="flex justify-center text-3xl my-6">
            <el-button @click="toShop(shop.shopId)">挑选商品</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>

</style>
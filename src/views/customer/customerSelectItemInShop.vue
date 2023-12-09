<script setup lang="ts">

import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import axios from "axios";

const route = useRoute()
let shopId = route.query.shopId;

const shopItemList = ref([])

onMounted(() => {
  getShopItem()
})

async function getShopItem(){
  try{
    const response = await axios.post('http://localhost:5000/ShopItemList', null, {
      params: {
        shop_id: shopId
      }
    });

    if (response.data != null){
      console.log("查询ShopItemList成功")
      shopItemList.value = response.data
      console.log(shopItemList.value)
    }
  } catch (error: any) {
    console.error('获取ShopItemList失败');
    console.error(error.response.data);
  }
}
</script>

<template>
  <div class="flex-col items-center ">
    <div>这是用户挑选商品页面</div>
    <div v-for="shopItem in shopItemList" :key="shopItem.item.itemId" class="flex items-center gap-x-4">
<!--      <p>ID: {{ shopItem.id }}</p>
      <p>Shop ID: {{ shopItem.shop.shopId }}</p>
      <p>item ID: {{ shopItem.item.itemId }}</p>-->
      <p>item Name: {{ shopItem.item.itemName }}</p>
      <p>item Price: {{ shopItem.item.itemPrice }}</p>
      <el-button @click="">加入购物车</el-button>
      <!-- 这里可以根据需要添加其他展示信息 -->
    </div>
  </div>
</template>

<style scoped>

</style>
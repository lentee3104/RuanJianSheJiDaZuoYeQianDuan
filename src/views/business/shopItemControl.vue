<script setup lang="ts">
import router from "@/router";
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import axios from "axios";

const route = useRoute()
let shopId = route.query.shopId;
let shopName = route.query.shopName;
let businessId = route.query.businessId;

console.log(shopId)
console.log(shopName)
console.log(businessId)

const businessItemList = ref([]);
const shopItemList = ref([]);

const commonItemIds = businessItemList.value.filter(item => {
  return shopItemList.value.some(shopItem => shopItem.itemId === item.itemId);
}).map(item => item.itemId);
console.log(commonItemIds);

onMounted(() => {
  getBusinessItemList()
  getShopItemList()

});

async function getShopItemList() {
  try {
    const response = await axios.post('http://localhost:5000/ShopItemList', null, {
      params: {
        shop_id: shopId
      }
    });

    if(response!=null){
      console.log("查询ShopItemList成功")
      shopItemList.value = response.data
      console.log(shopItemList.value)
    }
  } catch (error: any) {
    console.error('获取ShopItemList失败');
    console.error(error.response.data);
  }
}

async function getBusinessItemList() {
  try {
    const response = await axios.post('http://localhost:5000/BusinessItemList', null, {
      params: {
        business_id: businessId
      }
    });
    if(response!=null){
      console.log("查询BusinessItemList成功");
      businessItemList.value = response.data;
      console.log(businessItemList.value)
    }
  } catch (error: any) {
    // 处理错误响应
    console.error('查询BusinessItemList失败');
    console.error(error.response.data);
  }
};




</script>

<template>

</template>

<style scoped>

</style>
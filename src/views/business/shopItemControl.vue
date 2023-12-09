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

    if(response.data != null){
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

const isSelected = (itemId:number)=>{
  /*Item代表 shopItemList 数组中的每个元素*/
  return shopItemList.value.some(Item => Item.item.itemId === itemId)
}

async function changeToSelected(itemId:number){
  try {
    const response = await axios.post('http://localhost:5000/AddShopItem',null,{
      params: {
        shop_id: shopId,
        item_id: itemId
      }
    });
    if (response.data != null){
      console.log("商品上架成功");

      await getBusinessItemList()
      await getShopItemList()
    }
  } catch (error: any) {
    console.error('商品上架失败');
    console.error(error.response.data);
  }
}

async function changeToUnselected(itemId:number){
  try{
    const response = await axios.post('http://localhost:5000/DeleteShopItem',null,{
      params: {
        shop_id: shopId,
        item_id: itemId
      }
    });

    if (response.data != null){
      console.log("商品下架成功");

      await getBusinessItemList()
      await getShopItemList()
    }
  } catch (error: any) {
    console.error('商品下架失败');
    console.error(error.response.data);
  }
}

</script>

<template>
  <div>
    这是商品管理页面
  </div>
  <div class="flex-col items-center ">
    <div v-for="businessItem in businessItemList" :key="businessItem.itemId" class="flex items-center gap-x-4">
      <p>Item ID: {{ businessItem.itemId }}</p>
      <p>Item Name: {{ businessItem.itemName }}</p>
      <p>Item Price: {{ businessItem.itemPrice }}</p>
      <p>Business ID: {{ businessItem.businessId }}</p>
      <div v-if="isSelected(businessItem.itemId)" class="flex gap-x-8">
        <p >上架状态：已上架</p>
        <el-button @click="changeToUnselected(businessItem.itemId)">下架</el-button>
      </div>
      <div v-else class="flex gap-x-8">
        <p >上架状态：未上架</p>
        <el-button @click="changeToSelected(businessItem.itemId)">上架</el-button>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">

import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import axios from "axios";

const route = useRoute()
const shopId = parseInt(<string>route.query.shopId)
const customerId = parseInt(localStorage.getItem("customerId") ?? '')

let orderTable = ref({})

const shopItemList = ref([])

onMounted(() => {
  getShopItem()
  getOrderTable()
})

/*获取当前shop下可以售卖的商品列表*/
async function getShopItem() {
  try {
    const response = await axios.post('http://localhost:5000/ShopItemList', null, {
      params: {
        shop_id: shopId
      }
    });

    if (response.data != null) {
      console.log("查询ShopItemList成功")
      shopItemList.value = response.data
      console.log(shopItemList.value)
    }
  } catch (error: any) {
    console.error('获取ShopItemList失败');
    console.error(error.response.data);
  }
}

/*检查当前customer在当前shop下有没有order_state=0的订单，
若没有则在查询订单的函数内部直接嵌套新建订单的功能，用户得到数据库中order_table的主键‘order_id’*/
async function getOrderTable() {
  try {
    const response = await axios.post('http://localhost:5000/FindOrderTable', null, {
      params: {
        customer_id: customerId,
        shop_id: shopId,
        order_state: 0
      }
    })
    orderTable.value = response.data
    if (orderTable.value.orderId != null) {
      console.log('获取OrderTable成功');
      console.log(response.data)
      /*orderTable.value = response.data*/
    } else {
      console.log('获取OrderTable失败，执行新增OrderTable功能');
      await createOrderTable()

    }
  } catch (error: any) {
    console.error('获取OrderTable失败，在catch处报错');
    console.error(error.response.data);
  }
}

/*在OrderTable中新增订单信息*/
async function createOrderTable() {
  try {
    const response = await axios.post('http://localhost:5000/AddOrderTable', null, {
      params: {
        customer_id: customerId,
        shop_id: shopId,
        order_state: 0
      }
    })
    orderTable.value = response.data
    /*console.log(orderTable.value)*/
    if (orderTable.value.orderId != null) {
      console.log("新增OrderTable成功")
    } else {
      console.log("新增OrderTable失败，response.data是空值")
    }
  } catch (error: any) {
    console.error('新增OrderTable失败，在catch处报错');
    console.error(error.response.data);
  }
  await getOrderTable()
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
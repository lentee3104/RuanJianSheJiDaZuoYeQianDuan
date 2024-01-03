<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import axios from "axios";
import router from "@/router";

const route = useRoute()
let orderList = ref([])
const customerId = localStorage.getItem("customerId")
const orderDetail = JSON.parse(<string>route.query.orderDetail)

/*console.log("payment"+orderId.value)*/

onMounted(() => {
  preSet()
  console.log("传来的orderDetail值为")
  console.log(orderDetail.value)
  orderList.value = orderDetail.orderListDTOList
  console.log("orderList得到的数据为")
  console.log(orderList.value)
})

async function preSet() {

}

async function payTheOrder() {
  const response = await axios.post('http://localhost:5000/AddOrderTable', null, {
    params: {
      order_id: orderDetail.orderId,
      customer_id: customerId,
      shop_id: orderDetail.shopId,
      order_state: 1,
      order_cost: orderDetail.orderCost
    }
  })
  if (response.data.length != 0) {
    alert("支付OrderTable成功")
    await router.push({
      name: 'customer/myOrder'
    })
  } else {
    console.log("支付OrderTable失败，response.data是空值")
  }
}

async function cancelTheOrder() {
  const response = await axios.post('http://localhost:5000/AddOrderTable', null, {
    params: {
      order_id: orderDetail.orderId,
      customer_id: customerId,
      shop_id: orderDetail.shopId,
      order_state: 2,
      order_cost: orderDetail.orderCost
    }
  })
  if (response.data.length != 0) {
    alert("取消OrderTable成功")
    await router.push({
      name: 'customer/myOrder'
    })
  } else {
    console.log("取消OrderTable失败，response.data是空值")
  }
}

const getSum = (quantity: number, price: number) => {
  return quantity * price
}

</script>

<template>
  <div class="border-purple border-2 p-8 text-xl mx-18 my-10">
    <div class="w-[100%] flex justify-center items-center text-3xl font-bold">
      <div>订单情况确认</div>
    </div>
    <div class="flex justify-between items-center py-4">
      <div class="text-2xl">订单号：{{ orderDetail.orderId }}</div>
    </div>


    <div class="flex-col items-center gap-y-4">
      <div v-for="item in orderList" :key="item.itemId" class="flex items-center gap-x-8 justify-center">
        <div v-if="item.itemQuantity">
          <div class="flex gap-x-8 text-2xl">
            <p class="p-2">item ID: {{ item.itemId }}</p>
            <p class="p-2">item Name: {{ item.itemName }}</p>
            <p class="p-2">item Price: {{ item.itemPrice }}元</p>
            <div class="p-2">item Quantity: {{ item.itemQuantity }}个</div>
            <div class="p-2">小计: {{ getSum(item.itemPrice, item.itemQuantity) }}元</div>
          </div>

        </div>
      </div>
      <div>
        <div>
          <div class="text-3xl text-pink absolute right-50 top-76">总价为: {{ orderDetail.orderCost }}
          </div>
        </div>
        <div class="flex pt-4 justify-center gap-x-80 mt-20">
           <el-button size="large" @click="payTheOrder()">确认支付</el-button>
          <el-button size="large" @click="cancelTheOrder()">取消支付</el-button></div>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
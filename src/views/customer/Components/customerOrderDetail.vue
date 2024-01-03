<script setup lang="ts">

import {ref, defineEmits, defineProps} from "vue";

const props = defineProps({order:{type:Object as () => customerOrderDetail}})
const emit = defineEmits([])
let detailDisplay = ref(false)

interface orderDetail {
  orderId: number;
  orderState: number;
  orderCost: number;
  customerId: number;
  shopId: number;
  shopName: string;
  customerName: string;
  orderListDTOList: OrderItem[];
}

interface OrderItem {
  orderId: number;
  itemId: number;
  itemQuantity: number;
  id: number;
}
function getInfo() {
  detailDisplay.value = !detailDisplay.value
}
</script>

<template>
  <div class="border-blue border-2 flex-col items-center p-8 my-8 mx-20 ">
    <div class="flex gap-x-8 relative items-center text-xl">
      <div>order id: {{ order.orderId }}</div>
      <div>shop name: {{ order.shopName }}</div>
      <div v-if="order.orderState===0">order state: 未支付</div>
      <div v-if="order.orderState===1">order state: 已支付，等待商家确认</div>
      <div v-if="order.orderState===2">order state: 已取消支付</div>
      <div v-if="order.orderState===3">order state: 商家已确认</div>
      <div v-if="order.orderState===4">order state: 商家已退款</div>
      <div>order orderCost: {{ order.orderCost }}</div>
      <el-button type="success" class="absolute right-4" size="large" @click="getInfo()">
        获取订单详情
      </el-button>
    </div>
    <div v-if="detailDisplay" class="border-purple border-2 mx-30 my-5">
      <div v-for="item in order?.orderListDTOList" :key="item.itemId" class="flex items-center gap-x-8 justify-center ">
        <div v-if="item.itemQuantity">
          <div class="flex gap-x-8 text-xl">
            <p class="p-2">item ID: {{ item.itemId }}</p>
            <p class="p-2">item Name: {{ item.itemName }}</p>
            <p class="p-2">item Price: {{ item.itemPrice }}元</p>
            <div class="p-2">item Quantity: {{ item.itemQuantity }}个</div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
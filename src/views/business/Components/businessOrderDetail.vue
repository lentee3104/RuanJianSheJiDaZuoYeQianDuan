<script setup lang="ts">
import {ref, defineEmits, defineProps} from "vue";
import axios from "axios";

const props = defineProps({order: {type: Object as () => customerOrderDetail}})
const emit = defineEmits(['getListOrderDetail'])
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

async function changeState(orderId: number, orderState: number, customerId: number, shopId: number, orderCost: number) {
    const response = await axios.post('http://localhost:5000/AddOrderTable', null, {
      params: {
        order_id: orderId,
        order_state: orderState,
        customer_id: customerId,
        shop_id: shopId,
        order_cost: orderCost
      }
    })
    if (response.data != null) {
      alert("操作成功")
      emit('getListOrderDetail')
    } else {
      alert("操作失败")
    }

}
</script>

<template>

  <div class="border-blue border-2 flex-col items-center p-8 my-8 mx-20 ">
    <div class="flex gap-x-8 relative items-center text-xl">
      <div>订单号： {{ order.orderId }}</div>
      <div>顾客名： {{ order.customerName }}</div>
      <div>订单总价： {{ order.orderCost }}</div>
      <div>
        <div v-if="order.orderState === 1" class="flex gap-x-4 items-center">
          <div>订单状态：顾客已付款</div>
          <el-button type="danger" @click="changeState(order.orderId, 3, order.customerId, order.shopId, order.orderState)">
            确认订单
          </el-button>
          <el-button type="danger" @click="changeState(order.orderId, 4, order.customerId, order.shopId, order.orderState)">
            退款
          </el-button>
        </div>
        <div v-if="order.orderState === 2">订单状态：顾客已取消</div>
        <div v-if="order.orderState === 3">订单状态：您已确认</div>
        <div v-if="order.orderState === 4">订单状态：您已退款</div>
      </div>

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
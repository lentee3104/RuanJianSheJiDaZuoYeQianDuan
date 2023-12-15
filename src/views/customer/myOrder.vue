<script setup lang="ts">

import axios from "axios";
import {computed, onMounted, ref} from "vue";

const customerId = parseInt(localStorage.getItem("customerId"))
let listOrderTable = ref([])
let orderListMap = new Map();

onMounted(() => {
  preSets()
})

async function preSets() {
  await getOrderTable()
  await presetOrderListMap()
}

/*根据customerId列出所有订单表*/
async function getOrderTable() {
  try {
    const response = await axios.post('http://localhost:5000/ListOrderTableByCustomerId', null, {
      params: {
        customer_id: customerId
      }
    })
    listOrderTable.value = response.data
    if (listOrderTable.value.length != 0) {
      console.log("查询订单表成功")
      console.log(listOrderTable.value)
    } else {
      console.log("查询订单表出错，在else处报错")
    }
  } catch (error: any) {
    console.error('查询订单表出错，在catch处报错');
    console.error(error.response.data);
  }

}

/*这里通过调用接口，通过order_id查每个订单的详情*/
async function getOrderListByOrderId(orderId: number) {
  const response = await axios.post('http://localhost:5000/ListOrderListByOrderId', null, {
    params: {
      order_id: orderId
    }
  })
  /*console.log("orderId在这里是：" + orderId)*/
  return response.data
}

/*通过订单表中的order_id，查找到每个order_id对应的listOrderList*/
async function presetOrderListMap() {
  console.log(listOrderTable.value[0])
  for (let i = 0; i < listOrderTable.value.length; i++) {
    const listOrderList = await getOrderListByOrderId(listOrderTable.value[i].orderId)
    if(listOrderList != null){
      orderListMap.set(listOrderTable.value[i].orderId, listOrderList)
    }

  }
}

const getOrderList = (orderId: number) => {
  return orderListMap.get(orderId);
};

const orderLists = computed(() => {
  return listOrderTable.value.map((orderListMap) => {
    return getOrderList(orderListMap.orderId);
  });
});

let detail = ref(false)

function getInfo(orderId:number){

}
</script>

<template>
  <div>
    <div>这是个人订单页面</div>

    <div>下面是展示客户订单部分</div>

    <div v-for="order in listOrderTable" :key="order.orderId"
         class="border-blue flex-col items-center gap-y-4">
      <div v-if="order.orderState" class="flex gap-x-4">
<!--        <div>order id: {{ order.orderId }}</div>-->
        <div>shop name: {{order.shop.shopName}}</div>
        <div v-if="order.orderState===0">order state: 未支付</div>
        <div v-if="order.orderState===1">order state: 已支付，等待商家确认</div>
        <div v-if="order.orderState===2">order state: 已取消支付</div>
        <div v-if="order.orderState===3">order state: 商家已退款</div>
        <div>order orderCost: {{ order.orderCost }}</div>
        <el-button @click="getInfo(order.orderId)">获取订单详情</el-button>
      </div>

    </div>

  </div>

</template>

<style scoped>

</style>
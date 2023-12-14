<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import axios from "axios";
import router from "@/router";

const route = useRoute()
let orderId = ref(parseInt(route.query.orderId))
let shopId = ref(parseInt(route.query.shopId))
let orderList = ref([])
let totalCost = ref(0.0)
let orderTable = ref({})
const customerId = parseInt(localStorage.getItem("customerId"))
/*console.log("payment"+orderId.value)*/

onMounted(() => {
  preSet()
})

async function preSet(){
  await getOrderList()
  calculateCost()
}

/*调接口查order_id下的商品购买情况*/
async function getOrderList(){
  try{
    const response = await axios.post('http://localhost:5000/ListOrderListByOrderId', null, {
      params: {
        order_id: orderId.value
      }
    })

    if(response.data != null){
      orderList.value = response.data
      console.log("查询OrderList成功")
    }else{
      console.log("response.data是空值，在else处报错")
    }
  } catch (error: any) {
    console.error('查询OrderList失败，在catch处报错');
    console.error(error.response.data);
  }
}

/*计算总共的价格*/
function calculateCost(){
  for (let i=0; i<orderList.value.length; i++){
    totalCost.value += (orderList.value[i].item.itemPrice * orderList.value[i].itemQuantity)
  }
}

async function payTheOrder(){
  console.log(orderId.value)
  console.log(customerId)
  console.log(shopId.value)
  console.log(1)
  console.log(totalCost.value)
  try {
    const response = await axios.post('http://localhost:5000/AddOrderTable', null, {
      params: {
        order_id:orderId.value,
        customer_id: customerId,
        shop_id: shopId.value,
        order_state: 1,
        order_cost: totalCost.value
      }
    })
    orderTable.value = response.data
    /*console.log(orderTable.value)*/
    if (orderTable.value.orderId != null) {
      console.log("支付OrderTable成功")
    } else {
      console.log("支付OrderTable失败，response.data是空值")
    }
  } catch (error: any) {
    console.error('支付OrderTable失败，在catch处报错');
    console.error(error.response.data);
  }
}

async function cancelTheOrder(){
  try {
    const response = await axios.post('http://localhost:5000/AddOrderTable', null, {
      params: {
        order_id:orderId.value,
        customer_id: customerId,
        shop_id: shopId.value,
        order_state: 2,
        order_cost: totalCost.value
      }
    })
    orderTable.value = response.data
    /*console.log(orderTable.value)*/
    if (orderTable.value.orderId != null) {
      console.log("取消OrderTable成功")
    } else {
      console.log("取消OrderTable失败，response.data是空值")
    }
  } catch (error: any) {
    console.error('取消OrderTable失败，在catch处报错');
    console.error(error.response.data);
  }

  await router.push({
    name: 'customer/myOrder',
    query: {
      orderId: orderId.value.toString(),
      shopId: shopId.toString()
    }
  })
}

</script>

<template>
<div>
  <div>这里是用户的payment界面</div>
  <div>订单号：{{orderId}}</div>

  <div class="flex-col items-center ">
    <div>这是用户挑选商品页面</div>
    <div v-for="item in orderList" :key="item.id"  class="flex items-center gap-x-4">
      <p>item Name: {{ item.item.itemName }}</p>
      <p>item Price: {{ item.item.itemPrice }}</p>
      <p>item Quantity: {{ item.itemQuantity }}</p>
      <p>sum: {{ item.itemQuantity*item.item.itemPrice }}</p>
    </div>
    <p>total cost: {{ totalCost }}</p>
    <el-button @click="payTheOrder()">确认支付</el-button>
    <el-button @click="cancelTheOrder()">取消订单</el-button>
  </div>
</div>
</template>

<style scoped>

</style>
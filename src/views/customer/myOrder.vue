<script setup lang="ts">

import axios from "axios";
import {onMounted, ref, computed} from "vue";

const customerId = parseInt(localStorage.getItem("customerId"))
let listOrderTable = ref([])
let orderListMap = new Map();

onMounted(()=>{
  preSets()
})

async function preSets(){
  await getOrderTable()
  await presetOrderListMap()
}

/*根据customerId列出所有订单表*/
async function getOrderTable(){
  try{
    const response = await axios.post('http://localhost:5000/ListOrderTableByCustomerId', null, {
      params: {
        customer_id: customerId
      }
    })
    listOrderTable.value = response.data
    if(listOrderTable.value.length != 0){
      console.log("查询订单表成功")
      console.log(listOrderTable.value)
    }else{
      console.log("查询订单表出错，在else处报错")
    }
  } catch (error: any) {
    console.error('查询订单表出错，在catch处报错');
    console.error(error.response.data);
  }

}

/*这里通过调用接口，通过order_id查每个订单的详情*/
async function getOrderListByOrderId(orderId:number){
  try{
    const response = await axios.post('http://localhost:5000/ListOrderListByOrderId', null, {
      params: {
        order_id: orderId
      }
    })
    const listOrderList = response.data
    if(listOrderList.length != 0){
      return listOrderList
    }else{
      console.log("获取orderList失败，在else处报错")
      return null
    }
  } catch (error: any) {
    console.error('获取orderList失败，在catch处报错');
    console.error(error.response.data);
    return null
  }
}

/*通过订单表中的order_id，查找到每个order_id对应的listOrderList*/
async function presetOrderListMap(){
  console.log(listOrderTable.value[0])
  for(let i=0; i<listOrderTable.value.length; i++){
    const listOrderList = await getOrderListByOrderId(listOrderTable.value[i].orderId)
    if(listOrderList.length != 0){
      orderListMap.set(listOrderTable.value[i].orderId, listOrderList)
    }else{
      console.log("查询order_id对应的items出错，在else处报错")
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
</script>

<template>
  <div>
    <div>这是个人订单页面</div>

    <div>下面是展示客户订单部分</div>

    <div v-for="order in listOrderTable" :key="order.orderId"
        class="border-blue flex-col items-center gap-y-4">
      <div>order id: {{ order.orderId }}</div>
      <div v-for="list in orderLists[order.orderId]" :key="list.id">
        <div> {{ list.item.itemName }} </div>
        <div> {{ list.item.itemPrice }} </div>
        <div> {{ list.itemQuantity }} </div>
      </div>

    </div>

  </div>

</template>

<style scoped>

</style>
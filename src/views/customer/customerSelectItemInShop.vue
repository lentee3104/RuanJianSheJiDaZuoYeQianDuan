<script setup lang="ts">

import {useRoute} from "vue-router";
import {onMounted, ref, computed} from "vue";
import axios from "axios";
import router from "@/router";

const route = useRoute()
const shopId = localStorage.getItem('shopId')
const customerId = localStorage.getItem('customerId')
const shopItemList = ref([])
let orderDetail = ref({})
let orderId = ref(0)
let orderTable = ref([])/*主要是为了得到order_id*/
let listOrderList = ref([])/*这里放有限数据的orderList对象数组*/
let orderCost = ref(0)

interface OrderList{
  orderId: number,
  itemId: number,
  itemQuantity: number,
  id: number,
  itemName: string,
  itemPrice: number
}

onMounted(() => {
  preSet()

})

async function preSet(){
  await getShopItem()
  await getOrderDetail()
/*  copyList()*/
}


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
    }else{
      console.error('获取ShopItemList失败, 在else');
    }
  } catch (error: any) {
    console.error('获取ShopItemList失败，在catch');
    console.error(error.response.data);
  }
}

/*检查当前customer在当前shop下有没有order_state=0的订单，
若没有则在查询订单的函数内部直接嵌套新建订单的功能，用户得到数据库中order_table的主键‘order_id’*/
async function getOrderDetail() {
  const response = await axios.post('http://localhost:5000/ListOrderDetailByCustomerIdAndShopIdAndOrderState', null, {
    params:{
      customer_id: customerId,
      shop_id: shopId,
      order_state: 0
    }
  })
  if(response.data.length != 0){
    console.log("查询OrderDetail成功")
    console.log(response.data)
    listOrderList.value = response.data[0].orderListDTOList
    orderId.value = response.data[0].orderId
    orderCost.value = response.data[0].orderCost
    orderDetail.value = response.data[0]
  }else{
    await createOrderTable()
  }
}

async function updateOrderTable() {

}

async function createOrderTable() {
  const response = await axios.post('http://localhost:5000/AddOrderTable', null, {
    params: {
      order_id: 0,
      customer_id: customerId,
      shop_id: shopId,
      order_state: 0,
      order_cost: 0
    }
  })
  if(response.data.orderId != 0){
    console.log("新建成功，下一步调用读取OrderDetail")
    await getOrderDetail()
  }else{
    console.log("新建OrderTable出错，在else出错")
  }
}


// 定义计算属性，根据 item_id 查找对应对象的 item_quantity
const getItemQuantity = (itemId: number) => {
  const matchingObject = listOrderList.value.find(item => item.itemId === itemId);
  if(matchingObject){
    return matchingObject.itemQuantity
  }
  return '0'
};

/*减少数量*/
const decreaseQuantity = (itemId: number, itemPrice:number) =>{
  const matchingObject = listOrderList.value.findIndex(item => item.itemId === itemId);
  if (matchingObject!=-1 && listOrderList.value[matchingObject].itemQuantity != 0) {
    listOrderList.value[matchingObject].itemQuantity = listOrderList.value[matchingObject].itemQuantity-1;
    orderCost.value = orderCost.value - itemPrice
  }
}

/*增加数量*/
const increaseQuantity = (itemId: number, itemPrice:number, itemName:string) =>{
  const matchingObject = listOrderList.value.findIndex(item => item.itemId === itemId);
  if (matchingObject != -1) {
    listOrderList.value[matchingObject].itemQuantity = listOrderList.value[matchingObject].itemQuantity+1;
    orderCost.value = orderCost.value + itemPrice
  }else{
    const orderList:OrderList = {
      orderId: orderId.value,
      itemId: itemId,
      itemQuantity: 1,
      id: 0,
      itemName: itemName,
      itemPrice: itemPrice
    }
    orderCost.value = orderCost.value + itemPrice
    listOrderList.value.push(orderList)
  }
}

/*将当前listOrderList中的数据save到数据库中*/
async function saveOrderList(){
  for (const item of listOrderList.value) {
    // 在这里执行针对每个对象的操作
    console.log(item);
    const response = await axios.post('http://localhost:5000/SaveOrderList', null, {
      params: {
        id: item.id,
        item_id: item.itemId,
        order_id: item.orderId,
        item_quantity: item.itemQuantity,
      }
    })
    if(response.data.length != 0){
      console.log(response.data.itemName+"保存成功")
      await saveOrderTable()
      await getOrderDetail()
    }else{
      console.log(response.data.itemName+"保存失败")
    }
  }

}

async function saveOrderTable(){
  const response = await axios.post('http://localhost:5000/AddOrderTable', null, {
    params: {
      customer_id: customerId,
      shop_id: shopId,
      order_state: 0,
      order_cost: orderCost.value,
      order_id: orderId.value
    }
  })
  if(response.data.length != 0){
    console.log("保存OrderTable成功")
  }else{
    console.log("保存OrderTable失败")
  }
}

/*跳转到支付页面*/
const toPayment = ()=>{
  saveOrderList().then(()=>{
    alert("跳转到支付页面")
    router.push({
      name: 'customer/customerPayment',
      query: {
        orderId: orderId.value,
        shopId: shopId,
        orderDetail: JSON.stringify(orderDetail.value)
      }
    })
  })
}

const getSum = (quantity: number, price: number) => {
  return quantity * price
}

</script>

<template>
  <div class="items-center border-purple border-2 text-xl p-8 ">
    <div class="flex items-center text-2xl">
      <div>这里是：</div>
      <div class="text-pink font-bold">{{ orderDetail.shopName }}</div>
      <div></div>
    </div>

    <div v-for="shopItem in shopItemList" :key="shopItem.itemId"  class="flex items-center gap-x-8 justify-center text-2xl mt-5">
      <p class="p-2">Shop ID: {{ shopItem.shopId }}</p>
      <p class="p-2">item ID: {{ shopItem.itemId }}</p>
      <p class="p-2">item Name: {{ shopItem.itemName }}</p>
      <p class="p-2">item Price: {{ shopItem.itemPrice }}</p>
      <div class="flex items-center">
        <el-button circle @click="decreaseQuantity(shopItem.itemId, shopItem.itemPrice)">-</el-button>
        <div class="p-2 text-red font-bold">{{ getItemQuantity(shopItem.itemId) }}</div>
        <el-button circle @click="increaseQuantity(shopItem.itemId, shopItem.itemPrice, shopItem.itemName)">+</el-button>
      </div>

      <!-- 这里可以根据需要添加其他展示信息 -->
      <div class="p-2">小计: {{ getSum(shopItem.itemPrice, getItemQuantity(shopItem.itemId)) }}元</div>
    </div>
    <div class="justify-center">
      <div class="p-2 text-3xl ml-270 mt-10">总价为: {{orderCost}}</div>
      <div class="flex justify-center gap-x-60">
        <el-button size="large" @click="saveOrderList()">保存当前订单信息</el-button>
        <el-button size="large" @click="toPayment()">去支付</el-button>
      </div>
    </div>


  </div>
</template>

<style scoped>

</style>
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
let sumCost = ref(0)

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
    /*在这里查OrderDetail,查到了就存储信息，没查到就使用createOrderTable*/
    /*OrderDetail可以查到*/
  const response = await axios.post('http://localhost:5000/ListOrderDetailByCustomerIdAndShopIdAndOrderState', null, {
    params: {
      customer_id: customerId,
      shop_id: shopId,
      order_state: 0
    }
  })

  if(response.data.length != 0){
    orderDetail.value = response.data
    orderId.value = response.data.orderId
    console.log("有未完成订单")
    listOrderList.value = response.data[0].orderListList
  }else{
    console.log("没有订单,需要新建")
    await createOrderTable()
  }
}

/*在OrderTable中新增订单信息*/
async function updateOrderTable() {
  try {
    const response = await axios.post('http://localhost:5000/AddOrderTable', null, {
      params: {
        order_id:orderId.value,
        customer_id: customerId,
        shop_id: shopId,
        order_state: 0,
        order_cost: sumCost.value
      }
    })
    orderTable.value = response.data
    /*console.log(orderTable.value)*/
    if (orderTable.value.orderId != null) {
      console.log("保存OrderTable成功")
      saveOrderList()
    } else {
      console.log("保存OrderTable失败，response.data是空值")
    }
  } catch (error: any) {
    console.error('保存OrderTable失败，在catch处报错');
    console.error(error.response.data);
  }
  await getOrderDetail()
}

async function createOrderTable() {
  try {
    const response = await axios.post('http://localhost:5000/AddOrderTable', null, {
      params: {
        order_id:0,
        customer_id: customerId,
        shop_id: shopId,
        order_state: 0,
        order_cost: 0.0
      }
    })
    orderTable.value = response.data
    /*console.log(orderTable.value)*/
    if (orderTable.value.orderId != null) {
      console.log("新增OrderTable成功")
      orderId.value = response.data.orderId
    } else {
      console.log("新增OrderTable失败，response.data是空值")
    }
  } catch (error: any) {
    console.error('新增OrderTable失败，在catch处报错');
    console.error(error.response.data);
  }
  await getOrderDetail()
}


// 定义计算属性，根据 item_id 查找对应对象的 item_quantity
const getItemQuantity = (itemId: number) => {
  const matchingObject = listOrderList.value.find(item => item.item_id === itemId);
  if(matchingObject){
      return matchingObject.item_quantity
  }
  return '0'
};

/*减少数量*/
const decreaseQuantity = (itemId: number, itemPrice:number) =>{
  const matchingObject = listOrderList.value.find(item => item.item_id === itemId);
  if (matchingObject && matchingObject.item_quantity!=0) {
    matchingObject.item_quantity -= 1;
    sumCost.value = sumCost.value - itemPrice
  }
}

/*增加数量*/
const increaseQuantity = (itemId: number, itemPrice:number) =>{
  const matchingObject = listOrderList.value.find(item => item.item_id === itemId);
  if (matchingObject) {
    matchingObject.item_quantity += 1;
    sumCost.value = sumCost.value + itemPrice
  }else{
    let orderList = ref<OrderList>({
      id: 0,
      order_id: orderId.value,
      item_id: 0,
      item_quantity: 0
    })
    orderList.value.item_id = itemId
    orderList.value.item_quantity = 1
    sumCost.value = sumCost.value + itemPrice
    listOrderList.value.push(orderList.value)
  }
}

/*将当前listOrderList中的数据save到数据库中*/
const saveOrderList = () =>{
  console.log("保存前listOrderList的值是：")
  console.log(listOrderList.value)
  for(let i = 0; i < listOrderList.value.length; i++){
    const list = listOrderList.value[i];
    saveOrder(list.id, list.itemId, list.orderId, list.itemQuantity)
  }
  alert("保存完成")
}

async function saveOrder(id:number, item_id:number, order_id:number, item_quantity:number){
  console.log("saveOrderList执行前")
  console.log("id:"+id+"itemId:"+item_id+"itemQuantity"+item_quantity)
  const response = await axios.post('http://localhost:5000/SaveOrderList', null, {
    params:{
      id: id,
      item_id: item_id,
      order_id: orderId.value,
      item_quantity: item_quantity
    }
  })
  if(response.data != null){
    console.log(response.data)
    console.log("插入orderList数据成功")
  }else{
    console.log("插入orderList数据失败，在else失败")
  }
}

/*跳转到支付页面*/
const toPayment = ()=>{
  console.log("跳转之前的orderId是：" + orderId.value)
  saveOrderList()

  router.push({
    name: 'customer/customerPayment',
    query: {
      orderId: orderId.value.toString(),
      shopId: shopId
    }
  })
}

</script>

<template>
  <div class="flex-col items-center ">
    <div>这是用户挑选商品页面</div>
    <div v-for="shopItem in shopItemList" :key="shopItem.itemId"  class="flex items-center gap-x-4">
      <!--      <p>ID: {{ shopItem.id }}</p>
            <p>Shop ID: {{ shopItem.shop.shopId }}</p>
            <p>item ID: {{ shopItem.item.itemId }}</p>-->
      <p>item Name: {{ shopItem.itemName }}</p>
      <p>item Price: {{ shopItem.itemPrice }}</p>
      <el-button circle @click="decreaseQuantity(shopItem.itemId, shopItem.itemPrice)">-</el-button>
      <div>{{ getItemQuantity(shopItem.itemId) }}</div>
      <el-button circle @click="increaseQuantity(shopItem.itemId, shopItem.itemPrice)">+</el-button>
      <!-- 这里可以根据需要添加其他展示信息 -->
    </div>
    <div>总价为{{sumCost}}</div>
    <el-button @click="updateOrderTable()">保存当前订单信息</el-button>
    <el-button @click="toPayment()">去支付</el-button>
  </div>
</template>

<style scoped>

</style>
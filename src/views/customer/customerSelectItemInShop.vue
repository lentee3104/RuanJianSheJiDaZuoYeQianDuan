<script setup lang="ts">

import {useRoute} from "vue-router";
import {onMounted, ref, computed} from "vue";
import axios from "axios";
import router from "@/router";

const route = useRoute()
const shopId = parseInt(<string>route.query.shopId)
const customerId = parseInt(localStorage.getItem("customerId") ?? '')
const shopItemList = ref([])
let orderId = ref(0)
let orderTable = ref({})/*主要是为了得到order_id*/
let listOrderList = ref<OrderList[]>([])/*这里放有限数据的orderList对象数组*/
let previousList = ref([])/*这里放用order_id从后端查到的有很多数据的OrderList*/
interface OrderList {
  id: number,
  order_id: number,
  item_id: number,
  item_quantity: number
}

onMounted(() => {
  preSet()

})

async function preSet(){
  await getShopItem()
  await getOrderTable()
  await getPreviousList()
  copyList()
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
      orderId.value = orderTable.value.orderId
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

/*获取当前order_id下的所有order_list数据，为了查到之前客户下单时没有支付的数据*/
async function getPreviousList(){
  console.log("orderId在这里是："+orderTable.value.orderId)
  try{
    const response = await axios.post('http://localhost:5000/ListOrderListByOrderId', null, {
      params: {
        order_id: orderId.value
      }
    })

    if(response.data != null){
      previousList.value = response.data
      console.log('获取previousList成功')
    }else{
      console.log('获取previousList失败，在else处失败');
    }
  } catch (error: any) {
    console.error('获取previousList失败，在catch处报错');
    console.error(error.response.data);
  }
}

/*这是将previousList里面的返回值解构，赋值给listOrderList进行展示*/
const copyList = () =>{
  for (let i = 0; i < previousList.value.length; i++){
    const list = previousList.value[i];
    const { id, itemQuantity, item, orderTable } = list
    const { itemId } = item
    const { orderId } = orderTable
    let orderList = ref<OrderList>({
      id: id,
      order_id: orderId,
      item_id: itemId,
      item_quantity: itemQuantity
    })
    listOrderList.value.push(orderList.value)
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

// 定义计算属性，根据 item_id 查找对应对象的 item_quantity
const getItemQuantity = (itemId: number) => {
  const matchingObject = listOrderList.value.find(item => item.item_id === itemId);
  if(matchingObject){
    if(matchingObject.item_quantity == 0){
      const matchingIndex = listOrderList.value.findIndex(item => item.item_id === itemId)
      listOrderList.value.splice(matchingIndex, itemId);
      return 0
    }else {
      return matchingObject.item_quantity
    }
  }
  return 0
};

/*减少数量*/
const decreaseQuantity = (itemId: number) =>{
  const matchingObject = listOrderList.value.find(item => item.item_id === itemId);
  if (matchingObject && matchingObject.item_quantity!=0) {
    matchingObject.item_quantity -= 1;
  }
}

/*增加数量*/
const increaseQuantity = (itemId: number) =>{
  const matchingObject = listOrderList.value.find(item => item.item_id === itemId);
  if (matchingObject) {
    matchingObject.item_quantity += 1;
  }else{
    let orderList = ref<OrderList>({
      id: 0,
      order_id: orderId.value,
      item_id: 0,
      item_quantity: 0
    })
    orderList.value.item_id = itemId
    orderList.value.item_quantity = 1
    listOrderList.value.push(orderList.value)
  }
}

/*将当前listOrderList中的数据save到数据库中*/
const saveOrderList = () =>{
  for(let i = 0; i < listOrderList.value.length; i++){
    const list = listOrderList.value[i];
    saveOrder(list.id, list.item_id, list.order_id, list.item_quantity)
  }
  alert("保存完成")
}

async function saveOrder(id:number, item_id:number, order_id:number, item_quantity:number){
  const response = await axios.post('http://localhost:5000/SaveOrderList', null, {
    params:{
      id: id,
      item_id: item_id,
      order_id: order_id,
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
const toPayment = () =>{
  console.log(JSON.stringify(listOrderList));
  /*router.push({
    name: 'customer/customerPayment.vue',
    query: {

    }
  })*/
}

</script>

<template>
  <div class="flex-col items-center ">
    <div>这是用户挑选商品页面</div>
    <div v-for="shopItem in shopItemList" :key="shopItem.item.itemId"  class="flex items-center gap-x-4">
      <!--      <p>ID: {{ shopItem.id }}</p>
            <p>Shop ID: {{ shopItem.shop.shopId }}</p>
            <p>item ID: {{ shopItem.item.itemId }}</p>-->
      <p>item Name: {{ shopItem.item.itemName }}</p>
      <p>item Price: {{ shopItem.item.itemPrice }}</p>
      <el-button circle @click="decreaseQuantity(shopItem.item.itemId)">-</el-button>
      <div>{{ getItemQuantity(shopItem.item.itemId) }}</div>
      <el-button circle @click="increaseQuantity(shopItem.item.itemId)">+</el-button>
      <!-- 这里可以根据需要添加其他展示信息 -->
    </div>
    <el-button @click="saveOrderList()">保存当前订单信息</el-button>
    <el-button @click="toPayment()">去支付</el-button>
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">

import axios from "axios";
import {computed, onMounted, ref} from "vue";
import OrderDetail from "@/views/customer/Components/customerOrderDetail.vue";

const customerId = parseInt(localStorage.getItem("customerId"))
/*let ListOrderDetail = ref([])*/
const ListOrderDetail = ref<OrderDetail[]>([]);
let orderListMap = new Map();
let displayType = ref(0)

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

onMounted(() => {
  preSets()
})

async function preSets() {
  await getOrderTable().then(() => {
    presetOrderListMap()
  })
}


/*根据customerId列出所有订单表*/
async function getOrderTable() {
  try {
    const response = await axios.post('http://localhost:5000/ListOrderDetailByCustomerId', null, {
      params: {
        customer_id: customerId
      }
    })
    ListOrderDetail.value = response.data
    if (ListOrderDetail.value.length != 0) {
      console.log("查询订单表成功")
      console.log(ListOrderDetail.value)
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
  console.log(ListOrderDetail.value[0])
  for (let i = 0; i < ListOrderDetail.value.length; i++) {
    const listOrderList = await getOrderListByOrderId(ListOrderDetail.value[i].orderId)
    if (listOrderList != null) {
      orderListMap.set(ListOrderDetail.value[i].orderId, listOrderList)
    }

  }
}

const getOrderList = (orderId: number) => {
  return orderListMap.get(orderId);
};

const orderLists = computed(() => {
  return ListOrderDetail.value.map((orderListMap) => {
    return getOrderList(orderListMap.orderId);
  });
});

let detail = ref(false)

function getInfo(orderId: number) {

}

function changeDisplay(type: number) {
  displayType.value = type
}
</script>

<template><!--/*0未支付，1已支付，2顾客取消，3商家已确认，4商家退款*/-->
  <div class="flex justify-center gap-x-16 mt-10">
    <el-button type="primary" size="large" @click="changeDisplay(0)">所有账单</el-button>
    <el-button type="primary" size="large" @click="changeDisplay(1)">未支付订单</el-button>
    <el-button type="primary" size="large" @click="changeDisplay(2)">商家已确认</el-button>
    <el-button type="primary" size="large" @click="changeDisplay(3)">等待确认账单</el-button>
    <el-button type="primary" size="large" @click="changeDisplay(4)">已退款订单</el-button>
    <el-button type="primary" size="large" @click="changeDisplay(5)">已取消订单</el-button>
  </div>
  <div class="mt-4">
    <div v-if="displayType===0">
      <div v-for="(order, index) in ListOrderDetail" :key="index">
        <div v-if="order.orderCost!==0 && order.orderState!==0">
          <order-detail :order="order"></order-detail>
        </div>
      </div>
      <!--      <div v-if="order.orderState" class="flex gap-x-4">
              <div>order id: {{ order.orderId }}</div>
              <div>shop name: {{order.shopName}}</div>
              <div v-if="order.orderState===0">order state: 未支付</div>
              <div v-if="order.orderState===1">order state: 已支付，等待商家确认</div>
              <div v-if="order.orderState===2">order state: 已取消支付</div>
              <div v-if="order.orderState===3">order state: 商家已退款</div>
              <div>order orderCost: {{ order.orderCost }}</div>
              <el-button @click="getInfo(order.orderId)">获取订单详情</el-button>
            </div>
            <div v-else class="flex gap-x-4">
              <div>order id: {{ order.orderId }}</div>
              <div>shop name: {{order.shopName}}</div>
              <div v-if="order.orderState===0">order state: 未支付</div>
              <div v-if="order.orderState===1">order state: 已支付，等待商家确认</div>
              <div v-if="order.orderState===2">order state: 已取消支付</div>
              <div v-if="order.orderState===3">order state: 商家已退款</div>
              <div>order orderCost: {{ order.orderCost }}</div>
              <el-button @click="getInfo(order.orderId)">获取订单详情</el-button>
            </div>-->

    </div>
    <div v-else-if="displayType===1">
      <div v-for="(order, index) in ListOrderDetail" :key="index">
        <div v-if="order.orderCost!==0 && order.orderState==0">
          <order-detail :order="order"></order-detail>
        </div>
      </div>
    </div>
    <div v-else-if="displayType===2">
      <div v-for="(order, index) in ListOrderDetail" :key="index">
        <div v-if="order.orderCost!==0 && order.orderState==3">
          <order-detail :order="order"></order-detail>
        </div>
      </div>
    </div>
    <div v-else-if="displayType===3">
      <div v-for="(order, index) in ListOrderDetail" :key="index">
        <div v-if="order.orderCost!==0 && order.orderState==1">
          <order-detail :order="order"></order-detail>
        </div>
      </div>
    </div>
    <div v-else-if="displayType===4">
      <div v-for="(order, index) in ListOrderDetail" :key="index">
        <div v-if="order.orderCost!==0 && order.orderState==4">
          <order-detail :order="order"></order-detail>
        </div>
      </div>
    </div>
    <div v-else-if="displayType===5">
      <div v-for="(order, index) in ListOrderDetail" :key="index">
      <div v-if="order.orderCost!==0 && order.orderState==2">
        <order-detail :order="order"></order-detail>
      </div>
    </div>
    </div>

  </div>

</template>

<style scoped>

</style>
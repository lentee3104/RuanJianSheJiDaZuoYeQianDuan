<script setup lang="ts">
/*在这里要用shop_id找到所有的订单情况，并显示state不为0的所有订单*/
/*并且需要用后端save功能，当商家可以将1状态（顾客已支付）改为3状态（商家已确认）或者改为4状态（商家已退款）*/

/*根据shop_id查找当前门店下所有的订单情况。*/
import axios from "axios";
import {useRoute} from "vue-router";
import {onMounted, reactive, ref} from "vue";


const route = useRoute()
const shopId = parseInt(route.query.shopId)
const shopName = route.query.shopName
const listOrderTable = ref([])

onMounted(()=>{
  getListOrderTable()
})

async function getListOrderTable(){
  const response = await axios.post('http://localhost:5000/FindListOrderTableByShopId', null, {
    params: {
      shop_id: shopId
    }
  })
  listOrderTable.value = response.data

}

async function changeState(orderId:number, orderState:number, customerId:number, shopId:number, orderCost:number){
  try{
    const response = await axios.post('http://localhost:5000/AddOrderTable', null, {
      params: {
        order_id: orderId,
        order_state: orderState,
        customer_id: customerId,
        shop_id: shopId,
        order_cost: orderCost
      }
    })
    if(response.data != null){
      alert("操作成功")
      await getListOrderTable()
    }else{
      alert("操作失败")
    }
  } catch (error: any) {
    console.error('修改订单状态失败，在catch处报错');
    console.error(error.response.data);
  }

}
</script>

<template>
  <div>
    <div>这里是商家查看 {{ shopName }} 门店的订单信息页面</div>

    <div>
      <div v-for="order in listOrderTable" :key="order.orderId"
      class="items-center">
        <div v-if="order.orderState != 0" class="flex gap-x-4 items-center">
          <div>订单号： {{ order.orderId }} </div>
          <div>顾客名： {{ order.customer.customerName }} </div>
          <div>订单总价： {{ order.orderCost }} </div>
          <div>订单状态： {{ order.orderState }} </div>
          <div>
            <div v-if="order.orderState === 1" class="flex gap-x-4 items-center">
              <div>订单状态：顾客已付款</div>
              <el-button @click="changeState(order.orderId, 3, order.customer.customerId, shopId, order.orderState)">确认订单</el-button>
              <el-button @click="changeState(order.orderId, 4, order.customer.customerId, shopId, order.orderState)">退款</el-button>
            </div>
            <div v-if="order.orderState === 2">订单状态：顾客已取消</div>
            <div v-if="order.orderState === 3">订单状态：您已确认</div>
            <div v-if="order.orderState === 4">订单状态：您已退款</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
/*在这里要用shop_id找到所有的订单情况，并显示state不为0的所有订单*/
/*并且需要用后端save功能，当商家可以将1状态（顾客已支付）改为3状态（商家已确认）或者改为4状态（商家已退款）*/

/*根据shop_id查找当前门店下所有的订单情况。*/
import axios from "axios";
import {useRoute} from "vue-router";
import {onMounted, reactive, ref} from "vue";
import BusinessOrderDetail from "@/views/business/Components/businessOrderDetail.vue";


const route = useRoute()
const shopId = parseInt(route.query.shopId)
const shopName = route.query.shopName
const listOrderDetail = ref([])

onMounted(() => {
  getListOrderDetail()
})

async function getListOrderDetail() {
  const response = await axios.post('http://localhost:5000/ListOrderDetailByShopId', null, {
    params: {
      shop_id: shopId
    }
  })
  listOrderDetail.value = response.data

}
</script>

<template>
  <div>
    <div class="flex text-3xl items-center justify-center">
      <div>这里是商家查看 </div>
      <div class="text-pink font-bold"> {{ shopName }} </div>
      <div> 门店的订单信息页面</div>
    </div>

    <div>
      <div v-for="order in listOrderDetail" :key="order.orderId"
           class="items-center">
        <div v-if="order.orderState !== 0">
          <business-order-detail :order="order" @get-list-order-detail="getListOrderDetail()"></business-order-detail>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
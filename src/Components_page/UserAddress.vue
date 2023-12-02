<script setup lang="ts">

import {inject} from "vue";
import{ref} from "vue";
import type {IAddressService} from "@/Types/IAddressService";
import {useRouter} from "vue-router";
import AddressItem from "@/Components_page/AddressItem.vue";


const addressService = inject<IAddressService>('addressService')!


const router = useRouter()

const toPage = (url:string)=>{
  router.push(url)
}
</script>

<template>
  <div class="w-full h-full flex-col">

    <!--header部分-->
    <div class="w-full h-14 bg-[#0097FFFF] text-white text-3xl fixed left-0 top-0 z-50 font-bold
    flex justify-center items-center">
      <p>地址管理</p>
    </div>
    <div class="mt-14">
      <!--展示已有地址-->
      <div>
        <address-item v-for="(item, index) in addressService.getAddress()"
                      :item="item"
                      :item-index="index">
        </address-item>
      </div>

      <!--新增地址-->
      <div class="w-full flex-col h-20 flex box-border py-[4vw] px-[3vw] justify-center items-center mt-2">
        <button class="w-full h-full text-2xl font-bold text-white bg-[#38CA73FF] rounded-[4px]"
                @click="toPage('/AddUserAddress')">新增收货地址</button>
      </div>
    </div>





    </div>
</template>

<style scoped>

</style>
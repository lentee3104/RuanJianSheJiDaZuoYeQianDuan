<script setup lang="ts">


import {inject, ref} from "vue";
import type {IAddressService} from "@/Types/IAddressService";
import {useRouter} from "vue-router";
import Index from "@/Components_page/Index.vue";

const props = defineProps(['item', 'itemIndex'])
const addressService = inject<IAddressService>('addressService')

const router = useRouter()

const toPage = (url:string)=>{
  router.push(url)
}
</script>

<template>
  <div class="flex-col w-full h-full border-b-gray border-b-1 p-2">
    <!--  姓名和电话号-->
    <div class="w-full flex items-center justify-between">
      <div class="pr-4">
        <div class="text-2xl flex">{{ props.item.name }}{{ props.item.sex }}</div>
        <div class="text-xl">{{ props.item.number }}</div>
        <div class="text-xl flex">
          <div>{{ props.item.address }}</div>
        </div>
      </div>

      <div class="w-24 h-20 flex items-center justify-around p-2">
        <button class="w-6 h-6 bg-red" @click="toPage('/EditUserAddress')"></button>
        <button class="w-6 h-6 bg-green" @click="addressService.deleteAddress(itemIndex)"></button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
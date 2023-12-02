<script setup lang="ts">

import {useRouter} from "vue-router";
import Bottom from "@/Components_single/Bottom.vue";

const router = useRouter()

const toPage = (url:string)=>{
  router.push(url)
}
</script>

<template>
  <div class="w-full h-full">

    <!--header部分-->
    <header class="w-full h-14 bg-[#0097FFFF] text-white text-3xl fixed left-0 top-0 z-50 font-bold
    flex justify-center items-center">
      <p class="">我的订单</p>
    </header>

    <!--订单列表部分-->
    <h3 class=" mt-18 box-border p-[4vw] text-xl font-light text-[#999999FF]">未支付订单信息：</h3>
    <ul class="w-full">
      <li class="w-full text-2xl">
        <div class="box-border py-[2vw] px-[4vw] text-[#666666FF] flex justify-between items-center text-lg">
          <p class="flex flex-row justify-between items-center ">
            万家饺子（软件园E18店）
            <svg class="fa-caret-down" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="m24 12l-8 10l-8-10z"/></svg>
          </p>
          <div class="flex">
            <p class="">&#165;49</p>
            <button class="bg-[#FF9900FF] text-white rounded-[3px] ml-4 select-none cursor-pointer"
              @click="toPage('/Payment')">去支付</button>
          </div>
        </div>
        <ul  class="w-full order-detailet" style="display: none">
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p  class="">纯肉鲜肉（水饺） x 2</p>
            <p class="">&#165;15</p>
          </li>
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">玉米鲜肉（水饺） x 1</p>
            <p class="">&#165;16</p>
          </li>
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">配送费</p>
            <p class="">&#165;3</p>
          </li>
        </ul>
      </li>

      <li class="w-full text-3xl">
        <div class="box-border py-[2vw] px-[4vw]  text-[#666666FF] flex justify-between items-center text-lg">
          <p class="flex flex-row justify-between items-center">
            小锅饭豆腐馆（全运店）
            <svg class="fa-caret-down" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="m24 12l-8 10l-8-10z"/></svg>
          </p>
          <div class="flex">
            <p class="">&#165;55</p>
            <button class="bg-[#FF9900FF] text-white rounded-[3px] ml-4 select-none cursor-pointer"
                    @click="toPage('/Payment')">去支付</button>
          </div>
        </div>
        <ul class="w-full order-detailet" style="display: none">
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">纯肉鲜肉（水饺） x 2</p>
            <p class="">&#165;15</p>
          </li>
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">玉米鲜肉（水饺） x 1</p>
            <p class="">&#165;16</p>
          </li>
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">配送费</p>
            <p class="">&#165;3</p>
          </li>
        </ul>
      </li>
    </ul>

    <h3 class=" mt-24 box-border p-[4vw] text-xl font-light text-[#999999FF]">已支付订单信息：</h3>
    <ul class="w-full">
      <li class="w-full text-3xl">
        <div class="box-border py-[2vw] px-[4vw]  text-[#666666FF] flex justify-between items-center text-lg">
          <p class="flex flex-row justify-between items-center">
            万家饺子（软件园E18店）
            <svg class="fa-caret-down" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="m24 12l-8 10l-8-10z"/></svg>
          </p>
          <div class="flex">
            <p class="">&#165;49</p>
            <button class="bg-[#FF9900FF] text-white rounded-[3px] ml-4 select-none cursor-pointer" onclick="location.href='order.html'">去支付</button>
          </div>
        </div>
        <ul class="w-full order-detailet" style="display: none">
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">纯肉鲜肉（水饺） x 2</p>
            <p class="">&#165;15</p>
          </li>
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">玉米鲜肉（水饺） x 1</p>
            <p class="">&#165;16</p>
          </li>
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">配送费</p>
            <p class="">&#165;3</p>
          </li>
        </ul>
      </li>

      <li class="w-full text-3xl">
        <div class="box-border py-[2vw] px-[4vw]  text-[#666666FF] flex justify-between items-center text-lg">
          <p class="flex flex-row justify-between items-center">
            小锅饭豆腐馆（全运店）
            <svg class="fa-caret-down" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="m24 12l-8 10l-8-10z"/></svg>
          </p>
          <div class="flex">
            <p class="">&#165;55</p>
            <button class="bg-[#FF9900FF] text-white rounded-[3px] ml-4 select-none cursor-pointer" onclick="location.href='order.html'">去支付</button>
          </div>
        </div>
        <ul class="w-full order-detailet" style="display: none">
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">纯肉鲜肉（水饺） x 2</p>
            <p class="">&#165;15</p>
          </li>
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">玉米鲜肉（水饺） x 1</p>
            <p class="">&#165;16</p>
          </li>
          <li class="w-full box-border py-[1vw] px-[4vw] text-[#666666FF] text-xl flex justify-between items-center">
            <p class="">配送费</p>
            <p class="">&#165;3</p>
          </li>
        </ul>
      </li>
    </ul>

    <!--底部菜单部分-->
    <Bottom></Bottom>

  </div>
</template>

<style scoped>

</style>
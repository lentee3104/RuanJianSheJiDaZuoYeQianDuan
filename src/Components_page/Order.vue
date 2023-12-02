<script setup lang="ts">
import {useRouter} from "vue-router";

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
      <p>确认订单</p>
    </header>

    <!--订单信息部分-->
    <div class="w-full mt-14 bg-[#0097FFFF] box-border p-[2vw] text-white">
      <p class="text-xl font-light">订单配送至：</p>
      <div class="w-full flex justify-between items-center font-bold select-none cursor-pointer my-1 mx-0"
        @click="toPage('/UserAddress')">
        <p class="w-[90%] text-xl">沈阳市浑南区智慧四街1-121号</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.54 11.29L9.88 5.64a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.41l4.95 5L8.46 17a1 1 0 0 0 0 1.41a1 1 0 0 0 .71.3a1 1 0 0 0 .71-.3l5.66-5.65a1 1 0 0 0 0-1.47Z"/></svg>
      </div>
      <p class="text2xl">习近平先生 13656785432</p>
    </div>

    <p class="box-border p-[3vw] text-xl font-bold text-[#666666FF] border-solid border-b-[1px] border-b-[#DDDDDDFF]">万家饺子（软件园E18店）</p>

    <!--订单明细部分-->
    <ul class="w-full px-2">
      <li class="w=full box-border px-1 py-2 select-none flex justify-between items-center">
        <div class="w-full flex items-center justify-between">
          <img class="w-18 h-18" src="/src/assets/img/sp01.png">
            <h3 class="text-lg font-semibold text-gray-600">纯肉鲜肉（水饺） x 2</h3>
          <div class="text-xl ">&#165;15</div>
        </div>
      </li>
      <li class="w=full box-border px-1 py-2 select-none flex justify-between items-center">
        <div class="w-full flex items-center justify-between">
          <img class="w-18 h-18" src="/src/assets/img/sp01.png">
          <h3 class="text-lg font-semibold text-gray-600">纯肉鲜肉（水饺） x 2</h3>
          <div class="text-xl ">&#165;15</div>
        </div>
      </li>
      <li class="w=full box-border px-1 py-2 select-none flex justify-between items-center">
        <div class="w-full flex items-center justify-between">
          <img class="w-18 h-18" src="/src/assets/img/sp01.png">
          <h3 class="text-lg font-semibold text-gray-600">纯肉鲜肉（水饺） x 2</h3>
          <div class="text-xl ">&#165;15</div>
        </div>
      </li>
    </ul>
    <div class="w-full h-20 box-border p-[3vw] text-[#666666FF] flex justify-between items-center text-xl">
      <p class="">配送费</p>
      <p class="">&#165;3</p>
    </div>

    <!--合计部分-->
    <div class="w-full h-18 fixed left-0 bottom-0 flex">
      <div class="flex basis-2/3 bg-[#505051FF] text-white text-2xl font-bold select-none justify-center items-center">&#165;49</div>
      <div class="flex basis-1/3 bg-[#38CA73FF] text-white text-2xl font-bold select-none cursor-pointer justify-center items-center"
           @click="toPage('/Payment')">去支付</div>
    </div>
  </div>
</template>

<style scoped>

</style>
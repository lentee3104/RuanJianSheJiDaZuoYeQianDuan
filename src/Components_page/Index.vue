<script setup lang="ts">
import {useRouter} from "vue-router";
import Bottom from "@/Components_single/Bottom.vue";

const router = useRouter()

const toPage = (url:string)=>{
  router.push(url)
}
</script>

<template>
  <!--总容器-->
  <div class="w-full h-full">
    <!--herder部分-->
    <header class="w-full h-14 bg-blue-500 flex items-center">
      <div class="flex my-0 mr-1 ml-2 text-white items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><path d="M13 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"/><path d="M17.5 9.5c0 3.038-2 6.5-5.5 10.5c-3.5-4-5.5-7.462-5.5-10.5a5.5 5.5 0 1 1 11 0Z"/></g></svg>
        <div class="text-2xl font-bold text-white">沈阳市规划大厦</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="m24 12l-8 10l-8-10z"/></svg>
      </div>
    </header>

    <!--search部分-->
    <div class="w-full h-20 bg-blue-500 flex justify-center items-center px-6" id="fixedBox">
      <!--搜索框中间的白框-->
      <div class="w-full h-10 bg-white rounded-md flex justify-center items-center text-lg text-gray-400 select-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 1200 1200"><path fill="currentColor" d="M672.633 0C389.326 0 159.634 229.652 159.634 512.958c0 100.662 28.986 194.563 79.083 273.79c-.368.16-.729.305-1.098.471l-223.21 223.172L204.019 1200l231.249-231.288c-.069-.326-.162-.651-.234-.979c71.035 37.19 151.865 58.224 237.6 58.224c283.309 0 512.959-229.69 512.959-512.997C1185.59 229.652 955.939 0 672.633 0zm0 227.877c157.441 0 285.041 127.639 285.041 285.081s-127.6 285.081-285.041 285.081c-157.442 0-285.082-127.639-285.082-285.081S515.19 227.877 672.633 227.877z"/></svg>
        <div class="ml-2">搜索饿了么商家、商品名称</div>
      </div>
    </div>

    <!--点餐部分-->
    <div class="px-2"><!--给搜索底下的位置加上一个px-2的限制，来确保对两边有空间-->
      <div class="">
        <ul class="w-full h-full flex flex-wrap justify-around mt-8 text-sm">
          <li class="w-20 h-22 flex flex-col justify-center items-center select-none cursor-pointer">
            <img class="w-14 h-14" src="assets/img/dcfl01.png">
            <p class=" text-gray-500">美食</p>
          </li>

          <li class="w-20 h-22 flex flex-col justify-center items-center select-none cursor-pointer">
            <img class="w-14 h-14" src="assets/img/dcfl02.png">
            <p class=" text-gray-500">早餐</p>
          </li>

          <li class="w-20 h-22 flex flex-col justify-center items-center select-none cursor-pointer">
            <img class="w-14 h-14" src="assets/img/dcfl03.png">
            <p class=" text-gray-500">跑腿代购</p>
          </li>

          <li class="w-20 h-22 flex flex-col justify-center items-center select-none cursor-pointer">
            <img class="w-14 h-14" src="assets/img/dcfl04.png">
            <p class=" text-gray-500">汉堡披萨</p>
          </li>

          <li class="w-20 h-22 flex flex-col justify-center items-center select-none cursor-pointer">
            <img class="w-14 h-14" src="assets/img/dcfl05.png">
            <p class=" text-gray-500">甜品饮品</p>
          </li>
        </ul>

        <ul class="w-full h-full flex flex-wrap justify-around mt-2 text-sm">
          <li class="w-20 h-22 flex flex-col justify-center items-center select-none cursor-pointer">
            <img class="w-14 h-14" src="assets/img/dcfl06.png">
            <p class=" text-gray-500">速食简餐</p>
          </li>

          <li class="w-20 h-22 flex flex-col justify-center items-center select-none cursor-pointer">
            <img class="w-14 h-14" src="assets/img/dcfl07.png">
            <p class=" text-gray-500">地方小吃</p>
          </li>

          <li class="w-20 h-22 flex flex-col justify-center items-center select-none cursor-pointer">
            <img class="w-14 h-14" src="assets/img/dcfl08.png">
            <p class=" text-gray-500">米粉面馆</p>
          </li>

          <li class="w-20 h-22 flex flex-col justify-center items-center select-none cursor-pointer">
            <img class="w-14 h-14" src="assets/img/dcfl09.png">
            <p class=" text-gray-500">包子粥铺</p>
          </li>

          <li class="w-20 h-22 flex flex-col justify-center items-center select-none cursor-pointer">
            <img class="w-14 h-14" src="assets/img/dcfl10.png">
            <p class=" text-gray-500">炸鸡炸串</p>
          </li>
        </ul>
      </div>


      <!--横幅广告部份-->
      <div class="w-full h-30 px-2 mt-8 bg-no-repeat bg-cover bg-right bg-[url('/src/assets/img/index_banner.png')]">
        <div class="ml-8 mt-2 py-2">
          <div class="text-xl font-semibold">品质套餐</div>
          <p class="text-sm text-gray-600">搭配齐全吃得好</p>
          <a class="text-sm text-orange-400 font-bold ">立即抢购 &gt;</a>
        </div>
      </div>

      <!--超级会员部分-->
      <div class="w-full h-13 mt-3 bg-[#FEEDC1FF] rounded-md text-[#644F1BFF] flex items-center select-none justify-between px-6">
        <div class="flex items-center">
          <img class="w-6 h-6" src="assets/img/super_member.png">
          <h3 class="text-lg font-semibold ml-4 mr-2">超级会员</h3>
          <p class="text-xs">&#8226; 每月享超值权益</p>
        </div>
        <div class="text-xs cursor-pointer">立即开通 &gt;</div>
      </div>

      <!--推荐商家部分-->
      <div class="w-full h-full flex justify-center items-center py-4">
        <div class="w-12 h-0.5 bg-[#888888FF]"></div>
        <p class="text-xl my-0 mx-4">推荐商家</p>
        <div class="w-12 h-0.5 bg-[#888888FF]"></div>
      </div>

      <!--推荐方式部分-->
      <ul class="w-full h-10 flex justify-around items-center text-sm text-[#555555FF]">
        <li class=" flex justify-center items-center cursor-pointer">综合排序<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32"><path fill="currentColor" d="m24 12l-8 10l-8-10z"/></svg></li>
        <li class=" flex justify-center items-center cursor-pointer">距离最近</li>
        <li class=" flex justify-center items-center cursor-pointer">销量最高</li>
        <li class=" flex justify-center items-center cursor-pointer">筛选<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13v7h-4v-7L2.95 4h18.1L14 13Zm-2-.7L16.95 6h-9.9L12 12.3Zm0 0Z"/></svg></li>
      </ul>

      <!--推荐商家列表-->
      <ul class="w-full mb-20 ">
        <li class="w-full box-border select-none border-solid border-b-[1px] border-[#DDDDDDFF] flex py-2"
            @click="toPage('/BusinessList')">
          <div>
            <img class="w-18 h-18" src="assets/img/sj01.png">
          </div>
          <div class="w-full box-border ml-2">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-semibold text-[#333333FF]">万家饺子（软件园E18店）</h3>
              <p class="w-3 h-5 bg-[#666666FF] text-white text-2xl mr-4 ">&#8226;</p>
            </div>
            <div class="w-full flex justify-between items-center text-sm">
              <div class="flex items-center">
                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
                <p class="text-[#666666FF] ml-2">4.9 月售345单</p>
              </div>
              <div class="bg-[#0097FFFF] text-white text-xs rounded-md py-0 px-0.5 mt-2">蜂鸟专送</div>
            </div>

            <div class="w-full flex justify-between items-center text-xs">
              <p>&#165;15起送 | &#165;3配送</p>
              <p>3.22km | 30分钟</p>
            </div>
            <div class="flex items-center py-1">
              <div class="border-solid border-[1px] border-[#DDDDDDFF] text-xs text-[#666666FF] rounded-[3px] py-0 px-[0.1vw]">各种饺子</div>
            </div>
            <div class="flex justify-between items-center text-xs">
              <div class="flex items-center">
                <div class="p-1 bg-[#70BC46FF] rounded-[3px] text-white flex justify-center items-center text-xs">新</div>
                <p class="text-[#666666FF] ml-4">饿了么新用户首单立减9元</p>
              </div>

              <div class="flex items-center text-[#999999FF]">
                <p class="mr-2">2个活动</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 32 32"><path fill="currentColor" d="m24 12l-8 10l-8-10z"/></svg>
              </div>
            </div>
            <div class="flex items-center text-lg text-xs">
              <div class="p-1 bg-orange-600 rounded-[3px] text-white flex justify-center items-center">特</div>
              <p class="text-[#666666FF] ml-4">特价商品5元起</p>
            </div>
          </div>
        </li>

        <li class="w-full box-border select-none border-solid border-b-[1px] border-[#DDDDDDFF] flex py-2"
            @click="toPage('/BusinessList')">
          <div>
            <img class="w-18 h-18" src="assets/img/sj01.png">
          </div>
          <div class="w-full box-border ml-2">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-semibold text-[#333333FF]">万家饺子（软件园E18店）</h3>
              <p class="w-3 h-5 bg-[#666666FF] text-white text-2xl mr-4 ">&#8226;</p>
            </div>
            <div class="w-full flex justify-between items-center text-sm">
              <div class="flex items-center">
                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
                <p class="text-[#666666FF] ml-2">4.9 月售345单</p>
              </div>
              <div class="bg-[#0097FFFF] text-white text-xs rounded-md py-0 px-0.5 mt-2">蜂鸟专送</div>
            </div>

            <div class="w-full flex justify-between items-center text-xs">
              <p>&#165;15起送 | &#165;3配送</p>
              <p>3.22km | 30分钟</p>
            </div>
            <div class="flex items-center py-1">
              <div class="border-solid border-[1px] border-[#DDDDDDFF] text-xs text-[#666666FF] rounded-[3px] py-0 px-[0.1vw]">各种饺子</div>
            </div>
            <div class="flex justify-between items-center text-xs">
              <div class="flex items-center">
                <div class="p-1 bg-[#70BC46FF] rounded-[3px] text-white flex justify-center items-center text-xs">新</div>
                <p class="text-[#666666FF] ml-4">饿了么新用户首单立减9元</p>
              </div>

              <div class="flex items-center text-[#999999FF]">
                <p class="mr-2">2个活动</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 32 32"><path fill="currentColor" d="m24 12l-8 10l-8-10z"/></svg>
              </div>
            </div>
            <div class="flex items-center text-lg text-xs">
              <div class="p-1 bg-orange-600 rounded-[3px] text-white flex justify-center items-center">特</div>
              <p class="text-[#666666FF] ml-4">特价商品5元起</p>
            </div>
          </div>
        </li>

        <li class="w-full box-border select-none border-solid border-b-[1px] border-[#DDDDDDFF] flex py-2"
            @click="toPage('/BusinessList')">
          <div>
            <img class="w-18 h-18" src="assets/img/sj01.png">
          </div>
          <div class="w-full box-border ml-2">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-semibold text-[#333333FF]">万家饺子（软件园E18店）</h3>
              <p class="w-3 h-5 bg-[#666666FF] text-white text-2xl mr-4 ">&#8226;</p>
            </div>
            <div class="w-full flex justify-between items-center text-sm">
              <div class="flex items-center">
                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
                <p class="text-[#666666FF] ml-2">4.9 月售345单</p>
              </div>
              <div class="bg-[#0097FFFF] text-white text-xs rounded-md py-0 px-0.5 mt-2">蜂鸟专送</div>
            </div>

            <div class="w-full flex justify-between items-center text-xs">
              <p>&#165;15起送 | &#165;3配送</p>
              <p>3.22km | 30分钟</p>
            </div>
            <div class="flex items-center py-1">
              <div class="border-solid border-[1px] border-[#DDDDDDFF] text-xs text-[#666666FF] rounded-[3px] py-0 px-[0.1vw]">各种饺子</div>
            </div>
            <div class="flex justify-between items-center text-xs">
              <div class="flex items-center">
                <div class="p-1 bg-[#70BC46FF] rounded-[3px] text-white flex justify-center items-center text-xs">新</div>
                <p class="text-[#666666FF] ml-4">饿了么新用户首单立减9元</p>
              </div>

              <div class="flex items-center text-[#999999FF]">
                <p class="mr-2">2个活动</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 32 32"><path fill="currentColor" d="m24 12l-8 10l-8-10z"/></svg>
              </div>
            </div>
            <div class="flex items-center text-lg text-xs">
              <div class="p-1 bg-orange-600 rounded-[3px] text-white flex justify-center items-center">特</div>
              <p class="text-[#666666FF] ml-4">特价商品5元起</p>
            </div>
          </div>
        </li>

        <li class="w-full box-border select-none border-solid border-b-[1px] border-[#DDDDDDFF] flex py-2"
            @click="toPage('/BusinessList')">
          <div>
            <img class="w-18 h-18" src="assets/img/sj01.png">
          </div>
          <div class="w-full box-border ml-2">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-semibold text-[#333333FF]">万家饺子（软件园E18店）</h3>
              <p class="w-3 h-5 bg-[#666666FF] text-white text-2xl mr-4 ">&#8226;</p>
            </div>
            <div class="w-full flex justify-between items-center text-sm">
              <div class="flex items-center">
                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
                <p class="text-[#666666FF] ml-2">4.9 月售345单</p>
              </div>
              <div class="bg-[#0097FFFF] text-white text-xs rounded-md py-0 px-0.5 mt-2">蜂鸟专送</div>
            </div>

            <div class="w-full flex justify-between items-center text-xs">
              <p>&#165;15起送 | &#165;3配送</p>
              <p>3.22km | 30分钟</p>
            </div>
            <div class="flex items-center py-1">
              <div class="border-solid border-[1px] border-[#DDDDDDFF] text-xs text-[#666666FF] rounded-[3px] py-0 px-[0.1vw]">各种饺子</div>
            </div>
            <div class="flex justify-between items-center text-xs">
              <div class="flex items-center">
                <div class="p-1 bg-[#70BC46FF] rounded-[3px] text-white flex justify-center items-center text-xs">新</div>
                <p class="text-[#666666FF] ml-4">饿了么新用户首单立减9元</p>
              </div>

              <div class="flex items-center text-[#999999FF]">
                <p class="mr-2">2个活动</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 32 32"><path fill="currentColor" d="m24 12l-8 10l-8-10z"/></svg>
              </div>
            </div>
            <div class="flex items-center text-lg text-xs">
              <div class="p-1 bg-orange-600 rounded-[3px] text-white flex justify-center items-center">特</div>
              <p class="text-[#666666FF] ml-4">特价商品5元起</p>
            </div>
          </div>
        </li>

        <li class="w-full box-border select-none border-solid border-b-[1px] border-[#DDDDDDFF] flex py-2"
            @click="toPage('/BusinessList')">
          <div>
            <img class="w-18 h-18" src="assets/img/sj01.png">
          </div>
          <div class="w-full box-border ml-2">
            <div class="flex items-center justify-between">
              <h3 class="text-sm font-semibold text-[#333333FF]">万家饺子（软件园E18店）</h3>
              <p class="w-3 h-5 bg-[#666666FF] text-white text-2xl mr-4 ">&#8226;</p>
            </div>
            <div class="w-full flex justify-between items-center text-sm">
              <div class="flex items-center">
                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
                <svg class="text-yellow-300" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="currentColor" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"/></svg>
                <p class="text-[#666666FF] ml-2">4.9 月售345单</p>
              </div>
              <div class="bg-[#0097FFFF] text-white text-xs rounded-md py-0 px-0.5 mt-2">蜂鸟专送</div>
            </div>

            <div class="w-full flex justify-between items-center text-xs">
              <p>&#165;15起送 | &#165;3配送</p>
              <p>3.22km | 30分钟</p>
            </div>
            <div class="flex items-center py-1">
              <div class="border-solid border-[1px] border-[#DDDDDDFF] text-xs text-[#666666FF] rounded-[3px] py-0 px-[0.1vw]">各种饺子</div>
            </div>
            <div class="flex justify-between items-center text-xs">
              <div class="flex items-center">
                <div class="p-1 bg-[#70BC46FF] rounded-[3px] text-white flex justify-center items-center text-xs">新</div>
                <p class="text-[#666666FF] ml-4">饿了么新用户首单立减9元</p>
              </div>

              <div class="flex items-center text-[#999999FF]">
                <p class="mr-2">2个活动</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 32 32"><path fill="currentColor" d="m24 12l-8 10l-8-10z"/></svg>
              </div>
            </div>
            <div class="flex items-center text-lg text-xs">
              <div class="p-1 bg-orange-600 rounded-[3px] text-white flex justify-center items-center">特</div>
              <p class="text-[#666666FF] ml-4">特价商品5元起</p>
            </div>
          </div>
        </li>
      </ul>
    </div>


    <!--底部菜单部分-->
    <Bottom></Bottom>

  </div>
</template>

<style scoped>

</style>
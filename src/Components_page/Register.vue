<script setup lang="ts">
import {useRouter} from "vue-router";
import Bottom from "@/Components_single/Bottom.vue";

const router = useRouter()

const toPage = (url:string)=>{
  router.push(url)
}
</script>

<template>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>饿了么 用户注册</title>
  </head>

  <div class="w-full h-full">
    <!--header部分-->
    <header class="w-full h-14 bg-[#0097FFFF] text-white text-3xl fixed left-0 top-0 z-50 font-bold
    flex justify-center items-center">
      <p class="">用户注册</p>
    </header>

    <!--表单部分-->
    <div class="mt-18 w-full text-xl mt-18">
      <div class="box-border py-2 px-4 flex items-center text-xl">
        <div class="flex-shrink-0 flex-grow-0 font-bold text-[#666666FF]">手机号码：</div>
        <input class="border-none outline-none w-full h-8 ml-4" type="text" placeholder="手机号码">
      </div>

      <div class="box-border py-2 px-4 flex items-center text-xl">
        <div class="flex-shrink-0 flex-grow-0 font-bold text-[#666666FF]">密码：</div>
        <input class="border-none outline-none w-full h-8 ml-4" type="text" placeholder="密码">
      </div>
      <div class="box-border py-2 px-4 flex items-center text-xl">
        <div class="flex-shrink-0 flex-grow-0 font-bold text-[#666666FF]">确认密码：</div>
        <input class="border-none outline-none w-full h-8 ml-4" type="text" placeholder="确认密码">
      </div>
      <div class="box-border py-2 px-4 flex items-center text-xl">
        <div class="flex-shrink-0 flex-grow-0 font-bold text-[#666666FF]">用户姓名：</div>
        <input class="border-none outline-none w-full h-8 ml-4" type="text" placeholder="用户姓名">
      </div>
      <div class="box-border py-2 px-4 flex items-center text-xl">
        <div class="flex-shrink-0 flex-grow-0 font-bold text-[#666666FF]">性别：</div>
        <div class="flex items-center text-sm">
          <input class="ml-10 " type="radio" name="sex" checked>男
          <input class="ml-16 " type="radio" name="sex" >女
        </div>
      </div>
    </div>
    <div class="w-full flex-col h-20 flex box-border py-[4vw] px-[3vw] justify-center items-center mt-2">
      <button class="w-full h-full text-2xl font-bold text-white bg-[#38CA73FF] rounded-[4px]" @click="toPage('/Index')">注册</button>
    </div>

    <!--底部菜单部分-->
    <Bottom></Bottom>

  </div>
</template>

<style scoped>

</style>
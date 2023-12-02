<script setup lang="ts">
import Bottom from "@/Components_single/Bottom.vue";
import {useRouter} from "vue-router";

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
    <title>饿了么 用户登陆</title>
  </head>
  <div class="w-full h-full flex-col text-xl">

    <!--header部分-->
    <div class="w-full h-14 bg-[#0097FFFF] text-white text-3xl fixed left-0 top-0 z-50 font-bold
    flex justify-center items-center">
      <p>用户登录</p>
    </div>

    <!--表单部分-->
    <div class="w-full h-auto mt-18">
      <div class="box-border py-5 px-8 flex items-center text-xl">
        <p class="flex flex-shrink-0 flex-grow-0 font-bold text-[#666666FF]">手机号码：</p>
        <input class="w-full ml-4" type="text" placeholder="手机号码">
      </div>
      <div class="box-border py-5 px-8 flex items-center text-xl">
        <p class="flex flex-shrink-0 flex-grow-0 font-bold text-[#666666FF]">密码：</p>
        <input class="w-full ml-4" type="password" placeholder="密码">
      </div>

      <!--登录、注册按钮-->
      <div class="w-full flex-col box-border justify-center items-center">
        <div class="w-full flex-col h-20 flex box-border py-[4vw] px-[3vw] justify-center items-center">
          <button class="w-full h-full text-2xl font-bold text-white bg-[#38CA73FF] rounded-[4px]">登陆</button>
        </div>
        <div class="w-full flex-col h-20 flex box-border py-[4vw] px-[3vw] justify-center items-center">
          <button class="w-full h-full text-2xl font-bold text-[#666666FF] bg-[#DDDDDDFF] rounded-[4px]" @click="toPage('/Register')">去注册</button>
        </div>
      </div>
    </div>

    <!--底部菜单部分-->
    <Bottom></Bottom>

  </div>
</template>

<style scoped>

</style>
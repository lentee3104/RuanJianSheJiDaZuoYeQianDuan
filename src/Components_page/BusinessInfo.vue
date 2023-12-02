<script setup lang="ts">
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
    <title>饿了么 商家信息</title>
  </head>
  <div class="w-full h-full ">
    <!--herder部分-->
    <header class="w-full h-14 bg-[#0097FFFF] text-white text-3xl fixed left-0 top-0 z-50 font-bold
    flex justify-center items-center">
      <p>商家信息</p>
    </header>

    <!--商家图片部分-->
    <div class="w-full h-full mt-18 flex justify-center items-center text-base">
      <img class="w-40 h-40 rounded" src="/src/assets/img/sj01.png">
    </div>

    <!--商家信息部分-->
    <div class="w-full h-32 flex flex-col justify-center items-center text-2xl">
      <h1 class="text-2xl font-semibold ">万家饺子（软件园E18店）</h1>
      <p class="text-xl font-medium text-gray-500 mt-px">&#165;15起送 &#165;3配送</p>
      <p class="text-xl font-medium text-gray-500 mt-px">各种饺子炒菜</p>
    </div>

    <!--食品列表部分-->
    <ul class="w-full text-sm mb-18">
      <li class="w=full box-border px-1 py-2 select-none flex justify-between items-center">
        <div class="flex box-content items-center">
          <img class="w-18 h-auto" src="/src/assets/img/sp01.png">
          <div class="ml-2 ">
            <h3 class="text-sm font-semibold text-gray-600">纯肉鲜肉（水饺）</h3>
            <p class="text-xs leading-loose font-normal text-gray-500 ">新鲜猪肉</p>
            <p class="text-xs text-gray-500 font-normal ">&#165;15</p>
          </div>
        </div>
        <div class="w-auto flex justify-between items-center">
          <button>
            <i class="fa fa-minus-circle fa-2x mx-3 text-gray-500 cursor-pointer"></i>
          </button>
          <p class="text-xs text-gray-600"><span>3</span></p>
          <button>
            <i class="fa fa-plus-circle fa-2x mx-3 text-blue-500 cursor-pointer"></i>
          </button>
        </div>
      </li>

      <li class="w=full box-border px-1 py-2 select-none flex justify-between items-center">
        <div class="flex box-content items-center">
          <img class="w-18 h-auto" src="/src/assets/img/sp01.png">
          <div class="ml-2 ">
            <h3 class="text-sm font-semibold text-gray-600">纯肉鲜肉（水饺）</h3>
            <p class="text-xs leading-loose font-normal text-gray-500 ">新鲜猪肉</p>
            <p class="text-xs text-gray-500 font-normal ">&#165;15</p>
          </div>
        </div>
        <div class="w-auto flex justify-between items-center">
          <button>
            <i class="fa fa-minus-circle fa-2x mx-3 text-gray-500 cursor-pointer"></i>
          </button>
          <p class="text-xs text-gray-600"><span>3</span></p>
          <button>
            <i class="fa fa-plus-circle fa-2x mx-3 text-blue-500 cursor-pointer"></i>
          </button>
        </div>
      </li>

      <li class="w=full box-border px-1 py-2 select-none flex justify-between items-center">
        <div class="flex box-content items-center">
          <img class="w-18 h-auto" src="/src/assets/img/sp01.png">
          <div class="ml-2 ">
            <h3 class="text-sm font-semibold text-gray-600">纯肉鲜肉（水饺）</h3>
            <p class="text-xs leading-loose font-normal text-gray-500 ">新鲜猪肉</p>
            <p class="text-xs text-gray-500 font-normal ">&#165;15</p>
          </div>
        </div>
        <div class="w-auto flex justify-between items-center">
          <button>
            <i class="fa fa-minus-circle fa-2x mx-3 text-gray-500 cursor-pointer"></i>
          </button>
          <p class="text-xs text-gray-600"><span>3</span></p>
          <button>
            <i class="fa fa-plus-circle fa-2x mx-3 text-blue-500 cursor-pointer"></i>
          </button>
        </div>
      </li>

      <li class="w=full box-border px-1 py-2 select-none flex justify-between items-center">
        <div class="flex box-content items-center">
          <img class="w-18 h-auto" src="/src/assets/img/sp01.png">
          <div class="ml-2 ">
            <h3 class="text-sm font-semibold text-gray-600">纯肉鲜肉（水饺）</h3>
            <p class="text-xs leading-loose font-normal text-gray-500 ">新鲜猪肉</p>
            <p class="text-xs text-gray-500 font-normal ">&#165;15</p>
          </div>
        </div>
        <div class="w-auto flex justify-between items-center">
          <button>
            <i class="fa fa-minus-circle fa-2x mx-3 text-gray-500 cursor-pointer"></i>
          </button>
          <p class="text-xs text-gray-600"><span>3</span></p>
          <button>
            <i class="fa fa-plus-circle fa-2x mx-3 text-blue-500 cursor-pointer"></i>
          </button>
        </div>
      </li>

      <li class="w=full box-border px-1 py-2 select-none flex justify-between items-center">
        <div class="flex box-content items-center">
          <img class="w-18 h-auto" src="/src/assets/img/sp01.png">
          <div class="ml-2 ">
            <h3 class="text-sm font-semibold text-gray-600">纯肉鲜肉（水饺）</h3>
            <p class="text-xs leading-loose font-normal text-gray-500 ">新鲜猪肉</p>
            <p class="text-xs text-gray-500 font-normal ">&#165;15</p>
          </div>
        </div>
        <div class="w-auto flex justify-between items-center">
          <button>
            <i class="fa fa-minus-circle fa-2x mx-3 text-gray-500 cursor-pointer"></i>
          </button>
          <p class="text-xs text-gray-600"><span>3</span></p>
          <button>
            <i class="fa fa-plus-circle fa-2x mx-3 text-blue-500 cursor-pointer"></i>
          </button>
        </div>
      </li>

      <li class="w=full box-border px-1 py-2 select-none flex justify-between items-center">
        <div class="flex box-content items-center">
          <img class="w-18 h-auto" src="/src/assets/img/sp01.png">
          <div class="ml-2 ">
            <h3 class="text-sm font-semibold text-gray-600">纯肉鲜肉（水饺）</h3>
            <p class="text-xs leading-loose font-normal text-gray-500 ">新鲜猪肉</p>
            <p class="text-xs text-gray-500 font-normal ">&#165;15</p>
          </div>
        </div>
        <div class="w-auto flex justify-between items-center">
          <button>
            <i class="fa fa-minus-circle fa-2x mx-3 text-gray-500 cursor-pointer"></i>
          </button>
          <p class="text-xs text-gray-600"><span>3</span></p>
          <button>
            <i class="fa fa-plus-circle fa-2x mx-3 text-blue-500 cursor-pointer"></i>
          </button>
        </div>
      </li>

      <li class="w=full box-border px-1 py-2 select-none flex justify-between items-center">
        <div class="flex box-content items-center">
          <img class="w-18 h-auto" src="/src/assets/img/sp01.png">
          <div class="ml-2 ">
            <h3 class="text-sm font-semibold text-gray-600">纯肉鲜肉（水饺）</h3>
            <p class="text-xs leading-loose font-normal text-gray-500 ">新鲜猪肉</p>
            <p class="text-xs text-gray-500 font-normal ">&#165;15</p>
          </div>
        </div>
        <div class="w-auto flex justify-between items-center">
          <button>
            <i class="fa fa-minus-circle fa-2x mx-3 text-gray-500 cursor-pointer"></i>
          </button>
          <p class="text-xs text-gray-600"><span>3</span></p>
          <button>
            <i class="fa fa-plus-circle fa-2x mx-3 text-blue-500 cursor-pointer"></i>
          </button>
        </div>
      </li>
    </ul>

    <!--购物车部-->
    <div class="w-full h-18 fixed left-0 bottom-0 flex text-base">
      <div class=" bg-gray-700 basis-2/3 flex">
        <div class="w-20 h-20 box-border border-solid border-8 border-gray-700 rounded-full bg-blue-500 text-white flex justify-center items-center -mt-2 -ml-1 relative">
          <i class="fa fa-shopping-cart fa-3x"></i>
          <div class="w-5 h-5 rounded-full bg-red-600 text-white text-xs flex justify-center items-center absolute -right-1 -top-1">3</div>
        </div>
        <div class="flex-col items-center p-2">
          <p class="text-2xl text-white ">&#165;12.88</p>
          <p class="text-xs text-gray-500">另需配送费3元</p>
        </div>
      </div>
      <div class="basis-1/3">
        <button class="w-full h-full bg-green-500 text-white text-2xl font-bold select-none cursor-pointer flex justify-center items-center"
                @click="toPage('/Order')">去结算</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
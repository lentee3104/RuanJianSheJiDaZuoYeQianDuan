<script setup lang="ts">
import {ref} from 'vue'
import {inject} from 'vue'
import type {IAddressService} from "@/Types/IAddressService";
import {useRouter} from "vue-router";

const addressService = inject<IAddressService>('addressService')!

let name = ref('')
let sex = ref('false');
let number = ref('');
let address = ref('');

function onOK(){
  addressService.addNewAddress(name.value, sex.value, number.value, address.value);
  name.value='';
  sex.value='先生';
  number.value='';
  address.value='';
}

const router = useRouter()

const toPage = (url:string)=>{
  router.push(url)
}

</script>

<template>
  <div class="w-full h-full">
    <div class="w-full h-14 bg-[#0097FFFF] text-white text-3xl fixed left-0 top-0 z-50 font-bold
    flex justify-center items-center">
      <p>新增送货地址</p>
    </div>

    <div class="w-full h-full flex-col mt-20 px-4 text-xl ">
      <div class="w-full flex items-center py-2">
        <div class="w-28">联系人：</div>
        <el-input class="w-full" type="text" v-model="name" placeholder="联系人姓名"></el-input>
      </div>
      <div class="flex items-center py-2">
        <div class="w-38">联系方式：</div>
        <el-input type="number" v-model="number" placeholder="联系方式"></el-input>
      </div>
      <div class="flex items-center py-2">
        <div class="w-20">性别：</div>
        <el-radio-group v-model="sex">
          <el-radio label="先生" size="large">男</el-radio>
          <el-radio label="女士" size="large">女</el-radio>
        </el-radio-group>
      </div>
      <div class="flex items-center py-2">
        <div class="w-38">收货地址：</div>
        <el-input type="text" v-model="address" placeholder="收货地址"></el-input>
      </div>

      <div class="w-full flex-col h-20 flex box-border py-[4vw] px-[3vw] justify-center items-center mt-2">
        <button class="w-full h-full text-2xl font-bold text-white bg-[#38CA73FF] rounded-[4px]"
                @click="onOK(), toPage('/UserAddress')">保存</button>
      </div>

    </div>
  </div>

</template>

<style scoped>

</style>
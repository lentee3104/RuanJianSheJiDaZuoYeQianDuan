<script setup lang="ts">
import {useRouter} from "vue-router";
import {provide} from 'vue'
import {AddressService} from "@/Services/AddressService";
const router = useRouter()

const toPage = (url:string)=>{
  router.push(url)
}

provide('addressService', new AddressService())

</script>

<template>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>饿了么 商家列表</title>
  </head>
    <hr>

    <router-view></router-view>

</template>

<style scoped>
</style>

<script setup lang="ts">
import {useUserStore} from "@/store/useUserStore";
import {useRouter} from "vue-router";
import {reactive, ref} from "vue";
import axios from "axios";

/*这边是权限管理*/
const {changeUser} = useUserStore()
const router = useRouter()

const handleLoginCustomer = (customer:String) => {
  /*设置local storage为customer权限*/
  changeUser({
    "username": customer,
    "role": {
      "roleName": "顾客",
      "roleType": 2,
      "rights": [
        "/Login",
        "/MainBox",
        "/Home",
        "/customer/customerPage",
        "/customer/myOrder",
        "/customer/recommend",
        "/customer/customerSelectItemInShop",
        "/customer/customerPayment",
      ]
    }
  })
  localStorage.setItem("roleType","2")
  router.push('/customer/customerPage')
}

async function customerLogin(customerName:string, password:String) {
    const response = await axios.post('http://localhost:5000/customerLogin', null, {
      params: {
        type: 1,
        customer_name: customerName,
        password: password
      }
    })

    // 处理成功响应
    console.log('登录成功');
    console.log(response.data.message+"你成功了！");



    localStorage.setItem('userName', customerName);
    localStorage.setItem('customerId', response.data.customerId)
    handleLoginCustomer(customerName);

}

async function customerRegister(customerName:string, password:String) {
  const response = await axios.post('http://localhost:5000/customerRegister', null, {
    params: {
      type: 1,
      customer_name: customerName,
      password: password
    }
  })
  if(response.data.length != 0){
    alert("注册成功，请登录")
  }

}

/*这边是表单校验*/
const ruleFormRef = ref()
const ruleForm = reactive({
  username: "",
  password: ""
})
const rules = reactive({
  /*对于username做校验*/
  username: [
    {required: true, message: '请输入用户名', trigger: 'blur'},
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'},
  ],
})

const handleExit = () => {
  /*跳转到登陆页面*/
  router.push("/businessLogin")
}
</script>

<template>
  <!--  <div class="flex-col">
      <div>Login</div>
      <el-button size="large" @click="handleLoginBusiness">登录-business</el-button>
      <el-button size="large" @click="handleLoginCustomer">登录-customer</el-button>
    </div>-->
  <div class="w-[500px] h-[300px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <div class="flex justify-center items-center text-2xl mb-10 text-pink font-bold">
        顾客登录/注册渠道
      </div>
      <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          label-width="70px"
          class="demo-ruleForm"
          size="large"
          status-icon>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" type="password"/>
        </el-form-item>

        <div class="flex justify-center gap-x-8 mt-10">
          <el-button type="primary" size="large" @click="customerLogin(ruleForm.username,ruleForm.password)">登录-business</el-button>
          <el-button type="primary" size="large" @click="customerRegister(ruleForm.username,ruleForm.password)">注册新用户</el-button>
          <el-button type="primary" @click="handleExit">切换到business登录</el-button>
        </div>


      </el-form>
  </div>


</template>

<style scoped>

</style>
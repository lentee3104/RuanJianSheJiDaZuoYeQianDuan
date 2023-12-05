<script setup lang="ts">
import {useUserStore} from "@/store/useUserStore";
import {useRouter} from "vue-router";
import {reactive, ref} from "vue";

/*这边是权限管理*/
const {changeUser} = useUserStore()
const router = useRouter()

const handleLoginBusiness = () => {
  /*设置local storage为business权限*/
  /*pinia默认存在内存，同步到本地存储进行持久化*/
  changeUser({
    "id": 1,
    "username": "business",
    "password": "123",
    "role": {
      "roleName": "商家",
      "roleType": 1,
      "rights": [
        "/Login",
        "/MainBox",
        "/Home",
        "/business/businessPage",
        "/business/itemsManagement",
        "/business/shopManagement"
      ]
    }
  })

  router.push('/')
}

const handleLoginCustomer = () => {
  /*设置local storage为customer权限*/
  changeUser({
    "id": 2,
    "username": "customer",
    "password": "123",
    "role": {
      "roleName": "顾客",
      "roleType": 2,
      "rights": [
        "/Login",
        "/MainBox",
        "/Home",
        "/customer/customerPage",
        "/customer/myOrder",
        "/customer/recommend"
      ]
    }
  })

  router.push('/')
}

/*登录按钮的回调函数*/
const submitFormBusiness = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      /*console.log('submit!')*/
      if (ruleForm.username === "business") {
        handleLoginBusiness()
      }else {
        console.log("error input")
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}

const submitFormCustomer = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      /*console.log('submit!')*/
      if (ruleForm.username === "customer") {
        handleLoginBusiness()
      }else {
        console.log("error input")
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}

/*这边是表单校验*/
const ruleFormRef = ref()
const ruleForm = reactive({
  username: "",
  passward: ""
})
const rules = reactive({
  /*对于username做校验*/
  username: [
    {required: true, message: '请输入用户名', trigger: 'blur'},
  ],
  passward: [
    {required: true, message: '请输入密码', trigger: 'blur'},
  ],
})
</script>

<template>
  <!--  <div class="flex-col">
      <div>Login</div>
      <el-button size="large" @click="handleLoginBusiness">登录-business</el-button>
      <el-button size="large" @click="handleLoginCustomer">登录-customer</el-button>
    </div>-->
  <div class="w-[500px] h-[300px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div class="flex justify-center items-center">
        软件设计与体系结构大作业
      </div>
      <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          label-width="70px"
          class="demo-ruleForm"
          status-icon>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"/>
        </el-form-item>
        <el-form-item label="密码" prop="passward">
          <el-input v-model="ruleForm.passward" type="password"/>
        </el-form-item>

        <div class="flex justify-center">
          <el-form-item>
            <el-button size="large" @click="submitFormBusiness(ruleFormRef)">登录-business</el-button>
          </el-form-item>
          <el-form-item>
            <el-button size="large" @click="submitFormCustomer(ruleFormRef)">登录-customer</el-button>
          </el-form-item>
        </div>


      </el-form>
  </div>


</template>

<style scoped>

</style>
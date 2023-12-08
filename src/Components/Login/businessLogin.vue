Login.vue<script setup lang="ts">
import {useUserStore} from "@/store/useUserStore";
import {useRouter} from "vue-router";
import {reactive, ref} from "vue";
import axios from "axios";

/*这边是权限管理*/
const {changeUser} = useUserStore()
const router = useRouter()

const handleLoginBusiness = (businessName:String) => {
  /*设置local storage为business权限*/
  /*pinia默认存在内存，同步到本地存储进行持久化*/
  changeUser({
    "username": businessName,
    "role": {
      "roleName": "商家",
      "roleType": 1,
      "rights": [
        "/Login",
        "/MainBox",
        "/Home",
        "/business/businessPage",
        "/business/itemManagement",
        "/business/shopManagement",
        "/business/shopItemControl"
      ]
    }
  })
  localStorage.setItem("roleType","1")
  const changeUserString = localStorage.getItem('roleType');
  if(changeUserString) console.log("success storage")

  router.push('/business/businessPage')
}

async function businessLogin(businessName:String, password:String) {
  try {
    const response = await axios.post('http://localhost:5000/businessLogin', null, {
      params: {
        type: 0,
        business_name: businessName,
        password: password
      }
    });

    // 处理成功响应
    console.log('登录成功');
    console.log(response.data.message+"你成功了！");

    const {business_id} = response.data;

    localStorage.setItem('userName', businessName);
    localStorage.setItem('businessId',business_id);
    handleLoginBusiness(businessName);

  } catch (error:any) {
    // 处理错误响应
    console.error('登录失败');
    console.error(error.response.data);
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
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" type="password"/>
        </el-form-item>

        <div class="flex justify-center">
          <el-form-item>
            <el-button size="large" @click="businessLogin(ruleForm.username,ruleForm.password)">登录-business</el-button>
          </el-form-item>
        </div>


      </el-form>
  </div>


</template>

<style scoped>

</style>
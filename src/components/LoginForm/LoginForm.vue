<template>
 <div>
   <el-form
    :model="loginFrom"
    :rules="loginRules"
    label-width="100px"
    class="loginForm sign-in-form"
  >
    <el-form-item label="账号" prop="username">
      <el-input
        v-model="loginFrom.username"
        placeholder="Enter username..."
      ></el-input>
    </el-form-item>

    <el-form-item label="密码" prop="password">
      <el-input
        v-model="loginFrom.password"
        type="password"
        placeholder="Enter Password..."
      ></el-input>
    </el-form-item>

     <el-form-item label="验证码" prop="verifyCode">
      <el-input
        v-model="loginFrom.verifyCode"
       
        placeholder="Enter verifyCode..."
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button
        @click="handleLogin('loginForm')"
        type="primary"
        class="submit-btn"
        >提交</el-button
      >
    </el-form-item>

    <!-- 找回密码 -->
    <div class="tiparea">
      <p>忘记密码？ <a>立即找回</a></p>
    </div>
  </el-form>
 </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
  const loginRules = reactive({
    username:[
      {
        required:true,
        message:'请输入账号',
        trigger:'blur'
      },
      {
        pattern:/^[2-zA_Z0-9]{2,10}$/,
        message:'请输入2到10位数字或者字母',
        trigger:'blur'
      }
    ]
  })

  const loginFrom =reactive({
    username:'',
    password:'',
    verifyCode:'',
    uuid:'',
  })
  const handleLogin =(info:string)=>{
    console.log(info);
    
  }
</script>
<style scoped>
/* form */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
</style>
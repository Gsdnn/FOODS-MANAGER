<template>
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

    <el-from-item prop="verifyCode">
        <el-input
          v-model="loginFrom.verifyCode"
          type="text"
          placeholder="Enter verifyCode..."
        ></el-input>
    </el-from-item>

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
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
  const loginRules = reactive({
    
  })

  const loginFrom =reactive({
    username:'',
    password:'',
    uuid:'',
    verifyCode:''
  })
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
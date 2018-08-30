<template>
  <div>
    <div>
       <DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="Select date and time(Excluding seconds)" style="width: 200px"></DatePicker>
    </div>
    <p>登入页面</p>
    <div class="login">
      <el-input placeholder="请输入用户名" v-model="uinfo.username" clearable></el-input>
      <el-input placeholder="请输入密码" v-model="uinfo.userpass" clearable></el-input>
      <el-button type="success" @click="handleLoginClick">点我登录</el-button>
    </div>
  </div>
</template>
<script>
export default{
  name: 'Login',
  data () {
    return {uinfo: {username: 'q', userpass: 'w'}}
  }
}
</script>
<style scoped>
.login {
  width: 40%;
  padding: 10px;
  margin: 0 auto;
}
</style>

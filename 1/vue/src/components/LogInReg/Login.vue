<template>
  <div>
    <p>登入页面</p>
    <div class="login">
      <el-input placeholder="请输入用户名" v-model="username" clearable></el-input>
      <el-input placeholder="请输入密码" v-model="userpass" clearable></el-input>
      <el-button type="success" @click="handleLoginClick">点我登录</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      userinfo: {
        username: '',
        userpass: ''
      }
    }
  },
  methods: {
    handleLoginClick () {
      console.log('handleLoginClick')
    }
  }
}
</script>
<style scoped>
.login{
  width: 40%;
  padding: 10px;
  margin: 0 auto;
}
</style>

<template>
  <div>
    <p>注册页面</p>
    <div class="reg">
      <el-input placeholder="请输入用户名" v-model="username" clearable></el-input>
      <el-input placeholder="请输入密码" v-model="userpass" clearable></el-input>
      <el-input placeholder="请输入密码" v-model="reuserpass" clearable></el-input>
      <el-button type="success" @click="handleRegClick">点我注册</el-button>
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
        userpass: '',
        reuserpass: ''
      }
    }
  },
  methods: {
    handleLoginClick () {
      console.log('handleRegClick')
    }
  }
}
</script>
<style scoped>
.reg{
  width: 40%;
  padding: 10px;
  margin: 0 auto;
}
</style>

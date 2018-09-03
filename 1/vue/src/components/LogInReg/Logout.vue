<template>
  <div>
    <p>登出页面</p>
    <div class="logout">
      <el-button type="success" @click="handleLogoutClick">确定要登出吗？点我确定登出系统</el-button>
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
    handleLogoutClick () {
      console.log('handleLoginClick')
    }
  }
}
</script>
<style scoped>
.logout{
  width: 40%;
  padding: 10px;
  margin: 0 auto;
}
</style>

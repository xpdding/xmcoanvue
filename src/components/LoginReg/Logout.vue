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
  name: 'Logout',
  methods: {
    handleLogoutClick () {
      console.log('handleLoginClick')
      let uinfo = {
        uname: ''
      }
      this.$store.commit('setUinfo', uinfo)
      this.$router.push({ path: '/login' })
      // this.$router.push({path: '/indata'})
    }
  }
}
</script>
<style scoped>
.logout {
  width: 40%;
  padding: 10px;
  margin: 0 auto;
}
</style>
